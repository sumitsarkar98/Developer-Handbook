const myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("Promise resolved");
  } else {
    reject("Promise rejected");
  }
});

myPromise
  .then((result) => console.log(`success : ${result}`))
  .catch((error) => console.log(`error : ${error}`))
  .finally(console.log("Promise is completed"));
