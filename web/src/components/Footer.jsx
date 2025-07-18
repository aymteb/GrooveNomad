import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        background: 'var(--primary-blue)',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        marginTop: '3rem',
      }}
    >
      <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>GrooveNomad</strong> &mdash; Votre compagnon pour les billets de festival
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <a
            href="/about"
            style={{
              color: '#fff',
              margin: '0 1rem',
              textDecoration: 'underline',
            }}
          >
            À propos
          </a>
          <a
            href="/contact"
            style={{
              color: '#fff',
              margin: '0 1rem',
              textDecoration: 'underline',
            }}
          >
            Contact
          </a>
          <a
            href="/faq"
            style={{
              color: '#fff',
              margin: '0 1rem',
              textDecoration: 'underline',
            }}
          >
            FAQ
          </a>
        </div>
      </div>
      <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} GrooveNomad. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
