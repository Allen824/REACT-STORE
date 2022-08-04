import { Link } from 'react-router-dom'

function Final() {
    return (
        <div>
            <div className='Info'>Thank You For Shopping With Us!</div>
            <div className='FootBar'>
                <button className='PageButton'><Link to="/">RETURN TO HOME PAGE</Link></button>
            </div>
        </div>
        
    )
}

export default Final