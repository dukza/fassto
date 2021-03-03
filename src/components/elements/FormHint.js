import React from "react";

const FormHint = ({ formHint__classname, children }) => {
  return (
    <>
      <div className={`font-12 p8-t formHint ${formHint__classname}`}>{children}</div>
    </>
  );
};
export default FormHint;
