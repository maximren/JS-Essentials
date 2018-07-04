function maxMin(array5) {
var min = array5[0];
var max = min;
for (i = 0; i < array5.length; i++) {
    if (array5[i] < min) {
        min = array5[i];
    }
    else if (array5[i] > max) {
        max = array5[i];
        }
    }
    console.log('min: ' + min);
    console.log('max: ' + max);
}


maxMin([1,92,-5,25]);