"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, User, BadgeAlert, ClipboardList, ShieldAlert, Award, Coffee, BookOpen, Layers } from "lucide-react";

export default function SpriteProposalsPage() {
  const originalProposals = [
    {
      file: "banana-bust-hr.svg",
      name: "1. Banana Bust HR",
      description: "Versión busto adaptada al layout actual del juego. Conserva el torso con traje corporativo y credencial, pero con la cabeza y el cuello siendo directamente un plátano amarillo de silueta curvada.",
      features: [
        "Cabeza y cuello de plátano",
        "Traje y corbata corporativa",
        "Credencial de Recursos Humanos",
        "Headset pequeño integrado"
      ],
      icon: User,
      bgColor: "rgba(59, 130, 246, 0.05)",
      borderColor: "rgba(59, 130, 246, 0.2)",
      accentColor: "#3b82f6"
    },
    {
      file: "full-banana-hr.svg",
      name: "2. Full Banana HR",
      description: "Plátano antropomórfico completo. El cuerpo entero es un plátano vertical con extremidades y zapatos elegantes. La cara está integrada en la parte central superior, cargando una credencial colgante.",
      features: [
        "Plátano vertical completo",
        "Extremidades delgadas (brazo saludando)",
        "Credencial colgante sobre el cuerpo",
        "Silueta leída como plátano al 100%"
      ],
      icon: BadgeAlert,
      bgColor: "rgba(252, 211, 77, 0.05)",
      borderColor: "rgba(252, 211, 77, 0.25)",
      accentColor: "#fcd34d"
    },
    {
      file: "cute-mascot-hr.svg",
      name: "3. Cute Mascot HR",
      description: "Versión chibi / mascota de Platanus Hack. De proporciones más bajas y robustas. Ojos gigantes expresivos de anime, corbata adorable directamente en el cuerpo y portando una tabla de evaluación (rubrics).",
      features: [
        "Proporciones chibi y compactas",
        "Ojos gigantes con brillos",
        "Corbata adorable directamente integrada",
        "Porta tabla / checklist de reclutador"
      ],
      icon: ClipboardList,
      bgColor: "rgba(139, 92, 246, 0.05)",
      borderColor: "rgba(139, 92, 246, 0.2)",
      accentColor: "#8b5cf6"
    }
  ];

  const accessoryTests = [
    {
      file: "banana-hr-accessory-test.svg",
      name: "HR Recruiter",
      role: "Guía del juego / Recursos Humanos",
      description: "Basado en la Propuesta 02. Representa a Helga, la reclutadora sospechosamente amable. Lleva su headset, credencial morada oficial y tabla de checklist corporativo.",
      features: [
        "Headset de soporte",
        "Credencial HR morada",
        "Clipboard de reclutamiento",
        "Expresión alegre y corporativa"
      ],
      icon: User,
      bgColor: "rgba(16, 185, 129, 0.05)",
      borderColor: "rgba(16, 185, 129, 0.2)",
      accentColor: "#10b981"
    },
    {
      file: "banana-manager-accessory-test.svg",
      name: "Gerry (Manager)",
      role: "Project Manager Exigente",
      description: "Plátano maduro con manchas cafés. Lleva lentes de pasta negra, corbata roja ejecutiva y sostiene una taza de café caliente. Ceja levantada y mueca de 'esto era para ayer'.",
      features: [
        "Lentes de pasta cuadrados",
        "Manchas cafés de madurez",
        "Corbata roja ejecutiva",
        "Taza de café roja humeante"
      ],
      icon: Coffee,
      bgColor: "rgba(239, 68, 68, 0.05)",
      borderColor: "rgba(239, 68, 68, 0.2)",
      accentColor: "#ef4444"
    },
    {
      file: "banana-senior-accessory-test.svg",
      name: "Sven (Senior AI)",
      role: "Senior AI Engineer / Mentor",
      description: "Plátano ligeramente abierto en la punta. Lleva un hoodie negro, audífonos grandes de programador y carga una laptop abierta que proyecta luz cian en su rostro con ojeras marcadas.",
      features: [
        "Hoodie negro de programador",
        "Audífonos over-ear grandes",
        "Cáscara superior abierta",
        "Laptop glowing cian"
      ],
      icon: ShieldAlert,
      bgColor: "rgba(59, 130, 246, 0.05)",
      borderColor: "rgba(59, 130, 246, 0.2)",
      accentColor: "#3b82f6"
    },
    {
      file: "banana-ceo-accessory-test.svg",
      name: "Don Banano (CEO)",
      role: "CEO / Fundador",
      description: "Plátano perfecto y alto sin imperfecciones. Envuelto en un elegante saco de vestir con pin dorado, corbata de seda dorada y rodeado de un resplandor o aura dorada difusa.",
      features: [
        "Elegante saco / blazer negro",
        "Corbata y pin de hoja dorada",
        "Resplandor/glow dorado sutil",
        "Sonrisa corporativa impecable"
      ],
      icon: Award,
      bgColor: "rgba(252, 211, 77, 0.05)",
      borderColor: "rgba(252, 211, 77, 0.25)",
      accentColor: "#fcd34d"
    },
    {
      file: "banana-intern-accessory-test.svg",
      name: "Junior / Intern",
      role: "El Jugador / AI Intern",
      description: "Plátano más pequeño y redondeado. Lleva tirantes de mochila, libreta espiral en su brazo y una credencial gigante de visitante que grita 'INTERN'. Expresión de pánico y gota de sudor.",
      features: [
        "Silueta chica y redondeada",
        "Credencial de INTERN gigante",
        "Libreta de apuntes espiral",
        "Gota de sudor y expresión nerviosa"
      ],
      icon: BookOpen,
      bgColor: "rgba(168, 85, 247, 0.05)",
      borderColor: "rgba(168, 85, 247, 0.2)",
      accentColor: "#a855f7"
    }
  ];

  const backgroundTests = [
    {
      name: "HR Onboarding Desk",
      role: "Helga (HR Recruiter)",
      bgFile: "background-hr.svg",
      spriteFile: "banana-hr.svg",
      description: "Fondos de oficina de reclutamiento con checklists flotantes en verde y morado. Transmite formalidad y sospecha.",
      color: "#10b981",
      borderColor: "rgba(16, 185, 129, 0.2)"
    },
    {
      name: "CS War Room / Project Desk",
      role: "Gerry / Pam (PM & Manager)",
      bgFile: "background-manager.svg",
      spriteFile: "banana-manager.svg",
      description: "Entorno de alta presión. Kanban boards en rojo, alertas de demo caídas y burndown charts críticos.",
      color: "#ef4444",
      borderColor: "rgba(239, 68, 68, 0.2)"
    },
    {
      name: "Sven Dev Cave / AI Engine Lab",
      role: "Sven (Senior AI)",
      bgFile: "background-senior.svg",
      spriteFile: "banana-senior.svg",
      description: "Consola de código interactivo, redes neuronales y logs de debug en tonos cian y azul oscuro.",
      color: "#3b82f6",
      borderColor: "rgba(59, 130, 246, 0.2)"
    },
    {
      name: "CEO Executive Penthouse",
      role: "Don Banano (CEO)",
      bgFile: "background-ceo.svg",
      spriteFile: "banana-ceo.svg",
      description: "Ventanal minimalista con ciudad cyberpunk, logo holográfico flotante y aura dorada premium.",
      color: "#fcd34d",
      borderColor: "rgba(252, 211, 77, 0.2)"
    },
    {
      name: "Junior Welcome Cubicle",
      role: "AI Intern / Player Desk",
      bgFile: "background-intern.svg",
      spriteFile: "banana-intern.svg",
      description: "Escritorio repleto de post-its de ayuda, libreta, manual de bienvenida y stickers chibi.",
      color: "#a855f7",
      borderColor: "rgba(168, 85, 247, 0.2)"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#090d16] text-[#dfe2ef] relative flex flex-col p-6 items-center justify-start overflow-x-hidden selection:bg-[#fcd34d] selection:text-[#090d16]">
      {/* Cyber Workspace Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(252, 211, 77, 0.04) 0%, transparent 50%),
            linear-gradient(rgba(255, 255, 255, 0.007) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.007) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 30px 30px, 30px 30px"
        }}
      />

      <div className="max-w-[1400px] w-full relative z-10 flex flex-col gap-12 my-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#64748b] hover:text-[#fcd34d] transition-colors mb-2 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> Volver al menú del juego
            </Link>
            <h1 className="font-['Outfit'] font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#fcd34d] animate-pulse" /> Asset Proposals Dashboard
            </h1>
            <p className="font-['Inter'] text-sm text-[#64748b] mt-1">
              Centro de exploración visual de fondos y avatares plátano para <strong>Prompt or Get Fired</strong>.
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs font-mono text-[#64748b]">
            <div>Sprites: <span className="text-[#fcd34d]">/public/characters/</span></div>
            <div>Fondos: <span className="text-[#10b981]">/public/backgrounds/</span></div>
          </div>
        </div>

        {/* NEW SECTION 3: BACKGROUND & CHARACTER READABILITY TEST */}
        <section className="flex flex-col gap-6">
          <div>
            <span className="font-mono text-[10px] text-[#10b981] uppercase tracking-widest block mb-1">
              Fase 3 de Diseño • Fondos Temáticos
            </span>
            <h2 className="font-['Outfit'] font-extrabold text-2xl text-white uppercase tracking-tight flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#10b981]" /> Background & Sprite Readability Test
            </h2>
            <p className="font-['Inter'] text-xs text-[#64748b] mt-1 max-w-3xl leading-relaxed">
              Prueba de contraste y atmósfera de fondos vectoriales asociados a cada personaje. Coloca el sprite correspondiente centrado sobre el fondo cyberpunk para validar legibilidad del personaje y coherencia visual en un formato de Visual Novel real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {backgroundTests.map((prop, idx) => {
              return (
                <div 
                  key={idx}
                  className="flex flex-col bg-[#0f131c]/65 border rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.01]"
                  style={{ borderColor: prop.borderColor }}
                >
                  {/* Aspect Ratio Screen Frame (Simulates Game Screen) */}
                  <div 
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#030508] border-b border-white/5 flex items-end justify-center"
                    style={{
                      backgroundImage: `url(/backgrounds/${prop.bgFile})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  >
                    {/* Shadow base on floor */}
                    <ellipse cx="720" cy="850" rx="300" ry="10" fill="rgba(0,0,0,0.6)" className="absolute bottom-0 z-0" />
                    
                    {/* Center Sprite Graphic */}
                    <img 
                      src={`/characters/${prop.spriteFile}`} 
                      alt={prop.role}
                      className="h-[75%] max-h-[260px] object-contain relative z-10 select-none pb-2 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] animate-[pulse_6s_infinite_alternate]"
                    />
                    
                    {/* Character Tag Overlay */}
                    <span 
                      className="absolute top-4 left-4 font-mono text-[9px] font-bold px-2 py-1 bg-black/80 rounded border"
                      style={{ color: prop.color, borderColor: prop.borderColor }}
                    >
                      {prop.role}
                    </span>
                    
                    {/* Frame overlay grid guide */}
                    <div className="absolute inset-0 pointer-events-none border border-white/5" />
                  </div>

                  {/* Info card footer */}
                  <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                    <div>
                      <h3 className="font-['Outfit'] text-base font-bold text-white leading-tight">
                        {prop.name}
                      </h3>
                      <p className="font-['Inter'] text-[11px] leading-relaxed text-[#64748b] mt-2">
                        {prop.description}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-[#64748b] flex flex-col gap-1">
                      <div className="flex justify-between">
                        <span>Fondo File:</span>
                        <span className="text-[#10b981] font-semibold">{prop.bgFile}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sprite File:</span>
                        <span className="text-[#fcd34d] font-semibold">{prop.spriteFile}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: ACCESSORY DIFFERENTIATION TEST */}
        <section className="flex flex-col gap-6 border-t border-white/5 pt-10">
          <div>
            <span className="font-mono text-[10px] text-[#fcd34d] uppercase tracking-widest block mb-1">
              Fase 2 de Diseño • Aprobado Sprites Completos
            </span>
            <h2 className="font-['Outfit'] font-extrabold text-2xl text-white uppercase tracking-tight">
              Accessory Differentiation Test
            </h2>
            <p className="font-['Inter'] text-xs text-[#64748b] mt-1 max-w-3xl leading-relaxed">
              Modelos de personajes plátano completos basados en la silueta y proporciones de la propuesta anterior. Cada personaje se diferencia mediante expresiones faciales únicas y accesorios de la cultura hacker/startup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {accessoryTests.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col justify-between bg-[#0f131c]/65 border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] group"
                  style={{ 
                    borderColor: prop.borderColor,
                    boxShadow: `0 0 15px ${prop.bgColor}` 
                  }}
                >
                  {/* SVG Stage */}
                  <div className="relative aspect-[3/4] w-full bg-[#05070c] border-b border-white/5 flex items-center justify-center p-6 group-hover:bg-[#070b13] transition-colors">
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                      }}
                    />
                    <img 
                      src={`/character-proposals/${prop.file}`} 
                      alt={prop.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-3 left-3 font-mono text-[8px] font-bold px-2 py-0.5 bg-black/70 text-[#64748b] border border-white/10 rounded uppercase">
                      {prop.name.split(" ")[0]}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h3 className="font-['Outfit'] text-base font-bold text-white flex items-center gap-1.5 leading-tight">
                        <Icon className="w-4 h-4" style={{ color: prop.accentColor }} />
                        {prop.name}
                      </h3>
                      <span className="font-mono text-[9px] text-[#64748b] block mt-0.5">{prop.role}</span>
                      <p className="font-['Inter'] text-[11px] leading-relaxed text-[#64748b] mt-2.5">
                        {prop.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[8px] uppercase text-[#64748b] tracking-wider mb-1.5">Detalles:</h4>
                      <ul className="flex flex-col gap-1">
                        {prop.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-1.5 text-[11px] font-['Inter'] text-[#dfe2ef]">
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: prop.accentColor }} />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/5 pt-3 mt-1 text-[9px] font-mono text-[#64748b] flex justify-between">
                      <span>File:</span>
                      <span className="text-white truncate max-w-[120px]">{prop.file}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 1: ORIGINAL PROPOSALS */}
        <section className="flex flex-col gap-6 border-t border-white/5 pt-10">
          <div>
            <span className="font-mono text-[10px] text-[#3b82f6] uppercase tracking-widest block mb-1">
              Fase 1 de Diseño • Conceptos Base
            </span>
            <h2 className="font-['Outfit'] font-extrabold text-2xl text-white uppercase tracking-tight">
              Original HR Banana Proposals
            </h2>
            <p className="font-['Inter'] text-xs text-[#64748b] mt-1 max-w-3xl leading-relaxed">
              Las 3 propuestas iniciales creadas para comparar el estilo del avatar. La Propuesta 02 (Full Banana) fue seleccionada como la dirección artística estándar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {originalProposals.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col justify-between bg-[#0f131c]/65 border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group"
                  style={{ 
                    borderColor: prop.borderColor,
                    boxShadow: `0 0 15px ${prop.bgColor}` 
                  }}
                >
                  {/* SVG visual stage */}
                  <div className="relative aspect-square w-full bg-[#05070c] border-b border-white/5 flex items-center justify-center p-8 group-hover:bg-[#070b13] transition-colors">
                    <div className="absolute inset-0 opacity-5 pointer-events-none"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                      }}
                    />
                    <img 
                      src={`/character-proposals/${prop.file}`} 
                      alt={prop.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[9px] font-bold px-2 py-0.5 bg-black/60 text-white/50 border border-white/10 rounded">
                      PROP 0{idx + 1}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex flex-col justify-between flex-1 gap-5">
                    <div>
                      <h3 className="font-['Outfit'] text-lg font-bold text-white flex items-center gap-2">
                        <Icon className="w-5 h-5" style={{ color: prop.accentColor }} />
                        {prop.name}
                      </h3>
                      <p className="font-['Inter'] text-xs leading-relaxed text-[#64748b] mt-2">
                        {prop.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[9px] uppercase text-[#64748b] tracking-wider mb-1.5">Puntos clave:</h4>
                      <ul className="flex flex-col gap-1">
                        {prop.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-xs font-['Inter'] text-[#dfe2ef]">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: prop.accentColor }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/5 pt-3 text-[9px] font-mono text-[#64748b] flex justify-between">
                      <span>File:</span>
                      <span className="text-white">{prop.file}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Info Board */}
        <div className="bg-[#0f131c]/40 border border-white/5 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between mt-4">
          <div className="text-left max-w-2xl">
            <h4 className="font-['Outfit'] font-bold text-base text-white mb-1">Criterio de Evaluación y Contraste</h4>
            <p className="font-['Inter'] text-xs text-[#64748b] leading-relaxed">
              Los fondos temáticos han sido creados utilizando únicamente elementos vectoriales (SVG) diseñados para complementar la silueta del plátano sin competir con ella. El centro se mantiene intencionalmente simple para optimizar la legibilidad de los diálogos y personajes en escena.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto shrink-0">
            <Link 
              href="/"
              className="w-full md:w-auto text-center font-['Outfit'] font-bold text-xs tracking-wider uppercase py-3 px-6 rounded-lg bg-[#3b82f6] text-white hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)] transition-all cursor-pointer"
            >
              Volver al Juego
            </Link>
          </div>
        </div>

        <div className="text-center font-mono text-[9px] text-[#64748b] border-t border-white/5 pt-4">
          Platanus Hack • Next.js asset visual dashboard
        </div>
      </div>
    </div>
  );
}
