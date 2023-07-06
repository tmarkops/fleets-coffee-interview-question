import { useState } from 'react';
import './Demo.css'
import { FunctionOutput } from './FunctionOutput/FunctionOutput';
import { TextArea } from './TextArea/TextArea';



export const Demo = () => {

    const [curWord, setCurWord] = useState<string>('')

    return (
        <div className="demoContainer">
            <div className='centerContainer'>
            <h3>Demo</h3>
                <TextArea setCurWord={setCurWord}/>
                <FunctionOutput userWord={curWord} />
            </div>
        </div>
    );
};