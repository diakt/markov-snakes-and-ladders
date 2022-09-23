import React from 'react';
import Board from './Board';
import Dice from './Dice';

function Home() {
    return (
        <div className='Home'>
            <h2 class = "game-title">A representation of Snakes and Ladders</h2>

            <Board />
            
            <span>&nbsp;&nbsp;</span>
            
            
        </div>
    );
}

export default Home;