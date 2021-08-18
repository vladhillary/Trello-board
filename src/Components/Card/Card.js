import React, { useState } from 'react'
import close from '../img/close.png'

function Card() {

    const [showPopUp, setShowPopUp] = useState(false)
    const [editTitleForTask, setEditTitleForTask] = useState(false)
    const [titleValue, setTitleValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')

    const showEditPopUp = () => {

        setShowPopUp(true)
    }

    const closeEditPopUp = () => {

        setShowPopUp(false)
        setEditTitleForTask(false)
    }

    const editTitle = () => {

        setEditTitleForTask(true)
    }

    const onChange = (e) => {

        if(e.target.nodeName === 'INPUT') setTitleValue(e.target.value)

        if(e.target.nodeName === 'TEXTAREA') setTextareaValue(e.target.value)

    }


    return (
        <>
            {showPopUp && <>

                <div className='popup_wrapper'>
                    <div className='pop_up'>
                        <div className='pop_up_header'>
                            {editTitleForTask ?
                                <input
                                    value={titleValue}
                                    onChange={onChange}
                                    type='text'
                                    placeholder='type title'
                                />
                                : <h2 onClick={editTitle}>title</h2>}

                            <div onClick={closeEditPopUp} className='pop_up_close'>
                                <img src={close} alt="close icon" />
                            </div>
                        </div>
                        <textarea
                            value={textareaValue}
                            onChange={onChange}
                            type='text' placeholder='type task' />
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
