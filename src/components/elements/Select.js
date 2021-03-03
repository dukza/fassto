import React from "react";
import classNames from "classnames";

//component
import FormLabel from "./FormLabel";
import FormHint from "./FormHint";

const Select = ({
  item__classname,
  formLabel,
  formLabel__classname,
  indicator,
  indicator__classname,
  size,
  status,
  value,
  formWrap__classname,
  formHint,
  formHint__classname,
  children
}) => {
  const classes = classNames("form-select", size && size, status && status);

  return (
    <>
      <div className={`d-flex justify-content-between align-items-center ${item__classname && item__classname}`}>
        {formLabel && (
          <FormLabel
            formLabel={formLabel}
            formLabel__classname={formLabel__classname}
            indicator
            indicator__classname={indicator && indicator__classname}
          />
        )}
        <div className={formWrap__classname}>
          <select value={value} className={classes}>
            {children}
          </select>
        </div>
      </div>
      {formHint && (
        <FormHint formHint__classname={formHint__classname}>
          {formHint}
        </FormHint>
      )}
    </>
  );
};
export default Select;