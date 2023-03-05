import './App.css';
import RenderPropToggle from './RenderPropToggle';
import Switch from './Switch';

function App() {
  const onToggle = (...args) => {
    console.log("onToggle", ...args);
  }
  const onButtonClick = () => {
    alert("onButtonClick called");
  }
  return (
    <div className="App">
      <h1>React class patterns</h1>
      <RenderPropToggle onToggle={onToggle}>
        {({ on, getTogglerProps }) => (
          <div>
            {on ? "The Button is On." : "The Button is Off"}
            <Switch {...getTogglerProps({on})} />
            <hr />
            <button
              {...getTogglerProps({
                "aria-label": "custom-button",
                id: "custom-button-id",
                onClick: onButtonClick
              })}
              
            >{on ? "ON" : "OFF"}</button>
          </div>
        )}
      </RenderPropToggle>
    </div>
  );
}

export default App;
