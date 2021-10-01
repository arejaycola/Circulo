import React from 'react';
import './InputGroup.scss';

type InputGroupProps = {
	id: string;
	label: string;
	type: string;
	required: boolean;
	value: string;
	[x: string]: any;
};

const InputGroup = ({ id, type, label, required, value = '', ...rest }: InputGroupProps) => (
	<div className="input__group">
		<label htmlFor={id}>
			{label}
			<input id={id} type={type} value={value} required={required} {...rest} />
		</label>
	</div>
);

export default InputGroup;
