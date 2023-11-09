import React from "react";

const SideBar = (props: any) => {

  

  console.log(props.cuisine.data, "In search bar");
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        {props.location.data.map((name: string) => {
          // console.log(name,"name in loop")
          return <p className="font-light text-reg">{name.name}</p>;
        })}
      </div>
      <div className="border-b pb-4 mt-3">
        <h1 className="mb-2">Cuisine</h1>
        {props.cuisine.data.map((name: string) => {
          console.log(name, "name in loop");
          return <p className="font-light text-reg">{name.name}</p>;
        })}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="border w-full text-reg font-light rounded-l p-2">
            $
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2">
            $$
          </button>
          <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
