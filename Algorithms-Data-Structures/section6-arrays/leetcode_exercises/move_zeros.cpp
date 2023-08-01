#include <bits/stdc++.h>
using namespace std;

// Complexidade de tempo : O(n) 
// Complexidade de memória : O(n)
// Explicando como foi feito a implementação
void moveZeroes(vector<int> &nums) {
    const int N = nums.size();

    queue<int> q;

    // Copiando valores diferente de zero para fila
    for (int i = 0; i < N; i++) {
        if (nums[i] != 0) {
            q.push(nums[i]);
        }
    }

    // Reordenando array consumindo a fila e movendo zeros para o final
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
    cout << "Hello World" << endl;
    // Implementação e teste no futuro
}
