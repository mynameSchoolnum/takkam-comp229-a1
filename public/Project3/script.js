/*
Student Name: Tak Kam Cheng
Student Id: 301429108
Date: 26 Sep 2024
File: project3 js
*/

function getUserInput(promptMessage) {
    let input;
    while (!input) {
      input = prompt(promptMessage);
      if (!input) {
        alert("You didn't enter anything. Please try again, sorry!");
      }
    }
    console.log(`User entered: ${input} for prompt: ${promptMessage}`);
    return input;
  }
  
  function generateStory() {
    let name = getUserInput("Please enter a name:");
    console.log(`Name: ${name}`);

    let subject = getUserInput("Please enter a subject:");
    console.log(`Subject: ${subject}`);

    let animal = getUserInput("Please enter a animal:");
    console.log(`Animal: ${animal}`);

    let color = getUserInput("Please enter a color:");
    console.log(`Color: ${color}`);

    let furniture = getUserInput("Please enter a furniture:");
    console.log(`Furniture: ${furniture}`);

    let verb1 = getUserInput("Please enter a verb ending in -ing:");
    console.log(`Verb1: ${verb1}`);
  
    let story = `Once upon a time, there was a student at Centennial College named ${name}. 
    One day, while studying ${subject}, a ${animal} ran into the classroom. 
    The professor, who was wearing a ${color} tie, jumped onto his ${furniture} in surprise. 
    The whole class, including ${name}, couldn't stop ${verb1}.`;
    console.log(`Story: ${story}`);
  
    document.getElementById("story-container").innerText = story;
    console.log('Story displayed in HTML');

    document.body.style.backgroundColor = color;
    console.log(`Background color set to: ${color}`);
  
    localStorage.setItem("name", name);
    localStorage.setItem("subject", subject);
    localStorage.setItem("animal", animal);
    localStorage.setItem("color", color);
    localStorage.setItem("furniture", furniture);
    localStorage.setItem("verb1", verb1);
    localStorage.setItem("story", story);
    console.log('Inputs saved to local storage');
  }
  
  function saveStory() {
    let name = localStorage.getItem("name");
    let subject = localStorage.getItem("subject");
    let animal = localStorage.getItem("animal");
    let color = localStorage.getItem("color");
    let furniture = localStorage.getItem("furniture");
    let verb1 = localStorage.getItem("verb1");
    let story = localStorage.getItem("story");

    console.log(`Loaded from storage - Name: ${name}, Subject: ${subject}, Animal: ${animal}, 
    Color: ${color}, Furniture: ${furniture}, Verb1: ${verb1}, Story: ${story}`);
  
    if (name && subject && animal && color && furniture && verb1 && story) {
    document.getElementById("story-container").innerText = story;
    console.log('Story displayed in HTML');

    document.body.style.backgroundColor = color;
    console.log(`Background color set to: ${color}`);

    }
    else {
        console.log('Incomplete data in local storage');
      }
  }
  
  window.onload = saveStory;