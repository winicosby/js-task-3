function yu_gi_oh(value) {
  let numbers = [];
  for (let i = 1; i <= value; i++) {
      let number = null;
      if (i % 2 == 0) { 
          number = "yu";
         
      } 
      
      if (i % 3 == 0) {
          number = "gi";
      } 
      
      if (i % 5 == 0) {
          number = "oh";
      }
      
      if (i % 2 == 0 && i % 3 == 0) {
          number = "yu-gi";
      }
      
      if (i % 2 == 0 && i % 5 == 0) {
          number = "yu-oh";
      }
      
      if (i % 3 == 0 && i % 5 == 0) {
          number = "gi-oh";
      } 
      
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
          number = "yu-gi-oh";
      } 
      
      if (number == null) {
          number = i;
      }
      numbers.push(number);
  }
  return numbers;

}
  
  


console.log(yu_gi_oh(100));
