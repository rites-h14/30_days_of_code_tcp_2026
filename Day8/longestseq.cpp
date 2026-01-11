#include <unordered_set>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        if (nums.empty()) return 0;
        unordered_set<int> st(nums.begin(), nums.end());
        int longest = 0;
        for (int num : st) {
            if (!st.count(num - 1)) {
                int currentNum = num;
                int length = 1;
                while (st.count(currentNum + 1)) {
                    currentNum++;
                    length++;
                }
                longest = max(longest, length);
            }
        }
        return longest;
    }
};
