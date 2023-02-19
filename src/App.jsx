import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  // Defining the first state for input
  const [selectFrom, setSelectFrom] = useState('')
  const [input, setInput] = useState(0);
  const [toCur, setToCur] = useState('')
  const [result, setResult] = useState('')
  const [currencies, setCurrencies] = useState('')


  // first function to handle select from
  const curhandler=(e)=>{
    setSelectFrom(e.target.value)
  }
  // second function to handle currency input
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  // third function to handle tocur 
  const handleTocur=(e)=>{
    setToCur(e.target.value)

  }
  // fourth function to hande return result 
  const handleResult=async()=>{
    const config = {apikey:'Z5DCFr3bOYsHuDP5owbIew5n6UKf7v1J'}
    const res = await axios.get(`https://api.apilayer.com/fixer/convert?to=${toCur}&from=${selectFrom}&amount=${input}`, config)
    setResult(res)
    console.log(res)

  }
  const getCurrencies=async()=>{
    const config = {apikey:'Z5DCFr3bOYsHuDP5owbIew5n6UKf7v1J'}
    const res = await axios.get('https://api.apilayer.com/fixer/sybol', config)
    setResult(res)
    console.log(res)

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
                <select name='from' onChange={curhandler}>
                  <option>Country</option> 
                  <option>Select two</option>     
                  <option>Select ten</option>   

                </select> 
                <input type='number' onChange={handleInput} name='from' className='param' /><br />

              </div>
              <p className='to'>To</p>
              <div >   
                <select onChange={handleTocur}>
                  <option>Country</option> 
                  <option>Select two</option>     
                  <option>Select ten</option>   

                </select>
                <input type='number' className='param' />
                <div>

                <button type="button" className='convert' onclick={handleResult} disabled={input === ''}>Convert</button>
                </div>
              </div>
          </div>
      </div>
  );
}

export default App;
