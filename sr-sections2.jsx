
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 760px)",
            justifyContent: "center", gap: 28 }}>
            <div className="service-card entreprise-grid" style={{
              background: "white", borderRadius: 24, padding: "36px 32px",
              boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
              border: "1px solid rgba(26,111,186,0.08)",
              transition: "all 0.3s ease",
              display: "grid", gridTemplateColumns: "1fr 260px", gap: 36, alignItems: "stretch",
            }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.8rem", color: blue, marginBottom: 16,
                  width: 52, height: 52, background: `${blue}10`,
                  borderRadius: 14, display: "flex", alignItems: "center",
                  justifyContent: "center" }}>
                  ◎
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.45rem",
                  fontWeight: 600, color: "#1c2340", margin: "0 0 14px", lineHeight: 1.3 }}>
                  Pause régénérante — Photostimulation
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.94rem",
                  color: "#6b7280", lineHeight: 1.7, marginBottom: 22 }}>
                  Une expérience de photostimulation par fréquences lumineuses, qui induit
                  un état proche de la méditation profonde. En 15 à 20 minutes par
                  collaborateur, le système nerveux passe du mode « alerte » à une
                  récupération réelle.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px" }}>
                  {["Régulation du stress et de la charge mentale",
                    "Récupération profonde en un temps court",
                    "Concentration et clarté retrouvées pour la suite de la journée"].map(b => (
                    <li key={b} style={{ display: "flex", alignItems: "center", gap: 8,
                      fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                      color: "#4a5568", marginBottom: 7 }}>
                      <span style={{ color: gold, fontSize: "1rem" }}>›</span>{b}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                  color: "#6b7280", lineHeight: 1.7, marginBottom: 16 }}>
                  Côté logistique, trois choses suffisent : une pièce calme à l'écart
                  (la séance utilise des flashs lumineux), un fauteuil confortable, une
                  prise électrique. J'apporte tout le reste.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                  color: "#4a5568", lineHeight: 1.7, marginBottom: 24 }}>
                  <strong style={{ color: "#1c2340" }}>Formats</strong> : demi-journée (à
                  partir de 480 € HT) ou journée complète — séminaire, team building ou
                  intervention régulière.
                </p>
                <a href="mailto:hello@serenityrituals.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pause%20r%C3%A9g%C3%A9n%C3%A9rante%20en%20entreprise"
                  style={{ display: "block", textAlign: "center", padding: "12px 0",
                    borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                    fontSize: "0.9rem", textDecoration: "none", transition: "all 0.25s",
                    background: blue, color: "#fff",
                    boxShadow: `0 6px 22px ${blue}35` }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                  Demander un devis
                </a>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                  color: "#9ca3af", textAlign: "center", marginTop: 12 }}>
                  ou par email : hello@serenityrituals.fr
                </p>
              </div>
              <div className="entreprise-photo" style={{ background: "#ecf0fa",
                borderRadius: 14, overflow: "hidden", display: "flex",
                alignItems: "center", justifyContent: "center" }}>
                <img src="img/dream-machine.webp" loading="lazy"
                  alt="La Dream Machine, dispositif de photostimulation utilisé lors des séances Pause régénérante en entreprise."
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}/>
              </div>
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

  const reviews = [
    {
      name: "Ani K.",
      soin: "La Trame · Avis Google",
      text: "J'ai découvert la Trame un peu par curiosité et je ne regrette pas du tout. Dès la fin de la séance, je me suis sentie beaucoup plus légère, apaisée, avec une sensation de bien-être que je n'avais pas ressentie depuis longtemps.",
    },
    {
      name: "Yacine M.",
      soin: "Activation de l'énergie vitale · Avis Google",
      text: "J'ai effectué un peu moins d'une dizaine de séances avec Morgane, et chacune a été unique. L'accompagnement ne s'arrête pas à la fin d'une séance — même après, elle prend le temps de répondre aux questions.",
    },
    {
      name: "Virginie C.",
      soin: "Activation de l'énergie vitale · Avis Google",
      text: "Après 2 expériences, j'ai été épatée par la subtilité des séances. Même si cela peut paraître impressionnant, j'en suis ressortie libérée. Accompagnement super bien maîtrisé, dans une grande bienveillance.",
    },
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
            color: "#1c2340", margin: 0 }}>
            Ce qu'ils en disent
          </h2>
        </RevealBox>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {reviews.map((t, i) => (
            <RevealBox key={i} delay={i * 100} style={{ height: "100%" }}>
              <div style={{ background: "white", borderRadius: 24, padding: "36px 32px",
                boxShadow: "0 4px 24px rgba(26,63,186,0.06)",
                border: "1px solid rgba(26,111,186,0.07)",
                position: "relative", height: "100%",
                display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem", color: gold, opacity: 0.25,
                  position: "absolute", top: 12, left: 24, lineHeight: 1 }}>❝</div>
                <div style={{ display: "flex", gap: 3, marginTop: 28, marginBottom: 16 }}>
                  {[0,1,2,3,4].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={gold}>
                      <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14 L18.2 21 L12 17.3 L5.8 21 L7.3 14 L2 9.3 L9.1 8.6 Z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem",
                  color: "#4a5568", lineHeight: 1.7, fontStyle: "italic",
                  marginBottom: 28, flexGrow: 1 }}>
                  « {t.text} »
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${blue}40, ${gold}40)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 700,
                    color: blue, fontSize: "1rem", flexShrink: 0 }}>
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

        <RevealBox style={{ textAlign: "center", marginTop: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6b7280" }}>
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1.6 4.7-6.1 8.1-11.3 8.1-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.1-5.1C33.6 6.2 29.1 4.4 24 4.4 13.2 4.4 4.4 13.2 4.4 24S13.2 43.6 24 43.6 43.6 34.8 43.6 24c0-1.2-.1-2.4-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6 4.4C13.9 15 18.6 12 24 12c3.1 0 5.8 1.1 8 3l5.1-5.1C33.6 6.2 29.1 4.4 24 4.4c-7.5 0-14 4.3-17.7 10.3z"/>
              <path fill="#4CAF50" d="M24 43.6c5 0 9.5-1.9 12.9-5l-6-5c-1.9 1.3-4.3 2-6.9 2-5.2 0-9.6-3.4-11.3-8.1l-6 4.7C10 39.2 16.5 43.6 24 43.6z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6 5c-.4.4 6.8-5 6.8-14 0-1.2-.1-2.4-.4-3.5z"/>
            </svg>
            <span>
              Avis vérifiés sur Google —{" "}
              <a href="https://share.google/xg4Eay4GCYGUfYI5t" target="_blank" rel="noopener"
                style={{ color: blue, fontWeight: 600, textDecoration: "underline" }}>
                voir tous les avis
              </a>
            </span>
          </div>
        </RevealBox>
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
      q: "Est-ce que je reste conscient(e) pendant l'Activation de l'énergie vitale ?",
      a: "Oui, du début à la fin. L'Activation peut amener dans un état modifié de conscience — quelque chose entre veille et sommeil, proche d'une méditation profonde. On parle parfois de transe consciente : le corps se laisse traverser, mais tu entends la musique, tu peux bouger, ouvrir les yeux, t'arrêter à tout moment. Rien ne se fait sans toi."
    },
    {
      q: "Comment se déroule concrètement une Trame ?",
      a: "Allongé(e) sur table, entièrement habillé(e). Une séquence précise de gestes posés sur le corps, dans le calme, pendant environ 45 minutes."
    },
    {
      q: "Où se déroulent les séances ?",
      a: [
        "La Trame : en présentiel à Villeneuve-Saint-Georges, ou en ligne.",
        "L'Activation de l'énergie vitale : en studio à Paris ou en ligne — le lieu exact du studio est précisé à l'ouverture de chaque séance présentielle.",
      ],
      photo: {
        src: "img/cabinet.webp",
        alt: "Le cabinet de séance à Villeneuve-Saint-Georges : table de soin, lumière naturelle, vue sur le jardin.",
      },
      transport: [
        { icon: "cable-car-svg",
          text: "Câble C1 (téléphérique) depuis le terminus de la ligne 8, Pointe du Lac, jusqu'à l'arrêt Villa Nova — puis 5 minutes à pied." },
        { icon: "ti-train",
          text: "RER D jusqu'à la gare de Villeneuve-Saint-Georges, puis bus 427 — environ 9 minutes." },
      ],
      transportNote: "L'adresse précise te sera envoyée après confirmation de ta réservation.",
    },
    {
      q: "Comment se passe une séance en ligne ?",
      a: [
        "Depuis chez toi, dans ton propre cocon : un endroit calme, de quoi t'allonger, un casque sur les oreilles. Le champ collectif est là, l'expérience tout aussi profonde — et à la fin de la séance, tu entends les ressentis des autres participants, comme si vous étiez dans la même pièce.",
        "Pas de trajet avant, pas de trajet après : tu peux rester allongé(e) aussi longtemps que tu en as besoin, et laisser la séance s'installer sans rien casser de ton rythme.",
      ],
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
                  maxHeight: openIdx === i ? (f.photo ? 900 : (Array.isArray(f.a) ? 420 : 300)) : 0, overflow: "hidden",
                  transition: "max-height 0.4s ease", paddingBottom: openIdx === i ? 20 : 0,
                }}>
                  {f.photo ? (
                    <div>
                    <div className="faq-answer-photo-grid" style={{ display: "grid",
                      gridTemplateColumns: "1fr 200px", gap: 20, alignItems: "stretch" }}>
                      <div style={{ display: "flex", flexDirection: "column",
                        justifyContent: "center", height: "100%", gap: 12 }}>
                        {(Array.isArray(f.a) ? f.a : [f.a]).map((para, pi) => (
                          <p key={pi} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                            color: "#6b7280", lineHeight: 1.75, margin: 0 }}>
                            {para}
                          </p>
                        ))}
                      </div>
                      <img src={f.photo.src} loading="lazy" alt={f.photo.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover",
                          borderRadius: 12, display: "block" }}/>
                    </div>
                    {f.transport && (
                      <div style={{ background: "#EAF0FA", borderRadius: 12,
                        padding: 16, marginTop: 20 }}>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                          fontSize: "0.88rem", color: "#1c2340", marginBottom: 12 }}>
                          Comment venir au cabinet
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                          {f.transport.map((t, ti) => (
                            <div key={ti} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                              {t.icon === "cable-car-svg" ? (
                                <svg viewBox="0 0 24 24" width="17" height="17" fill="none"
                                  stroke="#185FA5" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"
                                  style={{ flexShrink: 0, marginTop: 1, position: "relative", top: 2 }}>
                                  <path d="M2 5l20 -2"/>
                                  <path d="M12 4.5v4"/>
                                  <rect x="6" y="9" width="12" height="9" rx="2"/>
                                  <path d="M10 9v9"/>
                                  <path d="M14 9v9"/>
                                </svg>
                              ) : (
                                <i className={`ti ${t.icon}`} style={{ fontSize: 17, color: "#185FA5",
                                  lineHeight: 1.5, flexShrink: 0, marginTop: 1 }}/>
                              )}
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                                color: "#4a5568", lineHeight: 1.6 }}>{t.text}</span>
                            </div>
                          ))}
                        </div>
                        {f.transportNote && (
                          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)",
                            marginTop: 14, paddingTop: 12 }}>
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                              color: "#9ca3af", lineHeight: 1.6 }}>{f.transportNote}</span>
                          </div>
                        )}
                      </div>
                    )}
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {(Array.isArray(f.a) ? f.a : [f.a]).map((para, pi) => (
                        <p key={pi} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
                          color: "#6b7280", lineHeight: 1.75, margin: 0 }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
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
