import * as React from "react";
import {
	List,
	Datagrid,
	Edit,
	Create,
	SimpleForm,
	DateField,
	TextField,
	EditButton,
	TextInput,
	DateInput,
	useRecordContext,
} from "react-admin";
import BookIcon from "@mui/icons-material/Book";
export const PostIcon = BookIcon;

function comp() {
	return (
		<Create title='Create a Post'>
			<SimpleForm>
				<TextInput source='title' />
				<TextInput source='teaser' options={{ multiline: true }} />
				<TextInput multiline source='body' />
				<TextInput label='Publication date' source='published_at' />
				<TextInput source='average_note' />
			</SimpleForm>
		</Create>
	);
}

export default comp;
