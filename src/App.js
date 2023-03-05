import './App.css';
import RenderPropToggle from './RenderPropToggle';
import Switch from './Switch';

function App() {
  const onToggle = (...args) => {
    console.log("onToggle", ...args);
  }
  return (
    <div className="App">
      <h1>React class patterns</h1>
      <RenderPropToggle onToggle={onToggle}>
        {({ on, togglerProps }) => (
          <div>
            {on ? "The Button is On." : "The Button is Off"}
            <Switch on={on} {...togglerProps} />
            <hr />
            <button {...togglerProps} >{on ? "ON" : "OFF"}</button>
          </div>
        )}
      </RenderPropToggle>
    </div>
  );
}

export default App;
