import React, { useState, useEffect, useRef } from 'react'
import close from '../img/close.png'

function Card({ title, text }) {

    const [showPopUp, setShowPopUp] = useState(false)
    const [editTitleForTask, setEditTitleForTask] = useState(false)
    const [titleValue, setTitleValue] = useState(title)
    const [textareaValue, setTextareaValue] = useState(text)
    const areaRef = useRef(null)

    const showEditPopUp = () => {

        setShowPopUp(true)
    }

    const closeEditPopUp = () => {

        setShowPopUp(false)
        setEditTitleForTask(false)
        setTitleValue(title)
        setTextareaValue(text)
    }

    const editTitle = () => {

        setEditTitleForTask(true)
    }

    const onChange = (e) => {

        if (e.target.nodeName === 'INPUT') setTitleValue(e.target.value)

        if (e.target.nodeName === 'TEXTAREA') setTextareaValue(e.target.value)

    }

    useEffect(() => {
        if (areaRef.current) areaRef.current.focus()
    }, [showPopUp])


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
                                : <h2 onClick={editTitle}>{title}</h2>}

                            <div onClick={closeEditPopUp} className='pop_up_close'>
                                <img src={close} alt="close icon" />
                            </div>
                        </div>
                        <textarea
                            ref={areaRef}
                            value={textareaValue}
                            onChange={onChange}
                            type='text' placeholder='type task' />
                        <button>Save</button>
                    </div>
                </div>

            </>}
            <div onClick={showEditPopUp} className='card'>
                {text}
            </div>
        </>
    )
}

export default Card
