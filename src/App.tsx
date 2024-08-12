import './App.css';
import RapiDocReact from './components/rapidDocReact';

function App() {
  return (
    <RapiDocReact
      spec-url={'/result.json'}
      show-header={false}
      render-style="read"
    />
  );
}

export default App;
