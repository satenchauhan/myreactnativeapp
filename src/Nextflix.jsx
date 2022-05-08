import React from 'react';
import Card from './Card';
import MovieData from './MovieData';

function Nextflix(props) {
    return(
        <Card 
            key={ MovieData[0].id}
            movieName={ MovieData[0].movieName}
            movieImg={ MovieData[0].movieImg}
            title={ MovieData[0].title}
            link={ MovieData[0].link}
        />
        
    );
}

export default Nextflix;