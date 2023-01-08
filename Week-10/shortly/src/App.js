import './App.css';
import { useState } from 'react';
import InputShortner from './InputShortner';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';

function App() {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="container">
            <InputShortner setInputValue={setInputValue}/>
            <BackgroundAnimate />
            <LinkResult inputValue={inputValue} />
        </div>
    );
}

export default App;
