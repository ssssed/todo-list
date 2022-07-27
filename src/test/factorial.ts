export const factorial = (num: number):number => {
    let res = num;
    for (let i = 1; i < num; i++) 
        res *= i;
    return res;
}