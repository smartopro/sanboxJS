function findClosedParentheses(array, startPosition) {
    // startPosition is position of "("
    let level = 0;
    for (let i = startPosition; i < array.length; i++) {
        if (array[i] === "(") level++;
        if (array[i] === ")") level--;
        if (level === 0) return i;
    }
}

function toArray(string) {
    return string.
        replace(/\s/g, "").
        replace(/(^|\()([+-])/g, function(match, p1, p2) {return p1 + 0 + p2}).
        split(/([\+\-\*\/\(\)])/g).
        filter(item => item);
}

function eval(array) {
    let i = 0;
    do {
        if (array[i] === "(") {
            const closedParentheses = findClosedParentheses(array, i);
            // deleting parentheses
            const inParentheses = array.slice(i + 1, closedParentheses);
            array.splice(i, closedParentheses - i + 1, eval(inParentheses));
            i = 0;
        } else i++;
    } while (i <= array.length)

    // string without parentheses

    function doOperations(array, operations) {
        let i = 0;
        do {
            if (operations.includes(array[i])) {
                const operation = array[i];
                const a = +array[i - 1];
                const b = +array[i + 1];
                let result;
                switch (operation) {
                    case "*": result = a * b; break;
                    case "/": result = a / b; break;
                    case "+": result = a + b; break;
                    case "-": result = a - b; break;
                }
                array.splice(i - 1, 3, result);
            } else i++;
        } while (i <= array.length)
    }

    doOperations(array, ["*", "/"]);
    doOperations(array, ["+", "-"]);

    return array[0];
}

function evaluate(string) {
    let array = toArray(string);
    return eval(array);
}

// let string = "1+(21+35) + (1 + 2)";
let string = "1+(-1-(-1))";
console.log(`${string}`, evaluate(string));
