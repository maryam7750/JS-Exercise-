
function fetchJsonData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from file...");

    
    setTimeout(() => {
    
      const jsonString = JSON.stringify({
        id: 101,
        title: "Software Development",
        status: "Active",
        languages: ["JavaScript", "HTML", "CSS"]
      });

      try {
        
        const dataObject = JSON.parse(jsonString);
        resolve(dataObject);
      } catch (error) {
        reject(new Error("Failed to parse JSON data."));
      }
    }, 2000);
  });
}


console.log("Other code running: App started.");

fetchJsonData()
  .then((result) => {
    console.log("Parsed JSON Object:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("Other code running: App continues execution without blocking.");