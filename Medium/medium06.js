function rFact(num) {
    if (num === 0) {
        return 1;
    } 
        else {
        return num * rFact(num - 1);
    }
}

console.log(rFact(5));