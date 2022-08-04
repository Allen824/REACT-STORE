import React from 'react'

function Popup({ closePop, message }) {
    return (
        <div className='Popup'>
            <div className='Box'>
                <div className='Exit'>
                    <button className='ExitButton' onClick={() => {closePop(false)}}> X </button>
                </div>
                <div className='ErrorMessage'>ERROR</div>
                <div className='ErrorMessage'> {message} </div>
            </div>
        </div>
    )
}

export default Popup