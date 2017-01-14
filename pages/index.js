'use strict'

import css from 'next/css'

export default () => (
  <div className={style}>
    <h1>Kebab Studios</h1>
    <img src='/static/images/highestoffives.gif' />
  </div>
)

const style = css({
  textAlign: 'center',
  fontSize: '5em'
})