import React from "react";
import { motion } from "framer-motion";

export interface CharacterAvatarProps {
  characterId: "manager" | "pm" | "senior" | "ceo" | "hr";
  emotion: string;
  className?: string;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  characterId,
  emotion,
  className = ""
}) => {
  // Common visual container structure utilizing framer-motion for animations
  const renderAvatar = () => {
    switch (characterId) {
      case "manager": // Gerry
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gerry-shirt" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <filter id="glasses-glow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Background halo */}
            <circle cx="100" cy="90" r="60" fill="rgba(252, 211, 77, 0.04)" />
            {/* Shoulders / Shirt */}
            <path d="M 40 180 C 40 140, 70 120, 100 120 C 130 120, 160 140, 160 180 Z" fill="url(#gerry-shirt)" stroke="#475569" strokeWidth="2" />
            <path d="M 100 120 L 85 145 H 115 Z" fill="#ffffff" /> {/* Tie Collar */}
            <path d="M 97 145 L 94 180 H 106 L 103 145 Z" fill="#f97316" /> {/* Orange Tie */}
            {/* Neck */}
            <rect x="90" y="95" width="20" height="30" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" rx="4" />
            {/* Head */}
            <circle cx="100" cy="80" r="32" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Hair */}
            <path d="M 68 75 C 68 55, 132 55, 132 75 C 132 58, 68 58, 68 75 Z" fill="#475569" />
            {/* Glasses */}
            <rect x="76" y="72" width="20" height="15" fill="none" stroke="#fcd34d" strokeWidth="2.5" rx="3" filter="url(#glasses-glow)" />
            <rect x="104" y="72" width="20" height="15" fill="none" stroke="#fcd34d" strokeWidth="2.5" rx="3" filter="url(#glasses-glow)" />
            <line x1="96" y1="79" x2="104" y2="79" stroke="#fcd34d" strokeWidth="2.5" />
            {/* Eyebrows */}
            {emotion === "angry" || emotion === "molesto" ? (
              <>
                <line x1="78" y1="67" x2="94" y2="71" stroke="#334155" strokeWidth="2" />
                <line x1="122" y1="67" x2="106" y2="71" stroke="#334155" strokeWidth="2" />
              </>
            ) : (
              <>
                <line x1="78" y1="68" x2="94" y2="68" stroke="#334155" strokeWidth="2" />
                <line x1="122" y1="68" x2="106" y2="68" stroke="#334155" strokeWidth="2" />
              </>
            )}
            {/* Eyes */}
            <circle cx="86" cy="80" r="2.5" fill="#334155" />
            <circle cx="114" cy="80" r="2.5" fill="#334155" />
            {/* Mouth */}
            {emotion === "approving" ? (
              <path d="M 90 92 Q 100 102 110 92" stroke="#334155" strokeWidth="2" fill="none" />
            ) : emotion === "angry" || emotion === "molesto" ? (
              <path d="M 92 97 Q 100 89 108 97" stroke="#ef4444" strokeWidth="2" fill="none" />
            ) : (
              <line x1="92" y1="94" x2="108" y2="94" stroke="#334155" strokeWidth="2" />
            )}
          </svg>
        );

      case "pm": // Pam
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pam-suit" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
            {/* Background halo */}
            <circle cx="100" cy="90" r="60" fill="rgba(20, 184, 166, 0.04)" />
            {/* Shoulders / Suit */}
            <path d="M 40 180 C 40 140, 70 125, 100 125 C 130 125, 160 140, 160 180 Z" fill="url(#pam-suit)" stroke="#0d9488" strokeWidth="2" />
            <path d="M 100 125 L 90 145 H 110 Z" fill="#1e293b" /> {/* Inner Shirt */}
            {/* Neck */}
            <rect x="91" y="98" width="18" height="28" fill="#fbcfe8" stroke="#f472b6" strokeWidth="2" rx="3" />
            {/* Head */}
            <circle cx="100" cy="80" r="30" fill="#fff1f2" stroke="#f472b6" strokeWidth="2" />
            {/* Hair */}
            <path d="M 72 82 C 72 45, 128 45, 128 82 C 128 85, 134 95, 132 105" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
            {/* Hair details */}
            <circle cx="70" cy="90" r="4" fill="#a855f7" />
            <circle cx="130" cy="90" r="4" fill="#a855f7" />
            {/* Eyes */}
            {emotion === "excited" ? (
              <>
                <path d="M 82 78 Q 87 73 92 78" stroke="#1e293b" strokeWidth="2" fill="none" />
                <path d="M 108 78 Q 113 73 118 78" stroke="#1e293b" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <circle cx="87" cy="77" r="2.5" fill="#1e293b" />
                <circle cx="113" cy="77" r="2.5" fill="#1e293b" />
              </>
            )}
            {/* Headset mic */}
            <path d="M 70 80 Q 74 100 90 100" stroke="#475569" strokeWidth="2" fill="none" />
            <circle cx="91" cy="100" r="3" fill="#10b981" className="animate-pulse" /> {/* LED Indicator */}
            {/* Mouth */}
            {emotion === "excited" ? (
              <path d="M 92 90 Q 100 102 108 90 Z" fill="#f43f5e" />
            ) : emotion === "confused" ? (
              <path d="M 92 93 Q 96 89 100 93 Q 104 97 108 93" stroke="#1e293b" strokeWidth="2" fill="none" />
            ) : emotion === "worried" ? (
              <path d="M 93 96 Q 100 89 107 96" stroke="#1e293b" strokeWidth="2" fill="none" />
            ) : (
              <line x1="93" y1="93" x2="107" y2="93" stroke="#1e293b" strokeWidth="2" />
            )}
          </svg>
        );

      case "senior": // Sven
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sven-shirt" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#312e81" />
              </linearGradient>
            </defs>
            {/* Background halo */}
            <circle cx="100" cy="90" r="60" fill="rgba(59, 130, 246, 0.04)" />
            {/* Shoulders */}
            <path d="M 40 180 C 40 140, 70 122, 100 122 C 130 122, 160 140, 160 180 Z" fill="url(#sven-shirt)" stroke="#4338ca" strokeWidth="2" />
            <path d="M 92 122 L 100 135 L 108 122 Z" fill="#f1f5f9" /> {/* V Neck */}
            {/* Neck */}
            <rect x="90" y="96" width="20" height="28" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" rx="4" />
            {/* Head */}
            <circle cx="100" cy="80" r="32" fill="#fafafa" stroke="#cbd5e1" strokeWidth="2" />
            {/* Beard */}
            <path d="M 68 80 C 68 112, 132 112, 132 80 H 122 C 122 102, 78 102, 78 80 Z" fill="#78350f" />
            {/* Bun */}
            <circle cx="100" cy="38" r="10" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            {/* Hair */}
            <path d="M 68 76 C 68 50, 132 50, 132 76" stroke="#78350f" strokeWidth="5" fill="none" />
            {/* Glasses */}
            <circle cx="86" cy="76" r="10" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            <circle cx="114" cy="76" r="10" stroke="#cbd5e1" strokeWidth="2" fill="none" />
            <line x1="96" y1="76" x2="104" y2="76" stroke="#cbd5e1" strokeWidth="2" />
            {/* Eyebrows */}
            {emotion === "sarcastic" ? (
              <>
                <path d="M 76 60 Q 86 64 94 62" stroke="#78350f" strokeWidth="2" fill="none" />
                <path d="M 106 62 Q 114 56 124 58" stroke="#78350f" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <path d="M 76 62 Q 86 62 94 62" stroke="#78350f" strokeWidth="2" fill="none" />
                <path d="M 106 62 Q 114 62 124 62" stroke="#78350f" strokeWidth="2" fill="none" />
              </>
            )}
            {/* Eyes */}
            <circle cx="86" cy="76" r="2" fill="#1e293b" />
            <circle cx="114" cy="76" r="2" fill="#1e293b" />
            {/* Mouth */}
            {emotion === "sarcastic" ? (
              <path d="M 92 90 Q 98 88 106 92" stroke="#451a03" strokeWidth="2" fill="none" strokeLinecap="round" />
            ) : emotion === "approving" ? (
              <path d="M 90 90 Q 100 98 110 90" stroke="#451a03" strokeWidth="2" fill="none" strokeLinecap="round" />
            ) : (
              <line x1="92" y1="92" x2="108" y2="92" stroke="#451a03" strokeWidth="2" />
            )}
          </svg>
        );

      case "ceo": // Don Banano
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ceo-suit" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <filter id="intense-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            {/* Background halo */}
            <circle cx="100" cy="90" r="60" fill="rgba(239, 68, 68, 0.05)" />
            {/* Shoulders */}
            <path d="M 40 180 C 40 135, 70 115, 100 115 C 130 115, 160 135, 160 180 Z" fill="url(#ceo-suit)" stroke="#b91c1c" strokeWidth="2" />
            <path d="M 100 115 L 82 140 H 118 Z" fill="#111827" /> {/* Black Tie Collar */}
            <path d="M 97 140 L 95 178 H 105 L 103 140 Z" fill="#fcd34d" /> {/* Yellow Tie */}
            {/* Neck */}
            <rect x="89" y="90" width="22" height="28" fill="#fee2e2" stroke="#fca5a5" strokeWidth="2" rx="4" />
            {/* Head */}
            <circle cx="100" cy="74" r="32" fill="#fff5f5" stroke="#fca5a5" strokeWidth="2" />
            {/* Banana Crown Hair */}
            <path d="M 68 64 Q 50 30 76 46 Q 100 10 100 44 Q 100 10 124 46 Q 150 30 132 64 Z" fill="#fcd34d" stroke="#d97706" strokeWidth="2" />
            {/* Eyes */}
            {emotion === "intense" ? (
              <>
                <circle cx="86" cy="72" r="4.5" fill="#f43f5e" filter="url(#intense-glow)" />
                <circle cx="86" cy="72" r="1.5" fill="#ffffff" />
                <circle cx="114" cy="72" r="4.5" fill="#f43f5e" filter="url(#intense-glow)" />
                <circle cx="114" cy="72" r="1.5" fill="#ffffff" />
                {/* Angled Brows */}
                <line x1="76" y1="62" x2="94" y2="67" stroke="#b91c1c" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="124" y1="62" x2="106" y2="67" stroke="#b91c1c" strokeWidth="3.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="86" cy="74" r="3" fill="#1e293b" />
                <circle cx="114" cy="74" r="3" fill="#1e293b" />
                <path d="M 76 65 Q 86 61 94 65" stroke="#450a0a" strokeWidth="2" fill="none" />
                <path d="M 106 65 Q 114 61 124 65" stroke="#450a0a" strokeWidth="2" fill="none" />
              </>
            )}
            {/* Mouth */}
            {emotion === "intense" ? (
              <path d="M 88 88 Q 100 104 112 88 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1.5" />
            ) : emotion === "worried" ? (
              <path d="M 90 92 Q 100 82 110 92" stroke="#1e293b" strokeWidth="2.5" fill="none" />
            ) : (
              <line x1="90" y1="88" x2="110" y2="88" stroke="#1e293b" strokeWidth="2" />
            )}
          </svg>
        );

      case "hr": // Helga
        return (
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hr-blazer" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#4c1d95" />
                <stop offset="100%" stopColor="#6d28d9" />
              </linearGradient>
            </defs>
            {/* Background halo */}
            <circle cx="100" cy="90" r="60" fill="rgba(109, 40, 217, 0.04)" />
            {/* Shoulders / Blazer */}
            <path d="M 40 180 C 40 138, 70 120, 100 120 C 130 120, 160 138, 160 180 Z" fill="url(#hr-blazer)" stroke="#5b21b6" strokeWidth="2" />
            <path d="M 100 120 L 88 138 H 112 Z" fill="#e2e8f0" /> {/* Lanyard / Badge area */}
            <rect x="94" y="145" width="12" height="18" fill="#3b82f6" rx="1" /> {/* ID Badge */}
            {/* Neck */}
            <rect x="91" y="93" width="18" height="30" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" rx="3" />
            {/* Head */}
            <circle cx="100" cy="78" r="30" fill="#fffbfa" stroke="#cbd5e1" strokeWidth="2" />
            {/* Strict Bun Hair */}
            <circle cx="100" cy="40" r="11" fill="#1e1b4b" stroke="#0f172a" strokeWidth="2" />
            <path d="M 70 78 C 70 48, 130 48, 130 78 Z" fill="#1e1b4b" />
            {/* Glasses */}
            <rect x="78" y="70" width="18" height="12" fill="none" stroke="#6d28d9" strokeWidth="2" rx="2" />
            <rect x="104" y="70" width="18" height="12" fill="none" stroke="#6d28d9" strokeWidth="2" rx="2" />
            <line x1="96" y1="76" x2="104" y2="76" stroke="#6d28d9" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="87" cy="76" r="2" fill="#1e293b" />
            <circle cx="113" cy="76" r="2" fill="#1e293b" />
            {/* Mouth */}
            {emotion === "threatening" || emotion === "threatening-comic" ? (
              // Threatening fanged grin
              <path d="M 88 88 Q 100 102 112 88 M 92 88 L 94 92 M 108 88 L 106 92" stroke="#6d28d9" strokeWidth="2" fill="none" />
            ) : (
              // Formal flat line
              <line x1="90" y1="90" x2="110" y2="90" stroke="#1e293b" strokeWidth="2" />
            )}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      key={`${characterId}-${emotion}`}
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative select-none aspect-square flex items-center justify-center ${className}`}
    >
      <div className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        {renderAvatar()}
      </div>
    </motion.div>
  );
};
