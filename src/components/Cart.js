import {useSelector, useDispatch} from 'react-redux'
import {useState, React} from 'react'
import { Link } from 'react-router-dom'
import { incCount, moneyInc } from '../redux/actions/productActions'
import Popup from './Popup'

var message = ""
function Cart() {
    const dispatch = useDispatch()
    const itemList = useSelector (state => state.fruits)
    const money = useSelector(state => state.money)
    const balance = useSelector(state => state.initialBalance)
    const totalSpent = balance - money
    const [openPop, setOpenPop] = useState(false);

    function getCount(count, orgCount) {
        return orgCount - count
    }

    return (
        <div>
            <div className='Checkout'>
                <div className='Info'>
                    <div>Total Spent: ${totalSpent}</div>
                    <div>Remaining Money: ${money}</div> 
                </div>
                    <div className='ItemCheckout'>
                        <div>ITEM</div>
                        <div>IN CART</div>
                        <div>REMOVE AN ITEM</div>
                    </div>
                    <div className='Box'> 
                        <div>{openPop && <Popup closePop={setOpenPop} message={message} />}</div>
                    </div>
                    {itemList.map((item, i) => (
                    <><div key={item.name}></div>
                    <div>
                        <div className='ItemCheckout'>
                            <div>{item.name}</div> 
                            <div>Count: {getCount(item.count, item.OriginalCount)}</div> 
                            <div><button onClick={() => {
                            if(getCount(item.count, item.OriginalCount) === 0) {
                                message = "Error, you have no more of this item in your cart"
                                setOpenPop(true)
                            }
                            else {
                                dispatch(incCount(i))
                                dispatch(moneyInc(item.price))
                            }
                            }}>REMOVE ITEM</button></div>    
                        </div>

                    </div></>
                ))}

            </div>
            <div className='FootBar'>
                <button className='PageButton'><Link to="/">CONTINUE SHOPPING</Link></button>
                <button className='PageButton'><Link to="/Final">PURCHASE ITEMS</Link></button>
            </div>
        </div>
    )}
export default Cart