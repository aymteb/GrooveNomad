import React from 'react';

const Contact = () => {
  return (
    <footer
      className="footer"
      style={{
        background: 'var(--primary-blue)',
        color: '#fff',
        padding: ' 32px 128px',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '73px' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-sora">
          Nous contacter
        </h2>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
              marginTop: '32px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <div className="flex items-center mb-6">
                <span className="text-xl">🌐</span>
                <h3 className="text-lg font-semibold font-sora">
                  Réseaux sociaux
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div>
                  Instagram :{' '}
                  <a
                    href="#"
                    className="underline hover:text-slate-200 text-white"
                  >
                    @groove.nomad
                  </a>
                </div>
                <div>TikTok : @groovenomad</div>
                <div>
                  Facebook :{' '}
                  <a
                    href="#"
                    className="underline hover:text-slate-200 text-white"
                  >
                    Groove Nomad
                  </a>
                </div>
                <div>WhatsApp : +33 6 12 34 56 78 (Support & réservation)</div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                height: '100%',
                justifyContent: 'space-evenly',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <div className="flex items-start">
                  <span className="text-lg">📧</span>
                  <div>
                    Email :{' '}
                    <a
                      href="mailto:info.groove@groovenomad.com"
                      className="underline hover:text-slate-200"
                    >
                      info.groove@groovenomad.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-lg">📞</span>
                  <div>
                    Téléphone :{' '}
                    <a
                      href="tel:+33184881234"
                      className="hover:text-slate-200 text-white"
                    >
                      +33 1 84 88 12 34
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-lg">📍</span>
                  <div>
                    Adresse : Groove Nomad — 42 rue du BPM, 75011 Paris, France
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-lg">🎧</span>
                  <div>
                    Service client : Disponible du lundi au vendredi, 10h-18h.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
