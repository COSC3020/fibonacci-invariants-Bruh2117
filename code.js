function fib(n) {
    
    if (n < 1)
    {
        return [0]; 
    }
    if (n == 1) 
    {
        return [0, 1]; 
    }
    
    var arr = fib(n - 1); 
    arr.push(arr[n-1] + arr[n-2]); 
    return arr; 
}
