import React, { Component } from 'react'
import './Main.module.scss'
import CountryCard from './CountryCard/CountryCard'
import flagGerman from '../../images/germany.png'
import flagUsa from '../../images/usa.png'
import flagBrazil from '../../images/Brazil.png'
import flagIceland from '../../images/Island.png'

import flagAfghanistan from '../../images/Afganistan.png'
import flagAland from '../../images/Aland.png'
import flagAlbania from '../../images/Albania.png'
import flagAlgeria from '../../images/Algeria.png'
import SecondCountryCard from './SecondCountrycard/SecondCountryCard'

class Main extends Component {
  render() {
    return (
      <main>
        <CountryCard 
        country={'Germany'}
        flagImgGerman = {flagGerman}
        population={'81,770,900'}
        region={'Europe'}
        capital={'Berlin'}

        countryUsa={'United States of America'}
        flagImgUsa = {flagUsa}
        populationUsa={'323,947,000'}
        regionUsa={'Americas'}
        capitalUsa={'Washington, D.C.'}

        countryBrazil={'Brazil'}
        flagImgBrazil = {flagBrazil}
        populationBrazil={'206,135,893'}
        regionBrazil={'Americas'}
        capitalBrazil={'Brasília'}

        countryIceland={'Brazil'}
        flagImgIceland = {flagIceland}
        populationIceland={'206,135,893'}
        regionIceland={'Americas'}
        capitalIceland={'Brasília'}
        /> 

        <SecondCountryCard 
        
        country={'Afghanistan'}
        flagImgAfghanistan = {flagAfghanistan}
        population={'27,657,145'}
        region={'Asia'}
        capital={'Kabul'}

        countryAland={'Åland Islands'}
        flagImgAland = {flagAland}
        populationAland={'28,875'}
        regionAland={'Europe'}
        capitalAland={'Mariehamn'}

        countryAlbania={'Albania'}
        flagImgAlbania = {flagAlbania}
        populationAlbania={'2,886,026'}
        regionAlbania={'Europe'}
        capitalAlbania={'Tirana'}

        countryAlgeria={'Algeria'}
        flagImgAlgeria = {flagAlgeria}
        populationAlgeria={'40,400,000'}
        regionAlgeria={'Africa'}
        capitalAlgeria={'Algiers'}

        />   
      </main>
    )
  }
}


export default Main