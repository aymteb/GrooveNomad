import React from 'react';

const Contact = () => {
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
      <div style={{ marginBottom: '1rem' }}>
        <strong>Contact</strong> &mdash; Your Festival Ticket Companion
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
          About
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
      <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} GrooveNomad. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
