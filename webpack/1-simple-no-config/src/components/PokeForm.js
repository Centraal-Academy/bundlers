/* global HTMLElement */
import Pokemon from './Pokemon'

class PokeForm extends HTMLElement {
  constructor () {
    super()
    const root = this.attachShadow({mode: 'open'})
    root.innerHTML = `
      <form>
        <div>
          <input id="name" type="text" placeholder="Vamo a calmarno"/>
        </div>
        <input type="submit" value="Add pokemon"/>
      </form>
      <div id="pokelist">
      </div>
    `
    root.addEventListener('submit', function (e) {
      e.preventDefault()
      e.stopPropagation()
      const pokemon = new Pokemon()
      const input = root.querySelector('#name')
      pokemon.name = input.value
      root.querySelector('#pokelist').appendChild(pokemon)
      input.value = ''
    })
  }
  static is () {
    return 'poke-form'
  }
}

window.customElements.define(PokeForm.is(), PokeForm)

export default PokeForm
