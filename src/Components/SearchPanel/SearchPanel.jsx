import React, { Component } from 'react'
import './SearchPanel.module.scss'
import s from './SearchPanel.module.scss'
import search from '../../images/search.png'

 class SearchPanel extends Component {
  render() {
    return (
        <div className={s.search_panel}>
            <div className={s.inputContent}>
                <div className={s.search}>
                    <img src={search} alt="search" />
                </div>
                <input type="text" placeholder='Search for a country…'/>
            </div>
            <div className={s.filter}>
                <p>Filter by Region</p>
            </div>
        </div>
    )
  }
}

export default SearchPanel
