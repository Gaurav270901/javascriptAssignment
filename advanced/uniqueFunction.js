//Task: Create a unique function which uses find and reduce to filter an array of unique values E.g :
//unique([1 , 1, 2 , 3, 3]) => [1, 2, 3].

function unique(arr) {
    return arr.reduce((uniqueArr, currentVal) => {
      // Use find to check if the current value already exists in the unique array
      const isUnique = !uniqueArr.find((existingVal) => existingVal === currentVal);
  
      // If the current value is unique, add it to the unique array
      if (isUnique) {
        uniqueArr.push(currentVal);
      }
  
      return uniqueArr;
    }, []);
  }
  

  const originalArray = [1, 1, 2, 3, 3];
  const uniqueArray = unique(originalArray);
  
  console.log(uniqueArray); // Output: [1, 2, 3]
  