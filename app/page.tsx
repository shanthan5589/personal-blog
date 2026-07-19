// Future post placeholders. Keep these here until their full articles are ready.
// {
//   category: "Culture",
//   title: "What a neighbourhood bookstore remembers",
//   excerpt: "The quiet infrastructure of a city: familiar spines, hand-written cards, and the people who return.",
// }
// {
//   category: "Notes",
//   title: "On making room for unfinished thoughts",
//   excerpt: "Some ideas need to live in the margins before they learn how to speak.",
// }

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
          <a className="menu-link" href="#journal">Writing <span aria-hidden="true">{"\u2197"}</span></a>
        </nav>

        <header className="hero" id="top">
          <p className="eyebrow"><span /> An independent journal by Shanthan</p>
          <h1>For the parts of the day nobody <em>photographs.</em></h1>
          <div className="hero-bottom">
            <p>Dispatches on culture, work, good books and the overlooked details that make a day feel like our own.</p>
            <a href="#journal" className="circle-link" aria-label="Explore featured writing">&darr;</a>
          </div>
        </header>
      </section>

      <section className="feature-wrap" id="journal" aria-labelledby="featured-heading">
        <div className="section-label"><span>01</span><h2 id="featured-heading">Featured post</h2></div>
        <article className="feature-card">
          <div className="feature-art ochre" aria-hidden="true">
            <div className="shape-block" />
            <div className="shape-arch" />
          </div>
          <div className="feature-copy">
            <p className="kicker">Essay <i>&middot;</i> Jul 18, 2026 <i>&middot;</i> 5 min read</p>
            <h2>I Want to Feel Human Again</h2>
            <p className="feature-description">On development, AI, loneliness, and wanting to feel alive beyond the laptop screen.</p>
            <a href="/posts/feel-human-again" className="text-link">Read the post <span>&rarr;</span></a>
          </div>
        </article>
      </section>

      <section className="journal" id="recent" aria-labelledby="journal-heading">
        <div className="section-label"><span>02</span><h2 id="journal-heading">Recent writing</h2></div>
        <div className="story-grid">
          <article className="story">
            <div className="story-art ochre" aria-hidden="true"><div className="shape-block" /><div className="shape-arch" /></div>
            <p className="kicker">Essay <i>&middot;</i> 5 min read</p>
            <h3><a href="/posts/feel-human-again">I Want to Feel Human Again</a></h3>
            <p className="excerpt">On development, AI, loneliness, and wanting to feel alive beyond the laptop screen.</p>
            <p className="story-date">Jul 18, 2026</p>
          </article>
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
          <a href="mailto:shanthan.yxo@gmail.com" className="contact-email">shanthan.yxo@gmail.com <span>&rarr;</span></a>
        </div>
      </section>

      <footer><a className="wordmark" href="#top">Notes<span>.</span></a><p>&copy; 2026 Shanthan. Made slowly.</p><div><a href="https://x.com/shanthan5589" target="_blank" rel="noreferrer">X / Twitter</a><a href="mailto:shanthan.yxo@gmail.com">Email</a></div></footer>
    </main>
  );
}
