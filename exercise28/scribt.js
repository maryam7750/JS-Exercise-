const { use } = require("react");

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ id: 123, name: "Amiira" });
            } else {
                reject("You failed");
            }
        }, 2000);
    });
}



async function displayData() {
    try {
        const user = await fetchUserData();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

displayData();
console.log(user.name)


const test=JSON.stringify(user)
console.log(test);
const persedData=JSON.parse(Text);
console.log(persedData)
async function fetchUserData(){
    console.log("strat now")
    const response =await fetch(`./data.json`);
    console.log("response",response)
}
fetchUserData();