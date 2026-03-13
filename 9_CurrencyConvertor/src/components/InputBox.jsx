import React from 'react';
import { useEffect,useState,useId } from 'react';
function InputBox({label, 
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    currencyOptions=[],
    amountDisable,
    currencyDisable,
    classname=""})
{    const amountId=useId();
    return (
        <div  className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            <div className='w-1/2'>
            <label  htmlFor={amountId} className='text-black/40 mb-2 inline-block'>
            {label}
            </label>
            <input    id= {amountId} className='outline-none w-full bg-transparent py-1.5'
            type='number'
            placeholder="Amount" disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            ></input>
            </div>
            <div className='w-1/2 flex flex-wrap jusitfy-end text-right'>
               <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select
              value={selectCurrency}
              onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled={currencyDisable}
             className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'     >
             {currencyOptions.map((currency) =>(
                  <option key={currency}
                  value={currency}>
                    {currency}
                  </option>
               ))}
              </select>
            </div>
        </div>
    )
}
export default InputBox;