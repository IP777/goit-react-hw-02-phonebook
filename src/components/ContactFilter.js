import React from "react";

const ContactFilter = ({ value, onChangeFilter }) => (
	<input
		type="text"
		value={value}
		onChange={onChangeFilter}
		placeholder="Search something...."
	/>
);

export default ContactFilter;
