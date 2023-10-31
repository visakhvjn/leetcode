function longestCommonPrefix(strs: string[]): string {
    let smallestStringLength = 200;
    let smallestString = '';

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < smallestStringLength) {
            smallestString = strs[i];
            smallestStringLength = strs[i].length;
        }
    }

    for (let i = 0; i < strs.length && smallestString; i++) {
        if (!strs[i].startsWith(smallestString)) {
            smallestString = smallestString.slice(0, -1);
            i -= 1;
        }
    }

    return smallestString;
};