import React from 'react';
var Latex = require('react-latex');

function Math() {
    const fraction = '$$\\frac{1}{2}$$'
    return (
        <div className='Math'>
            <h1>Math of Snakes and Ladders</h1>
            <article className='math-article'>
                <section className = "article-section">
                    <h2 className = "article-section-title"> 
                        <Latex className = "latex-in-article">What is $(3\times 4) \div (5-3)?$</Latex>
                        I'm a title
                    </h2>
                    <p className = "article-section-text">
                        I'm text
                    </p>
                </section>
                <section className = "article-section">
                    <h2 className = "article-section-title"> 
                        I'm a title
                    </h2>
                    <p className = "article-section-text">
                        I'm text
                    </p>
                </section>
                <section className = "article-section">
                    <h2 className = "article-section-title"> 
                        I'm a title
                    </h2>
                    <p className = "article-section-text">
                        I'm text
                    </p>
                </section>
                




            </article>
            
        </div>
    );
}

export default Math;