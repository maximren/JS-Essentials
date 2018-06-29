function avarage(array) {
    return array.reduce( function(acc, element) { return acc + element}) / array.length;
}
console.log(avarage([1,4,2]));
