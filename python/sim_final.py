import random
import time
import numpy as np
# muted with peacock


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
        print(end-start)
        return res, end-start


dingo = MarkovSim()
num = 5000000
counts, tiempo = np.array(dingo.simulate_mult(0, num))
avg = np.mean(counts)
print(avg)

#run w/python3

import matplotlib.pyplot as plt


plotto = plt.hist(counts, bins=30, color='blue')  # arguments are passed to np.histogram

plt.axvline(avg, color='red', linestyle='dashed', linewidth=1)

plt.title("{} average for n={} in {} seconds ".format(str(avg)[:6], num, str(tiempo)[:5]))

plt.xlabel("Number of rolls to finish game")
plt.ylabel("Games")
plt.autoscale()


plt.show()