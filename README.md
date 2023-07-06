This project was created using create-react-app.

This project is currently live on https://tmarkops.github.io/fleets-coffee-interview-question

For this coding problem, the logic of my solution is as follows:
            <ul>
                <li>I will make all the letters lowercase so that the function doesn't differentiate between upper and lowercase letters (not specified in problem description)</li>
                <li>I will iterate through the word a first time, and keep track of the number of occurences of each letter in an object.</li> 
                <li>The key of the object will be the letter and the value is the number of times it is found in the word (incrementing its value by one every time it
                is encountered).</li>
                <li>If the letter is not already in the object I will assign it a value of 1.</li>
                <li>I will then iterate through the word a second time, and at each letter I will look up the value of that letter's key in the object.</li>
                <li>I will return the first letter that has a value of 1 in the object.</li>
                <li>If no letter has a value of 1, I will return an empty string.</li>
            </ul>
