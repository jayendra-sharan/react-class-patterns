import './App.css';
import CompoundToggle from './CompoundToggle';

function App() {
  const onToggle = (...args) => {
    console.log("onToggle", ...args);
  }
  return (
    <div className="App">
      <h1>React class patterns</h1>
      <CompoundToggle onToggle={onToggle}>
        <CompoundToggle.Button />
        <CompoundToggle.On>The button is on.</CompoundToggle.On>
        <CompoundToggle.Off>The button is off.</CompoundToggle.Off>
      </CompoundToggle>
    </div>
  );
}

export default App;
