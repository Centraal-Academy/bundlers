import PokeForm from './components/PokeForm'

window.addEventListener('load', function () {
  const element = document.getElementById('app-container')
  const pokeform = new PokeForm()
  element.appendChild(pokeform)
})
