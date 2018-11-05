import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import WeatherCard from '../../containers/WeatherCard';
import suitcase from '../../assets/suitcase.svg';
import './WeatherResults.css';
const uuidv1 = require('uuid/v1');

export const WeatherResults = ({ weatherData, isLoaded }) => {
  let results;

  if (!isLoaded) {
    results = 
      <section className='wr-loading-container'>
        <img className='wr-suitcase' src={suitcase} />
        <div className='typewriter'>
          <h1>Compiling your packing lists...</h1>
        </div>
      </section>
  } else {
    results = weatherData.map(city => {
      return <WeatherCard {...city} key={uuidv1()}/>;
    })
  };

    return (
      <div>
        <Header />
          <div className='wr-container'>
            { results }
          </div>
      </div>
    )
};

export const mapStateToProps = (state) => ({
  weatherData: state.weatherData,
  isLoaded: state.isLoaded
});

WeatherResults.propTypes = {
  weatherData: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps)(WeatherResults));