module.exports = function reverse (n) {
    let reverseInt = 0;
    let marker = n/Math.abs(n);
    while(Math.abs(n)>0){
        reverseInt = reverseInt*10+(n%10);
        n=~~(n/10);
    }
    return reverseInt*marker;
}
