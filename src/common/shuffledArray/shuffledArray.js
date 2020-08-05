function randomNumber(min, max) {
    return Math.floor((max - min) * Math.random() + min);
}

function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        exch(arr, i, randomNumber(0,arr.length));
    }
}

function shuffledArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i;
    }
    shuffle(arr);
    return arr;
}

function exch(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

export default shuffle;