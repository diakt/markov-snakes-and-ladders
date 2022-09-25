import React from 'react';
import Board from './Board';
import Dice from './Dice';

function Home() {
    return (
        <div className='Home'>
            <h2 className = "game-title">Snakes and Ladders</h2>

            <Board />
            

            
            
        </div>
    );
}

export default Home;