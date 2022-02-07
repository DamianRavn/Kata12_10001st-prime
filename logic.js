// function check whether a number
// is prime or not
function isPrime(n)
{
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false;
  
    return true;
}

function primeNumber(n)
{
    // Corner case
    if (n <= 1)
        return 2;

    let primeCount = 1;
    let primeNumber = 2;
    for (let i = 3; primeCount < n; i+=2) 
    {
        if (isPrime(i)) 
        {
            primeCount++;
            primeNumber = i;
        }
    }
    return primeNumber;
}

console.log(primeNumber(6)); //13
console.log(primeNumber(10001)); //13