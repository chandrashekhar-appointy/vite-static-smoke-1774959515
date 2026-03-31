import './styles.css'

const page = document.body.dataset.page || 'home'
const content = {
  home: {
    eyebrow: 'Independent design systems',
    title: 'Interfaces with a strong point of view.',
    body: 'Studio North helps product teams launch clearer brands, sharper landing pages, and calmer software experiences.',
    cta: 'Read our story',
    href: '/about.html',
  },
  about: {
    eyebrow: 'About Studio North',
    title: 'Small team. High craft. Very online.',
    body: 'We work across product strategy, visual systems, and front-end implementation. The goal is always the same: useful software that feels deliberate.',
    cta: 'Back home',
    href: '/index.html',
  }
}[page]

document.querySelector('#app').innerHTML = `
  <main class="shell">
    <nav class="nav">
      <a class="brand" href="/index.html">Studio North</a>
      <div class="links">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
      </div>
    </nav>
    <section class="hero">
      <p class="eyebrow">${content.eyebrow}</p>
      <h1>${content.title}</h1>
      <p class="body">${content.body}</p>
      <a class="cta" href="${content.href}">${content.cta}</a>
    </section>
    <section class="grid">
      <article>
        <h2>Identity</h2>
        <p>Design systems that carry the same voice from marketing to product UI.</p>
      </article>
      <article>
        <h2>Speed</h2>
        <p>Fast-moving sites built for quick iteration, shipping, and simple hosting.</p>
      </article>
      <article>
        <h2>Clarity</h2>
        <p>Information architecture that makes products easier to understand and trust.</p>
      </article>
    </section>
  </main>
`
