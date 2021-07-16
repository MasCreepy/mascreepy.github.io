const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  fetch('')
  .then(res => res.json())
  .then(res => {
    countEl.innerHTML = res.value;
  });
}
