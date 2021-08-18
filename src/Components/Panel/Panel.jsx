import React from 'react'

function Panel({title, children}) {
    return (
        <div className='panel'>
            <div className="panel_title">
                {title}
            </div>
            {children}
        </div>
    )
}

export default Panel
