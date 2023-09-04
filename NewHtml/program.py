n=int(input())
w=list()

for i in range(n):
    w.append(int(input()))


power = list()
for i in range(1,10):
    power.append(3**i)

count = 0
for i in range(n-1):
    for j in range(i+1,n):
        s = w[i] + w[j]
        if s in power:
            count += 1

print("------------------------------");
print(count)


