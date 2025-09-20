import React, { use } from 'react';

const Countries = ({apiUrl}) => {
    let courtriesData=use(apiUrl);
    let courtries=courtriesData.countries
    // console.log(courtries);

    
    
    return (
        <div>
           <h1 className='text-4xl'>Countries length : {courtries.length}</h1>
        </div>
    );
};

export default Countries;