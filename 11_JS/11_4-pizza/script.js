var array = [7, 6, 5, 13, 8, 4, 11];
var sum = 0;

array.forEach(element => {
    sum = sum + element;
});
var average = sum / array.length;

console.log(sum);
console.log(average);