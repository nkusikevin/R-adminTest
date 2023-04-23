import React from "react";
import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	EditButton,
} from "react-admin";

const PostList = (props: any) => (
	<List {...props}>
		<Datagrid>
			<TextField source='id' />
			<ReferenceField source='userId' reference='users'>
				<TextField source='name' />
			</ReferenceField>

			<TextField source='title' />

			<EditButton />
		</Datagrid>
	</List>
);

export { PostList };
export default PostList;
