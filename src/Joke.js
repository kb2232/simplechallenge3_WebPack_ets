import React from 'react';

const Joke = props=>{
    return(
        <div className="border">
            Question: {props.question?props.question:'no question'}
            <br />
            Punchline: {props.punchline}
        </div>
    )
}

export default Joke;