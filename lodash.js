let _ = {
  clamp(num, low, upp){
    let n = Math.max(num, low);
    n = Math.min(n, upp);
    return n;
  },
  inRange(num, start, end){
    if(!end) {
      end = start;
      start = 0;
    }else if(start > end){
      let temp = end;
      end = start;
      start = temp;
    }

    return (num >= start && num < end);
  },

  words(string){
    return string.split(' ');
  },

  pad(string, length){
    if(string.length >= length) {
      return string;
    }

    let startPad = Math.floor((length - string.length)/2);
    let endPad = length - string.length - startPad;
    console.log(startPad);
    let padChar = ' ';
    let paddedString = padChar.repeat(startPad) + string + padChar.repeat(endPad);
    return paddedString;
  },

  has(object, key){
    return (object[key] !== undefined);
  },

  invert(object){
    let invObj = {};
    
    for(const [key, value] of Object.entries(object)){
      invObj[value] = key;
    }

    return invObj;
  },

  findKey(object, func){
    //console.log(object);
    //console.log(func);
    for(const [key, value] of Object.entries(object)){
      if(func(value)){
        return key;
      }
    }
    return undefined;
  },

  drop(arr, num){
    return arr.slice((num ? num : 1), arr.length);
  }
};




























// Do not write or modify code below this line.
module.exports = _;
