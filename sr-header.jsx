
// SerenityRituals — Header & Navigation
const CALENDLY_URL = "https://calendly.com/serenity-studio";

function Header({ colors }) {
  const blue = colors?.blue || "#1a6fba";
  const gold = colors?.gold || "#e8b43a";
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "À propos", href: "#apropos" },
    { label: "Expériences", href: "#soins" },
    { label: "Entreprises", href: "#entreprises" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const headerStyle = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
    backdropFilter: "blur(12px)",
    boxShadow: scrolled ? "0 2px 24px rgba(26,111,186,0.08)" : "none",
    transition: "all 0.35s ease",
    borderBottom: scrolled ? `1px solid rgba(26,111,186,0.08)` : "1px solid transparent",
  };

  const navLinkStyle = {
    color: "#1c2340", fontSize: "0.875rem", fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500, textDecoration: "none", padding: "6px 2px",
    position: "relative", transition: "color 0.2s",
    letterSpacing: "0.01em",
  };

  const btnStyle = {
    background: blue, color: "#fff",
    padding: "9px 18px", borderRadius: "50px",
    fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
    fontSize: "0.8rem", border: "none", cursor: "pointer",
    textDecoration: "none", display: "inline-block",
    transition: "all 0.25s ease",
    boxShadow: `0 4px 16px ${blue}33`,
    letterSpacing: "0.02em", whiteSpace: "nowrap",
  };

  return (
    <header style={headerStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72 }}>
        {/* Logo */}
        <a href="#accueil" onClick={e => scrollTo(e, "#accueil")} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%",
            overflow: "hidden", flexShrink: 0,
            boxShadow: `0 2px 12px ${blue}50`,
            backgroundImage: "url('logo-src.png')",
            backgroundSize: "148%",
            backgroundPosition: "50% 41%",
            backgroundRepeat: "no-repeat",
          }}/>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
              fontSize: "1.15rem", color: "#1c2340", lineHeight: 1, letterSpacing: "0.04em" }}>
              SerenityRituals
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem",
              color: blue, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85, whiteSpace: "nowrap", fontSize: "0.6rem" }}>
              Harmonisation énergétique
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }}
          className="desktop-nav">
          {navItems.map(n => (
            <a key={n.href} href={n.href} onClick={e => scrollTo(e, n.href)} style={navLinkStyle}
              className="nav-link">{n.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer" style={btnStyle}
          className="desktop-cta" onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 6px 22px ${blue}44`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 4px 16px ${blue}33`; }}>
          Réserver ma séance
        </a>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer",
            padding: 8, flexDirection: "column", gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: "#1c2340",
              borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen && i === 0 ? "translateY(7px) rotate(45deg)" :
                         menuOpen && i === 2 ? "translateY(-7px) rotate(-45deg)" : "",
              opacity: menuOpen && i === 1 ? 0 : 1 }}/>
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #f0f4f8",
          padding: "16px 24px 24px" }}>
          {navItems.map(n => (
            <a key={n.href} href={n.href} onClick={e => scrollTo(e, n.href)}
              style={{ ...navLinkStyle, display: "block", padding: "12px 0",
                borderBottom: "1px solid #f0f4f8", fontSize: "1rem" }}>
              {n.label}
            </a>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer"
            style={{ ...btnStyle, display: "block", textAlign: "center", marginTop: 16 }}>
            Réserver ma séance
          </a>
        </div>
      )}
    </header>
  );
}

Object.assign(window, { Header, CALENDLY_URL });
