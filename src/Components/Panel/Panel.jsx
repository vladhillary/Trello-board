import React from 'react'
import AddCard from '../AddCard/AddCard.js'

function Panel({ title, children }) {

    return (
        <div className='panel'>
            <div className="panel_title">
                {title}
            </div>
            {children}
            <AddCard name={title}/>
        </div>
    )
}

export default Panel
