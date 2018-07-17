import './index.css'

export default class God {
  constructor (name = '', image = '') {
    this._name = name
    this._image = image
  }

  get image () {
    return this._image
  }

  set image (newImage) {
    this._image = newImage
  }

  get name () {
    return this._name
  }

  set name (newName) {
    this._name = newName
  }

  render (node) {
    const rootElement = document.createElement('article')
    rootElement.setAttribute('class', 'egyptian-god')
    rootElement.innerHTML = `
      <img class="egyptian-god--image" src="${this.image}" />
      <h2 class="egyptian-god--title">${this.name}</h2>
    `
    node.appendChild(rootElement)
  }
}
