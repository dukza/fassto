import React, { Children } from "react";
import classNames from "classnames";

//component
import FormLabel from "./FormLabel";
import FormHint from "./FormHint";

const Button = ({
  id,
  tag,
  size,
  state,
  item__classname,
  formLabel,
  formLabel__classname,
  indicator,
  indicator__classname,
  children,
  formHint,
  formHint__classname,
  status
}) => {
  const classes = classNames(
    "btn", "border",
    size && size,
    state && state
  );
  const Component = tag;
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
        <Component className={classes} disabled={status}>{children}</Component>
      </div>
      {formHint && (
        <FormHint formHint__classname={formHint__classname}>
          {formHint}
        </FormHint>
      )}
    </>
  );
};

export default Button;
