import {useEffect, useState} from 'react'
export const App = () => {
  const [count, setCount] = useState(0);
const handleClick = () => {
    setCount(count+1);
    setCount(count+1);
    setCount(count+1);
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click Me</button>

    </div>
  );
}