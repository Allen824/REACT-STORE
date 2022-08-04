import {useSelector, useDispatch} from 'react-redux'
import { decCount, moneyDec} from '../redux/actions/productActions'
import { Link } from 'react-router-dom'
import Popup from './Popup'
import {useState, React} from 'react'

var message = ""
function Items() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.fruits)
    const money = useSelector(state => state.money)
    const [openPop, setOpenPop] = useState(false);

    function inStock(num) {
        if(num > 0) {
            return num + " In Stock"
        }
        else {
            return "OUT OF ORDER"

            
        }
    }

    function stockCheck(count) {
        if(count <= 0) {
            return true
        }
        else {
            return false 
        }
    }

    function moneyCheck(price) {
        if(money - price < 0) {
            return true
        }
        else {
            return false
        }
    }

    

    return (
        <div className="ItemList">
            <div className='Info'>
                <div>Money: ${money}.00</div>   
            </div>
            <div className='ViewCart'><button className='PageButton'><Link to="/cart">VIEW CART</Link></button></div>
            <div className='Section'>
                <div>ITEM</div>
                <div>STOCK</div>
                <div>PRICE</div>
                <div>CART</div>
            </div>
            <div className='Box'> 
                <div>{openPop && <Popup closePop={setOpenPop} message={message} />}</div>
            </div>
            {counter.map((item, i) => (
                <div key={item.name}>
                    <div className='Section'>
                    <div>{item.name}</div>
                    <div>{inStock(item.count)}</div>
                    <div>${item.price}.00</div>
                    <div className={"button" + i}><button onClick={() => {
                        const stockError = stockCheck(item.count) 
                        const moneyError = moneyCheck(item.price)
                        if(stockError === false && moneyError === false) {
                            dispatch(moneyDec(item.price))
                            dispatch(decCount(i, money)) 
                        }
                        else if(stockError === true) {
                            message = 'Error, item "' + item.name + '" is out of stock' 
                            setOpenPop(true)
                        }
                        else if(moneyError === true) {
                            message = 'Error, you do not have enough money for "' + item.name + '"' 
                            setOpenPop(true)
                        }

                    }}>ADD TO CART</button></div></div>
                </div>
                
            ))}
            <div className="AppInfo"><div>PROGRAM INFO:</div>
                <p> This program simulates a website where the user can buy items
                    using a set amount of money. Items are first added to the cart before 
                    they are purchased. The cart can be checked at any time and when the user is 
                    ready to purchase the items, they can confirm it or if they want to continue shopping, they 
                    can return to the item selection screen. The user can return any item in their cart that have previously 
                    added before they checkout.</p>
                    
                   <p>If an item is out of stock the user will not be able to purchase it. The item will not be
                    added to the cart and their money will not be reduced. If the user does not have enough money for an item, 
                    they will not be able to add it their cart and they will not have their money reduced.</p>
            </div>
        </div>
    )
}
export default Items