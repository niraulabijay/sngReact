import React from 'react'
import Banner from '../components/Common/Banner'
import ResturantSection from '../components/Resturant/ResturantSection'

function Restaurant() {
    return (
      <div>
        <Banner title="Restaurant" bread="Restaurant" />
        <ResturantSection />
      </div>
    );
}

export default Restaurant
