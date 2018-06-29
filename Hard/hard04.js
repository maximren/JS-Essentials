var arr12 = [3, 3, 123, 2, 43, 43, 45, 65, 37, 123, 45, 41, 26, 76, 98];
var duplicate_arr12 = arr12.slice().sort();
var results = [];
for (var i = 0; i < duplicate_arr12.length - 1; i++) {
    if (duplicate_arr12[i + 1] == duplicate_arr12[i]) {
        results.push(duplicate_arr12[i]);
    }
}

console.log(results);