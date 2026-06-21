"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Layers } from "lucide-react";

export default function BackgroundProposalsPage() {
  const proposalScenes = [
    {
      title: "1. HR Recruiter (Helga)",
      bgFile: "scene-hr-office.svg",
      spriteFile: "banana-hr.svg",
      role: "Recursos Humanos & Onboarding Office"
    },
    {
      title: "2. Gerry Manager / PM (Gerry / Pam)",
      bgFile: "scene-manager-meeting-room.svg",
      spriteFile: "banana-manager.svg",
      role: "Sala de Juntas / Project Management"
    },
    {
      title: "3. Sven Senior AI (Sven)",
      bgFile: "scene-senior-dev-desk.svg",
      spriteFile: "banana-senior.svg",
      role: "Sven's Dev Desk & Architecture Board"
    },
    {
      title: "4. Don Banano CEO (Don Banano)",
      bgFile: "scene-ceo-office.svg",
      spriteFile: "banana-ceo.svg",
      role: "Penthouse Ejecutivo del CEO"
    },
    {
      title: "5. Junior / Intern (El Jugador)",
      bgFile: "scene-intern-desk.svg",
      spriteFile: "banana-intern.svg",
      role: "Welcome Desk & Onboarding del Intern"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0d14] text-[#dfe2ef] relative flex flex-col items-center justify-start overflow-x-hidden pb-20 selection:bg-[#fbbf24] selection:text-[#0a0d14]">
      {/* Subtle modern abstract layout accent */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.005) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.005) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px"
        }}
      />

      <div className="max-w-[1100px] w-full px-4 relative z-10 flex flex-col gap-10 my-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#64748b] hover:text-[#fbbf24] transition-colors mb-2 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Volver al menú
            </Link>
            <h1 className="font-['Outfit'] font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#fbbf24] animate-pulse" /> Escenarios de Oficina Moderna
            </h1>
            <p className="font-['Inter'] text-xs text-[#64748b] mt-1">
              Propuestas de fondos vectoriales simples de oficina para visual novel, diseñadas para complementar los sprites plátano.
            </p>
          </div>
          <div className="text-right text-[10px] font-mono text-[#64748b]">
            Directorio: <span className="text-[#38bdf8]">/public/background-proposals/normal-office/</span>
          </div>
        </div>

        {/* Presentation of scenes */}
        <div className="flex flex-col gap-16">
          {proposalScenes.map((scene, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center gap-3 w-full"
            >
              {/* Aspect Ratio Screen Frame (16:10 Game Mock) */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#07090e] rounded-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-end justify-center group"
                style={{
                  backgroundImage: `url(/background-proposals/normal-office/${scene.bgFile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {/* Subtle base shadow on floor under the character */}
                <ellipse 
                  cx="720" 
                  cy="850" 
                  rx="180" 
                  ry="12" 
                  fill="rgba(0,0,0,0.3)" 
                  className="absolute bottom-[2%] z-0 pointer-events-none transform scale-x-75" 
                />
                
                {/* Character Sprite overlaid on center */}
                <img 
                  src={`/characters/${scene.spriteFile}`} 
                  alt={scene.role}
                  className="h-[75%] max-h-[340px] md:max-h-[460px] object-contain relative z-10 select-none pb-4 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] animate-[pulse_5s_infinite_alternate]"
                  draggable="false"
                />

                {/* Subtitle speaking dialog mock container to frame the novel feel */}
                <div className="absolute bottom-6 left-6 right-6 h-[80px] md:h-[100px] bg-[#0c1017]/85 border border-white/5 backdrop-blur-md rounded-lg p-3 select-none pointer-events-none flex flex-col justify-between z-20">
                  <span className="font-['Outfit'] font-bold text-[10px] text-[#fbbf24] uppercase tracking-wider">
                    {scene.title.replace(/^\d+\.\s+/, "")}
                  </span>
                  <div className="w-[40%] h-2 bg-white/10 rounded-full" />
                  <div className="w-[85%] h-2 bg-white/5 rounded-full" />
                </div>
                
                {/* Frame border highlight */}
                <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl" />
              </div>

              {/* Minimal discrete Label underneath */}
              <div className="w-full flex justify-between items-center text-xs font-mono text-[#64748b] px-1">
                <span>{scene.role}</span>
                <span className="text-[10px] opacity-75">
                  Fondo: <span className="text-[#34d399] font-medium">{scene.bgFile}</span> | Sprite: <span className="text-[#fbbf24] font-medium">{scene.spriteFile}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-[#0f131c]/30 border border-white/5 rounded-xl p-5 flex flex-col md:flex-row gap-6 items-center justify-between mt-10">
          <div className="text-left max-w-2xl">
            <h4 className="font-['Outfit'] font-bold text-sm text-white mb-1">Evaluación de Escenarios Modernos</h4>
            <p className="font-['Inter'] text-xs text-[#64748b] leading-relaxed">
              Estos escenarios vectoriales representan una oficina contemporánea de desarrollo/startup, adaptada para ser limpia y amigable. Tienen profundidad de perspectiva y mantienen el centro libre para asegurar que los diálogos y personajes sigan siendo legibles.
            </p>
          </div>
          <Link 
            href="/"
            className="w-full md:w-auto text-center font-['Outfit'] font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-lg bg-[#fbbf24] text-[#0a0d14] hover:bg-[#fcd34d] hover:shadow-[0_4px_12px_rgba(251,191,36,0.2)] transition-all cursor-pointer shrink-0"
          >
            Volver al Menú
          </Link>
        </div>
      </div>
    </div>
  );
}
