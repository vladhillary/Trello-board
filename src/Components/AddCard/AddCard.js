import React, { useEffect, useState } from 'react'
import plus from '../img/plus.png'
import close from '../img/close.png'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setCreateTaskTodo } from '../../redux/actions/createTask'


function AddCard() {

    const titleRef = useRef(null)
    const [titleValue, setTitleValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [showInterface, setShowInterface] = useState(false)
    const [emptyTitle, setEmptyTitle] = useState(false)
    const [emptyTextarea, setEmptyTextarea] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {

        if (titleRef.current) titleRef.current.focus()

    }, [showInterface])

    const onChange = (e) => {

        if (e.target.nodeName === 'INPUT') setTitleValue(e.target.value)

        if (e.target.nodeName === 'TEXTAREA') setTextareaValue(e.target.value)

    }

    const showAddInterface = () => {

        setShowInterface(true)

    }

    const closeAddInterface = () => {

        setShowInterface(false)
        setTextareaValue('')
        setTitleValue('')
        setEmptyTitle(false)
        setEmptyTextarea(false)

    }

    const addNewTask = () => {

        if (!titleValue) {
            setEmptyTitle(true)
            return
        }
        if (!textareaValue) {
            setEmptyTextarea(true)
            return
        }

        const newTask = {
            title: titleValue,
            text: textareaValue
        }

        dispatch(setCreateTaskTodo(newTask))
        setTextareaValue('')
        setTitleValue('')
        setShowInterface(false)

    }


    return (
        <>
            {showInterface ?
                <div className="add_card_interface">
                    <input
                        className={emptyTitle ? 'warning' : null}
                        value={titleValue}
                        onChange={onChange}
                        ref={titleRef}
                        type="text" placeholder='type title for task' />
                    <textarea
                        className={emptyTextarea ? 'warning' : null}
                        value={textareaValue}
                        onChange={onChange}
                        placeholder='type text for task'
                    />
                    <div className="add_card_interface_wrapper">
                        <button
                            onClick={addNewTask}
                            className="add_card_btn">Add Card</button>
                        <div
                            onClick={closeAddInterface}
                            className="close_btn">
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
