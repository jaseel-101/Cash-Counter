if (performance.navigation.type === 1) {
  window.location.href = "/";
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState} from "react";
import Gameover from "./gameover";
import Game from "./game";
import Startgame from "./Startgame";


export default function App(){

  const [count, setCount] = useState(0)
    const [target, setTarget] = useState(Math.floor(Math.random() * 50) + 1)
    const [message, setMessage] = useState("");
    const [failmessage, setFailmessage] = useState("");
    const [color, setColor] = useState("orange");
    const [onoff, setOnoff] = useState(false);
    const [timercount, setTimercount] = useState(30);
    const [score, setScore] = useState(0);
    const [next, setNext] = useState("Reset");
    const [failcount, setFailcount] = useState(15);
    const[scoreplus,setScoreplus] = useState("");
    const[clickscore,setClickscore] = useState(2);
    const [displayclick,setDisplayclick] = useState(0);

    function reset() {
    setCount(0);
    setMessage("");
    setColor("orange");
    setTarget(Math.floor(Math.random() * 50) + 1)
    setOnoff(false);
    if (next == "Retry") {
      setNext("Reset");
      setScore(0);
    }
    setFailmessage("");
  }

  function resetscore(){
    setScore(0);
  }
    
 


  return (
    <BrowserRouter basename="/Cash-Counter">

    

  
      <Routes>
        

        {/*Main game*/}
        <Route path="/game" element= {<Game

        count={count}
              setCount={setCount}
              target={target}
              setTarget={setTarget}
              message={message}
              setMessage={setMessage}
              failmessage={failmessage}
              setFailmessage={setFailmessage}
              color={color}
              setColor={setColor}
              onoff={onoff}
              setOnoff={setOnoff}
              timercount={timercount}
              setTimercount={setTimercount}
              score={score}
              setScore={setScore}
              next={next}
              setNext={setNext}
              failcount={failcount}
              setFailcount={setFailcount}
              scoreplus={scoreplus}
              setScoreplus={setScoreplus}
              clickscore={clickscore}
              setClickscore={setClickscore}
              displayclick={displayclick}
              setDisplayclick={setDisplayclick}
              reset={reset}
             
        
        
        
        
        
        />
        }
        />
        {/*gameover*/}
        <Route path="/gameover" element= { <Gameover score={score} reset={reset} resetscore={resetscore}/>}/>



          {/*startgame*/}
          <Route path="/" element={ <Startgame />} />

      </Routes>

      







 
    
    </BrowserRouter>


  );
}

