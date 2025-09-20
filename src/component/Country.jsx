import React, { useState } from "react";

const Country = ({ country, courtryVisitedHandle, handleClickFlag }) => {
  let image = country?.flags?.flags?.png;
  let commonName = country?.name?.common;
  // console.log(country);
  const [visit, setVisit] = useState(false);

  let handleClick = () => {
    setVisit(!visit);
    courtryVisitedHandle(country);
    
  };
let handleClickFlagList=(image)=>{
  console.log(image);
  handleClickFlag(image)
  
}
  return (
    <div
      className={`border-2 rounded-xl p-3 ${
        visit ? `bg-amber-300` : `bg-none`
      }`}
    >
      <h2>{commonName}</h2>
      <img src={image} />
      <p>
        Area : {country.area.area}{" "}
        <span className="text-red-400">
          {country.area.area > 241550 ? "Big Country" : "Small Country"}
        </span>
      </p>
     <div className="button flex gap-0.5">
       <button
        onClick={handleClick}
        className="border-2 p-2 rounded-xl bg-blue-300"
      >
        {visit ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>{handleClickFlagList(image)}}>Add Flag</button>
     </div>
    </div>
  );
};

export default Country;
