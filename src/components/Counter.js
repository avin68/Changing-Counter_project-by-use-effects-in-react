import { useEffect, useState } from "react"
import "./Counter.css"
import Button from "./Button"

function Counter(){
    let [count , setCount] = useState(0)
    let [myClass , setMyClass] = useState('')
    let [count1, setCount1]= useState(0)
    function increaseHandler(){
        setCount(count+1)
        // setCount1(count1+1)
        // if(count>5){
        //     setMyClass('increase')
        // }
        // console.log(count);
        
    }
    function resetHandler(){
        setCount1(0)
    }


    useEffect(()=>{
        if(count>=5){
            setMyClass('increase')
        }
    }, [count])

        // useEffect(
        //     ()=>{
        //         console.log('رندر شد');
                
        //     }
        // )

        // useEffect(()=>{
        //     console.log('is rendering....');
            
        // }, [count])


    return(
        <>
            <h2 className={`screen ${myClass}`}>{count}</h2>
            <Button text="increase" clickHandler={increaseHandler} />
            <Button text="reset" clickHandler={resetHandler} />
        </>
    )
}

export default Counter