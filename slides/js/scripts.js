/* global:Reveal hljs */

Reveal.initialize({
  history: true,

  dependencies: [
    // Syntax highlight for <code> elements
    { src: 'plugin/highlight/highlight.js', async: true, callback() { hljs.initHighlightingOnLoad(); } },

    // liveCoding plugin
    { src: 'plugin/live-coding/live-coding.js', async: true, condition() { return !!document.body.classList; }},

    // Speaker notes
    { src: 'plugin/notes/notes.js', async: true },
  ],
});
