var range = function(start, end, step){
    var arr1 = [];
    if(start == undefined || end == undefined || step == undefined){
        return arr1;
    }
    else if(start > end){
        return arr1;
    }
    else if(step < 0 || step == 0){
        return arr1;
    }
    else{
        arr1[0] = start;
        for(let i = 0; start < end; i++){
           arr1.push(arr1[i] + step);
            start += step;
            if(start > end){
                arr1.pop();
            }
        }
        return arr1;
    }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));