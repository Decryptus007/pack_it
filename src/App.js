
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import SideBar from './components/SideBar/SideBar';

import './App.css'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

export default App;
