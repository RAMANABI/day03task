let obj1={name:"Raman",age:5};
let obj2={age:5,name:"Raman"};


if (JSON.stringify(obj1==obj2)) {
  console.log("equal");
}
else{
    console.log("not equal");
}

