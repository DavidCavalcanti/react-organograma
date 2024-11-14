import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Times/index.js';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cadastrarColaborador={colaborador => novoColaboradorAdicionado(colaborador)} />
      <Time nome={"Programação"}/>
      <Time nome={"Frontend"}/>
      <Time nome={"Backend"}/>
    </div>
  );
}

export default App;
