import React, { useContext } from 'react';
// import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;




  const handlePaymentSuccess = (data) => {
    // if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      // console.log(data);
      console.log(newOrder);
      addNewOrder(newOrder);
      history.push('/checkout/success')
    // }
  }



  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <button type="button" onClick={data => handlePaymentSuccess(data)}>
            
            PAGAR
          </button>
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;