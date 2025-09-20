import React from 'react';

const Country = ({country}) => {
    // console.log(country.cca3.cca3);
    let image=country.flags.flags.png
    let commonName=country.name.common
    // let altText=country.flags.flags.alt
    
    return (
        <div>
            <h2>{commonName}</h2>
            <img className='w-5' src={image} />
        </div>
    );
};

export default Country;