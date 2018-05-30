// 
function parse(data) {
    let res = 0;
    let arr = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'i') {
        res++;
      } else if (data[i] === 'd') {
        res--;
      } else if (data[i] === 's') {
        res = Math.pow(res, 2);
      } else if (data[i] === 'o') {
        arr.push(res);
      }
    }
  
    return arr;
  }