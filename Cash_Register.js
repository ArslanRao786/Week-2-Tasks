checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);

const cashInReverseOrder = [
    { name: "ONE HUNDRED", value: 100 },
    { name: "TWENTY", value: 20 },
    { name: "TEN", value: 10 },
    { name: "FIVE", value: 5 },
    { name: "ONE", value: 1 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKLE", value: 0.05 },
    { name: "PENNY", value: 0.01 }
];

function checkCashRegister(price, cash, cid) {

    let change = cash - price;

    const totalCid = cid.reduce((acc, curr) => {

        return acc + curr[1];

    }, 0.0);

    if (totalCid === change) {

        return { status: "CLOSED", change: [...cid] };

    } else if (totalCid < change) {

        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    cid = cid.reverse();

    const clientCashReturn = cashInReverseOrder.reduce((acc, curr, index) => {

        let currentValue = 0;

        while (change >= curr.value && cid[index][1] > 0) {

            change -= curr.value;
            cid[index][1] -= curr.value;
            currentValue += curr.value;
            change = Math.round(change * 100) / 100;

        }

        if (currentValue > 0) {

            acc.push([curr.name, currentValue]);
        }

        return acc;

    }, []);

    return clientCashReturn.length < 1 || change > 0 ?

        { status: "INSUFFICIENT_FUNDS", change: [] } :

        { status: "OPEN", change: clientCashReturn }
};