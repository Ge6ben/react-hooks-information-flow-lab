import React from 'react'

export default function Header(props) {
    console.log(props)
    return (
        <div>
           <header>
        <h2>Shopster</h2>
        <button onClick={props.onDarkModeClick}>
        { props.changeTxt ? "Dark" : "Light"} Mode
        </button>
      </header> 

        </div>
    )
}
