function maximumWealth(accounts: number[][]): number {
    let largestWealth = 0;

    accounts.forEach((account) => {
        const wealth = account.reduce((acc, current) => acc + current, 0);
        if (wealth > largestWealth) {
            largestWealth = wealth;
        }
    });

    return largestWealth;
};