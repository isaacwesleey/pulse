import React, { useState } from 'react';
import './Trending.css';

function Trending() {
  return (
    // Lista de trending con ul y li
    <div className='trending'>
      <div className='trending__container'>
        <div className='trending__title'>
          <h1>Lo mas popular</h1>
        </div>
        <div className='trending__list'>
          <ul>
            <div className='trending__item'>
              <li>1. #Covid19</li>
            </div>
            <div className='trending__item'>
              <li>2. #Coronavirus</li>
            </div>
            <div className='trending__item'>
              <li>3. #Covid</li>
            </div>
            <div className='trending__item'>
              <li>4. #CoronavirusPandemic</li>
            </div>
            <div className='trending__item'>
              <li>5. #CoronavirusOutbreak</li>
            </div>
            <div className='trending__item'>
              <li>6. #CoronavirusUpdate</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Trending;
