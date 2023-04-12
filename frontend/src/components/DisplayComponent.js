import React from "react";
import { useContext } from "react";
import { AgeContext } from "./AgeContext";

const DisplayComponent = () => {
  const [age, setAge] = useContext(AgeContext);

  return (
    <div className="flex flex-col justify-center text-[5rem] leading-tight">
      <div className="flex ">
        {age.years ? (
          <div className="text-primarypurple mr-3">{age.years}</div>
        ) : (
          <div className="text-primarypurple tracking-wider">--</div>
        )}
        <div>years</div>
      </div>
      <div className="flex ">
        {age.months ? (
          <div className="text-primarypurple mr-3">{age.months}</div>
        ) : (
          <div className="text-primarypurple tracking-wider">--</div>
        )}
        <div>months</div>
      </div>
      <div className="flex ">
        {age.months ? (
          <div className="text-primarypurple mr-3">{age.months}</div>
        ) : (
          <div className="text-primarypurple tracking-wider">--</div>
        )}
        <div>days</div>
      </div>
    </div>
  );
};

export default DisplayComponent;
