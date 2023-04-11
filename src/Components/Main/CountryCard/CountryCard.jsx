import React, { Component } from 'react'
import './Country.module.scss'
import s from './Country.module.scss'

class CountryCard extends Component {
  render() {
    return (
      <div className={s.countries}>
        <section className={s.first_country}>
            <img src={this.props.flagImgGerman} alt="" />
            <div className={s.info}>
                <h1>{this.props.country}</h1>
                <p>Population: {this.props.population}</p>
                <h3>Region: {this.props.region}</h3>
                <h4>Capital: {this.props.capital}</h4>
            </div>
        </section>
        <section className={s.second_country}>
        <img src={this.props.flagImgUsa} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryUsa}</h1>
                <p>Population: {this.props.populationUSa}</p>
                <h3>Region: {this.props.regionUsa}</h3>
                <h4>Capital: {this.props.capitalUsa}</h4>
            </div>
        </section>
        <section className={s.third_country}>
        <img src={this.props.flagImgBrazil} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryBrazil}</h1>
                <p>Population: {this.props.populationBrazil}</p>
                <h3>Region: {this.props.regionBrazil}</h3>
                <h4>Capital: {this.props.capitalBrazil}</h4>
            </div>
        </section>
        <section className={s.fourth_country}>
        <img src={this.props.flagImgIceland} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryIceland}</h1>
                <p>Population: {this.props.populationIceland}</p>
                <h3>Region: {this.props.regionIceland}</h3>
                <h4>Capital: {this.props.capitalIcelandUsa}</h4>
            </div>
        </section>
      </div>
    )
  }
}

export default CountryCard
