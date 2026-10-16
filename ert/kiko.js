let number = 0;

function ChangeContent(value) {
    number += value;
      console.log(ChangeContent)

    if (number < 0) {
        number = 0;
    }


    document.getElementById("count").textContent = number;
}