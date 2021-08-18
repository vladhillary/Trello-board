import React, { useState } from 'react'
import AddCard from '../AddCard/AddCard'

function Panel({ title, children }) {

    const [showInterface, setShowInterface] = useState(false)

    const showAddInterface = () => {
        setShowInterface(true)
    }

    const closeAddInterface = () => {
        setShowInterface(false)
    }

 

    return (
        <div className='panel'>
            <div className="panel_title">
                {title}
            </div>
            {children}
            <AddCard
                showInterface={showInterface}
                showAddInterface={showAddInterface}
                closeAddInterface={closeAddInterface}
            />
        </div>
    )
}

export default Panel
