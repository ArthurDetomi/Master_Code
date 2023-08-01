#include <bits/stdc++.h>

using namespace std;

#define DATA_TEST1 {2, 5, 1, 2, 3, 5, 1, 2, 4}

#define DATA_TEST2 {2, 1, 1, 2, 3, 5, 1, 2, 4}

#define DATA_TEST3 {2, 1, 9}

int first_recurring(const vector< int > &V) {
    unordered_set<int> S;
    for (int i = 0; i < V.size(); i++) {
        if (S.find(V[i]) != S.end()) {
            return V[i];
        }
        S.insert(V[i]);
    }
    printf("Não encontrado\n"); 
    return -1;
}


int main(void) {
    vector<int> V = DATA_TEST3;
    int result = first_recurring(V);
    if (result != -1) {
        printf("return %d\n", result);
    }
    return 0;
}