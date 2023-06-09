import * as React from "react";
import { Container, Header } from "./style";
import InputComponent from "../Input/index";
import { todoModelProps } from "../../Typescript/typescript";
import ToDoList from "../ToDoList";

const Home: React.FC = (props) => {
	const [todo, setTodo] = React.useState<string>("");

	const [todoos, setTodoos] = React.useState<todoModelProps[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodoos([...todoos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo("");
		}
	};
	console.log(todo);

	return (
		<>
			<Container>
				<Header>ToDo App</Header>
			</Container>
			<InputComponent todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<ToDoList todoos={todoos} setTodoos={setTodoos} />
		</>
	);
};

export default Home;
