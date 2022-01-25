let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l' ];


const updateSortReverse = (arr, ...letters) => {
    let restArray = [];
    let resultArray
    for (let i of letters){
        restArray.push(i);
    }
    resultArray = [...arr, ...restArray];
    resultArray.sort()
    return resultArray.reverse();
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');


console.log(reverseSort);
console.log(moreMixedLetters);