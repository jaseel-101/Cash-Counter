

import { useNavigate } from "react-router-dom";
import './App.css'

function Gameover({score,reset,resetscore}){

    const navigate=useNavigate();
function restart(){

    navigate("/game");
    resetscore();
    reset();
    
}




return(
    <div>
        <div className="overdiv1">

    <div style={{color: "red", fontSize: "70px"}}> Time is UP</div>
    <div>

        <button className='btn1' style={{color: "black"}}onClick={restart}> Play Again </button>
        <p className="tarnumb" style={{fontSize: 50 , fontWeight: "300" , textShadow: "0px 0px 0px"}}>your score is {score}</p>
    </div>
    </div>
    </div>
);
}
export default Gameover;