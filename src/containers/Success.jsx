import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css'

const Success = () => {

  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log(buyer[0].address);
  const location = useGoogleAddress(buyer[0].address);
  console.log(location);
  
  return (
    <div className="Success">
      <div className="Success-content">
        <h3>{`${buyer[0].name}, gracias por tu compra`}</h3>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          {/* <Map data={location} /> */}
        </div>
      </div>
    </div>
    );
}

export default Success