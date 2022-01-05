import vector from "./vector.js";

let v1 = vector.create(10, 5);
let v2 = vector.create(3, 4);

console.log(v1.getX(), v1.getY());
v1.addTo(v2);
console.log(v1.getX(), v1.getY());
