var hash = "";
for(let count = 0; count <= 7; count++){
  for(let i=7; i>=count ; i--){
    hash += "#";
  }
  count < 7 ? hash += "\n" : hash += "";
}
console.log(hash);
/*for(let i = 10; i > 0; i--){
  console.log(i);
}*/