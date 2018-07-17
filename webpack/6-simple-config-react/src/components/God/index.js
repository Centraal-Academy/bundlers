import './index.css'
import React from 'react'

export default function God ({name = '', image = ''}) {
  return (
    <article className='egyptian-god'>
      <img className='egyptian-god--image' src={image} />
      <h2 className='egyptian-god--title'>{name}</h2>
    </article>)
}
