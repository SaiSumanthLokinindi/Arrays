const segregate = (arr) => {
    let i = 0, j = arr.length - 1;
    while (i < j) {
        while (arr[i] != 1 && i < arr.length) {
            i++;
        }
        while (arr[j] != 0 && j >= 0) {
            j--;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

const arr = [0, 1, 0, 1, 1, 1];
console.log(segregate(arr));