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



                {/* ------------------------------------------------------------------------ */}
                {/* Introduction */}
                {/* ------------------------------------------------------------------------ */}


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
                            I played this game fairly regularly as a kid.
                            At some point, I wondered if there was any way to figure out the best strategy.
                            As the game itself is entirely determined by chance, there was not.
                            However, I also wondered how much time it would take to win a game on average.
                            As the game itself is entirely determined by chance, there was.
                        </p>
                        <p className="article-section-text">
                            I was recently doing coursework in probability, and it was offhandedly mentioned as one of several examples of Markov chain processes.
                            It was a pretty immediate jump that I had to dunk on a younger version of myself and figure out the math.

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
                            A markov process is (roughly) a system of probabilities that determine your chance of changing your “state” to another “state” at regular intervals.
                            An example of what one of these processes would look like is on the right.
                            Take a look. Every time unit, we are either at “state 0” or “state 1.”
                            If we are at state 0, we have a 50/50 chance of either staying at state 0 or traveling to state 1.
                            If we are at state 1, we have different odds - a 65% chance of going to state 0, or a 35% chance of staying at state 1.
                            Take a second to line up this description with how the graph in the middle looks.
                            Props to whoever made this gif, they did god's work.


                        </p>
                        <p className="article-section-text">


                        </p>
                    </div>
                    <div className='article-section-imageright' id="markov-gif-right">
                        <img className="right-image" src="https://thumbs.gfycat.com/HarshViciousConch-size_restricted.gif" alt="Markov Chain" />
                    </div>

                </section>

                



                <section className="article-section-middle">
                    <h2 className="article-section-title">
                        Snakes and Ladders is a big Markov chain!
                    </h2>
                    <img className="roll-from-3" src={require("../images/ROLLFROM3.png")} alt="Roll from 3" />
                    

                    
                    <p className="article-section-text-middle">
                        To quickly couch this claim, we can represent your position on the board as a state, and move to other states based on the probability we get from the die.
                        We're going to figure out how many rolls it takes on average to finish a game of snakes and ladders. 
                        We're going to need to discuss a couple of relevant parts of the Markov chain concept first, and then we will get to hashing out the details of the board.
                    </p>


                </section>
                {/* part 6 */}






                {/* ------------------------------------------------------------------------ */}
                {/* Section 1 */}
                {/* ------------------------------------------------------------------------ */}
                <h2>Part 1: Important concepts in Markov Chains</h2>


                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Quick concept: States in Markov chains
                        </h2>
                        <p className="article-section-text">
                            We used the term states already, which are a big part of Markov chains.
                            It’s a fancy word for “where you are at a point in time.”
                            Your position in snakes and ladders can be considered a state.
                            At state 3 (or any state on the board) you roll a die to see which state you will transition to.
                            You have an equal one in six chance of going to state 13, state 5, state 6, state 7, state 8, or state 32.
                            Why 13 instead of 4 and 32 instead of 9? Go take a look at the board again.
                        </p>
                        
                        

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1oDCSTuK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/uDVRscX.png" alt="Markov Chain" />
                    </div>

                </section>



                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Quick concept: Transition probabilities
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            
                            Take a look at the Markov chain on the right.
                            If we defined E as the first state, and A as the second, we could represent this markov chain in a matrix as the following:
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
                            We decided to represent state A as the first, so it has its probabilities represented in row 1, the top row.
                            We decided to represent state B as the second, so it has its probabilities represented in row 2, the bottom row.


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


                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Quick concept: Absorbing states
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            There are two types of states in Markov chains: transient and absorbing.
                            Transient states are states that can transition to other states.
                            Absorbing states are states that cannot transition to other states.
                            Think of it as a state that's never going to give you up, never going to let you down, never going to run around and desert you.
                            It can also be referred to as recurrent.
                            Take a look at the Markov chain on the right, and its representation in a matrix below.

                        </p>
                        
                        {/* Matrix row */}
                        <MathComponent
                            className='matrix-row'
                            tex={String.raw` \left( \begin{array}{cc}
                            0.9 & 0.1 \\
                            0 & 1   \end{array} \right)`}
                            display={true}
                        />
                        <p className="article-section-text">
                            In the old Markov chain, there were no absorbing states - Neither state E or state A would trap you like Davy Jones' locker.
                            Unlike the previous example, this Markov chain has an absorbing state.
                            State 1 is a transient state, because it can transition to state 2.
                            State 2 is an absorbing state, because it cannot transition to any other state.
                        </p>
                        


                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1oDCSTuK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/uDVRscX.png" alt="Markov Chain" />
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
                            Are any of our rows different? What's the absorbing state in snakes and ladders?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            Good question. As we previously discussed, the game ends when the player reaches 100.
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
                            

                        </p>



                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>


                {/* ------------------------------------------------------------------------ */}
                {/* Section 2 */}
                {/* ------------------------------------------------------------------------ */}






                
                <h2>Part 2: Using our knowledge of Markov Chains with Snakes and Ladders</h2>



                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            How do we now calculate the average number of rolls to complete the game?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            There are generally two ways to approach a simple probability problem like this.
                            The first is simulation, in which we simulate the game many times and calculate the average number of rolls. 
                            We can make something that plays the game five million times and we can examine that data.
                            While this is *cough* effective, and pretty straightforward, in terms of total understanding, it's still not quite exact in a pedantic sense.
                        </p>
                        <p className="article-section-text">
                            The second approach is using our newfound understanding of Markov Chains, in combination with some linear algebra on our newly created snakes and ladders matrix.
                            It will give us an exact answer, which is pretty cool.
                            Not only is exactness cool, but we can check our answer against the answer the simulation gives us, which is a good way to make sure I haven't led you on an elaborate ruse for some abstrusely justified sense of personal gratification.
                            {/* Note deterministic, probabilistic differentiation */}
                        </p>
                        




                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            How do we use our Markov Chain Matrix?
                        </h2>

                        <p className="article-section-text">
                        If a matrix is a rectangle, a vector is a skyscraper. It has a width of one, and our vector would have a "height" of 101.
                        If we were to multiply our matrix by a vector we created with a 1 (any number really) in the top row and 0s everywhere else, we would get back a vector with the same dimensions, but with the value of one sixth at all six of the possible positions in the vector we could go from 0 (i.e. state 38 (1 is a ladder), 2, 3, 14 (4 is a ladder), 5, and 6 ).
                        </p>
                        

                        
                  

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Matrix_vector_multiplication.svg/2560px-Matrix_vector_multiplication.svg.png" alt="Snakes and Ladders board" />
                    </div>

                </section>





                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            How do we use our Markov Chain Matrix?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        
                        

                        <p className="article-section-text">
                        If a matrix is a rectangle, a vector is a skyscraper. It has a width of one, and our vector would have a "height" of 101.
                        If we were to multiply our matrix by a vector we created with a 1 (any number really) in the top row and 0s everywhere else, we would get back a vector with the same dimensions, but with the value of one sixth at all six of the possible positions in the vector we could go from 0 (i.e. state 38 (1 is a ladder), 2, 3, 14 (4 is a ladder), 5, and 6 ).
                        </p>
                        
                        <p className="article-section-text">
                            

                        </p>



                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>
                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            How do we now calculate the average number of rolls to complete the game?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            There are generally two ways to approach a simple probability problem like this.
                            The first is simulation, in which we simulate the game many times and calculate the average number of rolls. 
                            We can make something that plays the game five million times and we can examine that data.
                            While this is *cough* effective, and pretty straightforward, in terms of total understanding, it's still not quite exact in a pedantic sense.
                        </p>
                        <p className="article-section-text">
                            The second approach is using our newfound understanding of Markov Chains, in combination with some linear algebra on our newly created snakes and ladders matrix.
                            It will give us an exact answer, which is pretty cool.
                            Not only is exactness cool, but we can check our answer against the answer the simulation gives us, which is a good way to make sure I haven't led you on an elaborate ruse for some abstrusely justified sense of personal gratification.

                        </p>
                        

                        <p className="article-section-text">
                        If a matrix is a square, a vector is a skyscraper. It has a width of one, and our vector would have a "height" of 101.
                        If we were to multiply our matrix by a vector we created with a 1 (any number really) in the top row and 0s everywhere else, we would get back a vector with the same dimensions, but with the value of one sixth at all six of the possible positions in the vector we could go from 0 (i.e. state 38 (1 is a ladder), 2, 3, 14 (4 is a ladder), 5, and 6 ).
                        </p>
                        
                        <p className="article-section-text">
                            

                        </p>



                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>

















            </article>
            {/* absolutely necessary to say why this is different from simulation */}
            {/* maybe run a second simulation with say, n=100, or n=10000, to show that it is meaningful and valuable */}
            {/*  */}
            {/*  */}


        </div>
    );
}






{/* <p className='mathjax-row'>
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,5} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,6} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,7} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,8} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,13} = \frac{1}{6}`} display={true} />
                        <MathComponent className='lat-elt' tex={String.raw`P_{3,31} = \frac{1}{6}`} display={true} />
                    </p> */}







export default Math;