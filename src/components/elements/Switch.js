import React,{useState} from "react";
import classNames from "classnames";

//component
import FormLabel from "./FormLabel";
import FormHint from "./FormHint";

const Switch = ({
  id,
  item__classname,
  formLabel,
  formLabel__classname,
  indicator,
  indicator__classname,
  formWrap__classname,
  formHint,
  formHint__classname,
  checked,
  ...rest
}) => {
  const [isOn, setOn] = useState(checked)
  const classes = classNames("form-check form-switch");
  const toggleOn =() => {
    setOn(!isOn)
  }
  return (
    <>
      <div key={id} className={classNames(`d-flex justify-content-between align-items-center ${item__classname}`)}>
        {formLabel && (
          <FormLabel
            formLabel={formLabel}
            formLabel__classname={formLabel__classname}
            indicator={indicator}
            indicator__classname={indicator && indicator__classname}
          />
        )}
        <div className={formWrap__classname}>
          <div className={classes}>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked" checked={isOn}
              onChange={toggleOn}
              {...rest}
            />
          </div>
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

export default Switch;
