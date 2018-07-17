/* global HTMLElement */
class PokemonItem extends HTMLElement {
  constructor () {
    super()
    const root = this.attachShadow({mode: 'open'})
    root.innerHTML = `
      <p id="name"></p>
    `
    this.nameNode = root.querySelector('#name')
  }

  get name () {
    return this.getAttribute('name')
  }

  set name (val) {
    if (val) {
      this.setAttribute('name', val)
    } else {
      this.removeAttribute('name')
    }
  }

  static get observedAttributes () {
    return ['name']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    this.nameNode.innerText = this.name
  }

  static is () {
    return 'pokemon-item'
  }
}

window.customElements.define(PokemonItem.is(), PokemonItem)

export default PokemonItem
