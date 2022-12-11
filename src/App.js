import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather city="Kyiv" />
      </header>
      <div className="footer">
        <a
          className="link"
          href="https://github.com/Natalina686/weather-react"
          alt="GitHub Link"
          target="blank"
        >
          Open-source code
        </a>
        , by Nataliia Tkach
      </div>
    </div>
  );
}

export default App;
