import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import apiKey from '../../config/apiKey';

interface CityParams {
  city: string;
}

interface City {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      description: string;
    },
  ];
  sys: {
    country: string;
  };
}

const City: React.FC = () => {
  const [city, setCity] = useState<City | null>(null);

  const { params } = useRouteMatch<CityParams>();

  useEffect(() => {
    api
      .get(
        `weather?q=${params.city}&units=metric&appid=${apiKey.key}&lang=pt_br`,
      )
      .then((response) => {
        setCity(response.data);
        console.log(response);
      });
  }, [params.city]);

  const dateBuilder = (d: any) => {
    let months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    let days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`;
  };

  return (
    <>
      {city && (
        <>
          <h1>{`${params.city}, ${city.sys.country}`}</h1>
          <span>{dateBuilder(new Date())}</span>
          <h2>{Math.round(city.main.temp)}°C</h2>
          <strong>{city.weather[0].description.toUpperCase()}</strong>
        </>
      )}
    </>
  );
};

export default City;
