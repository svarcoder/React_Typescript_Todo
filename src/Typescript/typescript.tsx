export interface todoProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

export interface todoModelProps {
	id: number;
	todo: string;
	isDone: boolean;
}

export interface todoShowProps {
	todoos: todoModelProps[];
	setTodoos: React.Dispatch<React.SetStateAction<todoModelProps[]>>;
}

export interface todoSingleProps {
	todo: todoModelProps;
	key: any;
	todoos: todoModelProps[];
	setTodoos: React.Dispatch<React.SetStateAction<todoModelProps[]>>;
}
