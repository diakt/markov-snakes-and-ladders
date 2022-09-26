import React from 'react';
var Latex = require('react-latex');

function Math() {
    {/* <Latex className="latex-in-article">
                            What is $(3\times 4) \div (5-3)?$
                        </Latex> */}
    const fraction = '$$\\frac{1}{2}$$'
    return (
        <div className='Math'>
            <h1>Math of Snakes and Ladders</h1>
            <article className='math-article'>
                {/* part 1 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            What is Snakes and Ladders?
                        </h2>

                        <p className="article-section-text">
                            Snakes and ladders (or chutes and ladders)  is a common board game. It requires a board and a die, and is usually played by two people. The board has some variation, but usually looks like this.
                        </p>
                        <p className="article-section-text">
                            Both players start off the board at “zero”. The ultimate goal is to reach 100. The die is rolled, and the player who rolled it adds the value of the die to their position (e.g. if you are at 0 and roll a 3, you go to 3, or if you are at 3 and roll a 5, you go to 8). However, the interest in snakes and ladders comes from the irregular cases where your position after a roll (say you are at 0, roll a 4, and go to 4) sits on either the bottom of a ladder, or the top of a snake. In our case, if you end up at position 4, you then move your piece up to 14, the top of the ladder. If you are unlucky enough to roll a 4 at position 94, you go to 98, but are at the top of a snake/chute, so you fall down to 78. An important thing to note is that if you are at position 97, for example, and roll a 4, which would bring you to “101,” you do not win, but remain at 97, until you either roll a value which brings you to 98 (and hence 78), 99, or 100.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://i.ebayimg.com/images/g/no4AAOSwSUNiK3zt/s-l1600.jpg" alt="Snakes and Ladders board" />
                    </div>

                </section>

                {/* part 2 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            How does the game collide with mathematics?
                        </h2>
                        <p className="article-section-text">
                            Snakes and ladders was a game that I played a lot as a kid, and I became interested in figuring out how many rolls (on average) it would take to finish a game of snakes and ladders at some point when I was young. While taking a course on Markov chains, I had a lightbulb moment, and ended up spending the majority of my time the next several days on simulating it. In the spirit of answering questions that no one ever asked, I am pleased to report that it takes ~39 rolls to finish a game of snakes and ladders in the single person case. I’ll describe how I came to this conclusion, and build through my thought process.
                        </p>
                        <p className="article-section-text">
                            If you haven't yet been introduced to a bit of linear algebra, or maybe a little bit of probability theory, it’s just a matter of time, and nothing in here is particularly vicious, but it may be pretty difficult to follow along. If I was smarter, I could explain things better (my bad), but believe me when I say that you could figure it out in an hour or so if you had a gun to your head.
                        </p>
                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://i.ebayimg.com/images/g/no4AAOSwSUNiK3zt/s-l1600.jpg" alt="Snakes and Ladders board" />
                    </div>

                </section>

                {/* part 3 */}
                <section className="article-section">
                    <div className='article-section-textleft' id='markov-gif-left'>
                        <h2 className="article-section-title">
                            What are Markov Chains?
                        </h2>
                        <p className="article-section-text">
                            A markov process is (roughly) a system of probabilities that determine your chance of changing your “state” to another “state” at regular intervals. An example of what one of these processes would look like is on the right. Take a look. Every time unit, we are either at “state 0” or “state 1.” If we are at state 0, we have a 50/50 chance of either staying at state 0 or traveling to state 1. If we are at state 1, we have different odds - a 65% chance of going to state 0, or a 35% chance of staying at state 1. Take a second to line up this description with how the graph in the middle looks.

                        </p>
                        <p className="article-section-text">


                        </p>
                    </div>
                    <div className='article-section-imageright' id="markov-gif-right">
                        <img className="right-image" src="https://thumbs.gfycat.com/HarshViciousConch-size_restricted.gif" alt="Markov Chain" />
                    </div>

                </section>

                {/* part 4 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Markov chains are "forgetful"
                        </h2>
                        <p className="article-section-text">
                            In Markov systems, your probability of something happening in the future doesn’t depend on anything that has already happened. A good phrase to remember is "What happens next depends only on the state of affairs now." This is usually a very bad approach to real life. As a metaphor, if you loan money to your friends from time to time, and someone didn’t pay you back, you would probably pay attention to that. In an iffily-markovy sense, though, you just wouldn’t pay attention to that.
                        </p>
                        <p className="article-section-text">
                            As an example of this, say you were at state 0 in the Markov chain gif that we just saw. If you were at position 0 (or position 1), your odds of either staying at the same state or going to the other state don't change based on how you got there. If you just got to position 1, or if you stayed on position 1 for the last 20 time units, your chances of staying at state 1 or going to state 0 wouldn't change at all based on your past history.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div>

                </section>


                {/* part 5 */}
                <section className="article-section-middle">
                    <h2 className="article-section-title">
                        How does this relate to Snakes and Ladders?
                    </h2>
                    <img className="roll-from-3" src={require("../images/ROLLFROM3.png")} alt="Roll from 3" />
                    <p className="article-section-text-middle">
                    We used the term states already, which are a big part of Markov chains. It’s a fancy word for “where you are at a point in time.” Your position in snakes and ladders can be considered a state. At state 3 (or any state on the board) you roll a die to see which state you will transition to. You have an equal one in six chance of going to state 13, state 5, state 6, state 7, state 8, or state 32. Why 13 instead of 4 and 32 instead of 9? Go take a look at the board again.                    </p>

                </section>

                {/* part 6 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            A board is one big Markov chain, but how is it represented?
                        </h2>
                        <p className="article-section-text">
                        This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p>
                        <p className="article-section-text">
                        Let’s say we, again, are at state 41. This would be the 41st row of the matrix. This row would have 101 entries, each representing a state. The chance of going to state 0 from state 41 would be 0 (as there is no way to go to 0 by rolling a die). The same holds for state 41, as there is no way to go to 41 by rolling a die. However, the 42nd entry in the row, representing state 42, would have one-sixth.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div>

                </section>

















            </article>

        </div>
    );
}

export default Math;