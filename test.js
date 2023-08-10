function getRate(params1) {
    setTimeout(() => {
        params1(4)
    }, 1000);
}

function getStock(params2) {
    setTimeout(() => {
        params2(5)
    }, 1000);
}

const a = 40
getRate((rate) => {
    getStock((price) => {
        const b = a/price/rate
        console.log(b);
    })
})