import React, { useEffect, useState } from 'react'
import plus from '../img/plus.png'
import close from '../img/close.png'
import { useRef } from 'react'


function AddCard() {

    const areaRef = useRef(null)
    const [titleValue, setTitleValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [showInterface, setShowInterface] = useState(false)

    useEffect(() => {

        if (areaRef.current) areaRef.current.focus()

    }, [showInterface])

    const onChange = (e) => {

        if(e.target.nodeName === 'INPUT') setTitleValue(e.target.value)

        if(e.target.nodeName === 'TEXTAREA') setTextareaValue(e.target.value)

    }

    const showAddInterface = () => {
        setShowInterface(true)
    }

    const closeAddInterface = () => {
        setShowInterface(false)
        setTextareaValue('')
        setTitleValue('')
    }


    return (
        <>
            {showInterface ?
                <div className="add_card_interface">
                    <input 
                    value={titleValue}
                    onChange={onChange}
                    type="text" placeholder='type title for task'/>
                    <textarea 
                    value={textareaValue}
                    onChange={onChange}
                    ref={areaRef} 
                    placeholder='type text for task'
                    />
                    <div className="add_card_interface_wrapper">
                        <button className="add_card_btn">Add Card</button>
                        <div onClick={closeAddInterface} className="close_btn">
                            <img src={close} alt="close icon" />
                            <span>Close</span>
                        </div>
                    </div>
                </div>
                : <div onClick={showAddInterface} className='add_card'>
                    <img src={plus} alt="plus ico" />
                    <div className="add_card_show">
                        Add another card
                    </div>

                </div>}

        </>

    )
}

export default AddCard
