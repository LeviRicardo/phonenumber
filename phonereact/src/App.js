import react, { useState } from 'react';
import BotoesAdvanced from './components/BotoesAvancados';
import BotoesBase from './components/BotoesBase';
import Numero from './components/Numero'
import SubmitButton from './components/Submit';
import CreateStyle from './styles/global';


function App() {

  const [number, setNumber] = useState(0)

  const triple = () => {
    setNumber(number*3)
  }
  const plusseven = () => {
    setNumber(number+7)
  }
  const slashfive = () => {
    setNumber(number/5)
  }
  const minustwo = () => {
    setNumber(number-2)
  }
  const submit = () => {
    setNumber(0)  
  }
  const floor = () => {
    setNumber(Math.floor(number))
  }
  const sqrt = () => {
    setNumber(number**0.5)
  }
  const powertwo = () => {
    setNumber(number**2)
  }
  const logten = () => {
    setNumber(Math.log10(number))
  }


  const botoesbase = [{noclick: triple,nome:"X 3"},{noclick: plusseven,nome:"+ 7"},{noclick: slashfive,nome:"/ 5"},{noclick: minustwo,nome:"- 2"}]

  const botoesadv = [{noclick: floor,nome:"Floor"},{noclick: sqrt,nome:"√"},{noclick: powertwo,nome:"x", sup:"2"},{noclick: logten,nome:"LOG 10"}]

  return (
      <>
        <Numero numero={"0".repeat((number.toString().length) > 11 ? 0:11-(number.toString().length))+number}/>
        <BotoesBase botoes={botoesbase}/>
        <SubmitButton submit={submit}/>
        <BotoesAdvanced botoes={botoesadv}/>
        
        <CreateStyle />
      </>
    );
}

export default App;
