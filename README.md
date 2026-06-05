#Palindrome detector

This assignment uses angular webapp to download and diaply a list of palindromes. The c++ component
parses through downloaded words to sort out words that are palindromes or have aplindromes in them.
Once it completes this operation it then outputs a .csv of all palindromes. after inputting the output csv
to angular, angular will display the output list


#Instructions

1. Requirements
install npm

2. Starting WebApp
change directories into the angular-app folder, once there, run the following command:
        npx ng serve --open
at this point the app should open on a local host in your browser

3. Webapp Operation
In the webapp type words you would like to test in the box with placeholders (be sure to type one word per line)
The input words should update in real time in the "input" and "Word list" section
From there, you can donwload the word list at the bottom of the page by hitting the "Download Word List" button

4. C++ Detection
once you have downloaded the "word_list.csv" file go into your command prompt
then change directories into "Palindrome_detector"

Once this is done, run the following command:
	./palin1.exe word\_list.csv palindrome_list.csv
From here, you should see "palindrome_list.csv" appear in your file.

In the "Palindrome_detector" file there is also a test words file you can run (be sure to change the selected file in the command accordingly)



5. Final
Going back to the Webapp, click "Choose File" under "Upload Palindrome List" and choose "palindrome\_list.csv"
your file has now been uploaded to the Webapp



!!!Note:
Currently there is a bug with the webapp. to display the final palindrome list please click "Choose File" again
after uploading your file. Then click cancel on the choose file popup. after clicking cancel, the list will update.

