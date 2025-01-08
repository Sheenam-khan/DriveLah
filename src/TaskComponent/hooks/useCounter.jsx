import React ,{useEffect, useState}from 'react'

const useCounter=()=>{
    const [count, setCount] = useState(0)
const increment=()=>setCount(prev=>prev+1)
const decrement=()=>setCount(prev=>prev-1)
// const increment=()=>setCount(prev=>count+1)
// const decrement=()=>setCount(prev=>count-1)
useEffect(()=>{
localStorage.setItem('count',count)
},[count])
  return {count,increment,decrement}
}

export default useCounter