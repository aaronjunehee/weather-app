import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import useFetch from './useFetch';

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'
const weatherQueryParams = {
  q: 'Toronto',
  appid: '8594f67f19db5d960ffcd554b13d9e48'
}

const Button = styled.button`
  color: red;
`;

function App() {
  const { data } = useFetch(weatherUrl, weatherQueryParams);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>
          Hello!
        </Button>
      </header>
    </div>
  );
}

export default App;
