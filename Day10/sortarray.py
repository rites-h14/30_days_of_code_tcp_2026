class Solution:
    def sort012(self, arr):
        # code here
        ar1=[]
        ar2=[]
        ar3=[]
        for i in range(len(arr)):
            if arr[i]==0:
                ar1.append(0)
            elif arr[i]==1:
                ar2.append(1)
            else:
                ar3.append(2)
        m=ar1+ar2+ar3
        for i in range(len(arr)):
            arr[i]=m[i]