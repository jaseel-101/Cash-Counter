
import {useRef, useEffect } from 'react';
import './App.css'
import { useNavigate } from 'react-router-dom';
function Game({
  count, setCount,
  target, setTarget,
  message, setMessage,
  failmessage, setFailmessage,
  color, setColor,
  onoff, setOnoff,
  timercount, setTimercount,
  score, setScore,
  next, setNext,
  failcount, setFailcount,
  scoreplus, setScoreplus,
  clickscore, setClickscore,
  displayclick, setDisplayclick,reset
}){

    const navigate = useNavigate();
  const clickAudio = useRef(new Audio("/Cash-Counter/click.mp3"));
  const errorAud = useRef(new Audio("/Cash-Counter/error.mp3"));
  const correctAud = useRef(new Audio("/Cash-Counter/correct.mp3"));
  

  useEffect(()=>{

    const timer= setTimeout(()=>{
        navigate("/gameover");
        setTimercount(30);
    },30000);
    return () => clearTimeout(timer);
  }, [navigate]);


  useEffect(function () {

    const a = setInterval(function () {
      setTimercount(function (value) {
        if (value <= 1) {
          clearInterval(a);
          return 0;
        }
        return value - 1;



      });
    }, 1000);
    return function () {
      clearInterval(a);
    }
  }, []
  );
  useEffect(function () {

    const b = setInterval(function () {
      setFailcount(function (value) {
        if (value <= 1) {
          clearInterval(b);




          return 0;


        }
        return value - 1;



      });
    }, 1000);
    return function () {
      clearInterval(b);
    }
  }, []
  );



  function adder1() {

    setCount(count + 5);
    clickAudio.current.play();
    setClickscore(clickscore - 0.1);


  }
  function adder2() {

    setCount(count + 2);
    clickAudio.current.play();
    setClickscore(clickscore - 0.1);

  }
  function adder3() {

    setCount(count + 1);
    clickAudio.current.play();
    setClickscore(clickscore - 0.1);

  }
  function check() {
    setClickscore(2);
    
    

    

    if (target == count) {

      setMessage("You Are Correct");
      setColor("green");

      correctAud.current.play();
      setOnoff(true);

      if (timercount > 26) {
        
        const point = Math.floor(10*clickscore);

        
        setScore(prev=> prev + point);
        setScoreplus("+"+point);
        setTimeout(() => {
          setScoreplus("");
          
        }, 1300);
        
      }

      else if (timercount > 28) {
        const point = Math.floor(10*clickscore);
        setScore(prev=> prev + point);
         
        setScoreplus("+"+point);
        setTimeout(() => {
          setScoreplus("");
          
        }, 1300);
        

      }
      else if (timercount > 26) {
        const point = Math.floor(8*clickscore);
        setScore(prev=> prev + point);

         setScoreplus("+"+point);
        setTimeout(() => {
          setScoreplus("");
          
        }, 1300);
      }
      else {
        const point = Math.floor(5*clickscore);
        setScore(prev=> prev + point);
         setScoreplus("+"+point);
        setTimeout(() => {
          setScoreplus("");
          
        }, 1300);
      }

      setNext("Next");
      









    }
    else {
      setMessage("You Are Wrong");
      setColor("red");
      errorAud.current.play();
      setOnoff(true);
      setNext("Next");
      if( score>=5){

        setScore(score - 5);
           setScoreplus("-5");
        setTimeout(() => {
          setScoreplus("");
          
        }, 1300);
        
      }
      



    }





  }





  return (
    <div> <div className='timerclass'>
       <p style={{fontSize: 35, paddingRight: 0 }}>{timercount}</p></div>
       <div>
      <div className='intro' style={{ fontSize: "50px", fontFamily: "'Montserrat',san-serif" }}>Cash Counter</div>
      <div className='shad' style={{ backgroundColor: color, borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p style={{ fontSize: "25px", fontFamily: "'Montserrat',san-serif", margin: 2, fontWeight: "800" , padding: "5px" ,color: "yellow"}}>Target Amount: <span style={{ fontSize: "60px" }} className='tarnumb'>{target}</span> Rupees</p>
        <p className='tar' style={{ margin: 2 }}>{count}</p>
        <p className='score' style={{fontFamily: "monospace" ,fontWeight: "bold"}}>score:{score} <sup style={{fontSize: "19px" , color: "brown",fontWeight: "lighter" }}>{scoreplus}</sup></p>
        <div style={{ padding: "10px" }} >

          <span style={{ padding: "10px" }}>

            <button className={`btn ${onoff ? 'disabled' : ''}`} style={{ color: "black" }} onClick={adder2} disabled={onoff}>

              +2

            </button>




          </span>
          <span style={{ padding: "10px" }}>
            <button style={{ color: "black" }} onClick={adder1} disabled={onoff} className={`btn ${onoff ? 'disabled' : ''}`}>

              +5

            </button>



          </span>

          <span style={{ padding: "10px" }}>

            <button style={{ color: "black" }} onClick={adder3} disabled={onoff} className={`btn ${onoff ? 'disabled' : ''}`}>

              +1

            </button>
          </span>
          <div style={{ padding: "10px" }}>

            <button className='btn1' style={{ borderStyle: "solid", borderWidth: "2px", borderColor: "white", color: "black" }} onClick={check} hidden={onoff}>Submit</button>


          </div>
          <button className='btn1' style={{ borderStyle: "solid", borderWidth: "2px", borderColor: "white", color: "black" }} onClick={reset}> {next}</button>
          <p style={{ fontSize: "30px", fontFamily: "'Montserrat',san-serif" }}>{message}</p>
          
          <p style={{ fontSize: "70px", fontFamily: "'Montserrat',san-serif", color: "red" }}>{failmessage}</p>





        </div>

      </div>
    </div>
    </div>
  )
}

export default Game