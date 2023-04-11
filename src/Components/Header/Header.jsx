import React, { Component } from 'react'
import './Header.module.scss'
import s from './Header.module.scss'
import moon from '../../images/moon.png'

class Header extends Component {
  render() {
    return (
        <div className={s["header-content"]}>
          <div className={s.header_item}>
              <p className={s.header_info}>Where in the world?</p>
              <div className={s.mode}>
                  <img src={moon} alt="moon" />
                  <p>Dark Mode</p>
              </div>
          </div>
        </div>
    )
  }
}

export default Header
