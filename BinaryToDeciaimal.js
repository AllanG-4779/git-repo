var age = ""
const Binary = (number)=>{
    
    if (number === 0){
        return
    }
    else{

        let remainder = number % 2;
        
        number =Math.floor( number/2);
        age += remainder
        
        Binary(number)
        
    }

}

Binary(76540)
var binaryEquiv="";
for(var i = age.length-1; i>=0; i--){
    binaryEquiv += age[i];

}
console.log(binaryEquiv)

