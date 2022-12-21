const len = 7;

const row = Math.ceil(len/2);

let spaces = 4;


for (let lens = 0; lens < row; lens++) {

    let space = ' '; 
    let result2 = space.repeat(lens);

    let stars = '*';
    c = len - (lens * 2);

    result = stars.repeat(c);
    
    console.log(result2 + result);

  }