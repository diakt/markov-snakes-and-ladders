import random, time
import numpy as np
#muted with peacock
class MarkovSim(object):
    
    def __init__(self):
        self.laddermap = [[1, 38], [4, 14], [9, 31], [21, 42], [28, 84], [51, 67], [71, 91], [80, 100]]
        self.snakemap = [[16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]

        self.markov_map = {i:i+1 for i in range(101)}
        for i in range(0,101):
            self.markov_map[i]=i
        for key, val in self.laddermap:
            self.markov_map[key]=val
        for key, val in self.snakemap:
            self.markov_map[key]=val
        
        self.markov_map[100]=100
        
        # for key, val in self.markov_map.items():
        #     print(key, val)
    
    
    def roll_die(self):
        return random.randint(1, 6)

    def simulate(self, startpoint):
        currentpoint = startpoint
        newkey = 0
        counter = 0
        while currentpoint<100:
            die = self.roll_die()
            stepped = currentpoint+die
            if stepped > 100:
                pass # do nothing
            else:
                newpoint = self.markov_map[stepped]
                if newpoint == 100:
                    return counter
                else:
                    currentpoint = newpoint
            counter+=1

        return counter

    def simulate_mult(self, startpoint, multiples):
        start = time.time()
        res = []
        for _ in range(multiples):
            res.append(self.simulate(startpoint))
        end = time.time()
        print(end-start)
        return res





dingo = MarkovSim()
#print(dingo.simulate())
temp = np.array(dingo.simulate_mult(0, 100000))
#print(temp)
avg = np.mean(temp)
print(avg)
# print(np.histogram(temp, bins=100))
#run w/python3

import matplotlib.pyplot as plt


rng = temp  

_ = plt.hist(temp, bins=100)  # arguments are passed to np.histogram
plt.title("My stuff")

plt.show()