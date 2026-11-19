import { useState } from 'react';
import './App.css';

const services = [
  { icon: '🖨️', title: 'Ксерокопия', desc: 'Ч/б и цветная, от одной копии', price: 'от 5 ₽' },
  { icon: '📄', title: 'Печать документов', desc: 'A4 / A3, лазерная и струйная', price: 'от 8 ₽' },
  { icon: '🎨', title: 'Цветная печать', desc: 'До 1200 dpi, фото и макеты', price: 'от 25 ₽' },
  { icon: '📚', title: 'Переплёт', desc: 'Термоклеевание, пружина, скоба', price: 'от 150 ₽' },
  { icon: '✨', title: 'Ламинация', desc: 'Глянец и мат, форматы A6–A2', price: 'от 60 ₽' },
  { icon: '📐', title: 'Баннеры и чертежи', desc: 'Широкий формат, до A0', price: 'от 300 ₽' },
];

const stats = [
  { value: '12', label: 'лет на рынке' },
  { value: '50k+', label: 'выполненных заказов' },
  { value: '15', label: 'минут — средний заказ' },
];

export default function App() {
  const [light, setLight] = useState(false);

  return (
    <div className={`app ${light ? 'light' : ''}`}>
      {/* фоновые пятна */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grid-overlay" />

      {/* хедер */}
      <header className="header">
        <div className="logo">
          <span className="logo-mark">⧉</span>
          <span className="logo-text">
            Полиграф<em>+</em>
          </span>
        </div>

        <nav className="nav">
          <a href="#services">Услуги</a>
          <a href="#price">Цены</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={() => setLight(v => !v)}
          aria-label="Переключить тему"
        >
          <span className="toggle-icon">{light ? '🌙' : '☀️'}</span>
          <span className="toggle-track">
            <span className="toggle-thumb" />
          </span>
        </button>
      </header>

      {/* hero */}
      <main>
        <section className="hero">
          <div className="hero-text">
            <span className="badge">● Работаем ежедневно с 9:00 до 21:00</span>
            <h1>
              Полиграфия <span className="grad">и ксерокс</span>
              <br /> в одном месте
            </h1>
            <p className="subtitle">
              Печать документов, копирование, ламинация, переплёт и баннеры —
              быстро, аккуратно и по доступным ценам. Принимаем файлы онлайн.
            </p>
            <div className="actions">
              <button className="btn btn-primary">
                Загрузить файл
                <span className="arrow">→</span>
              </button>
              <button className="btn btn-ghost">Прайс-лист</button>
            </div>

            <div className="stats">
              {stats.map((s, i) => (
                <div className="stat" key={i} style={{ '--d': `${i * 120}ms` }}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* анимированный «принтер» */}
          <div className="hero-visual">
            <div className="glow-ring" />
            <div className="printer">
              <div className="paper">
                <div className="line w80" />
                <div className="line w60" />
                <div className="line w70" />
                <div className="line w40" />
                <div className="stamp">ГОТОВО</div>
              </div>
              <div className="printer-body">
                <div className="slot" />
                <div className="leds">
                  <span className="led green" />
                  <span className="led amber" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* услуги */}
        <section className="services" id="services">
          <h2 className="section-title">Наши услуги</h2>
          <p className="section-sub">Всё для документов и печати — за один визит</p>

          <div className="cards">
            {services.map((s, i) => (
              <article
                className="card"
                key={i}
                style={{ '--d': `${i * 80}ms` }}
              >
                <div className="card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="card-foot">
                  <span className="price">{s.price}</span>
                  <span className="go">→</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="cta" id="contacts">
          <div>
            <h2>Нужна печать прямо сейчас?</h2>
            <p>Пришлите файл — подготовим к выдаче за 15 минут.</p>
          </div>
          <div className="cta-contacts">
            <a href="tel:+70000000000" className="phone">+7 (000) 000-00-00</a>
            <span className="addr">ул. Центральная, 15 · ежедневно 9:00–21:00</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Полиграф+ — полиграфия и ксерокс</span>
        <span>Печать · Копия · Ламинация · Переплёт</span>
      </footer>
    </div>
  );
}