import React from "react";
import classNames from "classnames";

//component
import FormLabel from "./FormLabel";
import FormHint from "./FormHint";
import Button from "./Button";

const Input = ({
  id,
  type,
  item__classname,
  formLabel,
  formLabel__classname,
  indicator,
  indicator__classname,
  formWrap__classname,
  form__side,
  formSide__classname,
  formHint,
  formHint__classname,
  value,
  width,
  size,
  state,
  ...rest
}) => {
  const classes = classNames(
    "form-control",
    state && `border-${state}`,
    width && width,
    size && `form-control-${size}`,
  );
  const formSideS = classNames(
    "btn btn-light m8-l",
    formSide__classname && formSide__classname
  )
  const Component = type === "textarea" ? "textarea" : "input";
  return (
    <>
      <div key={id} className={`d-flex justify-content-between align-items-center ${item__classname}`}>
        {formLabel && (
          <FormLabel
            formLabel={formLabel}
            formLabel__classname={formLabel__classname}
            indicator={indicator}
            indicator__classname={indicator && indicator__classname}
          />
        )}
        <div className={formWrap__classname}>
          <Component value={value} className={classes} {...rest}></Component>
          {form__side && <a className={formSideS}>{form__side}</a>}
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

export default Input;
