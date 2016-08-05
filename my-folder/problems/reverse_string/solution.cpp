#include<cstring>
#include<vector>
#include<algorithm>
using namespace std;
class Solution 
{
  public:
    string reverseString(string s) 
    {
        reverse(s.begin(),s.end());
        return(s);
    }
};