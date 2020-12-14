import React from 'react'
import Banner from '../components/Common/Banner'
import Video from '../components/Gallery/Video'

function VideoGallery() {
    return (
      <div id="main">
        <Banner title="Video Gallery" bread="Video Gallery" />
        <Video />
      </div>
    );
}

export default VideoGallery
