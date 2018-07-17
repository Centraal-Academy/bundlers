/* global fetch */
window.addEventListener('load', function () {
  const container = document.getElementById('app-container')
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
      container.innerHTML = response.length + ' posts cargados'
    })
    .catch(error => {
      console.error(error)
    })
})
