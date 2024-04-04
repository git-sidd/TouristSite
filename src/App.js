import React, { useState } from "react";

import data from "./data";
import Card from "./Components/Card";

const App = () => {
  const [tours, setTour] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTour(newTour);
  }
  if(tours.length===0){
    return(
      <div > 
        <h1 className="text-3xl font-bold flex justify-center border-2xl my-20 border-4 border-blue-900 border-dashed rounded-lg px-6 py-1">No Tours Left</h1>
        <button className="mt-2 border  mx-[480px] bg-gray-500" onClick={()=>setTour(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="overflow-x-hidden relative text-wrap ">
      <div className="text-3xl font-bold flex justify-center">
        <h1 className="border-2xl my-20 border-4 border-blue-900 border-dashed rounded-lg px-6 py-1">Plan with Love</h1>
      </div>
      <div className="flex gap-6  ">
        {tours.map((tour) => {
          return <Card key={tour.id}{...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default App;
