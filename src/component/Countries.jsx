import React, { use } from 'react';
import Country from './Country';

const Countries = ({apiUrl}) => {
    let courtriesData=use(apiUrl);
    let courtries=courtriesData.countries
    // console.log(courtries);

    
    
    return (
        <div>
          {
            courtries.map( country=> <Country key={country.cca3.cca3} country={country}></Country>)
          }
        </div>
    );
};

export default Countries;