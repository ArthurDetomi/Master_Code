#include <bits/stdc++.h>

using namespace std;

int solve(vector<int> &height) {
    int response = 0;

    for (int i = 0; i < (int)height.size() - 1; i++) {
        for (int j = i + 1; j < (int)height.size(); j++) {
            int current_height = min(height[i], height[j]);

            response = max((j - i) * current_height, response);
        }
    }

    return response;
}

int solve_2(vector<int> &array) {
    vector<pair<int, int>> orderned_array;

    for (int i = 0; i < (int) array.size(); i++) {
        orderned_array.push_back(make_pair(array[i], i));
    }

    sort(orderned_array.begin(), orderned_array.end());

    int response = 0;
    for (int i = (int) orderned_array.size() - 1; i > 0; i--) {
        pair<int, int> current_lower_value = orderned_array[i - 1];
        pair<int, int> current_larger_value = orderned_array[i];

        int current_distance = abs(current_larger_value.second - current_lower_value.second) * current_lower_value.first;

        response = max(response, current_distance);
    }   

    return response;
}

int main() {
    vector<int> input = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    cout << solve(input) << endl;
    cout << solve_2(input) << endl;
    return 0;
}