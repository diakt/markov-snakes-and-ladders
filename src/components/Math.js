import React from 'react';
import { MathComponent } from "mathjax-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Math() {
    //     $ \begin{bmatrix}
    // State & 0 & ... & 3 & 4 & 5 & 6 & 7 & 8 & 9 & ... & 13 & .. & 31 & ... & 100 \\
    // Chance & 0 & ... & 0 & 0 & \frac{1}{6} & \frac{1}{6} & \frac{1}{6} & \frac{1}{6} & 0 & ... & \frac{1}{6} & ... & \frac{1}{6} & ... & 0 
    // \end{bmatrix}  $

    const Mark = () => {
        const markovString = `
        import numpy as np
        import pandas as pd

        class MarkovNS(object):
            def __init__(self):
                self.odds = [[1, 38], [4, 14], [9, 31], [
                    21, 42], [28, 84], [36,44], [51, 67], [71, 91], [80, 100], [16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]

                self.odd_map = {}
                for a, b in self.odds:
                    self.odd_map[a] = b

                self.d = {}
                for i in range(0, 101):
                    if i in self.odd_map:
                        pass
                    else:
                        self.d[i] = i

                self.matrix = [[0 for _ in range(82)] for y in range(82)]
                self.order = sorted(self.d.keys())


                i=0
                for key, value in self.d.items():
                    for j in range(key+1, key+7):
                        if j in self.odd_map:
                            self.matrix[i][self.order.index(self.odd_map[j])] += float(1/6)
                        elif j > 100:
                            self.matrix[i][self.order.index(key)] += float(1/6)
                        else:
                            self.matrix[i][self.order.index(j)] += float(1/6)
                    i+=1


        Markov = MarkovNS()
        outlay = pd.DataFrame(Markov.matrix, columns=[i for i in range(len(Markov.matrix))], index=[j for j in range(len(Markov.matrix))])
        outlay.to_csv('outlay.csv',index=True, header=True, sep=',')

        chopped = [x[:-1] for x in Markov.matrix]
        chopped.pop()
        final = np.linalg.inv(np.identity(81)-chopped)

        res = sum(final[0])
        print(res)
        `;
        return (
            <div>
                <SyntaxHighlighter language="python" style={docco} className='dingo'>
                    {markovString}
                </SyntaxHighlighter>


            </div>//

        )
    }







    const Sim = () => {
        const codeString = `
        import random
        import time
        import numpy as np
        np.random.seed(10)

        class MarkovSim(object):
            
            
            def __init__(self):
                self.odds = [[1, 38], [4, 14], [9, 31], [
                    21, 42], [28, 84], [36,44], [51, 67], [71, 91], [80, 100], [16, 6], [47, 26], [49, 11], [56, 53], [
                    62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]
                self.markov_map = {}
                for x, y in self.odds:
                    self.markov_map[x]=y
                for i in range(0,101):
                    if i not in self.markov_map:
                        self.markov_map[i]=i

            def simulate(self, startpoint):
                currentpoint = startpoint
                counter = 0
                while currentpoint < 100:
                    stepped = currentpoint+random.randint(1, 6)
                    if stepped <=100:
                        newpoint = self.markov_map[stepped]
                        if newpoint == 100:
                            return counter+1
                        else:
                            currentpoint = newpoint
                    counter += 1
                return counter

            def simulate_mult(self, startpoint, multiples):
                start = time.time()
                res = []
                for _ in range(multiples):
                    res.append(self.simulate(startpoint))
                end = time.time()
                return res, end-start

        `;
        return (
            <SyntaxHighlighter language="python" style={docco} className='dingo'>
                {codeString}
            </SyntaxHighlighter>

        );
    };


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

                                 {/* time homogeneity, past invariant */}
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
                            We will have to go through a few more quick concepts, and then we will be able to compute our final answer.

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
                            Quick concept: Matrix Multiplication
                        </h2>

                        <p className="article-section-text">
                            Crazily enough, we can multiply matrices. They are incredibly useful for computer graphics, machine learning, and economic analysis.
                        </p>


                        <p className="article-section-text">
                            If we want to multiply a matrix with other matrix, or a matrix with a vector (a matrix with either width or height or both of 1), the width of the matrix on the left needs to be the same as the height of the matrix/vector on the right.
                            If we multiple an mxn matrix with an nxn matrix/nx1 vector, we will get a result with the height of the left matrix and the width of the right matrix/vector.
                        </p>

                        <p className="article-section-text">

                            In the case to the right, we have a 5x3 matrix and a 3x1 vector. We can multiply them because the dimension numbers in the middle match (3 and 3), and will get a result with the dimesnions of the dimension numbers on the outside (5x1 vector).


                        </p>





                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Matrix_vector_multiplication.svg/2560px-Matrix_vector_multiplication.svg.png" alt="Snakes and Ladders board" />
                    </div>

                </section>

                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Quick concept: Identity matrix
                        </h2>

                        <p className="article-section-text">
                            A type of matrix is the "identity matrix", which has value 1 in every diagonal element, and 0s everywhere else.
                            These are very commonly used in linear algebra, and are valuable because anything we multiply with an identity matrix will equal... itself.

                        </p>
                        <p className="article-section-text">
                            Think of it as the number 1, but in matrix form.
                            An quick and dirty way to remember what an identity matrix is that anything multiplied with an identity matrix is "identical."
                            Identity matrices are also invertible.
                        </p>

                        {/* <p className='mathjax-row'>
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,5} = \frac{1}{6}`} display={true} />
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,6} = \frac{1}{6}`} display={true} />
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,7} = \frac{1}{6}`} display={true} />
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,8} = \frac{1}{6}`} display={true} />
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,13} = \frac{1}{6}`} display={true} />
                            <MathComponent className='lat-elt' tex={String.raw`P_{3,31} = \frac{1}{6}`} display={true} />
                        </p> */}
                        <p className="article-section-text">

                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://andymath.com/wp-content/uploads/2019/07/Identity-Matrices.jpg" alt="Identity matrix" />
                    </div>

                </section>

                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Quick concept: Invertible matrices
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            The inverse of a matrix is a matrix that, when multiplied with the original matrix, will result in the identity matrix.
                            Not every matrix is invertible.

                        </p>

                        <p className="article-section-text">
                            In more general math, if we have some number n, then its inverse is the number 1/n.
                            Just as we can metaphorize the identity matrix to the number 1, we can metaphorize the inverse of a matrix to the number 1/n (for some n that we choose).
                            An quick and dirty way to remember what an identity matrix is that anything multiplied with an identity matrix is "identical."
                            As a tangential sidenote, identity matrices are also invertible.
                        </p>

                        {/* Matrix row */}

                        <p className="article-section-text">

                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://cdn.codespeedy.com/wp-content/uploads/2020/05/inverse_matrix.png" alt="Invertible Matrix" />
                    </div>

                </section>









                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            So how do we do this?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}
                        <p className="article-section-text">
                            We could create a vector with, say, 50 "people", at position 0, and continue to run it through our Markov matrix.
                            Every time we multiply the matrix by our changing vector, we can think of it being a split of where the number goes, rather than a random roll.
                            If we, for example, had 100 people at position 0 in our starting vector, we would split them into six groups and send them to each position.
                        </p>
                        <p className="article-section-text">

                            If we were to watch how many people were at position 100 after every turn (e.g. people who finished the game), we could keep going until everyone was done, and then take the average of all of their arrival times.
                            This would be accomplished by checking the position 100 at the end of every multiplication, so after multiplication 1, multiplication 2, etc.
                            The downside of this is that it could take a very, very long for everyone to finish.
                        </p>





                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1oDCSTuK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/uDVRscX.png" alt="Markov Chain" />
                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>
                <section className="article-section">
                    <div className='article-section-textleft'>
                        <h2 className="article-section-title">
                            Is there a better option?
                        </h2>
                        {/* <p className="article-section-text">
                            This is the part where the linear algebra comes into play. We will manufacture a matrix that represents (for each state) the change that it will go to another state. It will have 101 rows (including 0) and 101 columns.
                        </p> */}

                        <p className="article-section-text">
                            There is, in fact, a very elegant way to do this, using our concepts.

                            If we have our Markov matrix, we can remove all the rows and columns for the points we don't touch.
                            These rows and columns correspond to the bottom of ladders (e.g. 1) or the tops of slides (e.g. 16).
                            There are 19 snakes or ladders in the board, and removing them would yield an 82x82 matrix (from a 101x101 matrix).
                            We also chop off the row/column corresponding to the corresponding state, so we remove the row/column corresponding to position 100, yielding an 81x81 matrix.
                        </p>
                        <p className="article-section-text">
                            We create an identity matrix with the same dimensions as the matrix we just created.
                            We then subtract our matrix from this identity matrix.
                            The result is an invertible matrix, and we will invert it.
                            If we add the first element of every row from this matrix together, we should be able to see the expected number of rolls to complete a game of snakes and ladders on your own.
                        </p>
                        <p className="article-section-text">
                            We will do the legwork with a computer. I'll attach it below.
                        </p>

                    </div>
                    <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1oDCSTuK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.imgur.com/uDVRscX.png" alt="Markov Chain" />
                    </div>

                </section>

                <Mark />

                <SyntaxHighlighter language="python" style={docco} className='dingo'>
                    {'39.2251223082349'}
                </SyntaxHighlighter>


























                {/* ------------------------------------------------------------------------ */}
                {/* Section 3 */}
                {/* ------------------------------------------------------------------------ */}


                <h2>Part 3: No chance that's actually right</h2>

                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            How do we check the validity of this answer?
                        </h2>

                        <p className="article-section-text">
                            Like we said before, we can now use simulation to check if our answer is correct.
                            We can create a process that mimicks randomness in order to play snakes and ladders and track the data.
                            We can make something that plays the game five million times and we can examine that data.

                        </p>

                        <p className="article-section-text">
                            Despite being a former R zealot, I have slowly been dragged kicking and screaming to appreciate Python for simulation.
                            I built out a quick and dirty model to calculate the number of rolls.
                            I'll include the code below.
                        </p>


                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>

                <Sim />


                <img className="sim-img" src={require("../images/100.png")} alt="100 rolls, with an average of... let me check" />
                <img className="sim-img" src={require("../images/100000.png")} alt="100000 rolls, with an average of... let me check" />
                <img className="sim-img" src={require("../images/5000000.png")} alt="5000000 rolls, with an average of... let me check" />


                <section className="article-section-middle">
                    <div className='article-section-text-middle'>

                        <p className="article-section-text">
                            Above are three simulations of one hundred, one hundred thousand, and five million games of snakes and ladders.
                            Past saying anything that would make my probability theory professor dig me a shallow grave, we can see that our simulated average number of rolls to absorption converges to our theoretical average number of rolls to absorption.




                        </p>

                        <p className="article-section-text">
                            There's a faint, sparkling chance that we might have been close to right.

                        </p>


                    </div>
                    {/* <div className='article-section-imageright'>
                        <img className="right-image" id="pic-board" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/640px-Markovkate_01.svg.png" alt="Markov Chain" />
                    </div> */}

                </section>

                <h2>Part 4: Conclusion </h2>

                <section className="article-section-middle">
                    <div className='article-section-text-middle'>
                        <h2 className="article-section-title">
                            So what did we figure out?
                        </h2>
                        <p className="article-section-text">
                            Comparing two separate methods, namely Markov chains and simulation, we were able to figure out the average number of rolls to complete a game of snakes and ladders was ~39.2, if you play alone, like a dweeb.


                        </p>
                        <h2 className="article-section-title">
                            How were these methods even different?
                        </h2>
                        <p className="article-section-text">
                            A very good question.  
                            Our Markov chains approach involved no randomness, and was purely "deterministic," which is a fancy way of saying that we will always get the same result from the same starting point.
                            We didn't simulate rolling a dice.
                            Instead, we thought of the transitions between states as almost splits in a river, diverting the flow of water to different places, and kept an eye on how much water went into our absorbing state every roll.

                        </p>
                        <p className="article-section-text">
                            On the other hand, our simulation approach involved randomness, and was purely "stochastic," which is a fancy way of saying that we will get different results from the same starting point.
                            We saw above that our average number of rolls to absorption was volatile around 39.2, dipping up or down by a few rolls.
                            In the Markov chain approach, on the other hand, we get the same result, every single time.

                        </p>
                        
                        <h2 className="article-section-title">
                            Any resources/further reading?
                        </h2>
                        <p className="article-section-text">
                            In terms of fields, linear algebra is quite important, and was probably the most poorly explained part of this article.
                            I would recommend reading about stochastic vs deterministic processes, and the difference between the two.
                            In terms of classifying what we did, we also constructed what I think was some form of Monte Carlo simulation to simulate and test our Markov chain result.
                            In terms of other problems which have a similar gist, a canonical example of a markov chain is the Gambler's ruin concept, and an interesting problem (perhaps a bit more nuanced) is the St. Petersburg paradox.
                            By and large, I would recommend just using wikipedia.
                            
                            


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














export default Math;