import React from "react";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';


function TextMaskCustom(props) {
  const { inputRef, mask, ...other } = props;
	
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
    />
  );
}


export default function CustomInput({ ...props }) {

  const {
    labelText,
    id,
    error,
	fullWidth,
	onChange,
    onBlur,
	mask,
	inputProps,
	} = props;
	
  return (
		<FormControl fullWidth={fullWidth}>
			<InputLabel error={(error !== undefined)} htmlFor={id}>{(error || labelText)}</InputLabel>
				{mask && 
					<Input
						id={id}
						onChange={onChange}
						onBlur={onBlur}
						inputComponent={TextMaskCustom}
						inputProps={{
							mask: mask,
						}}
						error={(error !== undefined)}
						{...inputProps}
					/>}
				{!mask && 
					<Input
						id={id}
						onChange={onChange}
						onBlur={onBlur}
						error={(error !== undefined)}
						{...inputProps}
					/>}
		</FormControl>
  );
}
