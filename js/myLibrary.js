

const array = [2,4,6,8,10,12];

// Creando forEach //

Array.prototype.yoliEach = function(callback){
    for (let i=0; i < this.length; i++){
        callback (this[i], i);
     }  
}

let forEachValue = [];
array.yoliEach(element => forEachValue.push(element +1));
console.log(`arreglo original: [${array}]. Arreglo myForEach: [${forEachValue}]`); 


// Creando Filter //

function yoliFilter(array, callback) {
        const newArray = [];
        for(let i = 0; i < array.length; i++ ) {
            if(callback(array[i]) === true) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
    console.log(yoliFilter(array, element => element > 9));

   

// Creando Map //

function yoliMap(array, callback) {
        const newArray = [];
        for(let i = 0; i < array.length; i++ ) {
                newArray.push(callback(array[i]));
        }
        return newArray;
    }
    
    console.log(yoliMap(array, element => element * 2));

//Creando Find //

function yoliFind(array, callback) {
        for(let i = 0; i < array.length; i++ ) {
          if(callback(array[i])){
            return array[i];
          }  
        }
    }
    
    console.log(yoliFind(array, element => element > 5)); 


 //Creando FindIndex //

 function yoliFindIndex(array, callback) {
        for(let i = 0; i < array.length; i++ ) {
          if(callback(array[i])){
            return i;
          }  
        }
       return -1;
    }
    
    console.log(yoliFindIndex(array, element => element > 6))

 //Creando Contains //

function yoliContains(array, callback) {
        for(let i = 0; i < array.length; i++) {
          if(callback(array[i])) {
            return true;
          }
        }
      return false;
    }
    
    console.log(yoliContains(array, element => element === 50)); 

//Creando Whithout //
Array.prototype.yoliWithout = function (...cut){
    let copyArray = this.slice();

    cut.forEach(element => {
        while(copyArray.indexOf(element)!= -1){
        copyArray.splice(copyArray.indexOf(element), 1)
        }
    })
    return copyArray;
}

let yoliWithoutValue = array.yoliWithout(13,9,8,2);
console.log(`arreglo original: [${array}]. Arreglo yoliWithout: [${yoliWithoutValue}]`); 


//Creando Pluck //

const objects = [{name: 'Yolanda', age: 30}, {name:'Sofia', age: 20}, {name: 'Alejandra', age: 40}]

function yoliPluck(array, propiedad) {
      const newArray = [];
      for(let i = 0; i < array.length; i++) {
        newArray.push(array[i][propiedad]);
      }
      return newArray;
    }
    
    console.log(yoliPluck(objects,'age')); 