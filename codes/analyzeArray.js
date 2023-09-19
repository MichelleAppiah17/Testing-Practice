const analyzeArray = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
    
    return {
      average: Math.round(sum/ arr.length),
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    };
  };
  
  module.exports = analyzeArray;