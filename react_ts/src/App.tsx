import React from 'react';
// 4 - Importando componente
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';

function App() {

  //1 - Variaveis
  const name: string = "Erick";
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <p>Nome: {name}</p>
      {isWorking && <p>Está trabalhando</p>}
      <h2>{userGreeting(name)}</h2>
      <FirstComponent />
      <SecondComponent title="Segundo" content="Segundo componente" commentsQty={10} tags={["ts", "js"]}/>
    </div>
  );
}

export default App;
