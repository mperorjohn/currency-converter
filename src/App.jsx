import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
    setResult(res.data.data)
    console.log(res)

  }
  const getCurrencies=async()=>{
    const config = {headers:'apikey:Z5DCFr3bOYsHuDP5owbIew5n6UKf7v1J'}
    const res = await axios.get('https://api.apilayer.com/fixer/symbols', config)
    console.log()
    setCurrencies(res.data?.data?.symbols)

  }
  useEffect(()=>{
    getCurrencies()
  },[])

  

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
                  {console.log(currencies)}
                  {
                    Object.keys(currencies).map((symb)=><option>{symb}</option> )
                  }
                </select> 
                <input type='number' onChange={handleInput} className='param' /><br />

              </div>
              <p className='to'>To</p>
              <div >   
                <select onChange={handleTocur}>
                  {
                    Object.keys(result).map((symb)=><option>{symb}</option> )
                  }
                  

                </select>
                <input type='number' className='param' />
                <div>

                <button type="button" className='convert' onClick={handleResult} disabled={input === ''}>Convert</button>
                </div>
              </div>
          </div>
      </div>
  );
}

export default App;
