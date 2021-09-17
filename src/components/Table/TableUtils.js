const sortList = (sort, tag, order, list) => {
    let sortBy = sort["sortBy" + tag];
    if (sortBy[order]) {
        list = list.sort((p1, p2) => {
            if (order === "ascending") {
                return (p1[tag] > p2[tag]) ? 1 : (p2[tag] > p1[tag]) ? -1 : 0
            } else if (order === "descending") {
                return (p1[tag] > p2[tag]) ? -1 : (p2[tag] > p1[tag]) ? 1 : 0
            }
            return -1
        })
    }

    return list
};

const compareStrings = (pattern, str) => {
    pattern = pattern.toLowerCase();
    str = str.toLowerCase();

    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== str[i]) {
            return false;
        }
    }

    return true;
};

export {compareStrings, sortList}
