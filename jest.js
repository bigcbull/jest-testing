// Capitalize Function
function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// Reverse String Function
function reverseString(value) {
  let reversedString;
  for (let i = value.length; i >= 0; i--) {
    reversedString += value[i];
  }
  return reversedString;
}

// Calculator Object
calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

// Caesar Cipher Function
function caesarCipher(value) {
  let codesArray = [];
  const asciiArray = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
    107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
    122,
  ];

  for (let j = 0; j < value.length; j++) {
    if (value.charCodeAt(j) === 122 || value.charCodeAt(j) === 90) {
      if (value.charCodeAt(j) === 122) {
        codesArray.push(97);
      } else if (value.charCodeAt(j) === 90) {
        codesArray.push(65);
      }
    } else if (asciiArray.includes(value.charCodeAt(j))) {
      codesArray.push(value.charCodeAt(j) + 1);
    } else {
      codesArray.push(value.charCodeAt(j));
    }
  }

  let cipheredValue = "";
  for (let x = 0; x < codesArray.length; x++) {
    cipheredValue += String.fromCharCode(codesArray[x]);
  }

  return cipheredValue;
}

// Analyze Array Function
function analyzeArray(array) {
  const min = Math.min.apply(Math, array);
  const max = Math.max.apply(Math, array);
  const length = array.length;

  let tempNum = 0;
  for (let j = 0; j < array.length; j++) {
    tempNum += array[j];
  }
  const average = tempNum / length;

  return { average: average, length: length, max: max, min: min };
}

// Exporting Functions/Objects
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
