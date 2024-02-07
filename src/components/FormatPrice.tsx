import React from 'react'
 interface Amount {
    amount:number
 }
const FormatedPrice = ({amount}:Amount) => {
    const formated = new Number(amount).toLocaleString('en-US',{
        style:"currency",
        currency:"USD",
        maximumFractionDigits:2
    })
  return (
    <span>{formated}</span>
  )
}

export default FormatedPrice