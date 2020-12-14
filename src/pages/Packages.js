import React from 'react'
import Banner from '../components/Common/Banner'
import Allpackages from '../components/Packages/Allpackages'

function Packages() {
    return (
      <div id="main">
        <Banner title="Packages" bread="Packages" />
        <Allpackages />
      </div>
    );
}

export default Packages
