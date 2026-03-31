(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.body.dataset.page||"home",r={home:{eyebrow:"Independent design systems",title:"Interfaces with a strong point of view.",body:"Studio North helps product teams launch clearer brands, sharper landing pages, and calmer software experiences.",cta:"Read our story",href:"/about.html"},about:{eyebrow:"About Studio North",title:"Small team. High craft. Very online.",body:"We work across product strategy, visual systems, and front-end implementation. The goal is always the same: useful software that feels deliberate.",cta:"Back home",href:"/index.html"}}[n];document.querySelector("#app").innerHTML=`
  <main class="shell">
    <nav class="nav">
      <a class="brand" href="/index.html">Studio North</a>
      <div class="links">
        <a href="/index.html">Home</a>
        <a href="/about.html">About</a>
      </div>
    </nav>
    <section class="hero">
      <p class="eyebrow">${r.eyebrow}</p>
      <h1>${r.title}</h1>
      <p class="body">${r.body}</p>
      <a class="cta" href="${r.href}">${r.cta}</a>
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
`;
