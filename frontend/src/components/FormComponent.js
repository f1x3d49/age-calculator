import React, { useState, createContext } from "react";
import { ReactComponent as Arrow } from "../assets/images/icon-arrow.svg";

export const BDayContext = createContext();

const FormComponent = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState("");
  const [dayerror, setDError] = useState("");
  const [montherror, setMError] = useState("");
  const [yearerror, setYError] = useState("");

  const generateArray = (start, end) => {
    let arr = [];
    for (start; start <= end; start++) {
      arr.push(start);
    }
    return arr;
  };

  // validate function
  const validate = () => {
    const errors = {};
    const months = generateArray(1, 12);
    const days = generateArray(1, 31);
    const years = generateArray(1900, new Date().getFullYear());

    if (day === "") errors.day = "This field is required";
    if (!days.includes(day)) errors.day = "Must be a valid day";

    if (month === "") errors.month = "This field is required";
    if (!months.includes(month)) errors.month = "Must be a valid month";

    if (year === "") errors.year = "This field is required";
    if (!years.includes(year)) errors.year = "Must be a valid year";
  };

  // calculating age function
  const calculateAge = (birthday) => {
    let today = new Date(),
      dob = new Date(birthday),
      diff = today.getTime() - dob.getTime(),
      years = Math.floor(diff / 31556736000),
      days_diff = Math.floor((diff % 31556736000) / 86400000),
      months = Math.floor(days_diff / 30.4167),
      days = Math.floor(days_diff % 30.4167);

    console.log(`${years} years ${months} months ${days} days`);
    return `${years} years ${months} months ${days} days`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge(calculateAge(`${month} ${day} ${year}`));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-6">
        <div className="flex flex-col">
          <label className="text-secondsgrey tracking-widest text-xs font-bold mb-2">
            DAY
          </label>
          <input
            type="text"
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="DD"
            className="appearance-none pl-5 w-32 h-14 border border-secondlgrey rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondsgrey tracking-widest text-xs font-bold mb-2">
            MONTH
          </label>
          <input
            type="text"
            required
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="MM"
            className=" appearance-none pl-5 w-32 h-14 border border-secondlgrey rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondsgrey tracking-widest text-xs font-bold mb-2">
            YEAR
          </label>
          <input
            type="text"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="YYYY"
            className="block appearance-none pl-5 w-32 h-14 border border-secondlgrey rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey"
          />
        </div>
      </div>
      <div className="flex">
        <div className="border-t-2 w-[32rem] mt-12"></div>
        <button
          type="submit"
          className="flex justify-center items-center bg-primarypurple rounded-full w-20 h-20 p-5"
        >
          <Arrow />
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
