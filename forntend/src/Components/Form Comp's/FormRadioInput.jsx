import React from "react";

function FormRadioInput(props) {
	return (
		<div class="RadioInputs">
			<h6>{props.name}</h6>
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name={props.name}
					id="inlineRadio1"
					value="1"
				/>
				<label class="form-check-label" for="inlineRadio1">
					Yes
				</label>
			</div>
			<div class="form-check form-check-inline">
				<input
					class="form-check-input"
					type="radio"
					name={props.name}
					id="inlineRadio2"
					value="0"
				/>
				<label class="form-check-label" for="inlineRadio2">
					No
				</label>
			</div>
		</div>
	);
}

export default FormRadioInput;
