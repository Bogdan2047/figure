let len = 7;
let midlle = Math.ceil(len/2);

for (let i = 1; i <= len; i++) {
    let star = '*';
    let result = star.repeat(i);

    if(i > midlle){

        result = star.repeat(len - i + 1);  

    }
    console.log(result);
}