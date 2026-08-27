import React from 'react';

interface JerseyArtworkProps {
  productId: string;
  colorHex?: string;
  customName?: string;
  customNumber?: string;
  view?: 'front' | 'back';
  className?: string;
}

export const JerseyArtwork: React.FC<JerseyArtworkProps> = ({
  productId,
  colorHex = '#00ff41',
  customName = 'VYRO',
  customNumber = '18',
  view = 'front',
  className = 'w-full h-full object-contain',
}) => {
  // 1. FULL SET PREVIEWS (SHIRT + PANTS / SHORTS)
  if (productId.includes('set')) {
    const isTrackset = productId.includes('tracksuit');
    return (
      <svg
        viewBox="0 0 450 450"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="setShirtBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#181a24" />
            <stop offset="100%" stopColor="#0a0c12" />
          </linearGradient>
          <linearGradient id="setBottomBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12141c" />
            <stop offset="100%" stopColor="#08090d" />
          </linearGradient>
        </defs>

        <ellipse cx="225" cy="225" rx="160" ry="160" fill={colorHex} fillOpacity="0.08" filter="blur(35px)" />

        {/* --- TOP: SHIRT COMPONENT --- */}
        <g transform="translate(75, 20) scale(0.66)">
          {/* Torso & Sleeves */}
          <path
            d="M170 50 C195 70, 305 70, 330 50 L440 135 L385 220 L345 175 L340 400 C340 410, 160 410, 160 400 L155 175 L115 220 L60 135 Z"
            fill="url(#setShirtBg)"
            stroke="#262d40"
            strokeWidth="3"
          />
          {/* Dynamic Speed Blades on Shirt */}
          <path d="M190 140 L280 240 L240 370 L170 230 Z" fill={colorHex} fillOpacity="0.85" />
          <path d="M250 170 L340 280 L310 390 L230 270 Z" fill="#ffffff" fillOpacity="0.85" />
          <path d="M60 135 L115 220 L102 230 L50 145 Z" fill={colorHex} />
          <path d="M440 135 L385 220 L398 230 L450 145 Z" fill={colorHex} />
          {/* Collar */}
          <path d="M170 50 Q250 115 330 50 L318 42 Q250 95 182 42 Z" fill="#1e2433" stroke={colorHex} strokeWidth="2.5" />
          {/* Logo & Number */}
          <text x="315" y="160" fill="#ffffff" fontSize="14" fontWeight="900" letterSpacing="2">VYRO</text>
          <text x="180" y="160" fill="#ffffff" fontSize="32" fontWeight="900" fontFamily="Rajdhani, sans-serif">{customNumber || '18'}</text>
        </g>

        {/* --- BOTTOM: PANTS OR SHORTS --- */}
        {isTrackset ? (
          /* Track Pants in Set */
          <g transform="translate(130, 240) scale(0.48)">
            <path
              d="M120 40 L280 40 L305 380 L245 385 L200 170 L155 385 L95 380 Z"
              fill="url(#setBottomBg)"
              stroke="#2d3748"
              strokeWidth="4"
            />
            <rect x="120" y="40" width="160" height="28" fill="#1e2230" stroke="#374151" strokeWidth="2" />
            <path d="M123 68 L100 380" stroke={colorHex} strokeWidth="8" strokeLinecap="round" />
            <path d="M277 68 L300 380" stroke={colorHex} strokeWidth="8" strokeLinecap="round" />
            <text x="150" y="120" fill="#ffffff" fontSize="14" fontWeight="900">VYRO</text>
          </g>
        ) : (
          /* Shorts in Set */
          <g transform="translate(125, 250) scale(0.5)">
            <path
              d="M100 80 L300 80 L330 290 L240 310 L200 200 L160 310 L70 290 Z"
              fill="url(#setBottomBg)"
              stroke="#2d3748"
              strokeWidth="4"
            />
            <path d="M100 80 L300 80 L302 110 L98 110 Z" fill="#1a1d26" stroke="#334155" strokeWidth="2" />
            <path d="M80 150 L110 200 L75 250 L115 260 L70 290" fill={colorHex} fillOpacity="0.9" />
            <path d="M320 150 L290 200 L325 250 L285 260 L330 290" fill={colorHex} fillOpacity="0.9" />
            <text x="120" y="260" fill="#ffffff" fontSize="16" fontWeight="900">VYRO</text>
            <text x="275" y="275" fill="#ffffff" fontSize="32" fontWeight="900">{customNumber || '18'}</text>
          </g>
        )}

        {/* Set Badge */}
        <g transform="translate(225, 230)">
          <rect x="-45" y="-12" width="90" height="24" rx="12" fill="#000000" stroke={colorHex} strokeWidth="1.5" />
          <text x="0" y="4" fill={colorHex} fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="1">2-PIECE KIT</text>
        </g>
      </svg>
    );
  }

  // 2. SHORTS PREVIEW
  if (productId.includes('shorts')) {
    return (
      <svg
        viewBox="0 0 400 400"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shortBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#151722" />
            <stop offset="100%" stopColor="#08090d" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorHex} />
            <stop offset="100%" stopColor={colorHex} stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Ambient Glow */}
        <ellipse cx="200" cy="220" rx="140" ry="140" fill={colorHex} fillOpacity="0.08" filter="blur(30px)" />

        {/* Shorts Base Shape */}
        <path
          d="M100 80 L300 80 L330 290 L240 310 L200 200 L160 310 L70 290 Z"
          fill="url(#shortBg)"
          stroke="#2d3748"
          strokeWidth="3"
        />

        {/* Elastic Waistband */}
        <path d="M100 80 L300 80 L302 110 L98 110 Z" fill="#1a1d26" stroke="#334155" strokeWidth="2" />
        <line x1="100" y1="95" x2="300" y2="95" stroke="#374151" strokeDasharray="4 4" strokeWidth="2" />
        {/* Drawstrings */}
        <path d="M190 105 Q185 140 175 160" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />
        <path d="M210 105 Q215 140 225 160" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />
        <circle cx="175" cy="162" r="3" fill={colorHex} />
        <circle cx="225" cy="162" r="3" fill={colorHex} />

        {/* Dynamic Side Blade Graphics */}
        <path d="M80 150 L110 200 L75 250 L115 260 L70 290" fill="url(#accentGrad)" fillOpacity="0.9" />
        <path d="M320 150 L290 200 L325 250 L285 260 L330 290" fill="url(#accentGrad)" fillOpacity="0.9" />

        {/* Crotch ventilation seam */}
        <path d="M200 110 L200 200" stroke="#262b3a" strokeWidth="3" />
        <path d="M200 200 L160 310" stroke="#262b3a" strokeWidth="3" />
        <path d="M200 200 L240 310" stroke="#262b3a" strokeWidth="3" />

        {/* VYRO Left Leg Logo */}
        <g transform="translate(100, 240)">
          <path d="M0 0 L14 20 L28 0 L20 0 L14 10 L8 0 Z" fill="#ffffff" />
          <path d="M6 -5 L14 6 L22 -5 Z" fill={colorHex} />
          <text x="14" y="32" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="Outfit, sans-serif" textAnchor="middle" letterSpacing="1">VYRO</text>
        </g>

        {/* Right Leg Number */}
        <text
          x="285"
          y="280"
          fill="#ffffff"
          fontSize="36"
          fontWeight="900"
          fontFamily="Rajdhani, sans-serif"
          textAnchor="middle"
        >
          {customNumber || '18'}
        </text>
      </svg>
    );
  }

  // 3. TRACK PANTS & JOGGERS PREVIEW
  if (productId.includes('pants') || productId.includes('jogger') || productId.includes('tights') || productId.includes('track')) {
    const isJogger = productId.includes('jogger');
    return (
      <svg
        viewBox="0 0 400 440"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pantBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#151722" />
            <stop offset="50%" stopColor="#0f1118" />
            <stop offset="100%" stopColor="#08090d" />
          </linearGradient>
          <linearGradient id="pantAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorHex} />
            <stop offset="100%" stopColor={colorHex} stopOpacity="0.75" />
          </linearGradient>
        </defs>
        
        {/* Glow */}
        <ellipse cx="200" cy="220" rx="130" ry="180" fill={colorHex} fillOpacity="0.06" filter="blur(40px)" />
        
        {/* Track Pants Legs */}
        <path
          d="M120 40 L280 40 L305 380 L250 385 L200 170 L150 385 L95 380 Z"
          fill="url(#pantBg)"
          stroke="#2d3748"
          strokeWidth="3.5"
        />

        {/* Elastic Waistband */}
        <rect x="120" y="40" width="160" height="28" fill="#1e2230" stroke="#374151" strokeWidth="2" />
        <line x1="120" y1="54" x2="280" y2="54" stroke="#4b5563" strokeDasharray="3 3" strokeWidth="1.5" />
        
        {/* Drawstrings */}
        <path d="M190 65 Q185 95 180 110" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M210 65 Q215 95 220 110" stroke="#f1f5f9" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="180" cy="112" r="2.5" fill={colorHex} />
        <circle cx="220" cy="112" r="2.5" fill={colorHex} />

        {/* Side Performance Speed Racing Stripes */}
        <path d="M122 70 L98 380" stroke="url(#pantAccent)" strokeWidth="7" strokeLinecap="round" />
        <path d="M278 70 L302 380" stroke="url(#pantAccent)" strokeWidth="7" strokeLinecap="round" />
        <path d="M130 72 L108 375" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M270 72 L292 375" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Knee Articulation Flex Lines */}
        <path d="M120 230 Q145 240 170 230" stroke="#2d3748" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M230 230 Q255 240 280 230" stroke="#2d3748" strokeWidth="2" strokeDasharray="2 2" />

        {/* Zipper Pocket Details */}
        <line x1="135" y1="85" x2="155" y2="125" stroke="#475569" strokeWidth="2.5" />
        <circle cx="134" cy="84" r="2" fill="#cbd5e1" />
        <line x1="265" y1="85" x2="245" y2="125" stroke="#475569" strokeWidth="2.5" />
        <circle cx="266" cy="84" r="2" fill="#cbd5e1" />

        {/* Ankle Cuffs / Zippers */}
        {isJogger ? (
          /* Ribbed Jogger Cuffs */
          <>
            <rect x="95" y="380" width="55" height="18" rx="3" fill="#1b1e2a" stroke={colorHex} strokeWidth="1.5" />
            <rect x="250" y="380" width="55" height="18" rx="3" fill="#1b1e2a" stroke={colorHex} strokeWidth="1.5" />
          </>
        ) : (
          /* Ankle Zips */
          <>
            <line x1="97" y1="335" x2="95" y2="380" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="303" y1="335" x2="305" y2="380" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="3 3" />
          </>
        )}

        {/* Left Thigh VYRO Authentic Crest */}
        <g transform="translate(135, 140)">
          <path d="M0 0 L10 14 L20 0 L14 0 L10 7 L6 0 Z" fill="#ffffff" />
          <path d="M4 -4 L10 4 L16 -4 Z" fill={colorHex} />
          <text x="10" y="24" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle" letterSpacing="1">VYRO</text>
        </g>

        {/* Right Thigh Number */}
        <text
          x="260"
          y="155"
          fill="#ffffff"
          fontSize="24"
          fontWeight="900"
          fontFamily="Rajdhani, sans-serif"
          textAnchor="middle"
        >
          {customNumber || '18'}
        </text>
      </svg>
    );
  }

  // 4. SHIRTS & PERFORMANCE JERSEYS PREVIEW (Front vs Back)
  const isBack = view === 'back';

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#161926" />
          <stop offset="50%" stopColor="#0d0f18" />
          <stop offset="100%" stopColor="#07080d" />
        </linearGradient>

        <linearGradient id="primaryAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorHex} />
          <stop offset="100%" stopColor={colorHex} stopOpacity="0.75" />
        </linearGradient>

        <pattern id="meshPattern" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#ffffff" fillOpacity="0.04" />
          <circle cx="8" cy="8" r="1.2" fill="#ffffff" fillOpacity="0.04" />
        </pattern>
      </defs>

      {/* Atmospheric sports back glow */}
      <circle cx="250" cy="240" r="170" fill={colorHex} fillOpacity="0.12" filter="blur(45px)" />

      {/* Main Shirt / Jersey Silhouette */}
      <g id="jersey-body">
        {/* Torso & Sleeves combined athletic cut */}
        <path
          d="M170 50 
             C195 70, 305 70, 330 50 
             L440 135 
             L385 220 
             L345 175 
             L340 440 
             C340 450, 160 450, 160 440 
             L155 175 
             L115 220 
             L60 135 
             Z"
          fill="url(#bodyGrad)"
          stroke="#262d40"
          strokeWidth="3.5"
        />

        {/* Breathable Mesh Texture Overlay */}
        <path
          d="M170 50 C195 70, 305 70, 330 50 L440 135 L385 220 L345 175 L340 440 C340 450, 160 450, 160 440 L155 175 L115 220 L60 135 Z"
          fill="url(#meshPattern)"
        />

        {/* Sleeve Cuffs & Trim */}
        <path d="M60 135 L115 220 L102 230 L50 145 Z" fill={colorHex} />
        <path d="M440 135 L385 220 L398 230 L450 145 Z" fill={colorHex} />
        <line x1="50" y1="145" x2="102" y2="230" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="450" y1="145" x2="398" y2="230" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />

        {/* Side Ventilation Ribs */}
        <path d="M155 175 L160 440 L172 440 L168 185 Z" fill={colorHex} fillOpacity="0.3" />
        <path d="M345 175 L340 440 L328 440 L332 185 Z" fill={colorHex} fillOpacity="0.3" />

        {/* Shoulder Speed Lines */}
        <path d="M175 55 L90 125 L100 138 L185 68 Z" fill="#ffffff" fillOpacity="0.8" />
        <path d="M325 55 L410 125 L400 138 L315 68 Z" fill="#ffffff" fillOpacity="0.8" />
        <path d="M185 70 L105 140 L112 150 L192 80 Z" fill={colorHex} />
        <path d="M315 70 L395 140 L388 150 L308 80 Z" fill={colorHex} />
      </g>

      {/* Dynamic Graphic Theming based on Product Type */}
      {productId.includes('spider') ? (
        /* Spider Web Pattern */
        <g opacity="0.85">
          <circle cx="250" cy="220" r="40" stroke={colorHex} strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="250" cy="220" r="90" stroke={colorHex} strokeWidth="2" fill="none" opacity="0.7" />
          <circle cx="250" cy="220" r="140" stroke={colorHex} strokeWidth="2" fill="none" opacity="0.7" />
          <line x1="250" y1="80" x2="250" y2="360" stroke={colorHex} strokeWidth="2" opacity="0.7" />
          <line x1="130" y1="120" x2="370" y2="320" stroke={colorHex} strokeWidth="2" opacity="0.7" />
          <line x1="370" y1="120" x2="130" y2="320" stroke={colorHex} strokeWidth="2" opacity="0.7" />

          <g transform="translate(250, 230) scale(1.1)">
            <ellipse cx="0" cy="-5" rx="8" ry="16" fill="#0b0d14" stroke={colorHex} strokeWidth="2.5" />
            <circle cx="0" cy="-22" rx="7" fill="#0b0d14" stroke={colorHex} strokeWidth="2.5" />
            <path d="M-6 -10 Q-30 -30 -45 -10 Q-35 5 -10 0" stroke={colorHex} strokeWidth="3.5" fill="none" />
            <path d="M6 -10 Q30 -30 45 -10 Q35 5 10 0" stroke={colorHex} strokeWidth="3.5" fill="none" />
            <path d="M-6 -5 Q-40 -15 -55 10 Q-40 25 -10 5" stroke={colorHex} strokeWidth="3.5" fill="none" />
            <path d="M6 -5 Q40 -15 55 10 Q40 25 10 5" stroke={colorHex} strokeWidth="3.5" fill="none" />
            <path d="M-6 5 Q-40 20 -48 45 Q-30 40 -8 10" stroke={colorHex} strokeWidth="3.5" fill="none" />
            <path d="M6 5 Q40 20 48 45 Q30 40 8 10" stroke={colorHex} strokeWidth="3.5" fill="none" />
          </g>
        </g>
      ) : productId.includes('armor') || productId.includes('vector') ? (
        /* Cyber Armor Mecha Plating Graphic */
        <g opacity="0.9">
          <path
            d="M250 140 L310 190 L290 280 L250 330 L210 280 L190 190 Z"
            fill="none"
            stroke={colorHex}
            strokeWidth="4"
          />
          <path
            d="M250 160 L290 195 L275 265 L250 300 L225 265 L210 195 Z"
            fill={colorHex}
            fillOpacity="0.2"
          />
          <path d="M250 130 L250 340" stroke="#ffffff" strokeWidth="3" />
          <path d="M200 240 L160 280 L170 380 L220 330" fill="url(#primaryAccent)" fillOpacity="0.4" />
          <path d="M300 240 L340 280 L330 380 L280 330" fill="url(#primaryAccent)" fillOpacity="0.4" />
        </g>
      ) : productId.includes('panther') ? (
        /* Shadow Panther Graphic */
        <g transform="translate(250, 240) scale(0.9)" opacity="0.9">
          <path
            d="M-50 -70 L0 -100 L50 -70 L70 -20 L40 50 L0 80 L-40 50 L-70 -20 Z"
            fill="#0f111a"
            stroke={colorHex}
            strokeWidth="3.5"
          />
          <polygon points="-30,-30 -12,-22 -20,-15" fill={colorHex} />
          <polygon points="30,-30 12,-22 20,-15" fill={colorHex} />
          <path d="M-15 15 L-12 35 L0 25 L12 35 L15 15" stroke={colorHex} strokeWidth="3" fill="none" />
          <path d="M-60 -10 L-90 0 M-60 10 L-95 20 M60 -10 L90 0 M60 10 L95 20" stroke={colorHex} strokeWidth="3" />
        </g>
      ) : (
        /* Velocity 01 Neon Speed Slashes (Default / Velocity / Training Tee) */
        <g opacity="0.95">
          <path d="M190 140 L280 240 L240 370 L170 230 Z" fill="url(#primaryAccent)" fillOpacity="0.85" />
          <path d="M250 170 L340 280 L310 400 L230 270 Z" fill="#ffffff" fillOpacity="0.9" />
          <path d="M160 260 L230 350 L190 420 L150 320 Z" fill="url(#primaryAccent)" fillOpacity="0.7" />
          <path d="M300 130 L360 200 L340 250 L290 170 Z" fill={colorHex} fillOpacity="0.6" />
        </g>
      )}

      {/* Collar & Neckband */}
      <path
        d="M170 50 
           Q250 115 330 50 
           L318 42 
           Q250 95 182 42 
           Z"
        fill="#1e2433"
        stroke={colorHex}
        strokeWidth="3"
      />
      <text x="250" y="80" fill={colorHex} fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="2">
        BUILT TO MOVE
      </text>

      {/* FRONT VIEW ELEMENTS */}
      {!isBack ? (
        <>
          {/* VYRO Chest Logo */}
          <g transform="translate(300, 130)">
            <path d="M0 0 L15 22 L30 0 L22 0 L15 12 L8 0 Z" fill="#ffffff" />
            <path d="M7 -6 L15 6 L23 -6 Z" fill={colorHex} />
            <text x="15" y="34" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="Outfit, sans-serif" textAnchor="middle" letterSpacing="2">
              VYRO
            </text>
          </g>

          {/* Front Squad / Player Number */}
          <g transform="translate(170, 145)">
            <text
              x="0"
              y="25"
              fill="#ffffff"
              fontSize="40"
              fontWeight="900"
              fontFamily="Rajdhani, sans-serif"
              letterSpacing="1"
            >
              {customNumber || '18'}
            </text>
          </g>

          {/* Bottom Hemline Authenticity Patch */}
          <g transform="translate(180, 405)">
            <rect width="40" height="18" rx="2" fill="#000000" stroke="#475569" strokeWidth="1" />
            <text x="20" y="9" fill="#ffffff" fontSize="5" fontWeight="800" textAnchor="middle" letterSpacing="0.5">VYRO</text>
            <text x="20" y="15" fill={colorHex} fontSize="4" fontWeight="700" textAnchor="middle">AUTHENTIC</text>
          </g>
        </>
      ) : (
        /* BACK VIEW ELEMENTS */
        <>
          <g transform="translate(250, 110)">
            <path d="M-10 0 L0 14 L10 0 L5 0 L0 8 L-5 0 Z" fill="#ffffff" />
            <text x="0" y="24" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1">
              VYRO
            </text>
          </g>

          {/* Custom Player Name */}
          <text
            x="250"
            y="175"
            fill="#ffffff"
            fontSize="26"
            fontWeight="900"
            fontFamily="Rajdhani, sans-serif"
            textAnchor="middle"
            letterSpacing="4"
          >
            {(customName || 'ZAKARIYA').toUpperCase()}
          </text>

          {/* Custom Big Back Number */}
          <text
            x="250"
            y="300"
            fill="#ffffff"
            fontSize="115"
            fontWeight="900"
            fontFamily="Rajdhani, sans-serif"
            textAnchor="middle"
            letterSpacing="2"
            stroke="#0b0e14"
            strokeWidth="4"
          >
            {customNumber || '18'}
          </text>

          <circle cx="250" cy="335" r="7" fill="#0f111a" stroke={colorHex} strokeWidth="1.5" />
          <path d="M246 333 L250 338 L254 333" stroke="#ffffff" strokeWidth="1.5" fill="none" />
        </>
      )}
    </svg>
  );
};

