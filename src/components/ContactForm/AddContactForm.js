import React, { Component } from "react";
import { validateAll } from "indicative";
//----------------------------
import style from "./AddContactForm.module.css";

const rules = {
	name: "required|string",
	number: "required|email"
};

const messages = {
	"name.required": "Please choose a unique username for your account",
	"number.required": "Enter a valid email address."
};

export default class AddContactForm extends Component {
	state = {
		name: "",
		number: "",
		errors: null
	};

	handleSubmit = evt => {
		evt.preventDefault();
		const { name, number } = this.state;

		this.props.addContact({ name, number });

		// validateAll({ name, number }, rules, messages)
		// 	.then(data => {
		// 		console.log("success: ", data);
		// 	})
		// 	.catch(errors => {
		// 		console.log("error: ", errors);

		// 		const formattedErrors = {};

		// 		errors.forEach(error => {
		// 			formattedErrors[error.field] = error.message;
		// 		});

		// 		console.log(formattedErrors);

		// 		this.setState({
		// 			errors: formattedErrors
		// 		});
		// 	});

		this.reset();
	};

	handleChange = ({ target }) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	reset = () => {
		this.setState({ name: "", number: "" });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<label className={style.title}>
					Name
					<input
						className={style.formInput}
						value={name}
						type="text"
						placeholder="Enter login"
						onChange={this.handleChange}
						name="name"
					/>
				</label>

				<label className={style.title}>
					Number
					<input
						className={style.formInput}
						value={number}
						type="text"
						placeholder="Enter number"
						onChange={this.handleChange}
						name="number"
					/>
				</label>

				<button type="submit">Add contact</button>
			</form>
		);
	}
}
