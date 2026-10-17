
function ChengeImg() {
    const img = document.querySelector("#img");

    // 1. Ask for image URL
    const url = prompt("Please enter image URL:");
    img.setAttribute("src", url);

    // 2. Ask for border color
    const color = prompt("Please enter border color:");

    // 3. Ask for image width
    const width = prompt("Please enter image width in pixels:");

    // 4. Ask for image height
    const height = prompt("Please enter image height in pixels:");

    // 5. Ask for border radius
    const radius = prompt("Please enter border radius in pixels:");

    // 6. Apply all styles
    img.style.border = "4px solid " + color;
    img.style.width = width + "px";
    img.style.height = height + "px";
    img.style.borderRadius = radius + "px";
}


























/// siada style lo badolo 
// elment.style.=wax a rbta aa in badashon


// function ChengeImg() {
//     const img = document.querySelector("#img");

//     img.setAttribute(
//         "src",
//         "https://media.istockphoto.com/id/2199061527/photo/united-states-capitol-snowwashington-dc.jpg?s=1024x1024&w=is&k=20&c=5L6I3GGKeZqPL-rJ9fDG2lrY50wLDP4iyB6hO6kqdKQ="
//     );

//     img.style.border = "2px solid red";
//     img.style.backgroundColor = "yellow";

//     const names = document.querySelector(".names");
//     names.style.color = "red";
// }


           //sida mode kla lobadalo
// function setlightMoe(){
//       document.body.style.backgroundColor="white"
//     document.body.style.color="black";

// }
  
// function setdackMoe(){
//     document.body.style.backgroundColor="black"
//     document.body.style.color="white";

// }
