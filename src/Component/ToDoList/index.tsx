import * as React from "react";
import { todoShowProps } from "../../Typescript/typescript";
import SingleTodo from "./singleTodo";
import { Todos } from "./style";

const ToDoList: React.FC<todoShowProps> = (props) => {
	return (
		<>
			<Todos>
				{props?.todoos?.map((item, i) => (
					<SingleTodo
						todo={item}
						key={i}
						todoos={props?.todoos}
						setTodoos={props?.setTodoos}
					/>
				))}
			</Todos>
		</>
	);
};

export default ToDoList;
