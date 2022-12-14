import React from 'react';
import { useState, useEffect } from 'react';
import Dice from './Dice';


function Board() {
    //states
    const [dice, setDice] = useState(0);
    const [userPosition, setUserPosition] = useState(0);
    const [prevUserPosition, setPrevUserPosition] = useState(0);
    const [moveCounter, setMoveCounter] = useState(0);

    //builder constants
    const nums = Array.from({ length: 100 }, (_, i) => 100 - i);
    let reverse = (arr, start, end) => {
        while (start < end) {
          let t = arr[start];
          arr[start++] = arr[end];
          arr[end--] = t;
        }
      };
    for (let i = 0; i < 5; i++) {
            reverse(nums, 20*i+10, 20*i+19);
    }


    //want an array where it goes 1-10, 20-11, 21-30, etc.
    const laddermap = new Map([[1, 38], [4, 14], [9, 31], [21, 42], [28, 84], [36,44], [51, 67], [71, 91], [80, 100]])
    const snakemap = new Map([[16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]])
    const boardendmap = new Map


    for (let i = 0; i < 100; i++) {
        if (laddermap.has(i)) {
            boardendmap.set(i, laddermap.get(i))
        }
        else if (snakemap.has(i)) {
            boardendmap.set(i, snakemap.get(i))
        }

    }


    const positionDisplay = (elt) => {
        if (userPosition !== 0) {
            let oldPosition = document.getElementById(userPosition);
            console.log("oldPosition", oldPosition);
            oldPosition.style.backgroundColor = 'lightgrey';
            elt.style.backgroundColor = "aqua";
            setUserPosition(elt.id);
        }
        else {
            elt.style.backgroundColor = "aqua";
            setUserPosition(elt.id);
        }
    }

    const resetAfterCompletion = () => {
        for (let i = 1; i < 101; i++) {
            let elt = document.getElementById(i);
            elt.style.backgroundColor = 'white';
        }
        setUserPosition(0);
        setPrevUserPosition(0);
        setMoveCounter(0);
        setDice(0);
    }


    useEffect(() => {

        if (userPosition !== 0 && userPosition <= 101) {
            if (prevUserPosition !== 0) {
                let oldPosition = document.getElementById(prevUserPosition);
                oldPosition.style.backgroundColor = 'lightgrey';

            }
            let newPosition = document.getElementById(userPosition);
            newPosition.style.backgroundColor = "aqua";
        }
        if (laddermap.has(userPosition)) {
            if (prevUserPosition == 0) {
                let oldPosition = document.getElementById(userPosition);
                oldPosition.style.backgroundColor = 'lightgreen';
            }
            else {
                let oldPosition = document.getElementById(userPosition);
                oldPosition.style.backgroundColor = 'lightgreen';
            }

            let newPosition = document.getElementById(laddermap.get(userPosition));
            newPosition.style.backgroundColor = "aqua";
            setUserPosition(boardendmap.get(userPosition));
        }
        else if (snakemap.has(userPosition)) {

            let oldPosition = document.getElementById(userPosition);
            oldPosition.style.backgroundColor = 'pink';

            let newPosition = document.getElementById(snakemap.get(userPosition));
            newPosition.style.backgroundColor = "aqua";
            setUserPosition(boardendmap.get(userPosition));
        }

    }, [userPosition])

    useEffect(() => {
        console.log('current userPosition is ', userPosition)
        if (userPosition == 100) {
            alert("You completed the game in " + moveCounter + " moves!");
            resetAfterCompletion();
        }
    }, [userPosition])



    return (

        <div className='board'>
            <div className="grid-container">
                {nums.map((num) => {
                    if (laddermap.has(num)) {
                        let elt = laddermap.get(num)
                        return (
                            <button
                                className='square-ladder'
                                id={num}
                                key={num}
                                // onClick={(event) => {
                                //     console.log("id", event.target.id, "ladder")
                                //     positionDisplay(event.target)
                                //     setUserPosition(event.target.id)
                                // }}
                            >
                                {(num).toString()}{"  (" + elt + ")"}
                            </button>
                        )
                    }

                    else if (snakemap.has(num)) {
                        let elt = snakemap.get(num)
                        return (
                            <button
                                className='square-snake'
                                id={num}
                                key={num}
                                // onClick={(event) => {
                                //     console.log("id", event.target.id, "snake")
                                //     positionDisplay(event.target)
                                // }}
                            >
                                {(num).toString()}{"  (" + elt + ")"}
                            </button>
                        )
                    }
                    else {
                        return (
                            <button
                                className='square-normal'
                                id={num}
                                key={num}
                                // onClick={(event) => {
                                //     console.log("id", event.target.id, "normal")
                                //     positionDisplay(event.target)
                                // }}
                            >
                                {(num).toString()}
                            </button>
                        )
                    }
                })}






            </div>

            <span>&nbsp;&nbsp;</span>

            {/* <div className='display-player-position'>
                Current dice is {dice}, current position is {userPosition}, counter is {moveCounter}

            </div> */}

            <Dice
                curr_UserPosition={userPosition}
                set_UserPosition={setUserPosition}
                prev_UserPosition={prevUserPosition}
                set_PrevUserPosition={setPrevUserPosition}
                curr_Dice={dice}
                set_Dice={setDice}
                move_Counter={moveCounter}
                set_MoveCounter={setMoveCounter}
                reset={resetAfterCompletion}
            />

        
        </div>
        //matrix for markov chain of snakes and ladders


    );
}




export default Board;