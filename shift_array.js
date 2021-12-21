arr = [3,1,4,5];
console.log(`array awal: ${arr}`);
let k = 1;
let temp = arr[k];
for (var i = k-1; i >= 0; i--) {
    arr[i+1] = arr[i];
}
arr[0] = temp;

console.log(`array akhir: ${arr}`)