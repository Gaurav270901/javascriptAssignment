//Task: Refactor a Promise-based function to use async/await. Handle errors with try/catch.

// Original Promise-based function
function fetchUserData() {
    return new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5; // Simulating success or failure randomly
  
      setTimeout(() => {
        if (isSuccess) {
          const userData = { username: 'john_doe', email: 'john@example.com' };
          resolve(userData);
        } else {
          reject(new Error('Failed to fetch user data'));
        }
      }, 1000); // Simulating a delay of 1000 milliseconds (1 second)
    });
  }
  
  // Using the original Promise-based function
  fetchUserData()
    .then((userData) => {
      console.log('User data successfully fetched:', userData);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error.message);
    });
  
