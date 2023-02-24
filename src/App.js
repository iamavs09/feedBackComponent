import Card from './component/Card';
import './App.css';
import { useState,createContext } from 'react';
import Thankyou from './component/Thankyou';
export const AppContext = createContext();
 

function App() {
  const [clicked,setIsClicked] = useState(false);
  const [selectedValue,setSelectedValue] = useState(null);
  const handleClick = (e) =>{
    setIsClicked(true)
  }

  return (
    <>
    <AppContext.Provider value={{handleClick,selectedValue,setSelectedValue}}>
      {clicked ?  <Thankyou/> : <Card/>}
    </AppContext.Provider>
    
    </>
  );
}

export default App;
