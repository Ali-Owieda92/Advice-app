import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [advice, setAdvice] = useState('');
    useEffect(() => {
        fetchingAdvices();
    }, []);
    const fetchingAdvices = async () => {
        try{
            const response = await axios.get("https://api.adviceslip.com/advice");
            const data = await response.data;
            setAdvice(data.slip.advice);
        }catch(err){
            console.Error(err);
        }
    }
    return (
        <div className='app'>
            <div className="container">
                <p>{advice}</p>
                <button onClick={fetchingAdvices}>
                    <span>Give me advice</span>
                </button>
            </div>
        </div>
    )
}

export default App
