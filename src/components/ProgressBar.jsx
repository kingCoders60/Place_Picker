import {useState,useEffect} from 'react';

const TIMER=3000;
export default function ProgressBar(){
    const [remainingTime,setRemainingTime]= useState(TIMER);

    useEffect(()=>{
        const interval = setInterval(()=>{
          console.log('INTERVAL');
          setRemainingTime((prevTime)=>prevTime-10);
        },10);
    
        return()=>{
          clearInterval(interval); //if we don't write thsi the interval will ongo a infinite loop.
        };
      },[]);

      return <progress value = {remainingTime} max ={TIMER}/>
      
}