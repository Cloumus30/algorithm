let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 0, 5, 4, 3, 2, 1];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let arr3 = [4,3,1,5];

class Sort {
    
    static bubbleSortAsc(arrInp) {
        let tempArr = Array.from(arrInp);
        for (var i = 0; i < tempArr.length-1; i++) {
            for (var j = 0; j < tempArr.length-i; j++) {
                if (tempArr[j] > tempArr[j+1]) {
                    let temp = tempArr[j+1];
                    tempArr[j+1] = tempArr[j];
                    tempArr[j] = temp;
                }
            }
        }
        return tempArr;
    }
    
    static selectionSortAsc(arrInp){
        let tempArr = Array.from(arrInp);
        let res=[];
        for (var i = 0; i < tempArr.length-1; i++) {
            let arr = tempArr.slice(i,tempArr.length);
           
            let min = this.minVal(arr);
            let index = tempArr.indexOf(min);
            let temp = tempArr[i];
            tempArr[i] = tempArr[index];
            tempArr[index]=temp;
            
        }
        return tempArr;
    }
    
    static selectionSortDesc(arrInp){
        let tempArr = Array.from(arrInp);
        let res=[];
        for (var i = 0; i < tempArr.length-1; i++) {
            let arr = tempArr.slice(i,tempArr.length);
               
            let max = this.maxVal(arr);
            let index = tempArr.indexOf(max);
            let temp = tempArr[i];
            tempArr[i] = tempArr[index];
            tempArr[index]=temp;
                
            }
        return tempArr;
    }
    

    static minVal(arrInp) {
        let min = arrInp[0];
        for (let i = 0; i < arrInp.length-1; i++) {
            if (min > arrInp[i+1]) {
                min = arrInp[i+1];
            }
        }
        return min;
    }

    static maxVal(arrInp) {
        let max = arrInp[0];
        for (let i = 0; i < arrInp.length-1; i++) {
            if (max < arrInp[i+1]) {
                max = arrInp[i+1];
            }
        }
        return max;
    }
}


let sortedArr = Sort.selectionSortDesc(arr2);
console.log(`array awal: ${arr2}`);
console.log(`array akhir: ${sortedArr}`);