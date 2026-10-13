import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const TG = "https://t.me/educationtteacher";
const GROUP = "https://t.me/educationtteacherr";
const REVIEWS = "https://t.me/+2hEHSIJtwwhlZTM6";

function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="brand" href="#top">
            Екатерина Маслова
          </a>
          <nav className="nav" aria-label="Разделы">
            <a href="#services">Услуги</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="portrait">
              <img src="/images/photo28.jpg" alt="Екатерина Маслова" />
            </div>
            <div>
              <p className="eyebrow">педагог · психолог</p>
              <h1>Екатерина Маслова</h1>
              <p className="lead">
                Помогаю детям уверенно и гармонично развиваться, а родителям чувствовать спокойствие.
                Наработала профессиональный опыт более 20 лет. Всегда бережный, уважительный и
                индивидуальный подход к каждому.
              </p>
              <a className="btn" href={TG} target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2 className="section-title">Для кого я работаю</h2>
            <p className="section-intro">
              Взрослому важно вырастить в ребёнке доброту и стержень, помочь спокойно созреть, как
              дереву, которому нужны свет, почва и время.
            </p>
            <ul className="who-list">
              <li>Дети от 2,5 до 17 лет</li>
              <li>Родители</li>
              <li>Беременные женщины и мамы в декрете</li>
              <li>Семьи в период перемен и переезда</li>
            </ul>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <h2 className="section-title">Чем я помогаю</h2>
            <div className="cards">
              <article className="card">
                <h3>Педагог</h3>
                <ul>
                  <li>Интеллектуальное и гармоничное развитие детей от 2,5 до 17 лет</li>
                  <li>Образование строится с учётом возрастных особенностей ребёнка</li>
                  <li>Подготовка к школе, включая формирование саморегуляции и уверенности</li>
                  <li>Montessori-подход и другие развивающие системы обучения</li>
                  <li>Системная работа с родителями</li>
                </ul>
              </article>
              <article className="card">
                <h3>Психолог</h3>
                <ul>
                  <li>Индивидуальное и семейное консультирование</li>
                  <li>Поддержка и сопровождение родителей</li>
                  <li>Помощь в периоды перемен и переезда</li>
                  <li>Помогаю родителям увидеть и раскрыть в своих детях потенциал</li>
                  <li>
                    Объясняю родителям, для чего нужна эмоциональная зрелость и гибкость в активной
                    современной жизни
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2 className="section-title">Как проходит работа</h2>
            <div className="steps">
              <div className="step">
                <strong>Системно</strong>
                Системный, индивидуальный и внимательный подход к каждому.
              </div>
              <div className="step">
                <strong>Удобно</strong>
                Онлайн и оффлайн формат.
              </div>
              <div className="step">
                <strong>Спокойно</strong>
                Комфортная и безопасная атмосфера без спешки.
              </div>
              <div className="step">
                <strong>К росту</strong>
                Фокус на раскрытии внутреннего потенциала ребёнка и глубокого понимания изученного.
              </div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <h2 className="section-title">Отзывы</h2>
            <p className="section-intro">
              Реальные отзывы родителей — в отдельной Telegram-группе. Можно почитать перед записью
              на консультацию.
            </p>
            <a className="btn" href={REVIEWS} target="_blank" rel="noreferrer">
              Смотреть отзывы в Telegram
            </a>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="offer">
              <h2 className="section-title">Бесплатная консультация</h2>
              <p>
                Первая встреча — 20 минут бесплатно. Мы познакомимся, обсудим запрос и поймём, как я
                могу быть вам полезна.
              </p>
              <a className="btn btn-lg" href={TG} target="_blank" rel="noreferrer">
                Записаться на бесплатную консультацию
              </a>
            </div>
          </div>
        </section>

        <section id="contacts">
          <div className="wrap">
            <h2 className="section-title">Контакты</h2>
            <div className="contacts">
              <a className="contact-row" href={TG} target="_blank" rel="noreferrer">
                <span>Личный Telegram</span>
                <strong>@educationtteacher</strong>
              </a>
              <a className="contact-row" href={GROUP} target="_blank" rel="noreferrer">
                <span>Группа</span>
                <strong>Наши дети в новом мире</strong>
              </a>
              <a className="contact-row" href={REVIEWS} target="_blank" rel="noreferrer">
                <span>Отзывы</span>
                <strong>Telegram-группа с отзывами</strong>
              </a>
              <a className="contact-row" href="tel:+37441042108">
                <span>Телефон</span>
                <strong>+374 41 042 108</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>© 2026 Екатерина Маслова · педагог и психолог</p>
          <p className="legal">ИП Маслова Е. В. · ИНН 40106627</p>
        </div>
      </footer>
    </>
  );
}