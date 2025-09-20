import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ apiUrl }) => {
  let courtriesData = use(apiUrl);

  let courtries = courtriesData.countries;

  let [courtryVisited, setCourtryVisited] = useState([]);
  let [countryVisitedFlag, setCourtryVisitedFlag] = useState([]);

  const courtryVisitedHandle = (country) => {
    let newCountryVisited = [...courtryVisited, country];
    setCourtryVisited(newCountryVisited);
    // console.log(courtryVisited);
  };
  const handleClickFlag = (image) => {

    let newCountryVisitedFlag=[...countryVisitedFlag,image]
    setCourtryVisitedFlag(newCountryVisitedFlag)

  };
  return (
    <div>
      <h1 className="text-center font-bold">
        List of courtries visited : {courtryVisited.length}
      </h1>
      <h2 className="text-center font-bold">list of Flags: {countryVisitedFlag.length}</h2>
     {/* container for grid */}

    <div className="grid grid-cols-12 gap-4">



      
      <div className="grid  gap-4 grid-cols-2 col-span-8 md:grid-cols-4">
        {courtries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            courtryVisitedHandle={courtryVisitedHandle}
            handleClickFlag={handleClickFlag}
          ></Country>
        ))}
      </div>

        <div className="grid grid-cols-2 gap-2 col-span-4 border-2">
       <ol>
        {courtryVisited.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

        <ol>
          {
            countryVisitedFlag.map((flag)=> <li><img className="w-[70px] mt-2" src={flag} alt="" /></li>)
          }
        </ol>

     </div>

    </div>


    </div>
  );
};

export default Countries;
