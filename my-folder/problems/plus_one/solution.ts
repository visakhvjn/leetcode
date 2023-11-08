function plusOne(digits: number[]): number[] {
    let carry = 0;
    let position = digits.length - 1;
    digits[position] += 1;

    do {
        digits[position] += carry;

        if (digits[position] > 9) {
            carry = digits[position] - 9;
            digits[position] = 0;
        } else {
            carry = 0;
        }

        position -= 1;
    } while (carry && position >= 0);

    if (carry) {
        return [1, ...digits];
    }

    return digits;
};