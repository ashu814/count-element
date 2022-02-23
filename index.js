function count_element(input) {
    let count = {};
    for (let i = 0; i < input.length; i++) {
        count[input[i]] = count[input[i]] ? count[input[i]] + 1 : 1
    }
    return count;
}

module.exports = count_element;