import React from 'react';
import PropTypes from 'prop-types'

const RoadmapCard = ({id, title, text}) => {
    return ( 
        <div className="bg-bg_secondary relative p-8 mb-12 opacity-90 max-w-lg shadow-sm">
            <div className="flex">
                <p className="text-accent font-bold lg:text-xl">{id}</p>
                <h3 className="text-accent font-bold ml-4 lg:text-xl">{title}</h3>
            </div>
            <p className="mt-4 ml-4 text-text_secondary lg:text-lg lg:ml-5">
                {text}
            </p>
            {/* <svg className="absolute z-10 w-1/2" xmlns="http://www.w3.org/2000/svg" width="2" height="543.713" viewBox="0 0 2 543.713">
                <path id="card_line" d="M7492,5612.121v543.713" transform="translate(-7491 -5612.121)" fill="none" stroke="#48271c" stroke-width="2"/>
            </svg> */}
        </div>
     );
}

RoadmapCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  }
 
export default RoadmapCard;