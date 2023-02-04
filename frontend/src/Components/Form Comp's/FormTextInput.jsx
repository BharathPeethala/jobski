import React from "react";

function FormTextInput(props) {
	return (
		<div className="TextInputs">
			<label for="exampleFormControlInput1">{props.name}</label>
			<input
				type="text"
				class="form-control"
				id={props.name}
				placeholder={props.range}
				name={props.name}
				onChange={props.onChange}
				required
			/>
		</div>
	);
}

export default FormTextInput;
