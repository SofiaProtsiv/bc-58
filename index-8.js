/* ============== Метод map() ============== */
const ownMap = function (arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
};

/* ============== Метод filter() ============== */
const ownFilter = function (arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

/* ============== Метод find() ============== */
const ownFind = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
};

/* ============== Метод findIndex() ============== */
const ownFindIndex = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
};

/* ============== Метод every() ============== */
const ownEvery = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};


/* ============== Метод some() ============== */
const ownSome = function (arr, callback) {
    for (let i = 0; i < arr.length; i += 1) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
};


/* ============== Метод reduce() ============== */
const ownReduce = function (arr, callback, initialValue = arr[0]) {
    for (let i = 0; i < arr.length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    return initialValue;
};
