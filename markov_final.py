
#Now we make an 82x82 minus the bullshit
import numpy as np
import pandas as pd

class MarkovNS(object):
    def __init__(self):
        self.odds = [[1, 38], [4, 14], [9, 31], [
            21, 42], [28, 84], [36,44], [51, 67], [71, 91], [80, 100], [16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]]

        self.odd_map = {}
        for a, b in self.odds:
            #print(a, b)
            self.odd_map[a] = b

        self.d = {}
        for i in range(0, 101):
            if i in self.odd_map:
                pass
            else:
                self.d[i] = i

        self.matrix = [[0 for _ in range(82)] for y in range(82)]

        #set up ordering
        self.order = sorted(self.d.keys())
        print(self.order)

        i=0
        for key, value in self.d.items():
            print(i, key, value)
            for j in range(key+1, key+7):
                if j in self.odd_map:
                    self.matrix[i][self.order.index(self.odd_map[j])] += float(1/6)
                elif j > 100:
                    self.matrix[i][self.order.index(key)] += float(1/6)
                else:
                    self.matrix[i][self.order.index(j)] += float(1/6)
            i+=1


instantiated = MarkovNS()
            
Markov = MarkovNS()



outlay = pd.DataFrame(Markov.matrix, columns=[i for i in range(len(Markov.matrix))], index=[j for j in range(len(Markov.matrix))])
outlay.to_csv('outlay.csv',index=True, header=True, sep=',')

chopped = [x[:-1] for x in Markov.matrix]

chopped.pop()


final = np.linalg.inv(np.identity(81)-chopped)

#print(sum(final[0]))

res = sum(final[0])
print(res)





#print(final)
#print(sum(final[-1])) 
#print(sum(x[0] for x in final)) #Let's fucking goooooooooooooooooooooo
#if singular, has a row of zeroes, so need to remove all deadrows
