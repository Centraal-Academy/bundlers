/* global HTMLElement */
class EgyptianGood extends HTMLElement {
  constructor (name, image) {
    super()
    this.name = name
    this.image = image
    const root = this.attachShadow({mode: 'open'})
    root.innerHTML = `
      <article>
        <img id="image" src="${this.image}"/>
        <h2 id="name">${this.name}</h2>
      </article>
    `
  }

  static is () {
    return 'egyptian-good'
  }
}

window.customElements.define(EgyptianGood.is(), EgyptianGood)

export default EgyptianGood
