var binNumber = "";

const Binary = (number) => {
  if (number === 0) {
    return;
  } else {
    let remainder = number % 2;

    number = Math.floor(number / 2);
    binNumber += remainder;

    Binary(number);
  }
};
//This method iterates through the string and prints out in reverse order
Binary(76540);
var binaryEquiv = "";
for (var i = binNumber.length - 1; i >= 0; i--) {
  binaryEquiv += binNumber[i];
}
console.log(binaryEquiv);
