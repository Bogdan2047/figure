let len = 7;
let a = ' ';
let b = '*';
let aa = Math.ceil(len/2);
let bb = 1;
let cc = 0;



for (let i = 0; i <len; i++) {
    
    if(i < aa - 1){
        
        console.log(a.repeat(aa-i) + b.repeat(bb+i));
        
    }else{
        
        console.log(a.repeat(bb+cc) + b.repeat(aa-cc));
        cc++;
    }
    
}