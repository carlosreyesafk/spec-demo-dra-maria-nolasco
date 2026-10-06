import "./globals.css";

const PHONE_DISPLAY = "(809) 414-8517";
const PHONE_TEL = "tel:+18094148517";
const WHATSAPP = "https://wa.me/18094148517";
const EMAIL = "odontologianolasco@gmail.com";
const FACEBOOK = "https://www.facebook.com/clinicadentaldra.marianolasco/";
const ADDRESS =
  "C/ Antonio Guzmán Fernández Esq. Respaldo La Rubia No.3, Invivienda, Santo Domingo Este, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Cl%C3%ADnica%20Dental%20Dra.%20Mar%C3%ADa%20Nolasco%2C%20Antonio%20Guzm%C3%A1n%20Fern%C3%A1ndez%2C%20Invivienda%2C%20Santo%20Domingo%20Este&output=embed";

const SERVICES = [
  {
    icon: "🪥",
    title: "Odontología general",
    text: "Revisiones, diagnóstico y tratamiento integral para mantener tu salud bucal al día.",
  },
  {
    icon: "✨",
    title: "Limpieza dental",
    text: "Profilaxis profesional para una sonrisa sana, fresca y protegida contra caries y sarro.",
  },
  {
    icon: "😁",
    title: "Ortodoncia",
    text: "Corrección de la alineación dental para una mordida funcional y una sonrisa armónica.",
  },
  {
    icon: "🦷",
    title: "Endodoncia",
    text: "Tratamiento de conducto para salvar piezas dentales afectadas por caries profundas o trauma.",
  },
  {
    icon: "🛠️",
    title: "Prótesis dental",
    text: "Reposición de dientes perdidos con prótesis fijas o removibles, cómodas y naturales.",
  },
  {
    icon: "💎",
    title: "Estética dental",
    text: "Blanqueamiento y mejoras estéticas para que sonrías con total confianza.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">🦷</span>
            <span className="brand-name">
              Clínica Dental Dra. María Nolasco
              <small>Invivienda · Santo Domingo Este</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Agendar cita
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">🦷 Clínica dental en Santo Domingo Este</span>
              <h1>
                Tu sonrisa, en manos <span>expertas</span>
              </h1>
              <p className="lead">
                En la Clínica Dental Dra. María Nolasco cuidamos la salud bucal
                de toda la familia con atención cercana, profesional y
                tratamientos odontológicos integrales en Invivienda.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Agendar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Invivienda</strong>
                  Santo Domingo Este
                </div>
                <div>
                  <strong>🕘 Lun–Vie 8am–6pm</strong>
                  Sáb 8am–2pm
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Necesitas una cita?</h2>
              <p>
                Escríbenos o llámanos y con gusto te ayudamos a elegir el mejor
                horario para tu visita.
              </p>
              <ul className="hours-list">
                <li>
                  <span>Lunes – Viernes</span>
                  <span>8:00 am – 6:00 pm</span>
                </li>
                <li>
                  <span>Sábado</span>
                  <span>8:00 am – 2:00 pm</span>
                </li>
                <li>
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Reservar mi cita
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Cuidado dental integral para toda la familia</h2>
              <p>
                Tratamientos odontológicos pensados para prevenir, corregir y
                embellecer tu sonrisa en cada etapa de la vida.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span className="kicker" style={{ color: "var(--teal-500)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "0.78rem" }}>
                Nosotros
              </span>
              <h2>Una clínica de confianza en Invivienda</h2>
              <p>
                La Clínica Dental Dra. María Nolasco es un consultorio
                odontológico ubicado en Invivienda, Santo Domingo Este,
                dedicado al cuidado de la salud bucal de niños, jóvenes y
                adultos.
              </p>
              <p>
                Nuestro enfoque es simple: trato humano, diagnóstico honesto y
                tratamientos de calidad para que cada paciente salga sonriendo.
              </p>
              <ul className="about-points">
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Atención personalizada:</strong> cada caso se evalúa
                    de forma individual.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Para toda la familia:</strong> odontología general y
                    preventiva en un solo lugar.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Fácil de llegar:</strong> sobre la Av. Antonio
                    Guzmán Fernández, en Invivienda.
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-badge">
              <div className="big">📍</div>
              <p style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                Invivienda, Santo Domingo Este
              </p>
              <p>
                C/ Antonio Guzmán Fernández Esq. Respaldo La Rubia No.3
                <br />
                Teléfono {PHONE_DISPLAY}
              </p>
              <br />
              <a className="btn btn-primary" href="#contacto">
                Cómo contactarnos
              </a>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>
                    Lunes a viernes: 8:00 am – 6:00 pm
                    <br />
                    Sábados: 8:00 am – 2:00 pm
                    <br />
                    Domingos: cerrado
                  </p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos sobre la Av. Antonio Guzmán Fernández, esquina
                    Respaldo La Rubia, en el sector Invivienda de Santo Domingo
                    Este. Abre el mapa para ver la ruta desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Clínica Dental Dra. María Nolasco"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Agenda tu cita hoy mismo</h2>
              <p>
                Elige el canal que prefieras: te respondemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Escríbenos para agendar tu cita →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Llámanos en horario de atención →</div>
              </a>
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <div className="label">Correo electrónico</div>
                <div className="value">{EMAIL}</div>
                <div className="hint">Envíanos tus preguntas →</div>
              </a>
              <a className="contact-card" href={FACEBOOK} target="_blank" rel="noreferrer">
                <div className="label">Facebook</div>
                <div className="value">Clínica Dental Dra. María Nolasco</div>
                <div className="hint">Síguenos y mira nuestras novedades →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Clínica Dental Dra. María Nolasco</strong>
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY} · {EMAIL}
            </div>
            <div>
              <strong>Horario</strong>
              Lun–Vie 8:00 am – 6:00 pm
              <br />
              Sáb 8:00 am – 2:00 pm
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por{" "}
            <a href="mailto:carlosreyesafk@gmail.com">Carlos Reyes</a>. Los
            servicios mostrados son categorías generales de odontología y pueden
            ajustarse a la oferta real de la clínica.
          </p>
        </div>
      </footer>
    </>
  );
}
