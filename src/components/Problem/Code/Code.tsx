import './Code.css'

export const Code = () => {

    const codeSnippet = 
    `const firstNonRepeated = (s:string) => {
        const noSpaceWord = s.replace(/ /g, '');
        const word = s.toLowerCase();
        const seenLetters: { [key: string]: number } = {};
            
        for (const letter of word){
            if (letter in seenLetters){
                seenLetters[letter]++;
            }else{
                seenLetters[letter] = 1;
            }
        };
        for (const letter of word){
            if (seenLetters[letter]==1){
                return letter.toUpperCase();
            }
        }   
        return ""; 
    };`

    return (
        <div className="codeContainer">
            <h3>Code</h3>
            <pre>
                <code>{codeSnippet}</code>
            </pre>
        </div>
    );
};