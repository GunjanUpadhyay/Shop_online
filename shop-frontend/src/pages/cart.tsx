import { useEffect, useState } from "react";
import {VscError} from 'react-icons/vsc';
import CartItem from '../components/cart-item';
import Img from '../assets/img1.jpg';
import {Link} from 'react-router-dom';

const cartItems=[
  {
    productId:"iewhfi",
    photo:{Img},
    name:"ksnk",
    price:3000,
    quantity: 40,
    stock:10,
  }
];
const subtotal=4000;
const tax=Math.round(subtotal * 0.18);
const shippingCharges =200;
const total =subtotal +tax+shippingCharges;
const discount=400;

const Cart = () => {
  const [couponCode,setCouponCode]=useState<string>('');
  const [isvalidCouponCode, setIsvalidCouponCode] = useState<boolean>(false);

  
  useEffect(() => {
    const timeOutID= setTimeout(() => {
      if(Math.random()>0.5) setIsvalidCouponCode(true);
      else setIsvalidCouponCode(false);
    }, 1000);
  
    return () => {
      clearTimeout(timeOutID);
      setIsvalidCouponCode(false);
    }
  }, [couponCode]);
  



  return (
    <div className="cart">
      <main>

       {
        cartItems.length >0 ?  
          cartItems.map((i,idx)=>(
            <CartItem key={idx} cartItem={i} />
          )) : 
          (<h1>No Item Added</h1>)

       }

      </main>

      
      <aside>
      <p>Subtotal : $$${subtotal}</p>
      <p>Shipping Charges : $$${shippingCharges}</p>
      <p>Tax : $$${tax}</p>
      <p> discount : <em className="red"> - $$${discount}</em></p>
      <p>
        <b>Total : $$${total}</b>
      </p>

      <input type="text" 
      placeholder="Coupon Code"
      value={couponCode}
      onChange={(e)=>setCouponCode(e.target.value)}/>

      {
        couponCode &&
        (
          isvalidCouponCode? (<span className="green">$${discount} off using the <code>{couponCode}</code></span>)
          :
          (
            <span className="red"> Invalid Coupon <VscError/></span>
          )
        )
      }

      {
        cartItems.length>0 && <Link to='/shipping'>Checkout</Link>
      }
      </aside>
    </div>
  )
}

export default Cart