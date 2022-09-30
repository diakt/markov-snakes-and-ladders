import React from 'react';
import { MathComponent } from "mathjax-react";

function Math() {
    //     $ \begin{bmatrix}
    // State & 0 & ... & 3 & 4 & 5 & 6 & 7 & 8 & 9 & ... & 13 & .. & 31 & ... & 100 \\
    // Chance & 0 & ... & 0 & 0 & \frac{1}{6} & \frac{1}{6} & \frac{1}{6} & \frac{1}{6} & 0 & ... & \frac{1}{6} & ... & \frac{1}{6} & ... & 0 
    // \end{bmatrix}  $



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
                            Snakes and ladders (or chutes and ladders) is a common board game. 
                            It requires a board and a die, and is usually played by two people. 
                            The board has some variation, but usually looks like this.
                        </p>
                        <p className="article-section-text">
                            Both players start off the board at “zero”. 
                            The ultimate goal is to reach 100. 
                            The die is rolled, and the player who rolled it adds the value of the die to their position (e.g. if you are at 0 and roll a 3, you go to 3, or if you are at 3 and roll a 5, you go to 8). 
                            However, the interest in snakes and ladders comes from the irregular cases where your position after a roll (say you are at 0, roll a 4, and go to 4) sits on either the bottom of a ladder, or the top of a snake. 
                            In our case, if you end up at position 4, you then move your piece up to 14, the top of the ladder. 
                            If you are unlucky enough to roll a 4 at position 94, you go to 98, but are at the top of a snake/chute, so you fall down to 78. 
                            An important thing to note is that if you are at position 97, for example, and roll a 4, which would bring you to “101,” you do not win, but remain at 97, until you either roll a value which brings you to 98 (and hence 78), 99, or 100.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://i.ebayimg.com/images/g/no4AAOSwSUNiK3zt/s-l1600.jpg" alt="Snakes and Ladders board" />
                    </div>

                </section>

                {/* part 2 */}
                {/* <section className="article-section">
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

                </section> */}

                {/* part 3 */}
                <section className="article-section">
                    <div className='article-section-textleft' id='markov-gif-left'>
                        <h2 className="article-section-title">
                            What are Markov Chains?
                        </h2>
                        <p className="article-section-text">
                            A markov process is (roughly) a system of probabilities that determine your chance of changing your “state” to another “state” at regular intervals. 
                            An example of what one of these processes would look like is on the right. 
                            Take a look. Every time unit, we are either at “state 0” or “state 1.” 
                            If we are at state 0, we have a 50/50 chance of either staying at state 0 or traveling to state 1. 
                            If we are at state 1, we have different odds - a 65% chance of going to state 0, or a 35% chance of staying at state 1. 
                            Take a second to line up this description with how the graph in the middle looks.

                        </p>
                        <p className="article-section-text">


                        </p>
                    </div>
                    <div className='article-section-imageright' id="markov-gif-right">
                        <img className="right-image" src="https://thumbs.gfycat.com/HarshViciousConch-size_restricted.gif" alt="Markov Chain" />
                    </div>

                </section>

                {/* part 4 */}
                {/* <section className="article-section">
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

                </section> */}


                {/* part 5 */}
                <section className="article-section-middle">
                    <h2 className="article-section-title">
                        How does this relate to Snakes and Ladders?
                    </h2>
                    <img className="roll-from-3" src={require("../images/ROLLFROM3.png")} alt="Roll from 3" />
                    <p className='mathjax-row'>
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,5} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,6} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,7} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,8} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,13} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,31} = \frac{1}{6}`} display={true} />
                    </p>


                    <p className="article-section-text-middle">
                        We used the term states already, which are a big part of Markov chains. 
                        It’s a fancy word for “where you are at a point in time.” 
                        Your position in snakes and ladders can be considered a state. 
                        At state 3 (or any state on the board) you roll a die to see which state you will transition to. 
                        You have an equal one in six chance of going to state 13, state 5, state 6, state 7, state 8, or state 32. 
                        Why 13 instead of 4 and 32 instead of 9? Go take a look at the board again.
                    </p>


                </section>
                {/* part 6 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Okay, but what's the big picture of this?
                        </h2>
                        <p className="article-section-text">
                            The big-picture gist is that we can figure out how many rolls on average it takes to finish a game because if you get to state 100, we are going to say that you have a 100% chance of remaining at state 100. 
                            In Markov chains, this would be described as a “absorbing state.” 
                            Think of it as a state that's never going to give you up, never going to let you down, never going to run around and desert you.
                            It can also be referred to as recurrent.

                        </p>
                        <p className="article-section-text">
                            We are trying to find how many rolls on average it takes to get to this "absorbing state." 
                            It's perfectly reasonable to imagine we could just keep going indefinitely after hitting state 100, but nothing will change, so we can consider the process finished.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1oDCSTuK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/uDVRscX.png" alt="Markov Chain" />
                    </div>

                </section>


                {/* part 7 */}
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            A board is one big Markov chain, but how is it represented?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            First, let’s do a smaller example. 
                            As a quick precursor note, there are no absorbing states in this markov chain. 
                            Take a look at the Markov chain on the right. 
                            If we defined state "E" as state 1, and state "A" as state 2, we could represent this markov chain in a matrix as the following:
                        </p>
                        {/* Matrix row */}
                        <MathComponent
                            className='matrix-row'
                            tex={String.raw` \left( \begin{array}{cc}
                            0.3 & 0.7 \\
                            0.4 & 0.6   \end{array} \right)`}
                            display={true}
                        />
                        <p className="article-section-text">
                            Think of every state as having its own row, and its chance of changing to another state as the columns of that row. 
                            We decided to represent state E as state ”1,” so it has its probabilities represented in row 1. 
                            Quick note: Rows go from top to bottom, so state E is the penthouse row.

                        </p>
                        <p className="article-section-text">
                            In row 1, in column 1, we see E has a 30% chance of staying at itself, and a 70% chance of going to state A.
                            The diagonal elements on the matrix are chances that states stay where they are, which is why we see that State A has a 60% chance of staying at itself at the second column of the second row (ground floor), and a 40% chance of going back to state E.

                        </p>


                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div>

                </section>

                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            What does the matrix for our board look like?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            It’s pretty hard to effectively display a 101 by 101 matrix. 
                            Let’s do a row. 
                            Let’s say we, again, are at state 3. 
                            This would be the 3rd row of the matrix. 
                            This row would have 101 entries, each representing a state. 
                            The chance of going to state 3 from state 3 would be 0 (as there is no way to roll a 0). 
                            However, as previously mentioned, the points on the row corresponding to the columns representing 5, 6, 7, 8, 13, and 31 would each have a one-sixth chance.

                        </p>
                        {/* Matrix row */}
                        <MathComponent
                            className='matrix-row'
                            tex={String.raw` \left( \begin{array}{ccccccccccccccccc}
                            column & 0 & ...& 3 & 4 & 5&6  & 7&8  &9 &...  & &13  &... &31  &... &100  \\
                            probability & 0 & ...& 0 & 0 & \frac{1}{6} & \frac{1}{6}  &  \frac{1}{6}& \frac{1}{6} &0 &...  & &\frac{1}{6}  &... &\frac{1}{6}  &... &0    \end{array} \right)`}
                            display={true}
                        />
                        <p className="article-section-text">
                            If we were at state 3, we would have a 1/6 chance of going to state 5, a 1/6 chance of going to state 6, and so on. 
                            The only exception is that we would have no chance of going to state 3, as we are already there. 
                            This is why the diagonal elements are 0. We are not going to go to the state we are already in.

                        </p>
                        


                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>
                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            Are any of our rows different? What's the absorbing state?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            Good questions. As we previously discussed, the game ends when the player reaches 100. 
                            However, how would we represent our "terminating state?" 
                            We can just make the last row of the matrix all 0s, except for the last column, which would be 1. 
                            This would represent the fact that the game is over, and the player has won.
                        </p>
                        {/* Matrix row */}
                        <MathComponent
                            className='matrix-row'
                            tex={String.raw` \left( \begin{array}{cccc}
                            column & 0 & ...& 94 & 95& 96 & 97& 98 & 99 &100  \\
                            probability & 0 & ...& 0 & 0& 0 & 0& 0 & 0 & 1   \end{array} \right)`}
                            display={true}
                        />
                        <p className="article-section-text">
                            If we were at state 3, we would have a 1/6 chance of going to state 5, a 1/6 chance of going to state 6, and so on. 
                            The only exception is that we would have no chance of going to state 3, as we are already there. 
                            This is why the diagonal elements are 0. 
                            We are not going to go to the state we are already in.

                        </p>
                        


                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>

















            </article>

        </div>
    );
}

export default Math;