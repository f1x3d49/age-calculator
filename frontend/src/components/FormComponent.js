import React from "react";

const FormComponent = () => {
  return (
    <div className="flex">
      <form>
        <label className="block text-secondsgrey tracking-widest text-sm font-bold mb-2">
          DAY
        </label>
        <input
          type="text"
          required
          placeholder="DD"
          className="appearance-none w-28 h-12 rounded-md"
        />

        <label>MONTH</label>
        <input type="text" required placeholder="MM" />

        <label>YEAR</label>
        <input type="text" required placeholder="YY" />
      </form>
    </div>
  );
};

export default FormComponent;
