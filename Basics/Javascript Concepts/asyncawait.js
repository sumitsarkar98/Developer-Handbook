// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test reject

      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data!");
      }
    }, 2000); // simulating 2 seconds delay
  });
}

// An async function using await
async function getData() {
  console.log("📡 Fetching data...");

  try {
    // Wait for the Promise to resolve
    const result = await fetchData();
    console.log(result); // Logs the resolved value
  } catch (error) {
    // Handle rejection
    console.log(error);
  } finally {
    console.log("🔁 Operation completed");
  }
}

// Calling the async function
getData();

console.log("➡️ This runs while waiting for the data...");
