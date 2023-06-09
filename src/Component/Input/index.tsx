import * as React from "react";
import { todoProps } from "../../Typescript/typescript";
import { Form, Input, Button } from "./style";

const InputComponent: React.FC<todoProps> = (props) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	return (
		<>
			<Form>
				<Input
					type='text'
					ref={inputRef}
					placeholder='Enter a task'
					value={props.todo}
					onChange={(e) => props.setTodo(e.target.value)}
				/>
				<Button
					onClick={(e) => {
						props.handleAdd(e);
						inputRef.current?.blur();
					}}>
					Go
				</Button>
			</Form>
		</>
	);
};

export default InputComponent;
