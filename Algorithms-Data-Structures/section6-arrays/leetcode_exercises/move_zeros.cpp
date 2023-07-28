#include <bits/stdc++.h>
using namespace std;

void moveZeroes(vector<int> &nums) {
    const int N = nums.size();

    queue<int> q;

    for (int i = 0; i < N; i++) {
        if (nums[i] != 0) {
            q.push(nums[i]);
        }
    }

    for (int i = 0; i < N; i++) {
        if (!q.empty()) {
            nums[i] = q.front();
            q.pop();
        } else {
            nums[i] = 0;
        }
    }
}

int main() {
    // implement test in the future
}
