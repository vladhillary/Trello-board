import React, { useState } from 'react'
import close from '../img/close.png'

function Card() {

    const [showPopUp, setShowPopUp] = useState(false)

    const showEditPopUp = () => {
        setShowPopUp(true)
    }   

    const closeEditPopUp = () => {
        setShowPopUp(false)
    }

    return (
        <>
            {showPopUp && <>

                <div className='popup_wrapper'>
                    <div className='pop_up'>
                        <div className='pop_up_header'>
                            <h2>title</h2>
                            <div onClick={closeEditPopUp} className='pop_up_close'>
                                <img src={close} alt="close icon" />
                            </div>
                        </div>
                        <textarea type='text' placeholder='type task' />
                        <button>Save</button>
                    </div>
                </div>

            </>}
            <div onClick={showEditPopUp} className='card'>
                Lorem ipsum dolor sit
            </div>
        </>
    )
}

export default Card
