function convertToRoman(num) {
  	const obj = [
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    ];

 let result = '';

    for (let i = 0; i < obj.length; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    // Handle cases like 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), 900 (CM)
    const specialCases = [
        ['CM', 900],
        ['CD', 400],
        ['XC', 90],
        ['XL', 40],
        ['IX', 9],
        ['IV', 4]
    ];

    for (let i = 0; i < specialCases.length; i++) {
        const [symbol, value] = specialCases[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;

    

   

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
