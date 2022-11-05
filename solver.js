const hasTwoDistinctNumbers = n => new Set(n.toString().split("")).size >= 2;
const isVictoryCondition = n => n === 6174;

const arrange = sorter => n => 
    parseInt(
        n.toString()
        .padStart(4, "0")
        .split("")
        .map(n => parseInt(n))
        .sort(sorter)
        .join("")
    );

const ascending = arrange((a,b) => a - b);
const descending = arrange((a,b) => b - a);

const solve = (n, i = 0) => {
    if (isVictoryCondition(n)) {
        return i;
    }

    const nextN = descending(n) - ascending(n);
    return solve(nextN, i + 1);
}

const start = 1000;
const end = 9999;

const results = new Array(end - start).fill(0)
    .map((_, i) => start + i)
    .filter(hasTwoDistinctNumbers)
    .map(startN => ({
        startN,
        iterations: solve(startN)
    }));

console.log(results.sort((a,b) => b.iterations - a.iterations));
