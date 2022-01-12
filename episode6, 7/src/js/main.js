import vector from "./vector.js";

let v1 = vector.create(10, 5);
let v2 = vector.create(3, 4);

console.log(v1.getX(), v1.getY());
let v3 = v1.add(v2);
console.log(v1, v2, v3);

v1.setAngle(Math.PI / 6);
v1.setLength(100);

console.log(v1.getX(), v1.getY());
