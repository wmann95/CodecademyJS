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
  },

  dropWhile(arr, func){
    let n = 0;
    for(let i = 0; i < arr.length; i++){
      if(func(arr[i], i, arr) === true){
        n++;
      }
      else{
        break;
      }
    }

    return this.drop(arr, n);
  },

  chunk(arr, size){
    let s = size ? size : 1;
    let chunkCount = Math.ceil(arr.length / s);
    let output = [];
    if(s === 1) {
      output.push(arr);
      return output;
    }
    for(let i = 0; i < chunkCount; i++){
      let temp = [];
      if(i === chunkCount - 1){
        temp = arr.slice(i * s, arr.length);
      }else{
        temp = arr.slice(i * s, (i + 1) * s);
      }
      output.push(temp);
    }
    return output;
  }
};




























// Do not write or modify code below this line.
module.exports = _;
