import React, {useState, useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = 'dc0f8ce105bca8f36f80ec9d07e5ddc62e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = () => {
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) =>{
                if(command==='newHeadlines'){
                    alert('the code executed')
                }
            }
        })
    }, [])

    return(
        <div>
            <h1 style={{color:"black"}}>News By Alan AI</h1>
        </div>
    )
}
export default App;