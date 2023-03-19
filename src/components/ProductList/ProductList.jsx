
import './productList.css'
import { useState } from 'react'
import Header from '../Header/Header'
import Main from "../Main/Main";
const ProductList = (props) => {
    const products = [
        { id: 1, name: 'King', price: 100, colection: 'Monkey', img: 'https://looksmutable.com/nfts/200px/webp/bayc.webp' },
        { id: 2, name: 'Child ', price: 150, colection: 'Monkey', img: 'https://static1.personality-database.com/profile_images/16cefc9704bd470d85fcb9ea867794dd.png' },
        { id: 3, name: 'Blue', price: 250, colection: 'Monkey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vokUW70EBYf_IWwiKypJgzw37gMW1mVVcUStS4-WrTzQcHzrywfopMckbAU6ISunNCg&usqp=CAU' },
        { id: 4, name: 'Gold', price: 300, colection: 'Monkey', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTRVdU1SgCj_X9z-pcib1GVxFbpEF9P6Kpg&usqp=CAUs' },
        { id: 5, name: 'Dead', price: 250, colection: 'Monkey', img: 'https://iquverse.ru/img/1207263fjxxrjnwqaewpn-jpg.png' },
        { id: 6, name: 'Cool', price: 150, colection: 'Monkey', img: 'https://87.img.avito.st/image/1/1.-r9OW7a5VlZ48pRTNjC345X4UFz6eF6U__hUUvLyXFQ.G1zZgG8HsibH5T9e1Ro_PS2JYTtZhKq3yKoJvjc4kj0' },
        { id: 7, name: 'Work', price: 150, colection: 'Monkey', img: 'https://i.seadn.io/gae/hsWaOw_SOTvLES83mRykzKjaSn2Duzna0HVkXyLbkhekTprkpjeYXhq2bCUc4vy_fKzBEEFbgwSK9z-GAFT2riLM-3t4DI96dYejfQ?auto=format&w=1000' },
        { id: 8, name: 'Raper', price: 100, colection: 'Monkey', img: 'https://i.pinimg.com/736x/b1/b3/27/b1b327c4fb6945c9b828ea665a9e96d7.jpg' },
        { id: 9, name: 'Pink', price: 200, colection: 'Monkey', img: 'https://www.themonthly.com.au/sites/default/files/styles/featured_essay/public/Cooke_0322_1140x700.jpg?itok=HlTQ0rju' },
        { id: 10, name: 'Brow', price: 100, colection: 'Monkey', img: 'https://images.wsj.net/im-491396?width=700&height=700' },
        { id: 11, name: 'Gold', price: 100, colection: 'Monkey', img: 'https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg' },
        { id: 12, name: 'Caper', price: 100, colection: 'Monkey', img: 'https://images.livemint.com/img/2022/08/18/1600x900/GoldenFurBoredApeNFT_1660822663931_1660822664058_1660822664058.JPG' },






    ]
    let [items, setItems] = useState([])
    const [showCard, setShowCard] = useState(false);
    const [showBalance, setShowBalance] = useState(false)
    const [showAddMoney, setShowAddMoney] = useState(false)

    const [count, setCount] = useState(0)
    const addToCart = (product) => {
        setItems([...items, product])
        console.log(items)

    }

    const removeFromCart = (product) => {

        let deleteCard = items.filter(item => item.id != product.id);
        setItems(deleteCard)


    }

    let totalPrice = items.reduce((acc, current) => acc + current.price, 0);



    function handleCardDisplay() {
        setShowCard(!showCard);
        setShowBalance(false)
    }



    function showBalanceDisplay() {
        setShowBalance(!showBalance)
        setShowCard(false);
        setShowAddMoney(false)
    }


    function showAddMoneyDisplay() {
        setShowAddMoney(!showAddMoney)
        setShowCard(false);
        setShowBalance(false)

    }
    function hideBalanceDisplay() {

        setShowAddMoney(false)
    }
    function minusCount() {
        setCount(count - 10)

    }
    function Count() {
        setCount(count + 10)

    }









    return (

        <div className="ProductList" >

            {/* components */}

            <Header handleCardDisplay={handleCardDisplay} showBalanceDisplay={showBalanceDisplay} />

            <Main />




            <h1>Nft products</h1>


            {/* ProductContainer */}


            <div className='ProductContainer'>
                {products.map(product =>
                    <div key={product.id} className="ProductCard">
                        <img src={product.img} alt="" />

                        <div className='ProductText'>


                            <p className='name'> <span>name: </span>{product.name}</p>
                            <p className='colection'> <span>collection: </span> {product.colection}</p>
                            <p className='price'> <span>price:</span>   {product.price}$</p>

                        </div>
                        <button onClick={() => addToCart(product)} className="addBtn">Add to cart</button>

                    </div>
                )}
            </div>


            {/* Card*/}



            {showCard &&




                <div className="card">
                    <h2>Cart</h2>



                    {items.length === 0 ? (<p>Your cart is empyty</p>) :
                        (

                            <div >
                                {items.map((item) => {
                                    return (

                                        <p key={item.id} className="CartVal">
                                            <img src={item.img} alt="" className='cart__img' />
                                            <div className='CartText'>

                                                <p className='name'> <span>name: </span>    {item.name}</p>
                                                <p className='colection coltext'> <span>collection:</span>   {item.colection}$</p>
                                                <p className='price '> <span>price:</span>   {item.price}$</p>
                                            </div>

                                            <button onClick={() => removeFromCart(item)} className='removeBtn'>Delete</button>

                                        </p>

                                    )
                                })}
                                <p>   {`total price: ${totalPrice}$`}</p>


                            </div>
                        )}






                </div>


            }




            {/* showBalance */}

            {showBalance &&
                <div className="Wallet">
                    <h1 className='WalletText'>Your balance</h1>
                    <p className='WalletP'>{count}$</p>
                    <button className='WalletBtn' onClick={() => showAddMoneyDisplay()}>Add money</button>
                </div>
            }


            {/*  Add money*/}

            {showAddMoney &&
                <div className="AddMoney">

                    <h1 className='addMoneyText'>Replenish the balance</h1>

                    <div className="AddMoneyContainer">
                        <button className='AddMoneyBtn' onClick={() => minusCount()}>-</button>
                        <h4>{count}</h4>
                        <button className='AddMoneyBtn' onClick={() => Count()}>+</button>
                    </div>
                    <button className='AddMoneyToBalance' onClick={() => hideBalanceDisplay()}>Replenish the balance</button>



                </div>


            }
















        </div>




    )
}
export default ProductList