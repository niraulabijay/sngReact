import React from 'react'
import Banner from '../components/Common/Banner'
import CheckoutSection from '../components/Checkout/CheckoutSection'

function Checkout() {
    return (
      <div>
        <Banner title="Checkout" bread="Checkout" />
        <CheckoutSection />
      </div>
    );
}

export default Checkout
