export default function decorate(block) {
  let below = false;
  document.querySelectorAll('main h2').forEach((h2) => {
    if (below) {
      const title = h2.textContent;
      const teaser = h2.closest('.section').querySelector('.teaser').textContent;
      if (teaser) {
        const eyebrow = h2.previousElementSibling.textContent;
        const hash = h2.id;
        const card = document.createElement('a');
        card.className = 'table-of-contents-card';
        card.href = `#${hash}`;
        card.innerHTML = `<p class="table-of-contents-eyebrow">${eyebrow}</p>
        <h3>${title}</h3>
        <p class="table-of-contents-teaser">${teaser}</p>`;
        block.append(card);
      }
    } else if (h2.closest('.section') === block.closest('.section')) {
      below = true;
    }
  });
}
