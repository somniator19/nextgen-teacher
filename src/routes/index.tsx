import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const TG = "https://t.me/educationtteacher";
const GROUP = "https://t.me/educationtteacherr";

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
                Помогаю детям гармонично развиваться, а родителям — чувствовать уверенность. Более 20 лет
                профессионального опыта: после университета сразу начала работать с детьми и семьями.
                Работаю бережно и с уважением к каждому.
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
              Рядом, когда важно вырасти спокойно — как дерево, которому нужны свет, почва и время.
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
                  <li>Подготовка к школе</li>
                  <li>Montessori-подход</li>
                  <li>Работа с родителями</li>
                </ul>
              </article>
              <article className="card">
                <h3>Психолог</h3>
                <ul>
                  <li>Индивидуальное и семейное консультирование</li>
                  <li>Поддержка родителей</li>
                  <li>Помощь в периоды перемен и переезда</li>
                  <li>Помогаю увидеть возможности роста и проявить потенциал</li>
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
                <strong>Бережно</strong>
                Индивидуальный подход к каждому запросу.
              </div>
              <div className="step">
                <strong>Удобно</strong>
                Онлайн и офлайн формат.
              </div>
              <div className="step">
                <strong>Спокойно</strong>
                Безопасная атмосфера без спешки.
              </div>
              <div className="step">
                <strong>К росту</strong>
                Фокус на возможностях, а не на проблемах.
              </div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <h2 className="section-title">Отзывы</h2>
            <div className="reviews">
              <blockquote className="review">
                <p>
                  «Я уже была на консультациях, но только с вами поняла, как это работает. Вы прямолинейная и
                  чётко видите, что волнует человека. Я осуществила свою мечту, теперь живу и учусь заграницей!»
                </p>
                <footer>— Angela</footer>
              </blockquote>
              <blockquote className="review">
                <p>
                  «Вместе с вами удалось понять, что не так было с моим выбором в работе и как двигаться дальше.
                  Через ваши вопросы и спокойное общение вы привели меня ко многим ответам.»
                </p>
                <footer>— Андрей</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="offer">
              <h2 className="section-title">Бесплатная консультация</h2>
              <p>
                Первая встреча — 30 минут бесплатно. Мы познакомимся, обсудим ваш запрос и поймём, как я могу
                быть полезна.
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
              <a className="contact-row" href="tel:+37441042108">
                <span>Телефон</span>
                <strong>+374 41 042 108</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">© 2026 Екатерина Маслова · педагог и психолог</div>
      </footer>
    </>
  );
}
