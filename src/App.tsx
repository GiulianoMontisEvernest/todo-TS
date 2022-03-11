import { FC } from 'react';
import { AppProvider } from "./store/context";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import './App.css';

const App: FC = ()=> {
  return (
      <AppProvider>
        <div className="App">
          <span className="heading">Hello dude!</span>
            <InputField />
            <TodoList />
        </div>
      </AppProvider>
  );
}

export default App;
