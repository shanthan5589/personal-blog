import type { CSSProperties } from "react";

const stories = [
  {
    category: "Essay",
    title: "The comfort of doing one thing at a time",
    excerpt: "A small argument for attention as a daily practice, not a scarce resource.",
    date: "Jul 12, 2026",
    time: "5 min read",
    tone: "ochre",
  },
  {
    category: "Culture",
    title: "What a neighbourhood bookstore remembers",
    excerpt: "The quiet infrastructure of a city: familiar spines, hand-written cards, and the people who return.",
    date: "Jul 05, 2026",
    time: "7 min read",
    tone: "blue",
  },
  {
    category: "Notes",
    title: "On making room for unfinished thoughts",
    excerpt: "Some ideas need to live in the margins before they learn how to speak.",
    date: "Jun 28, 2026",
    time: "3 min read",
    tone: "coral",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Notes home">Notes<span>.</span></a>
          <div className="nav-links">
            <a href="#journal">Journal</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="menu-link" href="#journal">Index <span aria-hidden="true">↗</span></a>
        </nav>

        <header className="hero" id="top">
          <p className="eyebrow"><span /> An independent journal by Shanthan</p>
          <h1>For the parts of the day nobody <em>photographs.</em></h1>
          <div className="hero-bottom">
            <p>Dispatches on culture, work, good books and the overlooked details that make a day feel like our own.</p>
            <a href="#journal" className="circle-link" aria-label="Explore latest writing">↓</a>
          </div>
        </header>
      </section>

      <section className="feature-wrap" aria-labelledby="featured-heading">
        <div className="section-label"><span>01</span><h2 id="featured-heading">Featured story</h2></div>
        <article className="feature-card">
          <div className="feature-art" aria-hidden="true">
            <div className="sun" />
            <div className="horizon" />
            <div className="hill hill-one" />
            <div className="hill hill-two" />
            <span className="art-note">A quiet morning<br />in Kyoto</span>
          </div>
          <div className="feature-copy">
            <p className="kicker">Travel <i>·</i> June 19, 2026</p>
            <h2>The places that teach us how to pay attention</h2>
            <p className="feature-description">On revisiting the same street until its everyday rituals become visible—and why this may be the best kind of travel.</p>
            <a href="#read" className="text-link">Read the story <span>→</span></a>
          </div>
        </article>
      </section>

      <section className="journal" id="journal" aria-labelledby="journal-heading">
        <div className="section-label"><span>02</span><h2 id="journal-heading">Recent writing</h2><a href="#all">View all <span>↗</span></a></div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article className="story" key={story.title} style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
              <div className={`story-art ${story.tone}`} aria-hidden="true">
                {story.tone === "ochre" && <><div className="shape-block" /><div className="shape-arch" /></>}
                {story.tone === "blue" && <><div className="blue-moon" /><div className="blue-arch" /></>}
                {story.tone === "coral" && <><div className="coral-line line-one" /><div className="coral-line line-two" /><div className="coral-dot" /></>}
              </div>
              <p className="kicker">{story.category} <i>·</i> {story.time}</p>
              <h3><a href="#read">{story.title}</a></h3>
              <p className="excerpt">{story.excerpt}</p>
              <p className="story-date">{story.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow"><span /> A little about this place</p>
        <div className="about-grid">
          <h2>About <em>me.</em></h2>
          <div><p>I&apos;m someone who likes to overthink things, get curious about random ideas, and occasionally disappear down a rabbit hole for hours. This blog is just a small corner of the internet where I write about things I find interesting, confusing, beautiful, or worth remembering.</p></div>
        </div>
      </section>

      <section className="newsletter" id="contact">
        <div><p className="eyebrow"><span /> Say hello</p><h2>Feel free to<br /><em>reach out.</em></h2></div>
        <div className="contact-copy">
          <p>Have a thought, a question, or just want to say hello? I&apos;d love to hear from you.</p>
          <a href="mailto:shanthan.yxo@gmail.com" className="contact-email">shanthan.yxo@gmail.com <span>→</span></a>
        </div>
      </section>

      <footer><a className="wordmark" href="#top">Notes<span>.</span></a><p>© 2026 Shanthan. Made slowly.</p><div><a href="https://x.com/shanthan5589" target="_blank" rel="noreferrer">X / Twitter</a><a href="mailto:shanthan.yxo@gmail.com">Email</a></div></footer>
    </main>
  );
}
