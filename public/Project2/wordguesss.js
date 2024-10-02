/*
Student Name: Tak Kam Cheng
Student Id: 301429108
Date: 26 Sep 2024
File: project2 js
*/

"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired", "Adventure","Beautiful",
"Courageous","Dynamic","Enthusiastic","Fascinating","Gorgeous","Harmonious","Impressive",
"Jubilant","Knowledgeable","Legendary","Magnificent","Noteworthy","Optimistic","Phenomenal",
"Radiant","Spectacular","Thrilling","Unstoppable","Vibrant","Wonderful","Xenial","Youthful","Zealous"]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are

function startGame() {
    console.log("Game started.");
    inputBox.style.display = "block"; // Show Inputbox
    wordDiv.innerHTML = ""; // Clear the word
    msgBox.innerHTML = ""; // Clear the message box
    inputBox.disabled = false; // Enable inputbox
    inputBox.focus(); // Focus input box
    currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
    correctLetters = 0; // Reset correctLetters

    console.log("Current word to guess:", currentWord);

    // Create elements for each letter and placing a * in it
    for (let i = 0; i < currentWord.length; i++) {
        var letterDiv = document.createElement("div");
        var starDiv = document.createElement("div");
        var lineDiv = document.createElement("div");
        letterDiv.className = "wordBox";
        starDiv.className = "wordBox-letter";
        starDiv.innerText = "*";
        lineDiv.className = "wordBox-line";
        letterDiv.appendChild(starDiv);
        letterDiv.appendChild(lineDiv);
        wordDiv.appendChild(letterDiv);
    }

    // Add event listener for input
    inputBox.addEventListener("input", handleGuess);
}

function handleGuess() {
    const guessedLetter = inputBox.value.toUpperCase();
    console.log("Guessed letter:", guessedLetter);

    // Delay the processing of the guessed letter for 1 second
    setTimeout(() => {
        let found = false;

        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === guessedLetter) {
                let letterDiv = wordDiv.children[i].querySelector('.wordBox-letter');
                if (letterDiv.innerText === "*") { // Ensure not counting the same letter twice
                    letterDiv.innerText = guessedLetter;
                    correctLetters++;
                    found = true;
                }
            }
        }

        console.log("Correct letters count:", correctLetters);

        // Check if the whole word is guessed
        if (correctLetters === currentWord.length) {
            msgBox.innerText = 'You guessed the word correctly!';
            inputBox.disabled = true; // Disable the input box
            console.log("Word guessed correctly!");
        }

        // Clear the input box after 1 second
        setTimeout(() => {
            inputBox.value = "";
        }, 1000); // 1 second delay to show the entered letter

    }, 0); // No delay for initial letter processing
}

startButton.addEventListener("click", startGame); // Starting game by clicking the start button
