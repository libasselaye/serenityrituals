
// SerenityRituals — Hero, À propos, Soins, Pour qui

// Reveal animation hook
function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function RevealBox({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      transition: `opacity 0.95s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.95s cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 0.85s ease ${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
      filter: visible ? "blur(0px)" : "blur(3px)",
      ...style,
    }}>
      {children}
    </div>
  );
}

// Hairline rule helper — décoratif partagé entre sections (Apollo-style rhythm)
function HairlineRule({ gold = "#e8b43a", marginBottom = 24 }) {
  return (
    <div aria-hidden="true" style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      marginBottom,
    }}>
      <span style={{ width: 36, height: 1, background: gold, opacity: 0.5 }}/>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: gold, opacity: 0.6 }}/>
      <span style={{ width: 36, height: 1, background: gold, opacity: 0.5 }}/>
    </div>
  );
}

// Particules pré-calculées (positions/timings fixes)
const HERO_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  key: i,
  left: `${6 + (i * 5.17) % 88}%`,
  top:  `${8 + (i * 8.43) % 84}%`,
  size: 2 + (i % 3),
  delay: `${(i * 0.43) % 5}s`,
  dur:   `${5 + (i % 5)}s`,
  isGold: i % 3 === 0,
}));

// ─── HERO ────────────────────────────────────────────────────────────────────
function Hero({ colors }) {
  const blue = colors?.blue || "#0038C7";
  const gold = colors?.gold || "#FFB800";

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth" });
  };

  return (
    <section id="accueil" style={{
      display: "flex", alignItems: "center",
      padding: "140px 0 16px", position: "relative", overflow: "hidden",
      background: `
        radial-gradient(ellipse 80% 60% at 72% 42%, ${blue}0e 0%, transparent 58%),
        radial-gradient(ellipse 50% 70% at 18% 85%, ${gold}0a 0%, transparent 48%),
        radial-gradient(ellipse 35% 50% at 92% 12%, ${gold}07 0%, transparent 42%),
        #fafcff
      `,
    }}>
      {/* Floating energy particles */}
      {HERO_PARTICLES.map(p => (
        <div key={p.key} aria-hidden="true" style={{
          position: "absolute", left: p.left, top: p.top,
          width: p.size, height: p.size, borderRadius: "50%",
          background: p.isGold ? gold : blue,
          animation: `float-particle ${p.dur} ease-in-out ${p.delay} infinite`,
          zIndex: 1, pointerEvents: "none",
          boxShadow: `0 0 ${p.size * 4}px ${p.isGold ? gold : blue}80`,
        }}/>
      ))}

      {/* Pulsing energy rings — positioned in the image area */}
      <div className="hero-rings" aria-hidden="true"
        style={{ position: "absolute", left: "62%", top: "48%", zIndex: 1, pointerEvents: "none" }}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} style={{
            position: "absolute", top: "50%", left: "50%",
            width:  `${200 + i * 75}px`,
            height: `${200 + i * 75}px`,
            borderRadius: "50%",
            border: `1px solid ${gold}${["55","38","22","0e"][i]}`,
            animation: `pulse-ring 5.5s ease-out ${i * 1.35}s infinite`,
          }}/>
        ))}
      </div>

      {/* Image pleine hauteur — objectPosition contrôle le cadrage */}
      <img src="img/acceuil_img.png" alt="" aria-hidden="true" className="hero-img" style={{
        position: "absolute", top: 0, right: 0, height: "100%", width: "65%",
        objectFit: "cover", objectPosition: "center 12%",
        zIndex: 0, pointerEvents: "none", userSelect: "none",
      }}/>
      {/* Gradient gauche */}
      <div className="hero-gradient-left" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to right, rgba(250,252,255,1) 0%, rgba(250,252,255,0.92) 30%, rgba(250,252,255,0.55) 50%, rgba(250,252,255,0) 68%)",
      }}/>
      {/* Fondu bas vers TuSens */}
      <div className="hero-gradient-bottom" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to bottom, transparent, #faf9f6)",
      }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%",
        padding: "0 60px", display: "grid",
        gridTemplateColumns: "1fr 1fr", alignItems: "center",
        position: "relative", zIndex: 2 }} className="hero-grid">

        {/* Left */}
        <div className="hero-left">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)", fontWeight: 600,
            color: "#1a1f3a", lineHeight: 1.08, margin: "0 0 22px", letterSpacing: "-0.02em" }}>
            Quand la tête comprend,<br/>
            mais que <em style={{ color: blue, fontStyle: "italic" }}>le corps ne suit plus.</em>
          </h1>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#4a5270", lineHeight: 1.7, maxWidth: 480, margin: "0 0 32px" }}>
            Relâcher la charge accumulée, retrouver une énergie disponible — et voir ce qui traînait depuis des mois redevenir possible.
          </p>

          <div className="hero-cta" style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
              className="shimmer-btn"
              style={{ background: blue, color: "#fff", padding: "13px 30px",
                borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                fontSize: "0.9rem", textDecoration: "none",
                boxShadow: `0 8px 28px ${blue}50`, transition: "all 0.3s", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow=`0 14px 40px ${blue}60`; }}
              onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=`0 8px 28px ${blue}50`; }}>
              Réserver ma séance
            </a>
            <a href="#soins" onClick={e => { e.preventDefault(); scrollTo("#soins"); }}
              style={{ color: blue, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                fontSize: "0.9rem", textDecoration: "underline", textUnderlineOffset: 4,
                display: "inline-flex", alignItems: "center", gap: 6, padding: "13px 4px" }}>
              Découvrir les expériences <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>

        {/* Right — image de fond visible dans cet espace */}
        <div />
      </div>
    </section>
  );
}


// ─── TU SENS ─────────────────────────────────────────────────────────────────
function TuSens({ colors }) {
  const blue = colors?.blue || "#0038C7";
  const gold = colors?.gold || "#FFB800";

  const SW = "1.5"; // stroke width uniforme

  const items = [
    {
      label: "Tu es fatiguée même après\nune vraie nuit de sommeil",
      icon: (c) => (
        <svg viewBox="0 0 56 56" width="48" height="48" fill="none">
          {/* Spirale qui s'enroule vers l'intérieur */}
          <path d="M44 28 C44 38.5 35.5 47 25 45 C14.5 43 8 33.5 11 23 C14 12.5 25 8 34 12 C43 16 46 27 41 34 C36 41 25 42 18 37 C11 32 12 21 18 17 C24 13 33 16 34 22"
            stroke={c.blue} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="34" cy="22" r="2" fill={c.gold}/>
        </svg>
      ),
    },
    {
      label: "Ton mental tourne sur les mêmes\npensées depuis des mois",
      icon: (c) => (
        <svg viewBox="0 0 56 56" width="48" height="48" fill="none">
          {/* Croissant de lune */}
          <path d="M24 12 A16 16 0 1 0 24 44 A12 12 0 1 1 24 12Z"
            stroke={c.blue} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Lignes ondulées */}
          <path d="M34 20 Q37 18 40 20 Q43 22 46 20" stroke={c.blue} strokeWidth={SW} strokeLinecap="round" fill="none"/>
          <path d="M34 28 Q37 26 40 28 Q43 30 46 28" stroke={c.blue} strokeWidth={SW} strokeLinecap="round" fill="none"/>
          <path d="M34 36 Q37 34 40 36 Q43 38 46 36" stroke={c.blue} strokeWidth={SW} strokeLinecap="round" fill="none"/>
          {/* Point doré */}
          <circle cx="22" cy="42" r="2" fill={c.gold}/>
        </svg>
      ),
    },
    {
      label: "Tu sais ce que tu devrais faire —\ntu n'arrives pas à le faire",
      icon: (c) => (
        <svg viewBox="0 0 56 56" width="48" height="48" fill="none">
          {/* Cercle soleil doré */}
          <circle cx="28" cy="26" r="7" stroke={c.gold} strokeWidth={SW} fill="none"/>
          {/* Rayons bleus */}
          <line x1="28" y1="10" x2="28" y2="15" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="28" y1="37" x2="28" y2="42" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="12" y1="26" x2="17" y2="26" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="39" y1="26" x2="44" y2="26" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="16.5" y1="15.5" x2="20.5" y2="19.5" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="35.5" y1="32.5" x2="39.5" y2="36.5" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="39.5" y1="15.5" x2="35.5" y2="19.5" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          <line x1="20.5" y1="32.5" x2="16.5" y2="36.5" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          {/* Ligne diagonale de blocage */}
          <line x1="11" y1="45" x2="45" y2="11" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Tu fonctionnes,\nmais tu joues un rôle",
      icon: (c) => (
        <svg viewBox="0 0 56 56" width="48" height="48" fill="none">
          {/* Tige centrale */}
          <line x1="28" y1="46" x2="28" y2="12" stroke={c.blue} strokeWidth={SW} strokeLinecap="round"/>
          {/* Feuille droite */}
          <path d="M28 24 C31 18 39 15 41 17 C39 23 33 27 28 24Z"
            stroke={c.blue} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Feuille gauche */}
          <path d="M28 34 C25 28 17 25 15 27 C17 33 23 37 28 34Z"
            stroke={c.blue} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Point doré en bas */}
          <circle cx="28" cy="48" r="2" fill={c.gold}/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: "32px 24px 80px", background: "#faf9f6", marginTop: 0 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 500,
            color: blue, margin: "0 0 20px", letterSpacing: "-0.015em",
            fontStyle: "italic", lineHeight: 1.25 }}>
            Tu sens que quelque chose bloque.<br/>
            Et tu en as fait le tour mille fois dans ta tête.
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ height: 1, width: 36, background: `${gold}80` }}/>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: gold, opacity: 0.6 }}/>
            <div style={{ height: 1, width: 36, background: `${gold}80` }}/>
          </div>
        </RevealBox>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}
          className="tusens-grid">
          {items.map((item, i) => (
            <RevealBox key={i} delay={i * 70}>
              <div style={{ display: "flex", flexDirection: "column",
                alignItems: "center", gap: 16, textAlign: "center" }}>
                <div style={{ width: 72, height: 72,
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon({ blue, gold })}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem",
                  color: "#4a5270", lineHeight: 1.55, margin: 0,
                  whiteSpace: "pre-line", fontWeight: 400 }}>
                  {item.label}
                </p>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─── PROBLÈME ─────────────────────────────────────────────────────────────────
function Problem({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const bg = "#faf9f6";

  return (
    <section style={{ background: bg, position: "relative", overflow: "hidden" }}>
      {/* Image pleine hauteur à droite, absolue */}
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: "52%",
        overflow: "hidden",
      }}>
        <img
          src="img/homepage_img.png"
          alt="Séance d'harmonisation énergétique"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "35% center", display: "block" }}
        />
        {/* Fondu gauche — émergence depuis le fond crème */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `linear-gradient(to right,
            ${bg} 0%,
            rgba(250,249,246,0.92) 10%,
            rgba(250,249,246,0.55) 28%,
            rgba(250,249,246,0.15) 45%,
            transparent 62%)`,
        }}/>
        {/* Fondu bas */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 80, pointerEvents: "none",
          background: `linear-gradient(to bottom, transparent, ${bg})`,
        }}/>
      </div>

      {/* Contenu texte */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <div style={{
          maxWidth: 520,
          padding: "96px 0 96px",
          display: "flex", flexDirection: "column",
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: `1px solid ${gold}80`,
            color: gold, fontSize: "0.6rem", fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase",
            padding: "5px 12px", borderRadius: 50, marginBottom: 28, alignSelf: "flex-start",
          }}>
            <span style={{ fontSize: "0.7rem" }}>✦</span>
            Et si le problème n'était pas ce que tu crois…
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.2vw, 3rem)",
            fontWeight: 600, color: "#1c2340",
            lineHeight: 1.2, marginBottom: 44,
          }}>
            Il y a des choses que l'on ne peut pas débloquer en{" "}
            <em style={{ color: blue, fontStyle: "italic" }}>réfléchissant plus.</em>
          </h2>

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Bullet 1 */}
            <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div style={{
                flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                background: "#fff", border: `1px solid ${gold}30`,
                boxShadow: `0 2px 16px ${gold}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v1A2.5 2.5 0 0 1 9.5 8h-1A2.5 2.5 0 0 0 6 10.5v.5"/>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v1A2.5 2.5 0 0 0 14.5 8h1A2.5 2.5 0 0 1 18 10.5v.5"/>
                  <path d="M6 11a6 6 0 0 0 12 0"/>
                  <path d="M12 17v4M9 21h6"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1c2340", fontSize: "0.93rem", marginBottom: 5 }}>
                  Ce qui freine se situe parfois plus profondément.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#5a6478", fontSize: "0.86rem", lineHeight: 1.75 }}>
                  Des tensions accumulées, des émotions non libérées, une énergie qui ne circule plus librement dans ton système.
                </p>
              </div>
            </div>

            {/* Bullet 2 */}
            <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div style={{
                flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                background: "#fff", border: `1px solid ${gold}30`,
                boxShadow: `0 2px 16px ${gold}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={gold} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#1c2340", fontSize: "0.93rem", marginBottom: 5 }}>
                  C'est là que j'interviens.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#5a6478", fontSize: "0.86rem", lineHeight: 1.75 }}>
                  Je travaille directement là où ton énergie est figée, pour remettre en mouvement ce qui s'est arrêté, et t'aider à retrouver clarté, apaisement et élan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── À PROPOS ─────────────────────────────────────────────────────────────────
function About({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const [ref, visible] = useReveal();

  return (
    <section id="apropos" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
        gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
        className="two-col-grid">
        {/* Visual */}
        <RevealBox>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 28, overflow: "hidden",
              background: `linear-gradient(135deg, ${blue}18 0%, ${gold}18 100%)`,
              aspectRatio: "4/5", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", padding: 48 }}>
              {/* Abstract portrait placeholder */}
              <svg viewBox="0 0 280 320" width="200" fill="none">
                <defs>
                  <radialGradient id="aura" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor={blue} stopOpacity="0.25"/>
                    <stop offset="100%" stopColor={gold} stopOpacity="0.1"/>
                  </radialGradient>
                </defs>
                <ellipse cx="140" cy="160" rx="120" ry="140" fill="url(#aura)"/>
                {/* Silhouette stylisée */}
                <ellipse cx="140" cy="80" rx="36" ry="40" fill={blue} fillOpacity="0.2"/>
                <path d="M80 200 Q140 160 200 200 L210 310 H70 Z" fill={blue} fillOpacity="0.12"/>
                {/* Halo */}
                {[55, 70, 85].map(r => (
                  <circle key={r} cx="140" cy="80" r={r} stroke={gold}
                    strokeWidth="0.8" strokeOpacity="0.3" fill="none"
                    strokeDasharray={r === 70 ? "4 3" : "none"}/>
                ))}
                <circle cx="140" cy="80" r="36" stroke={gold} strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
              </svg>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem",
                color: blue, textAlign: "center", marginTop: 24, fontStyle: "italic",
                lineHeight: 1.6, opacity: 0.7 }}>
                Emplacement pour votre photo
              </p>
            </div>
            {/* Accent card */}
            <div style={{ position: "absolute", bottom: -20, right: -20,
              background: "white", borderRadius: 16, padding: "16px 22px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)", border: `1px solid ${gold}30` }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem",
                fontWeight: 700, color: gold, lineHeight: 1 }}>∞</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
                color: "#6b7280", marginTop: 2 }}>Approche holistique</div>
            </div>
          </div>
        </RevealBox>

        {/* Text */}
        <RevealBox delay={150}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 28px", lineHeight: 1.2 }}>
            Un espace d'écoute,<br/>de douceur et de<br/>reconnexion à soi
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 24 }}>
            SerenityRituals est né de l'envie de proposer un espace d'écoute, de douceur
            et de reconnexion à soi. Chaque séance est pensée comme un rituel personnalisé,
            dans lequel le corps, l'énergie et les émotions sont accueillis avec bienveillance.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 36 }}>
            L'approche repose sur l'écoute, la présence, la subtilité des ressentis et le respect
            du rythme de chaque personne.
          </p>
          {[
            ["Personnalisé", "Chaque séance est pensée selon votre besoin du moment"],
            ["Bienveillant", "Un cadre chaleureux, sans jugement, à votre rythme"],
            ["Accessible", "Pour toute personne souhaitant prendre soin d'elle-même"],
          ].map(([title, desc]) => (
            <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: gold,
                flexShrink: 0, marginTop: 7 }}/>
              <div>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  color: "#1c2340", fontSize: "0.95rem" }}>{title} — </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280",
                  fontSize: "0.95rem" }}>{desc}</span>
              </div>
            </div>
          ))}
        </RevealBox>
      </div>
    </section>
  );
}

// ─── SOINS ────────────────────────────────────────────────────────────────────
function Services({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const soins = [
    {
      id: "activation",
      icon: "✦",
      name: "Activation de l'énergie vitale",
      desc: "Un soin destiné à relancer la circulation de l'énergie, réveiller la vitalité intérieure et accompagner une sensation de recentrage et de dynamisme.",
      benefits: ["Retrouver de l'élan", "Se reconnecter à son énergie", "Apaiser les sensations de fatigue intérieure", "Favoriser un meilleur ancrage"],
    },
    {
      id: "la-trame",
      icon: "◈",
      name: "Soin vibratoire La Trame",
      desc: "Un soin vibratoire doux qui vise à harmoniser la circulation de l'information dans le corps et à accompagner la libération des tensions émotionnelles.",
      benefits: ["Apaiser les tensions", "Favoriser la libération émotionnelle", "Retrouver une sensation d'alignement", "Accompagner les périodes de changement"],
    },
  ];

  return (
    <section id="soins" style={{ padding: "100px 24px", background: "#f6f9ff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 16px" }}>
            Les soins proposés
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Des accompagnements doux et personnalisés, adaptés à chaque besoin.
          </p>
        </RevealBox>

        {/* Sub-nav interne section Soins (Apollo Workspaces style) */}
        <RevealBox delay={120}>
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 18, marginBottom: 56, flexWrap: "wrap",
          }}>
            <a href="#activation" className="soins-subnav-link"
              onClick={e => {
                e.preventDefault();
                const el = document.querySelector('#activation');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 132, behavior: "smooth" });
              }}>
              Activation de l'énergie vitale
            </a>
            <span aria-hidden="true" style={{ color: gold, fontSize: 16, opacity: 0.7, lineHeight: 1 }}>·</span>
            <a href="#la-trame" className="soins-subnav-link"
              onClick={e => {
                e.preventDefault();
                const el = document.querySelector('#la-trame');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 132, behavior: "smooth" });
              }}>
              Soin vibratoire La Trame
            </a>
          </div>
        </RevealBox>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
          {soins.map((s, i) => (
            <RevealBox key={s.name} delay={i * 80}>
              <div id={s.id} className="service-card" style={{
                background: "white", borderRadius: 24, padding: "36px 28px",
                boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
                border: "1px solid rgba(26,111,186,0.08)",
                transition: "all 0.3s ease",
                height: "100%", display: "flex", flexDirection: "column",
              }}>
                <div style={{ fontSize: "1.8rem", color: blue, marginBottom: 16,
                  width: 52, height: 52, background: `${blue}10`,
                  borderRadius: 14, display: "flex", alignItems: "center",
                  justifyContent: "center" }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem",
                  fontWeight: 600, color: "#1c2340", margin: "0 0 14px", lineHeight: 1.3 }}>
                  {s.name}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
                  color: "#6b7280", lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
                  {s.desc}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                  {s.benefits.map(b => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8,
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                      color: "#4a5568", marginBottom: 7 }}>
                      <span style={{ color: gold, fontSize: "1rem" }}>›</span>{b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 16px", background: "#f8faff", borderRadius: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem",
                      color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Durée · Tarif
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
                      color: "#6b7280", fontStyle: "italic" }}>À définir · Tarif à venir</div>
                  </div>
                </div>
                <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
                  style={{ display: "block", textAlign: "center", padding: "11px 0",
                    borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: "0.875rem", textDecoration: "none", transition: "all 0.25s",
                    border: `2px solid ${blue}`, color: blue, background: "transparent" }}
                  onMouseEnter={e => { e.currentTarget.style.background = blue; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = blue; }}>
                  Prendre rendez-vous
                </a>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── POUR QUI ─────────────────────────────────────────────────────────────────
function ForWho({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const besoins = [
    "Fatigue émotionnelle", "Stress ou charge mentale", "Sensation de blocage",
    "Besoin de recul", "Période de transition personnelle",
    "Envie de reconnexion à soi", "Recherche d'un moment profond de détente",
  ];

  return (
    <section id="pourqui" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
        gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
        className="two-col-grid">
        <RevealBox>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 24px", lineHeight: 1.25 }}>
            Pour qui sont ces<br/>soins ?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 32 }}>
            Les soins SerenityRituals s'adressent aux adultes qui ressentent le besoin de faire
            une pause, de se recentrer, de libérer des tensions émotionnelles ou de retrouver
            davantage de clarté mentale.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {besoins.map(b => (
              <span key={b} style={{ fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem", color: blue, background: `${blue}10`,
                padding: "8px 16px", borderRadius: 50,
                border: `1px solid ${blue}20`, lineHeight: 1 }}>
                {b}
              </span>
            ))}
          </div>
        </RevealBox>

        <RevealBox delay={150}>
          <div style={{ background: `linear-gradient(135deg, ${blue}0e 0%, ${gold}12 100%)`,
            borderRadius: 28, padding: 48, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140,
              borderRadius: "50%", background: `${gold}20` }}/>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem",
              color: blue, opacity: 0.15, lineHeight: 1, marginBottom: 8 }}>❝</div>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem",
              fontStyle: "italic", color: "#1c2340", lineHeight: 1.55,
              margin: "0 0 24px", fontWeight: 500 }}>
              "Chaque personne mérite un espace pour se recentrer, souffler, et retrouver
              sa propre lumière intérieure."
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%",
                background: `linear-gradient(135deg, ${blue}, ${gold})` }}/>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  fontSize: "0.9rem", color: "#1c2340" }}>SerenityRituals</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                  color: "#6b7280" }}>Soins énergétiques &amp; vibratoires</div>
              </div>
            </div>
          </div>
        </RevealBox>
      </div>
    </section>
  );
}

// ─── PROGRAMME SIGNATURE — Banner CTA (luxe wellness, charte respectée) ───────
function ProgrammeBlock({ colors }) {
  const blue = colors?.blue || "#0038C7";
  const gold = colors?.gold || "#FFB800";

  return (
    <section id="signature" style={{
      position: "relative",
      padding: "130px 24px 140px",
      overflow: "hidden",
      background: "#faf9f6",
    }}>

      {/* Géométrie sacrée — anneaux concentriques top-left */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 110, left: 60,
        width: 280, height: 280, zIndex: 1, pointerEvents: "none",
      }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            position: "absolute", top: `${i * 22}px`, left: `${i * 22}px`,
            right: `${i * 22}px`, bottom: `${i * 22}px`,
            border: `1px solid ${gold}${["38", "28", "1c", "12", "08"][i]}`,
            borderRadius: "50%",
          }}/>
        ))}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          width: 6, height: 6, borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: gold, opacity: 0.6,
        }}/>
      </div>

      {/* Géométrie sacrée — étoile 8 branches bottom-right */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 100, right: 80,
        zIndex: 1, pointerEvents: "none",
      }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <line key={i}
                x1={100 + Math.cos(a) * 14} y1={100 + Math.sin(a) * 14}
                x2={100 + Math.cos(a) * 88} y2={100 + Math.sin(a) * 88}
                stroke={gold} strokeWidth="1" strokeOpacity="0.32" strokeLinecap="round"/>
            );
          })}
          <circle cx="100" cy="100" r="90" stroke={gold} strokeWidth="1" strokeOpacity="0.15" fill="none"/>
          <circle cx="100" cy="100" r="60" stroke={blue} strokeWidth="1" strokeOpacity="0.18" fill="none" strokeDasharray="2 4"/>
          <circle cx="100" cy="100" r="6" fill={gold} fillOpacity="0.55"/>
        </svg>
      </div>

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 860, margin: "0 auto", textAlign: "center",
      }}>
        <RevealBox>
          {/* Emblème sceau doré — signature mark */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              <circle cx="21" cy="21" r="19.5" stroke={gold} strokeWidth="1" strokeOpacity="0.32" fill="none"/>
              <circle cx="21" cy="21" r="14" stroke={gold} strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="1.6 2.6"/>
              <path d="M21 7.5 L22.65 17 L32.2 18.6 L22.65 20.2 L21 29.7 L19.35 20.2 L9.8 18.6 L19.35 17 Z"
                fill={gold}/>
            </svg>
          </div>

          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            marginBottom: 34,
          }}>
            <span style={{ width: 40, height: 1, background: gold, opacity: 0.5 }}/>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.28em", textTransform: "uppercase", color: gold,
            }}>
              Programme signature
            </span>
            <span style={{ width: 40, height: 1, background: gold, opacity: 0.5 }}/>
          </div>

          {/* H2 — éditorial dramatique */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 4.8vw, 4.2rem)", fontWeight: 500,
            color: "#1c2340", margin: "0 0 28px", lineHeight: 1.06,
            letterSpacing: "-0.02em",
          }}>
            Quand tu es prête à aller plus loin —<br/>
            <em style={{ color: blue, fontStyle: "italic", fontWeight: 600 }}>
              l'accompagnement complet.
            </em>
          </h2>

          {/* Sub */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
            color: "#4a5270", lineHeight: 1.8,
            maxWidth: 560, margin: "0 auto 56px",
          }}>
            Trois semaines, trois approches combinées pour accélérer le processus
            et ancrer durablement ce qui se transforme en toi.
          </p>

          {/* CTA primaire bleu shimmer, large */}
          <a href="programmesignature.html"
            className="shimmer-btn"
            style={{
              background: blue, color: "#fff",
              padding: "18px 52px", borderRadius: 50,
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
              fontSize: "0.98rem", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 10,
              boxShadow: `0 16px 44px ${blue}52`, transition: "all 0.3s",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 24px 58px ${blue}65`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 16px 44px ${blue}52`; }}>
            Découvrir le programme <span aria-hidden="true">→</span>
          </a>
        </RevealBox>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Services, ForWho, RevealBox, useReveal, TuSens, Problem, ProgrammeBlock, HairlineRule });
