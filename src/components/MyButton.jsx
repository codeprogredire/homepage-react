import { useState } from 'react';

export function MyButton(){

    const [count,setCount]=useState(0);

    function clickHandler(){
        setCount(count+1);
        alert(`Button clicked ${count+1} times. Have a good day.`)
    }
    return (
        <button onClick={clickHandler}>Click me</button>
    )
}