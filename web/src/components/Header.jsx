import React from "react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/festivals", label: "Festivals" },
    { href: "/artistes", label: "Artistes" },
    { href: "/contact", label: "Contact" },
];

const Header = () => {
    return (
        <header
            style={{
                background: "#fff",
                borderBottom: "1px solid #e5e5e5",
                padding: "0 2rem",
                position: "sticky",
                top: 0,
                zIndex: 100,
            }}
        >
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "64px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                {/* Logo */}
                <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <img
                        src="../assets/logo.svg"
                        alt="GrooveNomad Logo"
                        style={{ height: 36, marginRight: 12 }}
                    />
                    <span style={{ fontWeight: 700, fontSize: 22, color: "#222" }}>GrooveNomad</span>
                </a>

                {/* Navigation */}
                <ul
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                style={{
                                    color: "#222",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                    fontSize: 16,
                                    transition: "color 0.2s",
                                }}
                                onMouseOver={e => (e.currentTarget.style.color = "#ffdc00")}
                                onMouseOut={e => (e.currentTarget.style.color = "#222")}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* User actions (optional, like BackMarket) */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <a
                        href="/login"
                        style={{
                            color: "#222",
                            textDecoration: "none",
                            fontWeight: 500,
                            fontSize: 16,
                            padding: "8px 16px",
                            borderRadius: 4,
                            border: "1px solid #e5e5e5",
                            background: "#fafafa",
                            transition: "background 0.2s",
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = "#ffdc00")}
                        onMouseOut={e => (e.currentTarget.style.background = "#fafafa")}
                    >
                        Se connecter
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
