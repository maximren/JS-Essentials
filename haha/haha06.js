var a = 0, b = 0;
var max = 5;

while (a < max) {
    star = "";
    for (b = 0; b < 1 * a + 1; b++) star += "*";
    console.log(star);
    a++;
}