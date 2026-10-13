
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
