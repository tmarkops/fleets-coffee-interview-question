import { Code } from './Code/Code';
import { Demo } from './Demo/Demo';
import './Problem.css'

export const Problem = () => {

    return (
        <div className="problemContainer">
            <Code />
            <Demo />
        </div>
    );
};