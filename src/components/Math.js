import React from 'react';
var Latex = require('react-latex');

function Math() {
    const fraction = '$$\\frac{1}{2}$$'
    return (
        <div className='Math'>
            <h2>Math of Snakes and Ladders</h2>
            <article className='latex-section'>
                <Latex>What is $(3\times 4) \div (5-3)?$</Latex>




            </article>
            
        </div>
    );
}

export default Math;