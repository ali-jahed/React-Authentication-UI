import { FastField } from "formik";
import "./Input.css";

const Input = ({ formik, type, name, label, placeholder }) => {
  return (
    <div className="mb-4 text-end">
      <label
        htmlFor={name}
        className="form-label text-end d-block text-white small fw-medium"
      >
        {label}
      </label>

      <FastField
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`form-control text-end custom-input ${
          formik.touched[name] && formik.errors[name] ? "is-invalid" : ""
        }`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
