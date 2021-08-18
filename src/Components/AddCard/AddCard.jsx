import React, { useEffect } from 'react'
import plus from '../img/plus.png'
import close from '../img/close.png'
import { useRef } from 'react'


function AddCard({ showInterface, showAddInterface, closeAddInterface }) {

    const areaRef = useRef(null)

    useEffect(() => {

        if (areaRef.current) areaRef.current.focus()

    }, [showInterface])


    return (
        <>
            {showInterface ?
                <div className="add_card_interface">
                    <textarea ref={areaRef} />
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
