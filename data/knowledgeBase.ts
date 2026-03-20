import { resumeData } from './resume';

// 知识库类型定义
export interface KnowledgeBase {
  personal: {
    name: string;
    title: string;
    location: string;
    introduction: string;
  };
  skills: Array<{
    category: string;
    items: string;
  }>;
  education: Array<{
    school: string;
    degree: string;
    date: string;
  }>;
  workExperience: Array<{
    role: string;
    company: string;
    date: string;
    description: string[];
  }>;
  projects: Array<{
    name: string;
    tech: string;
    role: string;
    description: string[];
    link?: string;
    github?: string;
  }>;
  contact: {
    email: string;
    wechat: string;
    wechatQRCode?: string;
    github: string;
  };
  // 文章库（后续扩展）
  articles: Array<{
    title: string;
    summary: string;
    link?: string;
    date?: string;
    tags?: string[];
  }>;
  // 常见问答（后续扩展）
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// 从 resumeData 构建知识库
export const knowledgeBase: KnowledgeBase = {
  personal: {
    name: resumeData.contact.name,
    title: '前端开发工程师 & AI工程师',
    location: resumeData.header.location,
    introduction: resumeData.hero.content,
  },
  skills: resumeData.skills,
  education: resumeData.education,
  workExperience: resumeData.experience,
  projects: resumeData.projects,
  contact: {
    email: resumeData.contact.email,
    wechat: resumeData.contact.wechat,
    wechatQRCode: resumeData.contact.wechatQRCode,
    github: resumeData.contact.github,
  },
  // 文章库 - 公众号"ISTJ优化指南"文章
  articles: [
    {
      title: '如何在信息爆炸时代保持清醒？',
      summary: '探讨信息爆炸时代的四大问题（内容冲击、信息茧房、注意力涣散、损失厌恶），分享三个应对方法：主动筛选和获取信息、有限时间内完成信息输入闭环、学习心智模型对抗信息过载。强调输入的最终目标是输出。',
      link: 'https://mp.weixin.qq.com/s/zF4Naon1WsqHhrP9fx8FAA',
      date: '2025-04-14',
      tags: ['效率', '信息管理', '个人成长']
    },
    {
      title: '旅行，让平凡的日子闪闪发光',
      summary: '分享旅行带来的意义：让时间慢下来、与不同的人相遇、以脚丈量世界、创造不一样的经历。旅行不仅是空间的转变，还有时间的流动，这些点滴会在不知不觉中影响我们的认知。',
      link: 'https://mp.weixin.qq.com/s/lrXgCfRLX60UTCSesHZQww',
      date: '2025-05-11',
      tags: ['生活感悟', '旅行', '碎碎念']
    },
    {
      title: '下班开启新的一天',
      summary: '探讨如何在工作日中找到可控时间做自己想做的事。分享方法：打开新视角看待工作日、梳理可控时间、建立只为自己的目标、制定可执行的计划、调整好心态。一天2小时看似不多，但日积月累一年就是528小时（约22天）。',
      link: 'https://mp.weixin.qq.com/s/Rhdi2lIDvNXHhaNuBAOUbQ',
      date: '2025-06-01',
      tags: ['时间管理', '效率', '个人成长']
    },
    {
      title: '忙到怀疑人生？你缺的不是时间是效率',
      summary: '分享用较少时间获得更大价值的五点方法：以目标导向做事情、专注于一件事情、SOP优化高频事件、偶发事件交给专业人员、打造自己的AI天团。强调核心不在于你有多少时间，而在于如何把事情做得更快、更好。',
      link: 'https://mp.weixin.qq.com/s/y01LjjrpYgz-jU5dmU-nPA',
      date: '2025-08-16',
      tags: ['效率', 'AI工具', '时间管理']
    },
    {
      title: '工作三年确诊甲亢，我开始还健康债',
      summary: '分享确诊甲亢的经历和反思。从手抖、端水夹菜都抖的异常开始，到确诊甲亢后的调整。强调工作很重要，但更重要的是自己。所有的可能性，都建立在"好身体"这个最基础的前提上。',
      link: 'https://mp.weixin.qq.com/s/TVHlmi8-frDU4eArPFkB4Q',
      date: '2025-09-01',
      tags: ['健康', '碎碎念', '生活感悟']
    },
    {
      title: '桦加沙来袭，被迫慢下来的生活实录',
      summary: '记录台风桦加沙期间居家办公的经历。在家封闭一天半，反而更能专注于自己，好好工作，好好生活。分享与猫咪相处的温馨时光，感悟被迫慢下来的生活节奏。',
      link: 'https://mp.weixin.qq.com/s/3W5avfRHdkUInobja9-bwg',
      date: '2025-09-26',
      tags: ['碎碎念', '生活感悟']
    },
    {
      title: '从《首尔夏天》开启一场与自我的对话',
      summary: '观看食贫道《首尔夏天》纪录片的感悟。从海女文化、大峙洞学院街的教育压力、偶像工业、追星文化等角度，反思韩流对个人成长的影响。强调努力生活，是最普世的生存哲学。',
      link: 'https://mp.weixin.qq.com/s/97YzCUYnzV8aeMvmLrqD_g',
      date: '2025-10-01',
      tags: ['生活感悟', '文化', '碎碎念']
    },
    {
      title: '拥有超强行动力后，我的人生如同开挂升级',
      summary: '分享如何将想法变为实际行动的方法：放下思虑先行动再调整、降低门槛迈出微小一步、用MVP心态小步快跑试错、将目标具体化化虚为实、可视化过程收获成长的正反馈。强调行动本身就蕴含着超越自我的力量。',
      link: 'https://mp.weixin.qq.com/s/xsLElXiXa0yitKOeIZzC9A',
      date: '2025-10-20',
      tags: ['行动力', '个人成长', '效率']
    },
    {
      title: '前端已死？AI时代我们还在拼什么？',
      summary: '作为大厂前端开发者，分析AI给工作带来的改变：AI是啥都可以问的技术私教、开发的超级加速器，让我们能专注于更有价值的事。核心竞争力在于：综合解决问题能力、深度业务理解与AI驾驭力、人与人之间的深度协作。',
      link: 'https://mp.weixin.qq.com/s/sHFmXClHXYPfJvPWXXt9DQ',
      date: '2025-11-01',
      tags: ['前端', 'AI', '职业发展']
    },
    {
      title: '我们和高手，到底差在哪？',
      summary: '探讨隐性知识的概念——那些"我们能做到，却说不清怎么做到"的知识。分享习得隐性知识的方法：以人为师偷师学艺（榜样梳理技巧）、沉浸式刻意练习、建立错题集复盘。强调搜索不到的隐性知识含金量在增加。',
      link: 'https://mp.weixin.qq.com/s/9PQZ8KXvb-nJqOZeaT7q8A',
      date: '2025-11-15',
      tags: ['个人成长', '学习方法', '隐性知识']
    },
    {
      title: '我的表达力刻意练习全记录',
      summary: '以AI编程科普课教学为例，分享提升表达能力的完整方法论：材料准备（确定听众、明确要传达信息、设计大纲、输出逐字稿、设计PPT）、反复打磨（AI辅助优化、腾讯会议模拟试讲、录像回放复盘）、上场技巧（专注当下、积极链接听众）、课后复盘。',
      link: 'https://mp.weixin.qq.com/s/2MAFdku4yyMtvgOAA5Ju5Q',
      date: '2025-12-01',
      tags: ['表达力', '演讲', '个人成长', '志愿者']
    },
    {
      title: '制定"不画饼"的新年计划',
      summary: '分享制定和执行目标的方法。目标制定：先减法后加法、优先挑选重要的事情（问自己为什么想做、做成能带来什么）、将目标结果具象化、给自己三个月试用期、找AI帮忙复核。目标落地：分类（高频微习惯/中频固定项/低频阶段性任务）、目标叠BUFF、建立复盘工作流。',
      link: 'https://mp.weixin.qq.com/s/62XklaPq6etaqI6894oHhw',
      date: '2026-01-01',
      tags: ['目标管理', '新年计划', '效率', '复盘']
    },
    {
      title: '不敢当众说话的我，是怎样一步步站上讲台的？',
      summary: '分享从内向不敢发言到站上讲台的成长历程。通过年会志愿者活动见识不同的人，短暂担任小队长学会主动担当，从社区志愿者签到员成长为讲师。从否定自己到肯定自己，强调走出舒适圈去体验不一样的生活，发现闪闪发光的自己。',
      link: 'https://mp.weixin.qq.com/s/tIuZV6di52WMzIIQ_K92Yg',
      date: '2025-02-15',
      tags: ['个人成长', '志愿者', '表达力', '突破舒适圈']
    },
    {
      title: '牛马精力恢复指南',
      summary: '从精力金字塔（体能、情绪、思维、意志）四个层面分享精力恢复方法。体能恢复：保证充足休息、摄入足够营养（低GI低GL食物、补充维生素）、循序渐进运动。情绪恢复：短期平衡情绪、培养兴趣爱好、ABC情绪记录复盘。思维恢复：识别自我挫败思维、远离能量吸血鬼、接近高能量人群。意志恢复：通过价值取向和超越个人利益的目标获得持久精力。',
      link: 'https://mp.weixin.qq.com/s/92HEzvP7kZYsld0wNqfvmg',
      date: '2025-06-30',
      tags: ['健康', '精力管理', '效率', '个人成长']
    },
    {
      title: '会复盘的人，才不会瞎忙',
      summary: '分享通过持续复盘告别瞎忙的方法。目标总跑丢时拆成可执行的小目标（年目标→季度→月→周→日）；别光埋头做事，先与行业标准对比发现问题；发现问题后先模仿再总结经验；吾日三省吾身（昨日三问+当日三问）。通过复盘让自己清醒地过好每一天。',
      link: 'https://mp.weixin.qq.com/s/XRliKWwBviD-RwTNYk37eQ',
      date: '2025-10-09',
      tags: ['复盘', '效率', '目标管理', '个人成长']
    },
    {
      title: '关于我的介绍（2025.11）',
      summary: '个人介绍文章。擅长开发（前端）、健身、写作三件事。人生信条：身体是革命的本钱、专注于个人提升的终身学习、保持工作生活的平衡。公众号主要输出个人成长效能指南（效能公式=输入×管理×输出），分享AI提升效率的tips，传递积极向上的能量。',
      link: 'https://mp.weixin.qq.com/s/mY8uG4g3sB83vYg0wvMkwA',
      date: '2025-11-16',
      tags: ['个人介绍', '个人成长', '效率']
    },
    {
      title: '前端已死？AI时代我们还在拼什么？',
      summary: '深入分析AI时代前端开发者的核心竞争力。AI带来的改变：随时可问的技术私教、开发超级加速器（几分钟搭建项目、快速定位bug）、专注更有价值的事（沉淀技术文档）。核心竞争力：综合解决问题能力（技术攻坚+跨部门协调）、深度业务理解与AI驾驭力（从执行者到指挥官）、人与人之间的深度协作。强调软技能是最不可替代的竞争力。',
      link: 'https://mp.weixin.qq.com/s/0zuDoRGCeENthX--lhWfsA',
      date: '2025-11-08',
      tags: ['前端', 'AI', '职业发展', '核心竞争力']
    },
    {
      title: '从混乱到高效：用SOP和项目管理打造你的高效秘籍',
      summary: '分享SOP和项目管理两大效率工具。SOP标准化流程：把重复决策变成肌肉记忆，四步打造个人SOP（确定场景→任务拆解→可视化设计→持续迭代）。项目管理：十大管理模块、五大通关步骤（启动→规划→执行→监控→收尾）。三大利器：WBS工作分解、甘特图时间管理、GRAI复盘法。强调SOP与项目管理相辅相成，根据工作性质选择合适工具组合。',
      link: 'https://mp.weixin.qq.com/s/-nQxejM7R7b-1PYAmHMWDw',
      date: '2025-02-03',
      tags: ['效率', 'SOP', '项目管理', '个人成长']
    },
    {
      title: '从0到1：四步开启你的写作之旅',
      summary: '写作和其他技能一样，是可以通过正确的方法和持续的练习来掌握的。本文将帮你打破写作心理枷锁，通过四个具体可行的步骤，带你高效输出一篇优质文章。',
      link: 'https://mp.weixin.qq.com/s/3YzOef4OiDpSbyPA7FKgEA',
      date: '2025-03-02',
      tags: ['写作', 'SOP', '个人成长']
    },
  ],
  // 常见问答 - 后续可添加更多 FAQ
  faq: [
    {
      question: '如何联系你？怎么联系你？联系方式是什么？',
      answer: `可以通过以下方式联系我：
- 邮箱：${resumeData.contact.email}
- 微信公众号：${resumeData.contact.wechat}（可扫描二维码关注）
- GitHub：${resumeData.contact.github}

需要进一步沟通的话，欢迎随时联系！😊`
    },
    {
      question: '你的 GitHub 地址是什么？',
      answer: `我的 GitHub 地址是：${resumeData.contact.github}
欢迎访问查看我的开源项目！`
    }
  ],
};

/**
 * 将知识库转化为文本上下文，用于注入 System Prompt
 */
export function buildKnowledgeContext(): string {
  const kb = knowledgeBase;
  
  const sections: string[] = [];
  
  // 个人信息
  sections.push(`## 个人信息
- 姓名：${kb.personal.name}
- 职位：${kb.personal.title}
- 地点：${kb.personal.location}
- 简介：${kb.personal.introduction}`);

  // 专业技能
  sections.push(`## 专业技能
${kb.skills.map(s => `- **${s.category}**：${s.items}`).join('\n')}`);

  // 教育背景
  sections.push(`## 教育背景
${kb.education.map(e => `- ${e.school}，${e.degree}（${e.date}）`).join('\n')}`);

  // 工作经历
  sections.push(`## 工作经历
${kb.workExperience.map(w => `### ${w.role} @ ${w.company}（${w.date}）
${w.description.map(d => `- ${d}`).join('\n')}`).join('\n\n')}`);

  // 项目经历
  sections.push(`## 项目经历
${kb.projects.map(p => `### ${p.name}
- 技术栈：${p.tech}
- 角色：${p.role}
${p.description.map(d => `- ${d}`).join('\n')}
${p.github ? `- GitHub：${p.github}` : ''}
${p.link && p.link !== '#' ? `- 链接：${p.link}` : ''}`).join('\n\n')}`);

  // 联系方式
  const qrCodeInfo = kb.contact.wechatQRCode 
    ? `\n- 微信公众号二维码：${kb.contact.wechatQRCode}（当用户询问公众号二维码时，请使用 Markdown 图片语法展示：![微信公众号二维码](${kb.contact.wechatQRCode})）` 
    : '';
  sections.push(`## 联系方式
- 邮箱：${kb.contact.email}
- 微信公众号：${kb.contact.wechat}${qrCodeInfo}
- GitHub：${kb.contact.github}`);

  // 文章（如果有）
  if (kb.articles.length > 0) {
    sections.push(`## 发表文章（公众号「ISTJ优化指南」）
**重要提示**：当用户询问公众号文章时，请使用 Markdown 链接语法展示文章标题，格式为：[《文章标题》](链接地址)，这样用户可以直接点击跳转阅读。

文章列表：
${kb.articles.map(a => `- 《${a.title}》：${a.summary}${a.link ? `\n  链接：${a.link}` : ''}${a.tags ? `\n  标签：${a.tags.join('、')}` : ''}`).join('\n')}`);
  }

  // FAQ（如果有）
  if (kb.faq.length > 0) {
    sections.push(`## 常见问答
${kb.faq.map(f => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}`);
  }

  return sections.join('\n\n');
}
