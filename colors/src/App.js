import './App.css';
import HexForm from './components/Input';
import { useState } from 'react';
import Background from './components/Background';

function App() {
  const [bg, setBg] = useState('#000000')

  function onChangeBC(newColor) {
    setBg(newColor)
  }
  return (
    <Background hex={bg}>
      <HexForm onChangeBackground={onChangeBC} initialValue={bg}/>
    </Background>

  );
}

export default App;
