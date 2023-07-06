import './FunctionOutput.css'

export const FunctionOutput = ({userWord}:{userWord:string}) => {

    const firstNonRepeated = (s:string) => {
        const noSpaceWord = s.replace(/ /g, '');
        const lowerCaseWord = noSpaceWord.toLowerCase(); //don't differentiate uppercase and lowercase letter
        const seenLetters: { [key: string]: number } = {}; //object to store letter and frequency
            
        for (const letter of lowerCaseWord){
            if (letter in seenLetters){
                seenLetters[letter]++;
            }else{
                seenLetters[letter] = 1;
            }
        };     // increment letter frequency in object or create key and assign value 1 if not in object
        for (const letter of lowerCaseWord){
            if (seenLetters[letter]==1){
                return letter.toUpperCase(); // return first letter with freqeuncy of 1
            }
        }   
        return ""; 
    };


    return (
        <div className="functionoutputContainer">
            The first non-repeated character is:    <strong>{firstNonRepeated(userWord)}</strong>
        </div>
    );
};