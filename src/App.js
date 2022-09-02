import './App.css';
import { GetPokemones } from './pages/GetPokemones';
import { LegendariesPokemons } from './pages/LegendariesPokemons';
import { PokeBall } from './components/PokeBall';
import { PokeBallOpen } from './components/PokeBallOpen';
import { BarraNav } from './components/BarraNav';

function App() {
  return (
    <div className="App">
      <BarraNav/>
      <LegendariesPokemons/>
    </div>
  );
}

export default App;
