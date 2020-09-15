let x = process.argv.slice(2);
for (let i = 0; i < x.length; i++){
  let y = '';
  for(let j = x[i].length -1; j >= 0; j--){
    y += x[i][j]; 
  }
  console.log(y);
};






//for (let j = 0; j < process.argv.length; j++) {
   // console.log(j + ' -> ' + (process.argv[j]));
//}