function recursion(x){
    console.log(x);
    if(x>0){
        return x+recursion(x-1);
    }
    return 0;
}

let val = recursion(5);
console.log(val);