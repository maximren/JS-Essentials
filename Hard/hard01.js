var logsNumber = function(num) {
    if (num > -1) {
        console.log(num);
        return logsNumber(num - 1);
    }
    else {
        return num;
    }
}
logsNumber(6);