import PropTypes from 'prop-types'
import React from 'react'

import thumb01 from '../assets/images/thumbs/catapult.jpg'
import thumb02 from '../assets/images/thumbs/choose-wisely.jpg'
import thumb03 from '../assets/images/thumbs/briefd.jpg'
import thumb04 from '../assets/images/thumbs/ratio.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Catapult',
    description: 'B2B Application, Website',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'Choose Wisely',
    description: 'Website, Dashboards, Embedded forms, Internationalisation',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Briefd',
    description: 'Underwear subscriptions startup, Website, Brand, Packaging',
  },
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'Ratio',
    description: 'Website, Dashboards, Leadership',
  },
]

const Gallery = () => {
  return (
    <div className="row">
      {DEFAULT_IMAGES.map((obj, i) => {
        return (
          <article className="6u 12u$(xsmall) work-item" key={i}>
            <div className="image fit thumb">
              <img alt={obj.caption} src={obj.thumbnail} />
            </div>
            <h3>{obj.caption}</h3>
            <p>{obj.description}</p>
          </article>
        )
      })}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
