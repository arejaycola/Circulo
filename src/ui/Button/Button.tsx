import React from 'react';
import './Button.scss';

type ButtonProps = {
	[x: string]: any;
};

const Button = ({ children, ...rest }: ButtonProps) => (
	<button className="button" type="submit" {...rest}>
		{children}
	</button>
);
export default Button;
