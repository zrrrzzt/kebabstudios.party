'use strict'

import Head from '../components/head'
import css from 'next/css'

export default () => (
  <body className={body}>
    <Head />
    <div className={style}>
      <h1>Kebab Studios</h1>
      <img src='/static/images/Bakgrunn.jpg' />
    </div>
    <div className={style}>
      <span className={contact}><a href='mailto:kebab.studios.party.2003@gmail.com' target='_blank' className={peker}>Mail</a></span>
      <span className={contact}><a href='https://twitter.com/KebabStudios' target='_blank' className={peker}>Twitter</a></span>
      <span className={contact}><a href='https://itch.io' target='_blank' className={peker}>itch.io</a></span>
    </div>
    <div className={style}>
      <a href='https://robots.kebabstudios.party'><img src='https://robots.kebabstudios.party/robots.kebabstudios.party.png' /></a>
    </div>
    <div className={style}>
      <span className={contact}><a href='https://russian.kebabstudios.party/html' title='Do you dare.... to play... russian kebab?' target='_blank' className={peker}>Give me a kebab</a></span>
    </div>
  </body>
)

const style = css({
  textAlign: 'center',
  fontSize: '4em',
  color: 'rgb(227,108,9)'
})

const contact = css({
  padding: '1em',
  color: 'rgb(0, 112, 192)'
})

const peker = css({
  color: 'rgb(0, 112, 192)',
  textDecoration: 'none'
})

const body = css({
  backgroundColor: 'black'
})
