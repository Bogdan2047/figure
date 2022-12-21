let len = 7;

let y = 1;
let c = len-y/2;

for(let i = 0; i < len/2; i++){

   a = '*';
   let aa = a.repeat(y);

    b = " ";
    let bb = b.repeat(c);

    console.log(bb + aa + bb);

    y = y+2;
    c = c-1;
}