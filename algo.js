const apabole = nums => {
    let boleapa = '';
    for (let i = 1; i <= nums; i++){
        boleapa += i%3==0 && i%5==0 ? ' apabole ' : i%3==0 ? ' apa ' : i%5==0 ? ' bole ' : ` ${i} `;
    }
    return boleapa;
};

console.log(apabole(50));

// const oddEvenNum = nums => Number.isInteger(nums/2);
const oddEvenNum = nums => nums%2 === 0;

console.log(oddEvenNum(434452933));
