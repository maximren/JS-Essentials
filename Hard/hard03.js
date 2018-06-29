function createList(from, to) {
    var list = [];
    for (var i = from; i < to; i++) {
        list.push(i + 1);
    }
    return list;
}

// createList(0, 100);
// {from:0, to:100}

function binarySearch(toFind, range) {
    /// Checking our array for emptiness.
    var arr = createList(range.from, range.to);
    var first = 0;
    var last = arr.length - 1;
    /// Running binary search
    while (first < last) {
        var mid = Math.floor((last + first) / 2);
        if (arr[mid] > toFind) {
            last = mid - 1;
        } 
        else if (arr[mid] < toFind) {
            first = mid + 1;
        };  
        console.log(arr[mid]);
    }
    console.log(50,25,38,31,28,27)
    if (arr[last] == toFind)
        return last;
    else return null;
}

binarySearch(27, {
    from: 0,
    to: 100
});