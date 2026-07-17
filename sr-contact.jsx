
// SerenityRituals — Contact & Footer

const EMAIL = "hello@serenityrituals.fr";
const INSTAGRAM_URL = "https://instagram.com/serenity.rituals_";

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const [form, setForm] = React.useState({ prenom: "", email: "", interet: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const interets = [
    "Une séance",
    "Un pack",
    "Le programme signature",
    "Je ne sais pas encore",
  ];

  const validate = () => {
    const e = {};
    if (!form.prenom.trim()) e.prenom = "Veuillez indiquer votre prénom";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Veuillez écrire votre message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
  };

  const inputStyle = (hasErr) => ({
    width: "100%", padding: "13px 16px", borderRadius: 12,
    border: `1.5px solid ${hasErr ? "#ef4444" : "#e5e7eb"}`,
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#1c2340",
    background: "#fafcff", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
    fontWeight: 600, color: "#1c2340", marginBottom: 6, display: "block",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#f5f3ee" }}>
      <RevealBox style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ background: "#fffefb", borderRadius: 28, padding: "56px 48px",
          border: "1px solid rgba(0,0,0,0.07)" }} className="contact-card">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.16em", textTransform: "uppercase", color: gold, marginBottom: 18 }}>
            Contact
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 20px", lineHeight: 1.25 }}>
            Une question ? <em style={{ color: blue, fontStyle: "italic" }}>Écris-moi.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 32 }}>
            Si tu hésites entre deux formats, ou si une question te retient avant de
            réserver — écris-moi. Je te réponds personnellement.
          </p>

          {/* Contact cards */}
          {[
            { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { label: "Instagram", value: "@serenity.rituals_", href: INSTAGRAM_URL },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              style={{ display: "block", marginBottom: 16,
                padding: "18px 22px", background: "white", borderRadius: 16,
                textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)",
                transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${blue}40`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)"; }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem",
                color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                {c.label}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
                color: "#1c2340", fontSize: "1rem" }}>{c.value}</div>
            </a>
          ))}

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", margin: "24px 0 24px" }}/>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
            color: "#4a5568", marginBottom: 16 }}>
            Tu sais déjà ce qu'il te faut ?
          </p>
          <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10,
              background: blue, color: "#fff", padding: "14px 28px",
              borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.95rem", textDecoration: "none",
              boxShadow: `0 6px 24px ${blue}40`, transition: "all 0.25s", marginBottom: 40 }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
            Réserver ma séance →
          </a>

          {/* Form */}
          <div style={{ background: "white", borderRadius: 24, padding: "36px",
            boxShadow: "0 8px 40px rgba(26,63,186,0.06)",
            border: "1px solid rgba(26,111,186,0.08)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem",
                  color: "#1c2340", marginBottom: 12 }}>Message envoyé</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280",
                  lineHeight: 1.7 }}>Merci pour ton message. Je te répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}
                  className="contact-form-row">
                  <div>
                    <label style={labelStyle}>Ton prénom *</label>
                    <input type="text" placeholder="Prénom" value={form.prenom}
                      onChange={e => { setForm({...form, prenom: e.target.value}); setErrors({...errors, prenom: ""}); }}
                      style={inputStyle(errors.prenom)}
                      onFocus={e => e.target.style.borderColor = blue}
                      onBlur={e => e.target.style.borderColor = errors.prenom ? "#ef4444" : "#e5e7eb"}/>
                    {errors.prenom && <span style={{ fontSize: "0.78rem", color: "#ef4444" }}>{errors.prenom}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Ton email *</label>
                    <input type="email" placeholder="prenom@email.com" value={form.email}
                      onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ""}); }}
                      style={inputStyle(errors.email)}
                      onFocus={e => e.target.style.borderColor = blue}
                      onBlur={e => e.target.style.borderColor = errors.email ? "#ef4444" : "#e5e7eb"}/>
                    {errors.email && <span style={{ fontSize: "0.78rem", color: "#ef4444" }}>{errors.email}</span>}
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Ce qui t'intéresse</label>
                  <select value={form.interet} onChange={e => setForm({...form, interet: e.target.value})}
                    style={{ ...inputStyle(false), appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                    <option value="">Une séance · un pack · le programme · je ne sais pas encore</option>
                    {interets.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Ton message *</label>
                  <textarea placeholder="Ta question, en quelques mots." value={form.message}
                    onChange={e => { setForm({...form, message: e.target.value}); setErrors({...errors, message: ""}); }}
                    style={{ ...inputStyle(errors.message), minHeight: 120, resize: "vertical", lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = blue}
                    onBlur={e => e.target.style.borderColor = errors.message ? "#ef4444" : "#e5e7eb"}/>
                  {errors.message && <span style={{ fontSize: "0.78rem", color: "#ef4444" }}>{errors.message}</span>}
                </div>
                <button type="submit"
                  style={{ width: "100%", padding: "14px", background: blue, color: "#fff",
                    borderRadius: 50, border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem",
                    boxShadow: `0 6px 20px ${blue}35`, transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
                  Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </RevealBox>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const scrollTo = (e, href) => {
    if (!href.startsWith("#")) return; // page link, browser nav
    if (e) e.preventDefault();
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth" });
  };

  const links = [
    { label: "Accueil",             href: "#accueil" },
    { label: "À propos",            href: "#apropos" },
    { label: "Séances",             href: "#soins" },
    { label: "Programme signature", href: "programmesignature.html" },
    { label: "Entreprises",         href: "#entreprises" },
    { label: "Contact",             href: "#contact" },
  ];

  return (
    <footer style={{ background: "#0f1829", color: "white", padding: "90px 24px 32px", position: "relative", overflow: "hidden" }}>
      {/* Top fade — smooth depuis Contact #f6f9ff */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 100,
        background: "linear-gradient(to bottom, #f6f9ff 0%, rgba(246,249,255,0.3) 35%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }}/>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr",
          gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand + Réserver */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%",
                overflow: "hidden", flexShrink: 0,
                backgroundImage: "url('logo-src.png')",
                backgroundSize: "155%",
                backgroundPosition: "center 44%",
                backgroundRepeat: "no-repeat",
              }}/>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                  fontSize: "1.1rem", letterSpacing: "0.04em" }}>SerenityRituals</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem",
                  color: gold, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85 }}>
                  Harmonisation énergétique
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              Séances en Île-de-France.<br/>
              En ligne, partout en francophonie.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 44 }}>
              <a href={`mailto:${EMAIL}`}
                style={{ width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = blue; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M3 6.5 L12 13 L21 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                style={{ width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>

            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
              fontWeight: 600, color: gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>Réserver</h4>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
              Prêt(e) à commencer ? Réserve ta séance directement en ligne.
            </p>
            <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
              style={{ display: "inline-block", padding: "12px 24px",
                background: `linear-gradient(135deg, ${blue}, #2563b0)`,
                color: "#fff", borderRadius: 50, fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600, fontSize: "0.875rem", textDecoration: "none",
                transition: "all 0.25s", boxShadow: `0 4px 16px ${blue}40` }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}>
              Prendre rendez-vous
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
              fontWeight: 600, color: gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>Navigation</h4>
            {links.map(l => {
              const restColor = l.indent ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.55)";
              return (
                <a key={l.href} href={l.href}
                  onClick={e => scrollTo(e, l.href)}
                  style={{ display: "block", fontFamily: "'DM Sans', sans-serif",
                    fontSize: l.indent ? "0.82rem" : "0.9rem",
                    color: restColor,
                    textDecoration: "none", marginBottom: 9, transition: "color 0.2s",
                    paddingLeft: l.indent ? 14 : 0 }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = restColor}>
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
            color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} SerenityRituals — Tous droits réservés
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
            color: "rgba(255,255,255,0.3)", margin: 0, maxWidth: 500, textAlign: "right" }}>
            Les séances ne remplacent ni un avis médical, ni un diagnostic, ni un traitement.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── SCROLL DOTS — Indicateur position vertical (Apollo / magazine longform) ──
function ScrollDots() {
  const items = React.useMemo(() => ([
    { id: "accueil",      label: "Accueil" },
    { id: "apropos",      label: "À propos" },
    { id: "soins",        label: "Soins" },
    { id: "signature",    label: "Signature" },
    { id: "entreprises",  label: "Entreprises" },
    { id: "temoignages",  label: "Témoignages" },
    { id: "faq",          label: "FAQ" },
    { id: "contact",      label: "Contact" },
  ]), []);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const observers = items.map((it, idx) => {
      const el = document.getElementById(it.id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(idx); },
        { threshold: 0, rootMargin: "-35% 0px -50% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, [items]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const gold = "#FFB800";
  return (
    <nav className="scroll-dots" aria-label="Navigation rapide">
      {items.map((it, idx) => {
        const isActive = idx === active;
        return (
          <a key={it.id} href={"#" + it.id}
            className="scroll-dots__item"
            onClick={e => scrollTo(e, it.id)}
            aria-label={"Aller à " + it.label}
            aria-current={isActive ? "true" : undefined}>
            <span style={{
              display: "block",
              width: isActive ? 11 : 8,
              height: isActive ? 11 : 8,
              borderRadius: "50%",
              background: isActive ? gold : "transparent",
              border: isActive ? `1px solid ${gold}` : "1px solid rgba(232,180,58,0.45)",
              boxShadow: isActive ? `0 0 14px rgba(255,184,0,0.55)` : "none",
              transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
            }}/>
            <span className="scroll-dots__label">{it.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

Object.assign(window, { Contact, Footer, ScrollDots, EMAIL, INSTAGRAM_URL });
