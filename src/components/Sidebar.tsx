import { resumeData } from "../data/resume";
import avatar from "../assets/avatar.png";
import wxqrcode from "../assets/wxqrcode.jpg";
import { Github, Mail, MessageCircle } from "lucide-react";

export default function Sidebar() {
  const { contact, education } = resumeData;

  return (
    <aside className="col-span-12 lg:col-span-4 lg:pl-2 mt-10 lg:mt-0">
      <div className="border border-newspaper border-opacity-90 p-4 bg-paper-dark/30 shadow-sm relative flex flex-col items-center min-h-[500px] justify-center">
        
        {/* Avatar */}
        <div className="w-56 h-56 md:w-64 md:h-64 mb-8 border-4 border-newspaper p-1 bg-paper shadow-md rotate-2 hover:rotate-0 transition-transform duration-300">
          <img 
            src={avatar} 
            alt="Avatar" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        
        {/* Profile Info */}
        <div className="w-full text-center space-y-4">
          <div className="border-b border-newspaper border-dashed pb-6">
            <h3 className="text-3xl font-black lowercase tracking-widest mb-2 font-headline">
              {contact.name || "lilililanhui"}
            </h3>
            <p className="font-serif italic text-gray-700 text-l font-bold text-center mb-4">
              Frontend & AI Engineer
            </p>
            
            {/* Social Icons row */}
            <div className="flex justify-center space-x-6">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-ink/60 transition-colors"
                title="邮箱"
              >
                <Mail className="w-6 h-6" />
              </a>
              {contact.wechat && (
                <div className="relative group flex items-center justify-center">
                  <div 
                    className="hover:text-ink/60 transition-colors cursor-help"
                    title={`公众号: ${contact.wechat}`}
                  >
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  {/* QR Code Tooltip */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-32 h-32 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-50 border-2 border-newspaper bg-paper p-1 shadow-lg">
                    <img src={wxqrcode} alt="WeChat QR Code" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                  </div>
                </div>
              )}
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-ink/60 transition-colors"
                title="Github"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="pt-4 text-left w-full px-2 lg:px-2">
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between items-start border-b border-newspaper/10 pb-3 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] uppercase tracking-tight block">{edu.school}</span>
                    <span className="font-serif italic text-gray-800 text-sm mt-1">{edu.degree}</span>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-600 mt-0.5 pt-0.5 border-l-2 border-newspaper pl-2 ml-2 shrink-0">
                    {edu.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* decorative element */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-newspaper border-dashed pointer-events-none opacity-40"></div>
      </div>
    </aside>
  );
}
