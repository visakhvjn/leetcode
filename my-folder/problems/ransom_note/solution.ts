function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineFrequency = getFrequency(magazine);
    const ransomNoteFrequency = getFrequency(ransomNote);

    for (const key in ransomNoteFrequency) {
        if (!magazineFrequency?.[key] || magazineFrequency?.[key] < ransomNoteFrequency[key]) {
            return false;
        }
    }

    return true;
};

function getFrequency(word: string): Object {
    const letters = word.split('');
    const frequency = {};

    letters.forEach((letter) => {
        if (!frequency[letter]) {
            frequency[letter] = 1;
        } else {
            frequency[letter] += 1;
        }
    });

    return frequency;
}