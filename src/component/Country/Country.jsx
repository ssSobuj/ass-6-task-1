/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "./Country.css"
export default function Country({country}) {

  const lang = country?.languages
  const arr = [];
  for(let key in lang){
    arr.push(lang[key])
  }

  const currencies = country?.currencies
  const curArr = [];
  for(let curKey in currencies){
    curArr.push(currencies[curKey])
  }

  return (
    <>
        <div className="crountry">
          <div className="title">
              <h2>Country: {country?.name?.common}</h2>
              <p><b>Capital: </b>{country?.capital}</p>
          </div>
          <div className="Flag-eamblem">
            <div className="Flag">
              <img src={country?.flags?.png }alt={country?.flags?.alt} />
              <h3>Flag</h3>
            </div>
            <div className="eamblem">
              <img src={country?.coatOfArms?.png} />
              <h4>Eamblem</h4>
            </div>
          </div>
          <div className="Currencies">
              <p><b>Currencies:</b> {curArr[0]?.name}</p>
              <p><b>symbol:</b> {curArr[0]?.symbol}</p>
          </div>
          <div className="Langues">
              <p><b>Population: </b>{country?.population}</p>
              <p><b>Language{arr.length > 1 && "s"}: </b>{arr.join(', ')}</p>
          </div>
        </div>
    </>
  )
}
