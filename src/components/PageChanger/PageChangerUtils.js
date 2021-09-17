const calculateStyleFor3 = (current, maxPages, pageNumber) => {
    if (maxPages < 3) {
        return {
            background: "#ababab",
            borderColor: "#ababab",
            cursor: "default"
        }
    }

    if (maxPages === 3 && pageNumber === 3) {
        return {
            background: "#1b85e7"
        }
    }

    if (current === 3) {
        return {
            background: "#1b85e7"
        }
    }
};

const calculateStyleFor2 = (current, maxPages, pageNumber) => {
    if (maxPages < 2) {
        return {
            background: "#ababab",
            borderColor: "#ababab",
            cursor: "default"
        }
    }

    if (maxPages === 2 && pageNumber === 2) {
        return {
            background: "#1b85e7"
        }
    }

    if (current === 2) {
        return {
            background: "#1b85e7"
        }
    }
};

const onCLick2 = (current, maxPages, pageNumber, callback) => {
    if (maxPages < 2) {
        return;
    }

    if (current === 2) {
        return;
    }

    if (current === 1) {
        return callback(pageNumber + 1)
    }

    return callback(pageNumber - 1)
};

const onCLick3 = (current, maxPages, pageNumber, callback) => {
    if (maxPages < 3) {
        return;
    }

    if (current === 3) {
        return;
    }

    if (current === 1) {
        return callback(pageNumber + 2)
    }

    return callback(pageNumber + 1)
};

const calculate1 = (pageNumber, maxPages) => {
    if (maxPages === 1) {
        return 1
    }
    if (maxPages === 2) {
        return 1
    }
    if (maxPages === 3) {
        return 1
    }
    if (pageNumber === 1) {
        return 1
    }
    if (pageNumber === maxPages) {
        return pageNumber - 2
    }

    return pageNumber - 1
};

const calculate2 = (pageNumber, maxPages) => {
    if (maxPages === 1) {
        return 2
    }
    if (maxPages === 2) {
        return 2
    }
    if (maxPages === 3) {
        return 2
    }
    if (pageNumber === 1) {
        return 2
    }
    if (pageNumber === maxPages) {
        return pageNumber - 1
    }

    return pageNumber
};

const calculate3 = (pageNumber, maxPages) => {
    if (maxPages === 1) {
        return 3
    }
    if (maxPages === 2) {
        return 3
    }
    if (maxPages === 3) {
        return 3
    }
    if (pageNumber === 1) {
        return 3
    }
    if (pageNumber === maxPages) {
        return pageNumber
    }

    return pageNumber + 1
};

export {calculate1, calculate2, calculate3, calculateStyleFor2, calculateStyleFor3, onCLick2, onCLick3}
