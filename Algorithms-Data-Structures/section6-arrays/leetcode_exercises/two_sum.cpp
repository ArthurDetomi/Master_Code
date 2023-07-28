#include <bits/stdc++.h>
using namespace std;

// function with complexity equals O(n)
vector<int> twoSum(vector<int> &nums, int target) {
    unordered_map<int, int> comp;
    vector<int> positions(2);

    for (int i = 0; i < nums.size(); i++) {
        unordered_map<int, int>::const_iterator got =
            comp.find(target - nums[i]);
        if (got != comp.end()) {
            positions[0] = got->second;
            positions[1] = i;
            return positions;
        }
        pair<int, int> value_actual(nums[i], i);
        comp.insert(value_actual);
    }
    return positions;
}

int main() {
    // testing and working true
}