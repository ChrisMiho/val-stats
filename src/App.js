import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>VAL STATS V.00001</header>
      <header className='App-header'>Player Name: Rocketlift</header>
      <div>
        <form>
          <label>
            Player Name:
            <input type='text' name='name' />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div className='player-info'>
        <Card name='Player Rank' value='Gold 2' />
        <Card name='Player KD' value={1.52} />
        <Card name='Player Accuracy' value={'34%'} />
        <Card name='Ashley' value={24} />
      </div>
    </div>
  );
}

export default App;
