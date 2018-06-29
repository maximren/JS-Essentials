function capitalize(str) {
    var splitStr = str.split(" ");
    var array2 = [];

    for (var z = 0; z < splitStr.length; z++) {
        array2.push(splitStr[z].charAt(0).toUpperCase()+splitStr[z].slice(1));
    }
    return array2.join(" ");
}
console.log(capitalize("the quick brown fox"));
