let arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 0, 5, 4, 3, 2, 1];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let arr3 = [4,3,1,5];

class Sort {
    
    // sorting ascending bubble sort
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
    
    // sort ascending selection sort
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
    
    // Sort descending selection sort
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
    
    /*still unwork need to fix*/
    // sort ascending insertion sort
    static insertionAsc(arrInp){
        let tempArr = Array.from(arrInp);
        
        for (var i = 1; i < tempArr.length; i++) {
            let temp = tempArr[0];
            
            if(temp>tempArr[i]){
                let temp2 = tempArr[i];
                let tempArr2 = Array.from(tempArr);
                for (var j= i; j >= 0; j--) {
                    tempArr[j+1] = tempArr2[i];
                }
                tempArr[0] = temp2;
            }
        }
        return tempArr;
    }
    
    // find minimal value
    static minVal(arrInp) {
        let min = arrInp[0];
        for (let i = 0; i < arrInp.length-1; i++) {
            if (min > arrInp[i+1]) {
                min = arrInp[i+1];
            }
        }
        return min;
    }

    // find maximal value
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


let sortedArr = Sort.insertionAsc(arr3);
console.log(`array awal: ${arr3}`);
console.log(`array akhir: ${sortedArr}`);