import React, { useState } from 'react'


import Butons from './Butons';
import "./style.css";

function CalculatorPhone() {
    const [sayı,setSayı]= useState("")
    const [ıslem, setIslem]=useState("")
    const[ikinciSayı,setIkinciSayı]=useState("")
    const [sonuc,setSonuc]= useState()
  return (
    <div className='calculator1' >
        <div>
            <h1>Calculator App</h1>
            <p id='calculator'>{sayı} {ıslem} {ikinciSayı}</p>
            <p id='calculator'> {sonuc}</p>
        </div>
        <Butons sonuc={sonuc}  setSonuc={setSonuc} setSayı={setSayı} sayı={sayı} ıslem={ıslem}  setIslem={setIslem} ikinciSayı={ikinciSayı} setIkinciSayı={setIkinciSayı} />
    </div>
  )
}

export default CalculatorPhone