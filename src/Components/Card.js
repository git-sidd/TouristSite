
import { useState } from "react";

function Card({id, name, info, image, price,removeTour}) {
  

  const[readmore,setreadmore]=useState(false)  ;
  function readmoreHandler(){
        setreadmore(!readmore);
  }  

  const description = readmore?info:`${info.substring(0, 200)}...`;
  return (
    
      
     <div  className="flex flex-row "> 
         <div className="border max-w-[320px] ">
        <img src={image} className="w-[300px] mt- h-[250px] mx-auto my-auto my-1 object-covered"></img>

        <div className="flex flex-col mx-1 space-y-1 mx-auto my-1">
          <h4 className="text-emerald-600">{price}</h4>
          <h4 className="font-bold">{name}</h4>
          <div className="">{description} 
          <span className="text-sky-600 cursor-pointer" onClick={readmoreHandler}>
            {readmore ?`show less`:`read more`}
          </span>
          </div>
        </div>

        <button className=" mx-14 my-4 rounded  bg-red-300 hover:bg-red-500 border-red-500 border-2 px-2 py-1 hover:border-red-300 " onClick={()=>removeTour(id) }> Not Interested</button>
      </div>
     </div>
  
  );
}
export default Card;
