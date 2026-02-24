export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is annikas"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return "annikas";
  }

  if (query.toLowerCase().includes("largest")) {
      const numbers = query.match(/\d+/g)?.map(Number) || [];
      return (Math.max(...numbers)).toString(10);  
      
  }

  if (query.toLowerCase().includes("multiplied")) {
      const numbers = query.match(/\d+/g)?.map(Number) || [];
      let multiply = 1;
      for (let i = 0; i < numbers.length; i++) {
              multiply = multiply * numbers[i];
      } 
      return multiply.toString(10);  
      
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g)?.map(Number) || [];
    let result = "";
      for (let i = 0; i < numbers.length; i++) {
          const sixthRoot = Math.pow(numbers[i], 1/6);
          if (Number.isInteger(sixthRoot)){
            result += numbers[i].toString(10) + ", ";
          }
      } 
    return result;
}
   
  if (query.toLowerCase().includes("plus")) {
      const numbers = query.match(/\d+/g)?.map(Number) || [];
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
              sum += numbers[i];
      } 
      return sum.toString(10);
  }

return "";
}
