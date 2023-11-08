function addBinary(a: string, b: string): string {
    if (b.length < a.length) {
        b = b.padStart(a.length, '0');
    } else if (a.length < b.length) {
        a = a.padStart(b.length, '0');
    }

    let aIndex = a.length - 1;
    let bIndex = b.length - 1;
    let cIndex = 0;
    let carry = 0;
    let c: string[] = [];
    let sum = 0;

    while (aIndex >= 0) {
        sum = Number(a[aIndex]) + Number(b[bIndex]) + carry;

        if (sum === 2) {
            c[cIndex] = '0';
            carry = 1;
        } else if (sum === 3) {
            c[cIndex] = '1';
            carry = 1;
        } else {
            carry = 0;
            c[cIndex] = sum.toString();
        }

        aIndex--;
        bIndex--;
        cIndex++;
    }

    if (carry) {
        c[cIndex] = '1';
    }

    return c.reverse().join('');
};