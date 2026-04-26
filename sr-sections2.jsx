
// SerenityRituals — Déroulement, Bienfaits, Témoignages, FAQ

// ─── DÉROULEMENT ─────────────────────────────────────────────────────────────
function Process({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const steps = [
    { n: "01", title: "Prise de contact", desc: "Vous réservez votre séance via Calendly ou prenez contact par email ou Instagram." },
    { n: "02", title: "Échange initial", desc: "Un temps d'échange permet de comprendre votre besoin du moment et de poser une intention pour la séance." },
    { n: "03", title: "Soin énergétique ou vibratoire", desc: "La séance se déroule dans un cadre calme, bienveillant et respectueux de votre rythme." },
    { n: "04", title: "Retour après séance", desc: "Un temps de retour permet de partager les ressentis et d'intégrer l'expérience en douceur." },
    { n: "05", title: "Suivi si nécessaire", desc: "Selon vos besoins, un accompagnement ponctuel ou un pack one-to-one peut être proposé." },
  ];

  return (
    <section id="deroulement" style={{ padding: "100px 24px", background: "#f6f9ff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 16px" }}>
            Comment se déroule une séance ?
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Un parcours simple et bienveillant, pensé pour vous accueillir en douceur.
          </p>
        </RevealBox>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 36, top: 24, bottom: 24,
            width: 2, background: `linear-gradient(180deg, ${blue}30, ${gold}30)`,
            borderRadius: 1 }} className="process-line"/>

          {steps.map((s, i) => (
            <RevealBox key={s.n} delay={i * 100}>
              <div style={{ display: "flex", gap: 28, marginBottom: 36, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 72, height: 72, borderRadius: "50%",
                  background: "white", border: `2px solid ${i === 0 ? blue : `${blue}30`}`,
                  display: "flex", flexDirection: "column", alignItems: "center",
                  justifyContent: "center", boxShadow: `0 4px 16px ${blue}12`,
                  transition: "border-color 0.3s", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem", fontWeight: 700, color: blue, lineHeight: 1 }}>
                    {s.n}
                  </span>
                </div>
                <div style={{ background: "white", borderRadius: 18, padding: "22px 28px",
                  flex: 1, boxShadow: "0 4px 20px rgba(26,63,186,0.05)",
                  border: "1px solid rgba(26,111,186,0.07)" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem",
                    fontWeight: 600, color: "#1c2340", margin: "0 0 8px" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                    color: "#6b7280", lineHeight: 1.7, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </RevealBox>
          ))}
        </div>

        <RevealBox style={{ textAlign: "center", marginTop: 16 }}>
          <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
            style={{ background: blue, color: "#fff", padding: "14px 36px",
              borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.95rem", textDecoration: "none", display: "inline-block",
              boxShadow: `0 6px 24px ${blue}40`, transition: "all 0.25s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
            Réserver ma séance
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
