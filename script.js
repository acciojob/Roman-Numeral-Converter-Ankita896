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
       while (num>=obj[i][1]){
		   result+= obj[i][0];
		   num-=obj[i][1];
	   }
        }

result= result.replace('DCCCC','CM');
	result= result.replace('CCCC','CD');
	result= result.replace('LXXXX','XC');
	result= result.replace('XXXX','XL');
	result= result.replace('VIIII','IX');
	result= result.replace('IIII','IV');
    

   return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
