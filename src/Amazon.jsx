import React from 'react';
import Card from './Card';
import MovieData from './MovieData';

function Amazon(props) {
    return(
        <Card 
            key={ MovieData[4].id}
            movieName={ MovieData[4].movieName}
            movieImg={ MovieData[4].movieImg}
            title={ MovieData[4].title}
            link={ MovieData[4].link}
        />
    )
}

export default Amazon;