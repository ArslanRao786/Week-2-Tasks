rot13("SERR PBQR PNZC");

function rot13(str) {

    const strSplit = str.split('');

    const decodedString = strSplit.map((char, i) => {

        const ascii = str.charCodeAt(i)

        // Capital alphabets Ascii Code lies in-between 65 and 90 
        if (ascii < 65 || ascii > 90) return String.fromCharCode(ascii);

        // Ascii code for 'N' is 78
        return ascii < 78 ?

            String.fromCharCode(ascii + 13) :

            String.fromCharCode(ascii - 13)

    }).join('');
}