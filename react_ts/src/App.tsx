import React, {createContext} from 'react';
// 4 - Importando componente
import FirstComponent from './components/FirstComponent';

// 5 - Desestruturando props
import SecondComponent, {Category} from './components/SecondComponent';

// 9 - Types
type textOrNull = string | null;
type fixed = "Isso" | "Aquilo";

// 10 - ContextAPI
interface IAppContext {
  language: string;
  projects: number;
}

const contextValue: IAppContext =  {
  language: "JavaScript",
  projects: 5
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  //1 - Variaveis
  const name: string = "Erick";
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  }

  // 9 - Types
  const myText: textOrNull = "Tem texto aqui.";
  const testFixed: fixed = "Isso"; 

  return (
    <AppContext.Provider value={contextValue}>
        <div className="App">
        <h1>Typescript com React</h1>
        <p>Nome: {name}</p>
        {isWorking && <p>Está trabalhando</p>}
        <h2>{userGreeting(name)}</h2>
        <FirstComponent />
        <SecondComponent 
          title="Segundo" 
        content="Segundo componente" 
        commentsQty={10} 
        tags={["ts", "js"]}
          category={Category.TS}
        />
      </div>
    </AppContext.Provider>
  );
}

export default App;
