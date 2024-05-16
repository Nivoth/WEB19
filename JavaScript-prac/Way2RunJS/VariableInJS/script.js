function varScope() {
  if (true) {
    var x = 5;
  }
  console.log("x (var) = ", x);
}
varScope();

//let is not defined bcuz it's an block Scope
function letScope() {
  if (true) {
    let x = 5;
  }
  console.log("x (let) = ", x);
}
letScope();

//const is an variable that dont change value
/*
const y = 1;
y = 2;
console.log("Value of y = ", y);
*/
