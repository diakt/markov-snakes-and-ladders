import random
import time
import numpy as np
# muted with peacock


class MarkovSim(object):

    def __init__(self):
        self.laddermap = [[1, 38], [4, 14], [9, 31], [
            21, 42], [28, 84], [51, 67], [71, 91], [80, 100]]
        self.snakemap = [[16, 6], [47, 26], [49, 11], [56, 53], [
            62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]

        self.markov_map = {i: i+1 for i in range(101)}
        for i in range(0, 101):
            self.markov_map[i] = i
        for key, val in self.laddermap:
            self.markov_map[key] = val
        for key, val in self.snakemap:
            self.markov_map[key] = val

        self.markov_map[100] = 100

        # for key, val in self.markov_map.items():
        #     print(key, val)

    def roll_die(self):
        return random.randint(1, 6)

    def simulate(self, startpoint):
        currentpoint = startpoint
        newkey = 0
        counter = 0
        while currentpoint < 100:
            die = self.roll_die()
            stepped = currentpoint+die
            if stepped > 100:
                pass  # do nothing
            else:
                newpoint = self.markov_map[stepped]
                if newpoint == 100:
                    return counter
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
        return res


# dingo = MarkovSim()
# #print(dingo.simulate())
# temp = np.array(dingo.simulate_mult(0, 100000))
# #print(temp)
# avg = np.mean(temp)
# print(avg)
# # print(np.histogram(temp, bins=100))
# #run w/python3

# import matplotlib.pyplot as plt


# rng = temp

# _ = plt.hist(temp, bins=100)  # arguments are passed to np.histogram
# plt.title("My stuff")

# plt.show()


# input two matrices
# mat_surv= ([0, 0, 0, 0],[0.6,0, 0,0],[0, 0.8, 0,0],[0, 0, 0.7, 1])

#mat1 = [[.3, .7],[.4, .6]]
# vec1 = [30, 20, 10,0]

# This will return dot product

# for _ in range(3):
#     print(vec1)
#     vec1 = np.dot(mat_surv, vec1)
#     print(vec1)
#     print('')
# print(vec1)
# bigmat = [[0 for _ in range(101)] for y in range(101)]
# bigmat[100][100] = 1

# print(len(bigmat), len(bigmat[0]))


# for i in range(101):
#     for j in range(i+1, i+7):
#         if j > 100:
#             pass
#         else:
#             bigmat[i][j] = float(1/6)

# print(bigmat[0][0:10], bigmat[100][91:101])


class Markov(object):
    def __init__(self):
        self.laddermap = [[1, 38], [4, 14], [9, 31], [
            21, 42], [28, 84], [51, 67], [71, 91], [80, 100]]
        self.snakemap = [[16, 6], [47, 26], [49, 11], [56, 53], [
            62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]

        self.markov_map = {}
        for i in range(0, 101):
            self.markov_map[i] = i
        for key, val in self.laddermap:
            self.markov_map[key] = val
        for key, val in self.snakemap:
            self.markov_map[key] = val

        self.markov_map[100] = 100

        self.bigmat = [[0 for _ in range(101)] for y in range(101)]
        self.bigmat[100][100] = 1
        for i in range(100):
            for j in range(i+1, i+7):
                if j >100:
                    #previously pass
                    self.bigmat[i][i] += float(1/6)
                else:
                    # if j in self.markov_map:
                    #     self.bigmat[i][self.markov_map[j]] = float(1/6)
                    # else:
                        #self.bigmat[i][j] = float(1/6)
                    self.bigmat[self.markov_map[j]][i] = float(1/6)
                
        
        
        
        
        

import pandas as pd
dango = Markov()

a = pd.DataFrame(dango.bigmat, columns=[i for i in range(101)], index=[i for i in range(101)])
a.to_csv('markov.csv',index=True, header=True, sep=',')



res = []



vec = [0 for _ in range(101)]
vec[0]=10000
temp = vec
t=0
while temp[-1] <= 5000:
    res.append(temp)
    temp = np.dot(dango.bigmat, temp)
    t+=1
    print(t)
    print('')

print(sum(temp), "should be 1000")
#523.9700728745092 should be 1000
b = pd.DataFrame(res, columns=[i for i in range(101)], index=[i for i in range(t)])
b.to_csv('markov2.csv',index=True, header=True, sep=',')


#the issue is that the late states are not covering a full range w/prob one

