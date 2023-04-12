import React, { useContext } from "react";
import { ReactComponent as Arrow } from "../assets/images/icon-arrow.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AgeContext } from "./AgeContext";

const FormComponent = () => {
  const [age, setAge] = useContext(AgeContext);

  //Formik Logics
  const formik = useFormik({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },

    //Form Validation
    validationSchema: Yup.object({
      day: Yup.number()
        .required("This field is required")
        .min(1, "Must be a valid day")
        .max(31, "Must be a valid day"),
      month: Yup.number()
        .required("This field is required")
        .min(1, "Must be a valid month")
        .max(12, "Must be a valid month"),
      year: Yup.number()
        .required("This field is required")
        .min(1900, "Must be a more recent year")
        .max(2023, "Must be in the past"),
    }),

    //Submit Form
    onSubmit: (values, { resetForm }) => {
      setAge(
        calculateAge(
          `${formik.values.month} ${formik.values.day} ${formik.values.year}`
        )
      );
      resetForm({ values: "" });
    },
  });

  // calculating age function
  const calculateAge = (birthday) => {
    let today = new Date(),
      dob = new Date(birthday),
      diff = today.getTime() - dob.getTime(),
      years = Math.floor(diff / 31556736000),
      days_diff = Math.floor((diff % 31556736000) / 86400000),
      months = Math.floor(days_diff / 30.4167),
      days = Math.floor(days_diff % 30.4167);

    return {
      years: years,
      months: months,
      days: days,
    };
  };

  console.log(age);

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <div className="flex gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="day"
            className={`tracking-widest text-xs font-bold mb-2 ${
              formik.touched.day && formik.errors.day
                ? "text-primaryred"
                : "text-secondsgrey"
            }`}
          >
            DAY
          </label>
          <input
            type="text"
            name="day"
            value={formik.values.day}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="DD"
            className={`appearance-none pl-5 w-32 h-14 border border-secondlgrey focus:outline-none rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey ${
              formik.touched.day && formik.errors.day ? "border-primaryred" : ""
            }`}
          />
          <div className="text-xs font-normal italic text-primaryred mt-1">
            {formik.touched.day && formik.errors.day ? formik.errors.day : ""}
          </div>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="month"
            className={`tracking-widest text-xs font-bold mb-2 ${
              formik.touched.month && formik.errors.month
                ? "text-primaryred"
                : "text-secondsgrey"
            }`}
          >
            MONTH
          </label>
          <input
            type="text"
            name="month"
            value={formik.values.month}
            onChange={formik.handleChange}
            placeholder="MM"
            className={`appearance-none pl-5 w-32 h-14 border border-secondlgrey focus:outline-none rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey ${
              formik.touched.month && formik.errors.month
                ? "border-primaryred"
                : ""
            }`}
          />
          <div className="text-xs font-normal italic text-primaryred mt-1">
            {formik.touched.month && formik.errors.month
              ? formik.errors.month
              : ""}
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="year"
            className={`tracking-widest text-xs font-bold mb-2 ${
              formik.touched.year && formik.errors.year
                ? "text-primaryred"
                : "text-secondsgrey"
            }`}
          >
            YEAR
          </label>
          <input
            type="text"
            name="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            placeholder="YYYY"
            className={`block appearance-none pl-5 w-32 h-14 border border-secondlgrey focus:outline-none rounded-md placeholder:text-2xl placeholder:font-bold placeholder:text-secondsgrey ${
              formik.touched.year && formik.errors.year
                ? "border-primaryred"
                : ""
            }`}
          />
          <div className="text-xs font-normal italic text-primaryred mt-1">
            {formik.touched.year && formik.errors.year
              ? formik.errors.year
              : ""}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="border-t-2 w-[32rem] mt-12"></div>
        <button
          type="submit"
          className="flex justify-center items-center bg-primarypurple active:bg-secondoblack rounded-full w-20 h-20 p-5"
        >
          <Arrow />
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
