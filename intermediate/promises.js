//Task: Create a function that returns a Promise. Use the Promise to simulate an asynchronous operation (e.g., fetching data).

function fetchData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  }
  ).catch(error => {
    console.log(error);
  }
  );
  
  console.log('Fetching data...');
  