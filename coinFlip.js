function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {

    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return new Promise( (resolve, reject) => {
        // your code here!
        if (attempts > 100) {
            reject(`the coin has flipped more than 100 times without getting heads 5 times in a row. it took ${attempts} flips.`);
        }
        else if (headsCount === 5) {
            resolve(`Congratualtions! you flipped heads 5 times in a row. It took ${attempts} flips.`);
        }
        
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now? I think it will run first." );