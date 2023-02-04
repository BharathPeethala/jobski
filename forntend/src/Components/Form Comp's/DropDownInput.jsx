import React from "react";

function DropDownInput(props) {
	// var count = 0;
	return (
		<div class="col-auto DropDownInput">
			<h6>{props.name}</h6>
			<select
				class="form-select"
				id="autoSizingSelect"
				onChange={props.onChange}
				name={props.name}
				// ref={(input) => (this.menu = input)}
			>
				{props.array.map((subject) => (
					<option value={subject}>{subject}</option>
				))}
			</select>
		</div>
	);
}

export default DropDownInput;
