function duplicate(arr12) {
var duplicate_arr12 = arr12.slice().sort();
var results = [];
for (var i = 0; i < duplicate_arr12.length - 1; i++) {
    if (duplicate_arr12[i + 1] == duplicate_arr12[i]) {
        results.push(duplicate_arr12[i]);
        }
    }
    console.log(results);
}

duplicate([1,3,2,4,5,2,5,4,1,75,23,11,11]);