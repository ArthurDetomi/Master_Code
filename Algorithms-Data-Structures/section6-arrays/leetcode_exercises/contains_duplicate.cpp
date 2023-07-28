#include <bits/stdc++.h>

using namespace std;

// Complexidade de tempo e espaço igual a O(n).
// Pesquisa em tabela hash O(1).
bool containsDuplicate(vector<int> &nums) {
    unordered_set<int> map_keys;

    for (int value : nums) {
        if (map_keys.find(value) != map_keys.end()) {
            return true;
        }
        map_keys.insert(value);
    }

    return false;
}

int main() {
    // para o futuro
}
