const countEl = document.getElementByClassName('count')[0];

updateVisitCount();

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/kripik/kripek/?amount=1')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
