import React from 'react';
import { useState } from 'react';
// import ReactDice from 'react-dice-complete';

function Dice(props) {

    const [encapsDice, setEncapsDice] = useState(0);

    function rollDice() {
        let currpos = props.curr_UserPosition
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        setEncapsDice(diceRoll);

        let newPosition = Number(currpos) + Number(diceRoll);
        if (newPosition > 100) {
            newPosition = currpos;
        }

        console.log(currpos, diceRoll, newPosition);
        props.set_Dice(diceRoll);
        props.set_PrevUserPosition(currpos);
        props.set_UserPosition(newPosition);
        props.set_MoveCounter(Number(props.move_Counter + 1));

    }







    return (
        <div className='dice'>
            <span>&nbsp;&nbsp;</span>
            
            <button onClick={rollDice}> Roll Dice </button>
            <p className='dice-roll-result'> {encapsDice} </p>



        </div>
    );
}


export default Dice;