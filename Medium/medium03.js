function substrings(str1) {
    var array1 = str1.split("");
    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);

    for ( i = 0; i < slent; i++) {
        temp = "";
        for ( j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
            temp += array1[j];
        }
    }
        if (temp !== "") {
            combi.push(temp);
        }
    }
    console.log(combi.join());
}

substrings("dog");