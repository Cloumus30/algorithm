let arr = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

class Sort {
  static bubbleSortAsc(arrInp){
   for (var i = 0; i < arrInp.length-1; i++) {             for (var j = 0; j < arrInp.length-i; j++) {
        if (arrInp[j]>arrInp[j+1]) {
            let temp = arrInp[j+1];                             arrInp[j+1] = arrInp[j];                              arrInp[j] = temp;                               		}                                             }
	}
	return arrInp;
 }
}

/*
for (var i = 0; i < arr2.length-1; i++) {
    for (var j = 0; j < arr2.length-i; j++) {
        if (arr2[j]<arr2[j+1]) {
            let temp = arr2[j+1];
            arr2[j+1] = arr2[j];
            arr2[j] = temp;
        }
    }
}
*/
console.log(Sort.bubbleSortAsc(arr));
