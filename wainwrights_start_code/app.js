//global variable
const wainwrightsList = document.getElementById("wainwrights-list");

const getAllWainWrights = async () => {
    // Fetches from API
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    //Returns response as JSON
    const jsonData = await response.json();
    console.log(jsonData);
    //foreach loop
    jsonData.forEach((data) => {
        //Created new list element
        const newListElem = document.createElement("li");
        //Added data to list
        newListElem.innerText = data.name;
        //Added new list element to list
        wainwrightsList.appendChild(newListElem);
    });

}

// const getAllWainWrights = () => {
//     //Fetches API
//     return fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json")
//     //Changes to JSON
//     .then(response => response.json())
//     //Retrieves name of 1st element in array from API
//     .then(data => data[0].name);
// }

//button to show data 
const button = document.querySelector("button");
button.addEventListener("click", () => {
    getAllWainWrights();
});
//how to sort out json data
//foreach loop through data