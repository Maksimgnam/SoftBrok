// import { useState } from "react"

// import "./Cart.css"
// const Cart = ({ }) => {

//     let [items, setItems] = useState([])
//     const addToCart = (product) => {
//         setItems([...items, product])
//         console.log(items)

//     }

//     const removeFromCart = (product) => {

//         let deleteCard = items.filter(item => item.id != product.id);
//         setItems(deleteCard)


//     }
//     let totalPrice = items.reduce((acc, current) => acc + current.price, 0);
//     return (
//         <div>
//             <h2>Cart</h2>

//             {items.length === 0 ? (<p>Your cart is empyty</p>) :
//                 (
//                     <div>
//                         {items.map((item) => {
//                             return (
//                                 <div key={item.id} className="Cart">
//                                     {item.name} -{item.price}

//                                     <button onClick={() => removeFromCart(item)}>Remove</button>

//                                 </div>
//                             )
//                         })}
//                         {`total price: ${totalPrice}`}
//                     </div>
//                 )}



//             {/* <ProductList addToCart={addToCart} /> */}
//         </div>
//     )





// }
// export default Cart