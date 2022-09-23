import React from 'react';
import { useState, useEffect } from 'react';

function Dice(props) {

    const [encapsDice, setEncapsDice] = useState(0);

    function rollDice() {
        let currpos = props.curr_UserPosition
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        setEncapsDice(diceRoll);
        setEncapsDice(1) //for testing
        let newPosition = Number(currpos) + Number(diceRoll);
        if (newPosition > 100) {
            newPosition = currpos;
        }

        console.log(currpos, diceRoll, newPosition);
        props.set_Dice(diceRoll);
        props.set_PrevUserPosition(currpos);
        props.set_UserPosition(newPosition);


        // props.setUser_Position(props.curr_UserPosition+temp);
        // props.set_Dice(temp);
        // console.log(props.curr_UserPosition, " is current user position")
        // console.log(props.curr_Dice, " is current dice")
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