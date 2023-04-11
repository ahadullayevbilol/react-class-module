import React, { Component } from 'react'
import './SecondCountryCard.module.scss'
import s from './SecondCountryCard.module.scss'

class SecondCountryCard extends Component {
  render() {
    return (
        <div className={s.countries}>
        <section className={s.first_country}>
            <img src={this.props.flagImgAfghanistan} alt="" />
            <div className={s.info}>
                <h1>{this.props.country}</h1>
                <p>Population: {this.props.population}</p>
                <h3>Region: {this.props.region}</h3>
                <h4>Capital: {this.props.capital}</h4>
            </div>
        </section>
        <section className={s.second_country}>
        <img src={this.props.flagImgAland} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryAland}</h1>
                <p>Population: {this.props.populationAland}</p>
                <h3>Region: {this.props.regionAland}</h3>
                <h4>Capital: {this.props.capitalAland}</h4>
            </div>
        </section>
        <section className={s.third_country}>
        <img src={this.props.flagImgAlbania} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryAlbania}</h1>
                <p>Population: {this.props.populationAlbania}</p>
                <h3>Region: {this.props.regionAlbania}</h3>
                <h4>Capital: {this.props.capitalAlbania}</h4>
            </div>
        </section>
        <section className={s.fourth_country}>
        <img src={this.props.flagImgAlgeria} alt="" />
            <div className={s.info}>
                <h1>{this.props.countryAlgeria}</h1>
                <p>Population: {this.props.populationAlgeria}</p>
                <h3>Region: {this.props.regionAlgeria}</h3>
                <h4>Capital: {this.props.capitalIcelandAlgeria}</h4>
            </div>
        </section>
      </div>
    )
  }
}

export default SecondCountryCard
