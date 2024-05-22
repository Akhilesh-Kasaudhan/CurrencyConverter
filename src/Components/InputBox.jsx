import React,{useEffect,useState} from 'react'
import {convertcurr, fetchData} from '../Hooks/useCurrencyinfo'


function InputBox() {
    const [option,setOption]=useState([])
    const [from,setFrom]=useState('USD')
    const [to,setTo]=useState('INR')
    const [amount,setAmount]=useState(0)
    const [convertedAmount,setConvertedAmount]=useState(0)
    useEffect(() => {
      fetchData().then((res)=>{
        setOption(res)
      })
    }, [])
    console.log(to,from,amount)
    const convertcurrr=(from,to,amount)=>{
         convertcurr(from,to,amount).then((res)=>{
            console.log(res.result.convertedAmount)
            setConvertedAmount(res.result.convertedAmount.toFixed(4))
         })
    }

  return (
    <div className='w-full  h-screen flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 '>
        <div className=' bg-white opacity-50 w-[95%] lg:w-[50%]   h-[300px] flex flex-col gap-12 py-8 px-4 rounded-lg border'>
        <div className='flex items-center justify-center  rounded-xl text-lg  md:text-xl md:font-bold md:gap-4  '>
            <label htmlFor='' >From:- </label>
            <input className='bg-slate-400 pl-2   opacity-70' type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount(Number(e.target.value))}} />
            <select name="" id="" value={from}  onChange={(e)=>{setFrom(e.target.value)}} >Currency
            {
               option.map((currency,index)=>{
                return <option key={index} value={currency.symbol} >{currency.symbol}</option>
               })
            }
            </select>
            
            
        </div>
        <div className='flex items-center justify-center md:px-4 md:gap-4  rounded-xl text-lg md:text-xl md:font-bold '>
            <label htmlFor="">To:- </label>
            <input className='bg-slate-400  ' type="text" value={convertedAmount} disabled/>
            <select name="" value={to} id="" onChange={(e)=>{setTo(e.target.value)}} >Currency
            {
               option.map((currency,index)=>{
                return <option key={index}>{currency.symbol}</option>
               })
            }
            </select>
            
            
        </div>
        <button className='bg-black text-white p-2 w-[70%] md:w-[50%] mx-auto rounded-xl ' onClick={()=>convertcurrr(from,to,amount)}>Convert {from} To {to}</button>
        </div>
       
    </div>
  )
}

export default InputBox;