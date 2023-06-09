import * as React from "react";
import { todoSingleProps } from "../../Typescript/typescript";
import { TodoSingle, TodoSingleTest, Icon } from "./style";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";
import { IoIosDoneAll } from "react-icons/io";

const SingleTodo: React.FC<todoSingleProps> = (props) => {
	const [edit, setEdit] = React.useState<boolean>(false);
	const [editTodo, setEditTodo] = React.useState<string>(props.todo.todo);

	const handleDone = (id: number) => {
		props.setTodoos(
			props.todoos.map((item) =>
				item.id === id ? { ...item, isDone: !props.todo.isDone } : props.todo
			)
		);
	};

	const handleDelete = (id: number) => {
		props.setTodoos(props.todoos.filter((item) => item.id !== id));
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		props.setTodoos(
			props.todoos.map((item) =>
				item.id === id ? { ...item, todo: editTodo } : props.todo
			)
		);
		setEdit(false);
		setEditTodo("");
	};

	return (
		<>
			<TodoSingle>
				<TodoSingleTest>
					{edit ? (
						<>
							<input
								type='text'
								value={editTodo}
								onChange={(e) => setEditTodo(e.target.value)}
							/>

							<IoIosDoneAll onClick={(e) => handleEdit(e, props.todo.id)} />
						</>
					) : props.todo.isDone ? (
						<s>{props.todo.todo}</s>
					) : (
						props.todo.todo
					)}
				</TodoSingleTest>
				<Icon>
					<AiFillEdit
						onClick={() => {
							if (!edit && !props.todo.isDone) {
								setEdit(!edit);
							}
						}}
					/>
				</Icon>
				<Icon>
					<RiDeleteBin6Line onClick={() => handleDelete(props.todo.id)} />
				</Icon>
				<Icon>
					<IoMdDoneAll onClick={() => handleDone(props.todo.id)} />
				</Icon>
			</TodoSingle>
		</>
	);
};

export default SingleTodo;
