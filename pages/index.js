'use strict'

import css from 'next/css'

export default () => (
  <div>
    <div className={style}>
      <h1>Kebab Studios</h1>
      <img src='/static/images/Bakgrunn.JPG' />
    </div>
    <div className={style}>
      <span className={contact}><a href='mailto:kebab.studios.party.2003@gmail.com' target='_blank' className={peker}>Mail</a></span>
      <span className={contact}><a href='https://twitter.com/KebabStudios' target='_blank' className={peker}>Twitter</a></span>
      <span className={contact}><a href='https://itch.io' target='_blank' className={peker}>itch.io</a></span>
    </div>
    <div className={style}>
      <a href='https://robots.kebabstudios.party'><img src='https://robots.kebabstudios.party/robots.kebabstudios.party.png' /></a>
    </div>
  </div>
)

const style = css({
  textAlign: 'center',
  fontSize: '4em'
})

const contact = css({
  padding: '1em'
})

const peker = css({
  color: 'black',
  textDecoration: 'none'
})
