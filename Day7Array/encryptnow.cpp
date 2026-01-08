#include <vector>
using namespace std;

int encrypt(int num){
    int max_digit = 0;
    int digit_count = 0;
    int base = 0;
    while(num > 0){
        int digit = num % 10;
        digit_count+=1;
        base= base*10 + 1;
        if(digit > max_digit){
            max_digit = digit;
        }
        num /= 10;
    }
    return base*max_digit;
}
class Solution {
public:
    int sumOfEncryptedInt(vector<int>& nums) {
        int sum = 0;
        for(int i = 0; i < nums.size(); i++){
        sum += encrypt(nums[i]);
    }
    return sum;
    };
};

