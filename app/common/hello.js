const sum=(...args)=>{
    let sum=0;
    for (const key of args) {
        sum+=key;
    }
    return sum;
}
module.exports = sum;