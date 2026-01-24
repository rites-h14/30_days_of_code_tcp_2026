class Solution(object):
    def minEatingSpeed(self, piles, h):
        """
        :type piles: List[int]
        :type h: int
        :rtype: int
        """
        def can_finish(k):
            hours = 0
            for bananas in piles:
                hours += (bananas + k - 1) // k
            return hours <= h
        
        left, right = 1, max(piles)
        ans = right
        
        while left <= right:
            mid = (left + right) // 2
            if can_finish(mid):
                ans = mid
                right = mid - 1
            else:
                left = mid + 1
        
        return ans
