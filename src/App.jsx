import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [target, setTarget] =useState(Math.floor(Math.random()*50)+1)
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("orange");
  const clickAudio = useRef(new Audio("/click.mp3"));
  const errorAud = useRef(new Audio("/error.mp3"));
  const correctAud = useRef(new Audio("/correct.mp3"));
  const [onoff,setOnoff] = useState(false);
  
  
  function adder1(){

   setCount(count+5);
   clickAudio.current.play();
   

  }
   function adder2(){

   setCount(count+2);
   clickAudio.current.play();

  }
  function adder3(){

   setCount(count+1);
   clickAudio.current.play();

  }
  function check(){

    if(target==count){

      setMessage("You Are Correct");
      setColor("green");
      
      correctAud.current.play();
      setOnoff(true);
      

     


       
       
       
       
    }
    else{
      setMessage("You Are Wrong");
      setColor("red");
       errorAud.current.play();
       setOnoff(true);
      
      
      
    }
    
    
    
    
    
  }

  function reset(){
    setCount(0);
    setMessage("");
    setColor("orange");
    setTarget(Math.floor(Math.random()*51)+0)
    setOnoff(false);
  }




  return (
    <div>
      <div style={{ fontSize: "50px",fontFamily:"'Montserrat',san-serif"}}>Cash Counter</div>
      <div className='shad'style={{ backgroundColor: color , borderRadius: "20px", display:"flex",flexDirection:"column",alignItems:"center"}}>
        <p style={{ fontSize: "20px",fontFamily:"'Montserrat',san-serif",margin:2}}>Target Amount: <span style={{fontSize:"40px",color:"Yellow"}}>{target}</span></p>
        <p className='tar' style={{ margin:2 }}>{count}</p>
        <div style={{padding:"10px"}} >

          <span style={{padding:"10px"}}>

            <button className="btn" style={{  color: "black" }} onClick ={adder2} disabled={onoff}>

              2 Rupees

            </button>



          </span>
          <span style={{padding:"10px"}}>
            <button style={{  color: "black" }} onClick={adder1} disabled={onoff} className='btn'>

              5 Rupees

            </button>



          </span>

          <span style={{padding:"10px"}}>

            <button style={{ color: "black" }} onClick={adder3} disabled={onoff} className='btn'>

              1 Rupees

            </button>
          </span>
          <div style={{padding:"10px" }}>

          <button className='btn1' style={{borderStyle:"solid", borderWidth:"2px", borderColor:"white" ,color:"black"}} onClick={check} hidden={onoff}>check</button>
          
          
          </div>
          <button className='btn1' style={{borderStyle:"solid", borderWidth:"2px", borderColor:"white" , color:"black"}} onClick={reset}> reset</button>
          <p style={{fontSize:"30px" , fontFamily:"'Montserrat',san-serif"}}>{message}</p>
          




        </div>

      </div>
    </div>
  )
}

export default App
