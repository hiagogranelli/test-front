import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import apiKey from '../../config/apiKey';

import { Form, Cities, Error } from './styles';

interface City {
  name: string;
  main: {
    temp: number;
  };
}

const Dashboard: React.FC = () => {
  const [newCity, setNewCity] = useState('');
  const [inputError, setInputError] = useState('');
  const [cities, setCities] = useState<City[]>(() => {
    const storagedCities = localStorage.getItem('@2bTest:cities');

    if (storagedCities) {
      return JSON.parse(storagedCities);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@2bTest:cities', JSON.stringify(cities));
  }, [cities]);

  async function addCity(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!inputError) {
      setInputError('Digite o nome de uma cidade.');
      return;
    }

    try {
      const response = await api.get<City>(
        `weather?q=${newCity}&units=metric&appid=${apiKey.key}&lang=pt_br`,
      );

      const city = response.data;

      setNewCity('');
      setInputError('');
      setCities([...cities, city]);
    } catch (err) {
      setInputError('Digite uma cidade válida.');
    }
  }

  return (
    <>
      <Form onSubmit={addCity}>
        <input
          placeholder="Digite o nome da cidade"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button type="submit">Procurar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Cities>
        {cities.map((city) => (
          <Link to={`/cities/${city.name}`} key={city.name}>
            <div>
              <strong>{city.name}</strong>
              <span>{Math.round(city.main.temp)}°C</span>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Cities>
    </>
  );
};

export default Dashboard;
