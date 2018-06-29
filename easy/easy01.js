var x = [1,5,23,4,2,5,6];

function even(a) {
    return a.filter(function(val){return val%2==0})
}

console.log (even(x));