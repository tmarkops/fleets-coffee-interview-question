import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './TextArea.css'

export const TextArea = ({setCurWord}:{setCurWord:Dispatch<SetStateAction<string>>}) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const word = e.target.value;
        setCurWord(word);
      };

    return (
        <div className="textareaContainer">
            Please enter a word to test the function:
            <br></br>
            <input placeholder='Your word' onChange={handleChange}></input>
            <br></br>
            &darr;
        </div>
    );
};