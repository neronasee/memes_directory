import React, { PureComponent } from 'react';
import { Field } from 'redux-form';

class AuthFormField extends PureComponent {
	render(){
		const { label, name, type } = this.props;

		return (
			<Field
				name={name}
				label={label}
				type={type}
				component={field => {
					return (
						<fieldset className="form-group">
							<label>{field.label}</label>
							<input className="form-control" type={field.type} {...field.input}/>
							{field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
						</fieldset>
					)
				}}
			/>
		)
	}
}

export default AuthFormField;
