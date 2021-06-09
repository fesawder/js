function mutation(arr) {
    arr = arr.map(elem => elem.toLowerCase());
    let res;
    arr.map(function(elem1) {
        console.log(elem1);
    });
    for (let i = 0; i < arr[1].length; i++) {
        res = false;
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[1][i] == arr[0][j]) {
                res = true;
            }
        }
        if (res === false) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "Hello"]);