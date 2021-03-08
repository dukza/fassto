import React from "react";

const FormLabel = ({
  formLabel,
  formLabel__classname,
  indicator,
  indicator__classname
}) => {
  return (
    <>
      <div className={`formLabel ${formLabel__classname && formLabel__classname}`}>
        {formLabel}
        {indicator && <span className={`indicator ${indicator__classname}`}></span>}
      </div>
    </>
  );
};

export default FormLabel;
