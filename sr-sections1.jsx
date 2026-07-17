
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
      display: "flex", alignItems: "center", minHeight: 640,
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
            fontSize: "clamp(2.2rem, 3.4vw, 3.8rem)", fontWeight: 600,
            color: "#1a1f3a", lineHeight: 1.12, margin: "0 0 22px", letterSpacing: "-0.02em" }}>
            Quand la tête comprend,<br/>
            mais que <em style={{ color: blue, fontStyle: "italic", whiteSpace: "nowrap" }}>le corps ne suit plus.</em>
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
              Découvrir les séances <span aria-hidden="true">→</span>
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

  const scrollToSoins = (e) => {
    e.preventDefault();
    const el = document.querySelector("#soins");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth" });
  };

  return (
    <section id="apropos" style={{ padding: "100px 24px", background: "#f5f3ee" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
        gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}
        className="two-col-grid">
        {/* Visual */}
        <RevealBox>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 28,
              background: "#e4ecfb url('IMG_9929.jpg') center 25% / cover no-repeat",
              aspectRatio: "4/5" }}/>
            {/* Accent card */}
            <div style={{ position: "absolute", bottom: 24, right: 24, maxWidth: "70%",
              background: "white", borderRadius: 16, padding: "16px 22px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
                fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                color: gold, marginBottom: 6 }}>
                Diplômée
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
                fontWeight: 600, color: "#1c2340", lineHeight: 1.4 }}>
                La Trame · Activation de l'énergie vitale
              </div>
            </div>
          </div>
        </RevealBox>

        {/* Text */}
        <RevealBox delay={150}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Qui suis-je
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 28px", lineHeight: 1.25 }}>
            Il y a ce que le temps répare.{" "}
            <em style={{ color: blue, fontStyle: "italic" }}>Et ce qu'il ne répare pas.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 28 }}>
            Je m'appelle Morgane.<br/>
            À 20 ans, j'ai perdu ma mère.<br/>
            J'habitais encore chez elle. Elle était mon pilier, mon repère — et ma propre
            vie restait à construire.<br/>
            Pendant des années, j'ai fait ce qu'on fait tous : tenir, avancer, gérer. En
            apparence, ça fonctionnait. À l'intérieur, quelque chose restait figé — et ni
            le temps, ni la volonté n'y changeaient rien.<br/>
            En février 2021, j'ai reçu ma première séance de Trame.
          </p>
          <blockquote style={{ margin: "0 0 28px", padding: "2px 0 2px 20px",
            borderLeft: `3px solid ${gold}`,
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.25rem", color: blue, lineHeight: 1.5, fontWeight: 700 }}>
            « Ce qui s'est relâché ce jour-là, huit ans n'y étaient pas parvenus. »
          </blockquote>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 24 }}>
            Je ne cherchais plus à comprendre : mon corps venait de faire ce que ma tête
            n'avait jamais réussi. Je me suis formée à la Trame dès 2022, diplômée en
            octobre 2023, puis à l'Activation de l'énergie vitale, à Bali, en 2025.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 32 }}>
            Aujourd'hui, j'accompagne celles et ceux qui portent quelque chose de lourd
            depuis trop longtemps — passionnée par l'énergie, la reconnexion au corps et
            la libération de tout ce qui nous alourdit, dans la tête comme dans le corps.
          </p>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: 28 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
              fontSize: "1.25rem", color: "#1c2340", lineHeight: 1.6, marginBottom: 20 }}>
              Si quelque chose en toi attend depuis longtemps, commence par une séance.
            </p>
            <a href="#soins" onClick={scrollToSoins}
              style={{ display: "inline-block", background: blue, color: "#fff",
                padding: "14px 32px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                transition: "all 0.25s", boxShadow: `0 6px 24px ${blue}35` }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
              Découvrir les séances
            </a>
          </div>
        </RevealBox>
      </div>
    </section>
  );
}

// ─── SOINS ────────────────────────────────────────────────────────────────────
function Services({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const packs = [
    {
      label: "Pack",
      name: "3 Trames",
      price: "255 €",
      note: "au lieu de 285 €",
      bg: `${blue}1a`,
      accent: blue,
    },
    {
      label: "Pack · Le plus complet",
      name: "3 Trames + Photostimulation",
      price: "340 €",
      note: null,
      bg: `${gold}26`,
      accent: "#96731f",
    },
  ];

  return (
    <section id="soins" style={{ padding: "100px 24px 48px", background: "#f6f9ff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: blue, margin: "0 0 16px" }}>
            Les séances
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Relâcher ce qui pèse. Remettre en mouvement ce qui s'est figé
          </p>
        </RevealBox>

        {/* ── Bloc détail "Activation de l'énergie vitale" ─────────────────── */}
        <RevealBox>
          <div id="activation" className="seance-detail" style={{ scrollMarginTop: 112 }}>
            <div className="seance-photo" style={{ borderRadius: 14, overflow: "hidden" }}>
              <img
                src="img/activation-bali.webp"
                loading="lazy"
                alt="Moment d'une séance d'Activation : participante allongée au sol, accompagnée par la facilitatrice."
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="seance-text">
              <div style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem",
                fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#96731f",
                background: `${gold}26`, borderRadius: 50, padding: "6px 16px", marginBottom: 16 }}>
                Séance collective
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)",
                fontWeight: 600, color: blue, margin: "0 0 22px", lineHeight: 1.25 }}>
                Activation de l'énergie vitale
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
                color: "#4a5568", lineHeight: 1.8, marginBottom: 20 }}>
                Allongé(e), les yeux fermés, porté(e) par la musique, tu laisses l'énergie
                circuler — sans rien forcer. Je passe auprès de chacun(e) : parfois une
                main posée, parfois une présence au-dessus du corps.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
                color: "#4a5568", lineHeight: 1.8, marginBottom: 28 }}>
                Il n'y a rien à faire, rien à réussir. Certains vivent des vagues
                d'émotion, d'autres un calme profond — c'est le corps qui décide.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 50, padding: "9px 18px" }}>
                  <span style={{ color: "#9ca3af" }}>Durée</span>
                  {" · "}
                  <span style={{ fontWeight: 600, color: "#1c2340" }}>2h</span>
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 50, padding: "9px 18px", color: "#1c2340", fontWeight: 600 }}>
                  Studio à Paris ou en ligne
                </span>
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 28 }}>
                <span style={{ fontWeight: 700, fontSize: "1.3rem", color: "#1c2340" }}>55 €</span>
                <span style={{ color: "#6b7280", marginLeft: 4 }}>présentiel</span>
                <span style={{ color: "#9ca3af" }}> · </span>
                <span style={{ fontWeight: 700, fontSize: "1.3rem", color: "#1c2340" }}>39 €</span>
                <span style={{ color: "#6b7280", marginLeft: 4 }}>en ligne</span>
              </div>
              <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
                style={{ display: "inline-block", padding: "13px 30px",
                  background: blue, color: "#fff", borderRadius: 50,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                  textDecoration: "none", transition: "all 0.25s",
                  boxShadow: `0 6px 24px ${blue}35` }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                Réserver une Activation
              </a>
            </div>
          </div>
        </RevealBox>

        {/* ── Bloc détail "La Trame" (miroir) ───────────────────────────────── */}
        <RevealBox>
          <div id="la-trame" className="seance-detail mirror" style={{ marginTop: 56, scrollMarginTop: 112 }}>
            {/* TODO : remplacer par photo Trame (format vertical, mêmes réglages que photo Activation) */}
            <div className="seance-photo" style={{ borderRadius: 14, background: "#EAF0FA" }}/>
            <div className="seance-text">
              <div style={{ display: "inline-block", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem",
                fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#96731f",
                background: `${gold}26`, borderRadius: 50, padding: "6px 16px", marginBottom: 16 }}>
                Séance individuelle
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)",
                fontWeight: 600, color: blue, margin: "0 0 22px", lineHeight: 1.25 }}>
                La Trame
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
                color: "#4a5568", lineHeight: 1.8, marginBottom: 20 }}>
                Tu t'installes allongé(e) sur la table, entièrement habillé(e). Pendant
                environ 45 minutes, je déroule une séquence précise de gestes posés sur le
                corps — un protocole codifié, qui remet de l'ordre dans ce qui s'est figé.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
                color: "#4a5568", lineHeight: 1.8, marginBottom: 28 }}>
                Il n'y a rien à faire. Certains sentent de la chaleur, des mouvements
                intérieurs, d'autres se laissent simplement porter — et le travail
                continue dans les jours qui suivent.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 50, padding: "9px 18px" }}>
                  <span style={{ color: "#9ca3af" }}>Durée</span>
                  {" · "}
                  <span style={{ fontWeight: 600, color: "#1c2340" }}>environ 45 min</span>
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                  background: "#fff", border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 50, padding: "9px 18px", color: "#1c2340", fontWeight: 600 }}>
                  Villeneuve-Saint-Georges ou en ligne
                </span>
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", marginBottom: 28 }}>
                <span style={{ fontWeight: 700, fontSize: "1.3rem", color: "#1c2340" }}>95 €</span>
              </div>
              <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
                style={{ display: "inline-block", padding: "13px 30px",
                  background: blue, color: "#fff", borderRadius: 50,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                  textDecoration: "none", transition: "all 0.25s",
                  boxShadow: `0 6px 24px ${blue}35` }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                Réserver une Trame
              </a>
            </div>
          </div>
        </RevealBox>

        <RevealBox>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.05rem", color: "#4a5568", textAlign: "center",
            margin: "56px 0 40px" }}>
            En résumé : la Trame réordonne en douceur, l'Activation remet en mouvement.
          </p>
        </RevealBox>

        <div id="packs" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28, scrollMarginTop: 112 }}>
          {packs.map((p, i) => (
            <RevealBox key={p.name} delay={i * 80}>
              <div style={{ background: p.bg, borderRadius: 20, padding: "28px 28px" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem",
                  fontWeight: 700, color: p.accent, textTransform: "uppercase",
                  letterSpacing: "0.08em", marginBottom: 10 }}>
                  {p.label}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem",
                  fontWeight: 600, color: "#1c2340", marginBottom: 8 }}>
                  {p.name}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.15rem" }}>
                  <span style={{ fontWeight: 700, color: p.accent }}>{p.price}</span>
                  {p.note && <span style={{ color: "#6b7280", marginLeft: 6 }}>{p.note}</span>}
                </div>
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

  const points = [
    "Tu tiens, mais ça te coûte de plus en plus.",
    "Tu dors, mais tu ne récupères pas vraiment.",
    "Tu as tout analysé, tout compris — et rien n'a bougé.",
    "Ton corps reste tendu, même au repos.",
    "Tu traverses une transition, et ça remue plus que prévu.",
    "Tu veux relâcher, sans savoir par où commencer.",
  ];

  return (
    <section id="pourqui" style={{ padding: "100px 24px", background: "#f5f3ee" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
        gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}
        className="two-col-grid">
        <RevealBox>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Pour qui
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 24px", lineHeight: 1.25 }}>
            C'est pour toi <em style={{ color: blue, fontStyle: "italic" }}>si...</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 32 }}>
            Pas besoin d'y croire, ni d'avoir déjà testé quoi que ce soit. Juste de te
            reconnaître quelque part ici :
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {points.map(p => (
              <div key={p} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M5 13 L10 18 L19 7" stroke={blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
                  color: "#1c2340", lineHeight: 1.6 }}>{p}</span>
              </div>
            ))}
          </div>
        </RevealBox>

        <RevealBox delay={150}>
          <div style={{ background: "#fff", borderRadius: 24, padding: 44,
            boxShadow: "0 4px 24px rgba(26,63,186,0.06)" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem",
              color: `${blue}30`, lineHeight: 1, marginBottom: 8 }}>”</div>
            <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem",
              fontStyle: "italic", color: "#1c2340", lineHeight: 1.55,
              margin: "0 0 32px", fontWeight: 500 }}>
              Tu n'as pas besoin d'être « prête », ni de croire à quoi que ce soit.
              Ton corps, lui, sait déjà ce qu'il a à déposer.
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                overflow: "hidden", flexShrink: 0,
                backgroundImage: "url('logo-src.png')",
                backgroundSize: "148%",
                backgroundPosition: "50% 41%",
                backgroundRepeat: "no-repeat",
              }}/>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                  fontSize: "1rem", color: "#1c2340" }}>Morgane</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
                  color: "#6b7280" }}>Fondatrice de Serenity Rituals</div>
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
      padding: "64px 24px 140px",
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

          {/* Accroche */}
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)", color: "#4a5270",
            margin: "0 0 18px", lineHeight: 1.5,
          }}>
            Tu sens que ça demande plus qu'une séance ?
          </p>

          {/* H2 — éditorial dramatique */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 4.8vw, 4.2rem)", fontWeight: 500,
            color: "#1c2340", margin: "0 0 28px", lineHeight: 1.06,
            letterSpacing: "-0.02em",
          }}>
            Quand tu es prêt(e) à aller plus loin<br/>
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
            Plusieurs approches combinées, pour accélérer le processus
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
