
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

fetchUserData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));