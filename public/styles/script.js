// JavaScript function to shuffle the characters in a word
function shuffleWord(word) {
    const shuffledArray = word.split('').sort(() => Math.random() - 0.5);
    return shuffledArray.join('');
}
