#include <iostream>
#include <fstream>
#include <string>

using namespace std;

bool isPalindrome(string text){

 int left = 0;
 int right = (int)text.length() - 1;

 while (left < right){
    if (text[left] != text[right]){
        return false;
    }
    left++;
    right--;
 }   
 return true;
}


int main(int argc, char* argv[]) {

    string inputPath = argv[1];
    string outputPath = argv[2];

    //opens input file
    ifstream inputFile(inputPath);

//opens output file
ofstream outputFile(outputPath);



string word;

//read input file
while (getline(inputFile, word)){
    
    int wordLength = word.length();

    for (int start = 0; start < wordLength; start++){
        for(int length = 3; length <= wordLength - start; length++){
        string part = word.substr(start,length);

        if(isPalindrome(part)){
            outputFile << part << endl;
        }
    
    }
}

}

inputFile.close();
outputFile.close();

cout << "finished!" << endl;
cout << "output file path: " << outputPath << endl;

return 0;
}