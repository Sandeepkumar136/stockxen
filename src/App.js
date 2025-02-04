import React from 'react'
import Navbar from './Components/Content/Nav/Navbar';
import './Components/ui/Style.css';
import { ToggleContextPrvider } from './Components/Context/NavToggleContext';

const App = () => {
  return (
    <>
      <ToggleContextPrvider>
        <Navbar />
        <div className="content"></div>
      </ToggleContextPrvider>
    </>
  )
}

export default App;
