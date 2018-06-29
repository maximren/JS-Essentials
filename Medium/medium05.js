// function find_notRepeat(str) {
//     var array3 = str.split("");
//     var result = "";
//     var ctr = 0;

//     for (var x = 0; x < str.array3; x++) {
//         ctr = 0;

//         for (var y = 0; y < array3.lenght; y++) {
//             if (array3[x] === array3[y]) {
//                 ctr+= 1;
//             }
//         }

//         if (ctr < 2) {
//             result = array3[x];
//             break;
//         }
//     }
//     return result;
// }
// console.log(find_notRepeat("abacddbec"));

function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }
    return result;
}
console.log(find_FirstNotRepeatedChar('abacddbec'));