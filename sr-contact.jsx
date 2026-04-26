
// SerenityRituals — Contact & Footer

const EMAIL = "hello@serenityrituals.fr";
const INSTAGRAM_URL = "https://instagram.com/a-remplacer";

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const [form, setForm] = React.useState({ prenom: "", email: "", soin: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const soins = [
    "Activation de l'énergie vitale",
    "Soin vibratoire La Trame",
    "Photostimulation Dream Machine",
    "Pack one-to-one en ligne",
    "Autre / Je ne sais pas encore",
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
    fontWeight: 600, color: "#374151", marginBottom: 6, display: "block",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#f6f9ff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
        gridTemplateColumns: "1fr 1.2fr", gap: 72, alignItems: "start" }}
        className="two-col-grid">
        {/* Info */}
        <RevealBox>
          <div style={{ display: "inline-block", width: 44, height: 3,
            background: `linear-gradient(90deg, ${blue}, ${gold})`,
            borderRadius: 2, marginBottom: 20 }}/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 600,
            color: "#1c2340", margin: "0 0 20px", lineHeight: 1.25 }}>
            Parlons de vous
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#4a5568", lineHeight: 1.8, marginBottom: 40 }}>
            Pour toute question ou demande particulière, vous pouvez écrire directement
            via le formulaire, par email ou sur Instagram.
          </p>

          {/* Contact cards */}
          {[
            { icon: "✉", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { icon: "◈", label: "Instagram", value: "@serenityrituals", href: INSTAGRAM_URL },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16,
                padding: "18px 22px", background: "white", borderRadius: 16,
                textDecoration: "none", border: `1px solid ${blue}10`,
                boxShadow: "0 2px 12px rgba(26,63,186,0.05)", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 6px 24px ${blue}15`; e.currentTarget.style.transform = "translateX(4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,63,186,0.05)"; e.currentTarget.style.transform = ""; }}>
              <div style={{ width: 44, height: 44, borderRadius: 12,
                background: `${blue}10`, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "1.2rem", color: blue, flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
                  color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
                  color: "#1c2340", fontSize: "0.95rem" }}>{c.value}</div>
              </div>
            </a>
          ))}

          <div style={{ marginTop: 32 }}>
            <a href={window.CALENDLY_URL} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10,
                background: blue, color: "#fff", padding: "14px 28px",
                borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                fontSize: "0.95rem", textDecoration: "none",
                boxShadow: `0 6px 24px ${blue}40`, transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; }}>
              Prendre rendez-vous →
            </a>
          </div>
        </RevealBox>

        {/* Form */}
        <RevealBox delay={150}>
          <div style={{ background: "white", borderRadius: 24, padding: "40px",
            boxShadow: "0 8px 40px rgba(26,63,186,0.07)",
            border: "1px solid rgba(26,111,186,0.08)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem",
                  color: "#1c2340", marginBottom: 12 }}>Message envoyé</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b7280",
                  lineHeight: 1.7 }}>Merci pour votre message. Je vous répondrai dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input type="text" placeholder="Votre prénom" value={form.prenom}
                      onChange={e => { setForm({...form, prenom: e.target.value}); setErrors({...errors, prenom: ""}); }}
                      style={inputStyle(errors.prenom)}
                      onFocus={e => e.target.style.borderColor = blue}
                      onBlur={e => e.target.style.borderColor = errors.prenom ? "#ef4444" : "#e5e7eb"}/>
                    {errors.prenom && <span style={{ fontSize: "0.78rem", color: "#ef4444" }}>{errors.prenom}</span>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" placeholder="votre@email.com" value={form.email}
                      onChange={e => { setForm({...form, email: e.target.value}); setErrors({...errors, email: ""}); }}
                      style={inputStyle(errors.email)}
                      onFocus={e => e.target.style.borderColor = blue}
                      onBlur={e => e.target.style.borderColor = errors.email ? "#ef4444" : "#e5e7eb"}/>
                    {errors.email && <span style={{ fontSize: "0.78rem", color: "#ef4444" }}>{errors.email}</span>}
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Type de soin souhaité</label>
                  <select value={form.soin} onChange={e => setForm({...form, soin: e.target.value})}
                    style={{ ...inputStyle(false), appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                    <option value="">Sélectionner un soin...</option>
                    {soins.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea placeholder="Partagez votre besoin, vos questions..." value={form.message}
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
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </RevealBox>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Soins", href: "#soins" },
    { label: "Déroulement", href: "#deroulement" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ background: "#0f1829", color: "white", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: 48, marginBottom: 48 }} className="footer-grid">
          {/* Brand */}
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
              Île-de-France &amp; À distance
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={`mailto:${EMAIL}`}
                style={{ width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "1rem",
                  transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = blue; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                ✉
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                style={{ width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.85rem",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.background = gold; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                in
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
              fontWeight: 600, color: gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>Navigation</h4>
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                style={{ display: "block", fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem", color: "rgba(255,255,255,0.55)",
                  textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem",
              fontWeight: 600, color: gold, letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: 20 }}>Réserver</h4>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem",
              color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
              Prêt(e) à prendre soin de vous ? Réservez une séance directement en ligne.
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
            Les soins proposés ne remplacent pas un avis médical, un diagnostic ou un traitement médical.
          </p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer, EMAIL, INSTAGRAM_URL });
