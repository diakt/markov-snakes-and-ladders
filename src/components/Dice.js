import React from 'react';
import { useState, useEffect } from 'react';

function Dice(props) {
    const [dice, setDice] = useState(0);

    function rollDice() {
        setDice(Math.floor(Math.random() * 6) + 1);
    }


    // useEffect(() => {
    //     rollDice();
    // }, [dice]);



    return (
        <div className='dice'>
            I'm a dice.
            <span>&nbsp;&nbsp;</span>
            <button onClick={rollDice}>
                Roll
            </button>
            <p className='dice-roll-result'> {dice}</p>



        </div>
    );
}


export default Dice;