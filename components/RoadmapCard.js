import React from 'react';

const RoadmapCard = ({id, title, text}) => {
    return ( 
        <div className="bg-bg_secondary p-8 mb-8 w-3/4">
            <div className="flex">
                <p className="text-accent font-bold">{id}</p>
                <h3 className="text-accent font-bold ml-4">{title}</h3>
            </div>
            <p className="mt-4 ml-4 text-text_secondary">
                {text}
            </p>
        </div>
     );
}
 
export default RoadmapCard;