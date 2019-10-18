function rot13(str) {
    const strSplit = str.split('');
    const decodedString = strSplit.map((char, i) => {
        const ascii = str.charCodeAt(i)
        if (ascii < 65 || ascii > 90) return String.fromCharCode(ascii);
        return ascii < 78 ? String.fromCharCode(ascii + 13) : String.fromCharCode(ascii - 13)
    }).join('');
}
rot13("SERR PBQR PNZC");