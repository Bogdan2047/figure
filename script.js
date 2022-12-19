// const len = 7;

// let outStr = '*';

// let c = outStr.repeat(len);
 
// p = 0;

// while (p < len) { 
//     p++;
//     console.log(c); 
// }

/////////////////////////////////////

// const len = 7;

// const row = Math.ceil(len/2);

// let spaces = 4;


// for (let lens = 0; lens < len; lens++) {

//     let space = ' '; 
//     let result2 = space.repeat(lens);

//     let stars = '*';
//     c = len - (lens * 2);

//     result = stars.repeat(c);
    
//     console.log(result2 + result);

//   }

//////////////////////////////////////////


// let len = 7;
// let midlle = Math.ceil(len/2);

// for (let i = 1; i <= len; i++) {
//     let star = '*';
//     let result = star.repeat(i);

//     if(i > midlle){

//         result = star.repeat(len - i + 1);  

//     }
//     console.log(result);
// }

//////////////////////////////////////////////


// let len = 7;
// let a = ' ';
// let b = '*';
// let aa = Math.ceil(len/2);
// let bb = 1;
// let cc = 0;



// for (let i = 0; i <len; i++) {
    
//     if(i < aa - 1){
        
//         console.log(a.repeat(aa-i) + b.repeat(bb+i));
        
//     }else{
        
//         console.log(a.repeat(bb+cc) + b.repeat(aa-cc));
//         cc++;
//     }
    
// }