import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCounter from './CharacterCounter';
import ToDoList from './ToDoList';

//recoil
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
