"use client";

import Image from "next/image";
import { resumeData } from "@/data/resume";
import { Github, Mail, MessageCircle, Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";
import GitHubContributions from "./GitHubContributions";

export default function Sidebar() {
  const { contact, education } = resumeData;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside className="col-span-12 lg:col-span-4 lg:pl-2 mt-0 lg:mt-0 order-1 lg:order-2">
      <div className="border border-newspaper border-opacity-90 p-4 bg-paper-dark/30 shadow-sm relative flex flex-col items-center min-h-[500px] justify-center">
        
        {/* Avatar */}
        <div 
          className="w-56 h-56 md:w-64 md:h-64 mb-8 border-4 border-newspaper p-1 bg-paper shadow-md rotate-2 hover:rotate-0 transition-transform duration-300 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={isHovered ? "/images/avatar-no-glass.png" : "/images/avatar.png"}
            alt="Avatar" 
            fill
            className="object-cover transition-all duration-500"
          />
        </div>
        
        {/* Profile Info */}
        <div className="w-full text-center space-y-4">
          <div className="border-b border-newspaper/40 border-dashed pb-6">
            <h3 className="text-3xl font-black lowercase tracking-widest mb-2 font-headline">
              {contact.name || "lilililanhui"}
            </h3>
            <p className="font-serif italic text-gray-700 text-l font-bold text-center mb-4">
              Frontend & AI Engineer
            </p>
            
            {/* Social Icons row */}
            <div className="flex justify-center space-x-6">
              {/* Email Icon with Tooltip */}
              <div className="relative group flex items-center justify-center">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-ink/60 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                {/* Email Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50 border-2 border-newspaper bg-paper shadow-lg whitespace-nowrap">
                  <div className="text-xs font-bold">点击跳转邮箱</div>
                  <div className="text-xs text-gray-600">{contact.email}</div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-newspaper"></div>
                </div>
              </div>
              
              {/* WeChat Icon with QR Code */}
              {contact.wechat && (
                <div className="relative group flex items-center justify-center">
                  <div className="hover:text-ink/60 transition-colors cursor-help">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  {/* QR Code Tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50 border-2 border-newspaper bg-paper p-1 shadow-lg">
                    <div className="text-xs font-bold text-center mb-1 px-2">点击关注公众号</div>
                    <div className="text-xs text-gray-600 text-center mb-2">「{contact.wechat}」</div>
                    <div className="w-28 h-28 relative">
                      <Image 
                        src="/images/wxqrcode.jpg"
                        alt="WeChat QR Code" 
                        fill
                        className="object-cover grayscale mix-blend-multiply" 
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* GitHub Icon with Tooltip */}
              <div className="relative group flex items-center justify-center">
                <a
                  href={`https://${contact.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink/60 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                {/* GitHub Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50 border-2 border-newspaper bg-paper shadow-lg whitespace-nowrap">
                  <div className="text-xs font-bold">点击跳转 GitHub</div>
                  <div className="text-xs text-gray-600">{contact.github}</div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-newspaper"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left w-full px-2 lg:px-2">
            {/* Timeline Style */}
            <div className="relative">
              {/* Timeline vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-newspaper/30"></div>
              
              <div className="space-y-4">
                {/* Work Experience - Tencent */}
                <div className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-paper border-2 border-newspaper flex items-center justify-center">
                    <Briefcase className="w-3 h-3" />
                  </div>
                  {/* Content */}
                  <div className="group">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold tracking-wider text-gray-500 border-b border-dashed border-newspaper/50">
                        2022.06 - 至今
                      </span>
                    </div>
                    <h4 className="font-black text-sm uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                      腾讯 (Tencent)
                    </h4>
                    <p className="text-xs text-gray-600 font-medium italic">
                      前端开发工程师
                    </p>
                  </div>
                </div>

                {/* Education items */}
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-paper border-2 border-newspaper flex items-center justify-center">
                      <GraduationCap className="w-3 h-3" />
                    </div>
                    {/* Content */}
                    <div className="group">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold tracking-wider text-gray-500 border-b border-dashed border-newspaper/50">
                          {edu.date}
                        </span>
                      </div>
                      <h4 className="font-black text-sm uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                        {edu.school}
                      </h4>
                      <p className="text-xs text-gray-600 font-medium italic">
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Contributions */}
            <GitHubContributions username="lilililanhui" />
          </div>
        </div>
        
        {/* decorative element */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-newspaper border-dashed pointer-events-none opacity-40"></div>
      </div>
    </aside>
  );
}
