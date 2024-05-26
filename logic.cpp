// #include<iostream>
// using namespace std;
// #include"bits/stdc++.h"
// int main(){
//     int incre;int incg;int n;
//     cout<<"Your initial number of credits?";
//     cout<<endl;
//     cin>>incre;
    
//     cout<<"Your initial CG?";
//     cout<<endl;
//     cin>>incg;
//     cout<<"Your number of courses this sem?";cout<<endl;
//     cin>>n;
//     int ans=incre*incg;
//     if (ans-floor(ans)>0.5){ans = ceil(ans);}else{ans = floor(ans);}
//     for (int i=0;i<n;i++){
//         int dum;int dumi;
//         cout<<"Course "<<i+1<<" credits?";
//         cin>>dum;
//         cout<<"Course "<<i+1<<" Expected grade?";
//         cin>>dumi;
//         ans+=dum*dumi;incre+=dum;
//     }
//     cout<<"your final cg is "<<float(ans/incre)<<endl;
//     return 0;
// }
#include<iostream>
#include<cmath>
using namespace std;

int main() {
    int incre;
    float incg;
    int n;

    cout << "Your initial number of credits?" << endl;
    cin >> incre;

    cout << "Your initial CG?" << endl;
    cin >> incg;

    cout << "Your number of courses this sem?" << endl;
    cin >> n;

    int ans = round(incre * incg);

    for (int i = 0; i < n; i++) {
        int dum;
        float dumi;

        cout << "Course " << i + 1 << " credits?" << endl;
        cin >> dum;

        cout << "Course " << i + 1 << " Expected grade?" << endl;
        cin >> dumi;

        ans += round(dum * dumi);
        incre += dum;
    }

    float finalCG = static_cast<float>(ans) / incre;
    cout << "Your final CG is " << finalCG << endl;

    return 0;
}
