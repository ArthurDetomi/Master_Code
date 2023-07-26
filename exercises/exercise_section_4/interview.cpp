#include <bits/stdc++.h>

using namespace std;

#define endl '\n'

bool has_pair_sum(const vector<int> &numbers, int sum);

int main(void) {
    vector<int> numbers = {1, 2, 4, 4};
    if (has_pair_sum(numbers, 8)) {
        cout << "true" << endl;
    } else {
        cout << "false" << endl;
    }
    return 0;
}

// Função com complexidade O(n) que verifica se contem numeros que somando dão resultado da soma passada
bool has_pair_sum(const vector<int> &numbers, int sum) {
    // inicializo o set
    unordered_set<int> comp;

    for (int value : numbers) {
        // verifico se contem o complemento necessário
        if (comp.find(sum - value) != comp.end()) {
            return true;
        }

        // Se não contem adiciono ao set
        comp.insert(sum - value);
    }
    return false;
}
