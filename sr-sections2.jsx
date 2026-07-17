
// SerenityRituals — Déroulement, Bienfaits, Témoignages, FAQ

// ─── MON APPROCHE ─────────────────────────────────────────────────────────────
function Process({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth" });
  };

  const tiers = [
    {
      title: "Une séance",
      desc: "Une Trame ou une Activation. Dès la première fois, quelque chose se relâche : le corps s'apaise, la tête s'allège.",
      linkLabel: "Découvrir les séances",
      href: "#soins",
      onClick: scrollTo("#soins"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke={gold} strokeWidth="1.6"/>
          <circle cx="12" cy="12" r="2.4" fill={gold}/>
        </svg>
      ),
    },
    {
      title: "Un cycle de séances",
      desc: "Plusieurs séances rapprochées, pour un travail qui descend plus profond et qui s'installe.",
      linkLabel: "Voir les packs",
      href: "#packs",
      onClick: scrollTo("#packs"),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 9a8 8 0 0 1 13.6-5.7L19 5" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          <path d="M17 2.5v3.5h-3.5" stroke={gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M20 15a8 8 0 0 1-13.6 5.7L5 19" stroke={gold} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          <path d="M7 21.5V18h3.5" stroke={gold} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Le programme signature",
      desc: "Un accompagnement complet qui combine plusieurs approches. Tu peux commencer directement ici.",
      linkLabel: "Découvrir le programme",
      href: "programmesignature.html",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z"
            stroke={gold} strokeWidth="1.4" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="programme" style={{ padding: "96px 24px 88px", background: "#eaf2fd" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <RevealBox style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Mon approche
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 20px", lineHeight: 1.2 }}>
            Une approche qui s'adapte à toi,{" "}
            <em style={{ color: blue, fontStyle: "italic" }}>à ton rythme.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
            color: blue, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Il n'y a pas un seul chemin. Trois portes d'entrée — tu choisis celle qui correspond à là où tu en es.
          </p>
        </RevealBox>

        {/* 3 colonnes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
          className="approach-grid">
          {tiers.map((t, i) => (
            <RevealBox key={i} delay={i * 120}>
              <div style={{
                padding: "32px 28px",
                borderRadius: 20,
                border: "1px solid rgba(26,111,186,0.08)",
                background: "#fff",
                boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
                height: "100%", display: "flex", flexDirection: "column",
              }}>
                <div style={{ width: 48, height: 48, background: `${gold}22`,
                  borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 22 }}>
                  {t.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem",
                  fontWeight: 600, color: "#1c2340", margin: "0 0 12px", lineHeight: 1.25 }}>
                  {t.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
                  color: "#6b7280", lineHeight: 1.7, margin: "0 0 24px", flexGrow: 1 }}>
                  {t.desc}
                </p>
                <a href={t.href} onClick={t.onClick}
                  style={{ display: "inline-block", textAlign: "center", padding: "11px 22px",
                    borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: "0.875rem", textDecoration: "none", transition: "all 0.25s",
                    border: `2px solid ${blue}`, color: blue, background: "transparent",
                    alignSelf: "flex-start" }}
                  onMouseEnter={e => { e.currentTarget.style.background = blue; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = blue; }}>
                  {t.linkLabel}
                </a>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ENTREPRISES ──────────────────────────────────────────────────────────────
function Entreprises({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  return (
    <section id="entreprises" style={{ padding: "100px 24px", background: "#faf9f6", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <RevealBox style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Pour les entreprises
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 16px", lineHeight: 1.25 }}>
            Offrir à vos équipes un{" "}
            <em style={{ color: blue, fontStyle: "italic" }}>vrai temps de pause.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Une expérience immersive pour soutenir la détente, le recentrage et la régulation
            émotionnelle des collaborateurs — en séminaire, en team building ou en intervention ponctuelle.
          </p>
        </RevealBox>

        <RevealBox delay={120}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 480px)",
            justifyContent: "center", gap: 28 }}>
            <div className="service-card" style={{
              background: "white", borderRadius: 24, padding: "36px 32px",
              boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
              border: "1px solid rgba(26,111,186,0.08)",
              transition: "all 0.3s ease",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ fontSize: "1.8rem", color: blue, marginBottom: 16,
                width: 52, height: 52, background: `${blue}10`,
                borderRadius: 14, display: "flex", alignItems: "center",
                justifyContent: "center" }}>
                ◎
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem",
                fontWeight: 600, color: "#1c2340", margin: "0 0 14px", lineHeight: 1.3 }}>
                Photostimulation Dream Machine
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.94rem",
                color: "#6b7280", lineHeight: 1.7, marginBottom: 22 }}>
                Une expérience immersive de photostimulation qui invite à la relaxation profonde,
                à l'exploration intérieure et à l'apaisement mental. Format adaptable :
                individuel, petit groupe ou événement d'entreprise.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
                {["Favoriser la détente mentale",
                  "Accompagner le lâcher-prise",
                  "Stimuler l'imaginaire intérieur",
                  "Créer un moment de pause profonde"].map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 8,
                    fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                    color: "#4a5568", marginBottom: 7 }}>
                    <span style={{ color: gold, fontSize: "1rem" }}>›</span>{b}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                onClick={e => { e.preventDefault(); const el = document.querySelector('#contact'); if(el){ window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: 'smooth' }); } }}
                style={{ display: "block", textAlign: "center", padding: "12px 0",
                  borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                  fontSize: "0.9rem", textDecoration: "none", transition: "all 0.25s",
                  background: blue, color: "#fff",
                  boxShadow: `0 6px 22px ${blue}35` }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                Demander un devis
              </a>
            </div>
          </div>
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
    "Des tensions qui se relâchent — souvent dès la première séance",
    "Moins de brouillard, des idées plus nettes",
    "Une légèreté, comme après avoir déposé quelque chose",
    "Des émotions qui circulent, au lieu de rester coincées",
    "Un relâchement profond — rare quand on vit en alerte",
    "De l'énergie qui revient, et le sentiment de se retrouver",
  ];

  return (
    <section style={{ padding: "100px 24px", background: "#eaf2fd" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 72, alignItems: "start" }}
        className="two-col-grid">

        <RevealBox>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Les effets
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 24px", lineHeight: 1.25 }}>
            Des bienfaits ressentis,{" "}
            <em style={{ color: blue, fontStyle: "italic" }}>en douceur.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.02rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 32 }}>
            Chaque personne vit la séance différemment. Voici ce qui revient le plus
            souvent, séance après séance :
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic",
            fontSize: "1.05rem", color: "#6b7280", lineHeight: 1.6,
            borderLeft: `3px solid ${gold}`, paddingLeft: 20 }}>
            Les séances ne remplacent ni un avis médical, ni un diagnostic, ni un
            traitement. Elles viennent en complément, jamais à la place.
          </p>
        </RevealBox>

        <RevealBox delay={150}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {items.map((item) => (
              <div key={item}
                style={{
                  background: "#fff",
                  borderRadius: 16, padding: "20px 24px",
                  boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
                }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
                  color: "#1c2340", lineHeight: 1.5 }}>
                  {item}
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
      q: "Qu'est-ce que je vais ressentir pendant une séance ?",
      a: "C'est propre à chacun : de la chaleur, un relâchement profond, des émotions qui remontent. Certains ne ressentent rien sur le moment — et c'est dans les jours qui suivent qu'un apaisement s'installe. Dans tous les cas, rien ne fait mal."
    },
    {
      q: "Comment se déroule concrètement une Trame ?",
      a: "Allongé(e) sur table, entièrement habillé(e). Une séquence précise de gestes posés sur le corps, dans le calme, pendant environ 45 minutes."
    },
    {
      q: "Où se déroulent les séances ?",
      a: "La Trame : en présentiel à Villeneuve-Saint-Georges, ou en ligne. L'Activation de l'énergie vitale : en studio à Paris — le lieu exact est précisé à l'ouverture de chaque séance présentielle — ou en ligne."
    },
    {
      q: "Comment se passe une séance en ligne ?",
      a: "Depuis chez toi, dans ton propre cocon : un endroit calme, de quoi t'allonger, des écouteurs. Le champ collectif est là, l'expérience tout aussi profonde."
    },
    {
      q: "Combien de séances faut-il prévoir ?",
      a: "Une séance produit déjà des effets réels. Pour un travail de fond, un cycle de trois est le format le plus juste — c'est pour ça que les packs existent."
    },
    {
      q: "Je n'y crois pas trop. C'est un problème ?",
      a: "Non — il n'y a rien à croire. La séance agit sur le corps et le système nerveux, que la tête soit convaincue ou non. Viens comme tu es."
    },
    {
      q: "Est-ce que ça remplace un suivi médical ?",
      a: "Non, jamais. Les séances viennent en complément d'un suivi médical ou psychologique, pas à la place. Je ne pose aucun diagnostic et ne touche à aucun traitement."
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

Object.assign(window, { Process, Entreprises, Benefits, Testimonials, FAQ });
