import React from 'react';


const benefits = [
  { emoji: "🤖", label: "IA", text: "Predicción Inteligente" },
  { emoji: "🛌", label: "Prevención", text: "Consejos Diarios" },
  { emoji: "📈", label: "Reporte", text: "Ciclo del Sueño" },
  { emoji: "🔒", label: "Acceso", text: "Privacidad y Acceso libre" },
];

function InfoSection() {
  return (
    <section className="home-info minimal-info">
      <h2 className="minimal-title">Dormir bien es vivir mejor</h2>
      <div className="minimal-highlight">
        <span className="highlight-number">+40%</span>
        <span className="highlight-text">
          de personas reportan problemas de sueño tras la pandemia
        </span>
      </div>
      <p className="minimal-desc">
        SleepWell te ayuda a prevenir y entender los trastornos del sueño ligados a la ansiedad,
        usando inteligencia artificial para anticipar riesgos y darte recomendaciones personalizadas.
      </p>

      <ul className="minimal-benefits">
        {benefits.map((b, index) => (
          <li key={index} className="benefit-card">
            <span role="img" aria-label={b.label}>{b.emoji}</span>
            <span>{b.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InfoSection;
