"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubContributionsProps {
  username: string;
}

export default function GitHubContributions({ username }: GitHubContributionsProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    async function fetchContributions() {
      try {
        // 使用 GitHub Contributions API 代理服务获取数据
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        
        const data = await response.json();
        
        // 只取最近90天（3个月）的数据
        const now = new Date();
        const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
        
        const recentContributions: ContributionDay[] = [];
        let total = 0;
        
        if (data.contributions && Array.isArray(data.contributions)) {
          data.contributions.forEach((day: { date: string; count: number; level: number }) => {
            const dayDate = new Date(day.date);
            if (dayDate >= ninetyDaysAgo && dayDate <= now) {
              recentContributions.push({
                date: day.date,
                count: day.count,
                level: day.level as 0 | 1 | 2 | 3 | 4,
              });
              total += day.count;
            }
          });
        }
        
        setContributions(recentContributions);
        setTotalContributions(total);
      } catch (err) {
        console.error("Failed to fetch contributions:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    
    fetchContributions();
  }, [username]);

  // 将数据按周组织（GitHub 风格：列是周，行是周几）
  const getWeeksData = () => {
    if (contributions.length === 0) return [];
    
    // 按日期排序
    const sorted = [...contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    const weeks: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [];
    
    // 获取第一天是周几，填充空位
    const firstDayOfWeek = new Date(sorted[0].date).getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null);
    }
    
    sorted.forEach((day, index) => {
      const dayOfWeek = new Date(day.date).getDay();
      
      // 如果是周日且当前周有数据，开始新的一周
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        // 填充到7天
        while (currentWeek.length < 7) {
          currentWeek.push(null);
        }
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      currentWeek.push(day);
      
      // 最后一组
      if (index === sorted.length - 1) {
        weeks.push(currentWeek);
      }
    });
    
    return weeks;
  };

  // 报纸风格的黑白灰色调
  const getLevelColor = (level: number) => {
    const colors = [
      "bg-paper-dark/50", // level 0 - no contributions
      "bg-ink/20", // level 1
      "bg-ink/40", // level 2
      "bg-ink/65", // level 3
      "bg-ink/90", // level 4
    ];
    return colors[level] || colors[0];
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("zh-CN", {
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="mt-4 pt-4 border-t border-newspaper/30">
        <div className="text-xs text-gray-500 text-center py-4">
          加载 GitHub 贡献数据中...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-4 pt-4 border-t border-newspaper/30">
        <div className="text-xs text-gray-500 text-center py-4">
          无法加载 GitHub 数据
        </div>
      </div>
    );
  }

  const weeks = getWeeksData();

  return (
    <div className="mt-4 pt-4">
      {/* 标题行 - 紧凑显示 */}
      <div className="flex items-center justify-between mb-2 text-xs">
        <span className="font-bold uppercase tracking-wider">GitHub Activity</span>
        <span className="font-serif italic">
          <span className="font-bold not-italic">{totalContributions}</span> commits / 3mo
        </span>
      </div>
      
      {/* 贡献格子 - 撑满宽度 */}
      <div className="flex gap-[2px] w-full">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[2px] flex-1">
            {week.map((day, dayIndex) => (
              <div
                key={day?.date || `empty-${weekIndex}-${dayIndex}`}
                className={`aspect-square w-full rounded-[2px] ${
                  day ? getLevelColor(day.level) : "bg-transparent"
                } ${day ? "border border-newspaper/20" : ""} transition-all hover:scale-110 hover:border-newspaper/60`}
                title={
                  day
                    ? `${formatDate(day.date)}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`
                    : ""
                }
              />
            ))}
          </div>
        ))}
      </div>
      
      {/* 图例 - 紧凑风格 */}
      <div className="flex items-center justify-end gap-1 mt-2 text-[9px] text-ink/60 font-serif italic">
        <span>less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`w-2 h-2 rounded-[1px] ${getLevelColor(level)} border border-newspaper/20`}
          />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}
