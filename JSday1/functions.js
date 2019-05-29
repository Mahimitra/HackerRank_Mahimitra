function factorial(n) {
    let res=1;
    while (n != 0) {
        res = res * n;
        n--;
    }  
    return res;  
     
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}