
// SerenityRituals — Déroulement, Bienfaits, Témoignages, FAQ

// ─── MON APPROCHE ─────────────────────────────────────────────────────────────
function Process({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const tiers = [
    {
      num: "1",
      icon: (
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="10" stroke={gold} strokeWidth="1.5"/>
          {[0,45,90,135,180,225,270,315].map((deg,i) => {
            const r = deg * Math.PI / 180;
            return <line key={i} x1={28+Math.cos(r)*13} y1={28+Math.sin(r)*13}
              x2={28+Math.cos(r)*20} y2={28+Math.sin(r)*20}
              stroke={gold} strokeWidth="1.5" strokeLinecap="round"/>;
          })}
        </svg>
      ),
      title: "Les soins à l'unité",
      sub: "UN PREMIER PAS, AVEC DÉJÀ DES EFFETS CONCRETS",
      bullets: [
        "Tu peux commencer simplement, avec une séance de Trame ou une Kundalini Activation.",
        "Dès la première séance, des changements peuvent se faire ressentir : un apaisement, un relâchement, plus de clarté.",
        "Chaque séance agit là où ton système en a besoin et ouvre déjà un espace différent en toi.",
      ],
    },
    {
      num: "2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <path d="M28 14 C36 14 42 20 42 28 C42 36 36 42 28 42 C22 42 17 38 16 32" stroke={gold} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M28 20 C33 20 37 24 37 28 C37 32 33 36 28 36" stroke={gold} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="28" cy="28" r="3" fill={gold}/>
        </svg>
      ),
      title: "Aller plus loin, quand tu es prêt(e)",
      sub: "APPROFONDIR POUR TRANSFORMER",
      bullets: [
        "Au fil des séances, le travail s'approfondit.",
        "Ton corps s'ouvre, ton énergie circule différemment.",
        "Les blocages se relâchent en profondeur, les émotions se libèrent, et tu retrouves de plus en plus de clarté, de confiance et d'élan.",
        "De vrais changements commencent à s'installer.",
      ],
    },
    {
      num: "3",
      icon: (
        <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
          <path d="M28 12 L30.5 24 L43 28 L30.5 32 L28 44 L25.5 32 L13 28 L25.5 24 Z" stroke={gold} strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Un accompagnement plus complet",
      sub: "COMBINER POUR ACCÉLÉRER ET STABILISER",
      bullets: [
        "Pour celles et ceux qui souhaitent aller plus loin, je propose un accompagnement en 3 semaines qui combine plusieurs approches, dont la Dream Machine.",
        "Cette synergie permet d'accélérer le processus, d'intégrer durablement les transformations et d'ancrer les changements dans ton quotidien.",
      ],
    },
  ];

  return (
    <section id="deroulement" style={{ padding: "96px 24px 80px", background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Décor feuille droite */}
      <div style={{ position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)", opacity: 0.07, pointerEvents: "none" }}>
        <svg width="280" height="380" viewBox="0 0 280 380" fill="none">
          <path d="M140 10 C200 60 260 140 240 220 C220 300 160 360 140 370 C120 360 60 300 40 220 C20 140 80 60 140 10Z" fill={gold}/>
          <line x1="140" y1="10" x2="140" y2="370" stroke={gold} strokeWidth="2"/>
          {[60,100,140,180,220,260,300,340].map((y,i) => (
            <path key={i} d={`M140 ${y} Q${i%2===0?180:100} ${y-20} ${i%2===0?220:60} ${y}`} stroke={gold} strokeWidth="1" fill="none"/>
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <RevealBox style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Mon approche
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 20px", lineHeight: 1.2 }}>
            Une approche qui s'adapte à toi,{" "}
            <em style={{ color: gold, fontStyle: "italic" }}>à ton rythme.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
            color: "#6b7280", maxWidth: 520, margin: "0 auto 10px", lineHeight: 1.75 }}>
            Il n'existe pas un seul chemin pour se libérer. Certaines personnes ont besoin de douceur, d'autres sont prêtes à aller plus loin, plus vite.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
            color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            Mon rôle, c'est de m'adapter à là où tu en es, et de t'accompagner étape par étape.
          </p>
        </RevealBox>

        {/* 3 colonnes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
          className="tusens-grid">
          {tiers.map((t, i) => (
            <RevealBox key={i} delay={i * 120}>
              <div style={{
                padding: "36px 28px 32px",
                borderRadius: 20,
                border: "1px solid rgba(26,111,186,0.08)",
                background: "#fff",
                boxShadow: "0 4px 24px rgba(26,63,186,0.05)",
                height: "100%", display: "flex", flexDirection: "column", gap: 0,
              }}>
                {/* Numéro + icone */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem",
                    fontWeight: 700, color: `${gold}50`, lineHeight: 1 }}>{t.num}</span>
                  {t.icon}
                </div>
                {/* Titre */}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
                  fontWeight: 600, color: "#1c2340", margin: "0 0 8px", lineHeight: 1.25 }}>
                  {t.title}
                </h3>
                {/* Sous-titre */}
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem",
                  fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: blue, margin: "0 0 20px" }}>
                  {t.sub}
                </p>
                {/* Puces */}
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                  {t.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: gold, fontSize: "0.5rem", marginTop: 6, flexShrink: 0 }}>◆</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem",
                        color: "#4a5568", lineHeight: 1.7 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealBox>
          ))}
        </div>

        {/* CTA bas */}
        <RevealBox style={{ textAlign: "center", marginTop: 64 }}>
          <div style={{ marginBottom: 8 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L13.2 9.8 L21 12 L13.2 14.2 L12 22 L10.8 14.2 L3 12 L10.8 9.8 Z" stroke={gold} strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 500, color: "#1c2340", margin: "0 0 28px", lineHeight: 1.35 }}>
            Tu peux commencer simplement…<br/>
            et aller <em style={{ color: gold, fontStyle: "italic" }}>aussi loin que tu le souhaites.</em>
          </p>
          <a href={window.CALENDLY_URL || "#soins"} target="_blank" rel="noreferrer"
            style={{ background: blue, color: "#fff", padding: "13px 32px",
              borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.88rem", textDecoration: "none", display: "inline-block",
              boxShadow: `0 6px 24px ${blue}35`, transition: "all 0.25s",
              letterSpacing: "0.02em" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
            Découvrir les expériences
          </a>
        </RevealBox>
      </div>
    </section>
  );
}

// ─── BIENFAITS ────────────────────────────────────────────────────────────────
function Benefits({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const items = [
    { icon: "◌", label: "Apaisement des tensions" },
    { icon: "◌", label: "Meilleure clarté mentale" },
    { icon: "◌", label: "Sensation de légèreté" },
    { icon: "◌", label: "Libération émotionnelle" },
    { icon: "◌", label: "Relaxation profonde" },
    { icon: "◌", label: "Recentrage" },
    { icon: "◌", label: "Reconnexion à soi" },
    { icon: "◌", label: "Regain d'énergie" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 72, alignItems: "center" }} className="two-col-grid">
        <RevealBox>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 24px", lineHeight: 1.25 }}>
            Des bienfaits ressentis<br/>en douceur
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 36 }}>
            Chaque personne vit les séances différemment. Les soins proposés peuvent accompagner
            un mieux-être global, une sensation d'apaisement, de relâchement ou de clarté intérieure.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
            color: "#9ca3af", lineHeight: 1.65,
            borderLeft: `3px solid ${gold}50`, paddingLeft: 16, fontStyle: "italic" }}>
            Les soins énergétiques ne remplacent pas un avis médical, un diagnostic
            ou un traitement médical.
          </p>
        </RevealBox>

        <RevealBox delay={150}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {items.map((item, i) => (
              <div key={item.label} style={{
                background: i % 3 === 0 ? `${blue}08` : i % 3 === 1 ? `${gold}10` : "#f8faff",
                borderRadius: 16, padding: "20px 18px",
                border: `1px solid ${i % 2 === 0 ? `${blue}12` : `${gold}18`}`,
                display: "flex", alignItems: "center", gap: 12,
                transition: "transform 0.25s",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%",
                  background: i % 2 === 0 ? blue : gold, flexShrink: 0 }}/>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
                  color: "#1c2340", fontWeight: 500, lineHeight: 1.3 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </RevealBox>
      </div>
    </section>
  );
}

// ─── TÉMOIGNAGES ─────────────────────────────────────────────────────────────
function Testimonials({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const placeholders = [
    { text: "Témoignage client à intégrer", name: "P. M.", soin: "Activation de l'énergie vitale" },
    { text: "Témoignage client à intégrer", name: "S. L.", soin: "Soin vibratoire La Trame" },
    { text: "Témoignage client à intégrer", name: "A. D.", soin: "Photostimulation Dream Machine" },
  ];

  return (
    <section id="temoignages" style={{ padding: "100px 24px", background: "#f6f9ff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 16px" }}>
            Ce qu'ils en disent
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#6b7280", maxWidth: 440, margin: "0 auto", lineHeight: 1.7 }}>
            Les témoignages authentiques de nos clients seront ajoutés ici prochainement.
          </p>
        </RevealBox>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {placeholders.map((t, i) => (
            <RevealBox key={i} delay={i * 100}>
              <div style={{ background: "white", borderRadius: 24, padding: "36px 32px",
                boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
                border: "1px solid rgba(26,111,186,0.07)",
                position: "relative" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem", color: gold, opacity: 0.25,
                  position: "absolute", top: 12, left: 24, lineHeight: 1 }}>❝</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                  color: "#9ca3af", lineHeight: 1.7, fontStyle: "italic",
                  marginBottom: 28, marginTop: 28, minHeight: 80,
                  background: "#f8faff", borderRadius: 12, padding: "16px 20px",
                  border: "1px dashed #e5e7eb" }}>
                  {t.text}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${blue}40, ${gold}40)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                    color: blue, fontSize: "1rem" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                      fontSize: "0.9rem", color: "#1c2340" }}>{t.name}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
                      color: gold }}>{t.soin}</div>
                  </div>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const [openIdx, setOpenIdx] = React.useState(null);

  const faqs = [
    {
      q: "Les soins énergétiques remplacent-ils un traitement médical ?",
      a: "Non. Les soins énergétiques proposés par SerenityRituals ne remplacent pas un avis médical, un diagnostic, un traitement ou un suivi par un professionnel de santé. Ils s'inscrivent dans une démarche complémentaire de mieux-être."
    },
    {
      q: "Où se déroulent les séances ?",
      a: "Les séances peuvent se faire à domicile en Île-de-France ou à distance selon le type d'accompagnement choisi. Les informations pratiques sont précisées lors de la réservation."
    },
    {
      q: "Peut-on faire un soin à distance ?",
      a: "Oui, certains soins et accompagnements peuvent être proposés à distance, notamment les packs one-to-one en ligne."
    },
    {
      q: "Combien de séances faut-il prévoir ?",
      a: "Cela dépend du besoin de chacun. Une séance peut déjà offrir un moment de recentrage, tandis qu'un accompagnement sur plusieurs séances permet un travail plus progressif."
    },
    {
      q: "Comment prendre rendez-vous ?",
      a: "Vous pouvez prendre rendez-vous directement via le bouton Calendly présent sur le site, ou envoyer un message par email ou Instagram."
    },
    {
      q: "À qui s'adressent les soins ?",
      a: "Les soins s'adressent aux adultes souhaitant apaiser des tensions, retrouver de la clarté mentale, traverser une période de changement ou simplement s'offrir un moment de reconnexion à soi."
    },
    {
      q: "Les prix sont-ils affichés ?",
      a: "Oui, les prix seront affichés directement sur le site pour chaque prestation. Les tarifs définitifs seront ajoutés prochainement."
    },
  ];

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 16px" }}>
            Questions fréquentes
          </h2>
        </RevealBox>

        <div>
          {faqs.map((f, i) => (
            <RevealBox key={i} delay={i * 50}>
              <div style={{ borderBottom: `1px solid ${blue}12`, overflow: "hidden" }}>
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "22px 0",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    background: "none", border: "none", cursor: "pointer", gap: 20 }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: "1rem", color: "#1c2340", lineHeight: 1.4 }}>
                    {f.q}
                  </span>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                    background: openIdx === i ? blue : `${blue}12`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: openIdx === i ? "white" : blue, fontSize: "1.1rem",
                    transition: "all 0.25s",
                    transform: openIdx === i ? "rotate(45deg)" : "" }}>
                    +
                  </span>
                </button>
                <div style={{
                  maxHeight: openIdx === i ? 300 : 0, overflow: "hidden",
                  transition: "max-height 0.4s ease", paddingBottom: openIdx === i ? 20 : 0,
                }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                    color: "#6b7280", lineHeight: 1.75, margin: 0 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Process, Benefits, Testimonials, FAQ });
