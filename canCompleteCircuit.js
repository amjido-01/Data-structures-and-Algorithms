// const gas = [1,2,3,4,5];
// const cost = [3,4,5,1,2]
const gas = [2,3,4], cost = [3,4,3]
function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let totalCost = 0
    let tank = 0;
    let start = 0

    for (let i = 0; i < gas.length; i++) {
        totalCost += cost[i];
        totalGas += gas[i]
    }

    if (totalGas < totalCost) {
        return -1
    }

    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return start
}

const result = canCompleteCircuit(gas, cost)
console.log(result)