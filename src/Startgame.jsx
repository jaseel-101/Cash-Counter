import { useNavigate } from "react-router-dom";

function Startgame(){

    const navigate = useNavigate();

    


    function gamestart(){

        navigate("./game");
    }






    return(

        <div>

            <button className="btn" style={{color: "black"}}onClick={gamestart}>Start game</button>


            
        </div>



    );
}
export default Startgame;