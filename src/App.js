import './App.css';
import BasicToggle from './BasicToggle';

function App() {
  const onToggle = (...args) => {
    console.log("onToggle", ...args);
  }
  return (
    <div className="App">
      <h1>React class patterns</h1>
      <BasicToggle onToggle={onToggle} />
    </div>
  );
}

export default App;
