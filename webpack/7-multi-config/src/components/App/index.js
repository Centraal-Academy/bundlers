import React from 'react'
import God from '../God'
import './index.css'
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gods: [
        {
          name: 'Oshirisu no Tenkūryū',
          image: 'https://vignette.wikia.nocookie.net/yugioh/images/0/05/Slifer_the_Sky_Dragon.png/revision/latest/scale-to-width-down/300?cb=20170320112455'
        },
        {
          name: 'Rā no Yokushinryū',
          image: 'https://vignette.wikia.nocookie.net/yugioh/images/e/ef/Ra_1.png/revision/latest/scale-to-width-down/700?cb=20160927141554'
        },
        {
          name: 'Oberisuku no Kyoshinhei',
          image: 'https://vignette.wikia.nocookie.net/yugioh/images/b/be/Obelisk.png/revision/latest/scale-to-width-down/300?cb=20131204042124'
        }
      ]
    }
  }

  render () {
    const godElements = this.state.gods.map(
      (godItem, index) => <God key={index} {...godItem} />
    )
    return (
      <div className='App'>
        {godElements}
      </div>
    )
  }
}
