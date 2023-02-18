import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  // Defining the first state for input
  const [seleFrom, setSelectFrom] = useState('')
  const [input, setInput] = useState({});
  const [tocur, setToCur] = useState('')
  const [result, setResult] = useState('')


  // first function to handle setform
  function curhandler(e){
    setSelectFrom(e.target.value)
  }
  // second function to handle currency input
  function handleInput(){
    set
  }

  // const getcurrencies = async()=>{
  //   const cur = await
  // }
  return (
    <div className="App">
      <div className="container">
                <h1>Currency Converter</h1>
                <p className='convert_from'>Convert From</p>
              <div>
                <select name='from'>
                  <option>Country</option> 
                  <option>Select two</option>     
                  <option>Select ten</option>   

                </select> 
                <input type='number' onChange={handleInput} name='from' className='param' /><br />

              </div>
              <p className='to'>To</p>
              <div >   
                <select>
                  <option>Country</option> 
                  <option>Select two</option>     
                  <option>Select ten</option>   

                </select> 
                <div className='param'>

                </div>
              </div>
                
                <div>

                <button type="button" className='convert' disabled={cur === ''}>Convert</button>
                </div>
      </div>
    </div>
  );
}

export default App;
