import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axiosInstance from '../../core/api/axiosInstance';
import { TodosInterface } from '../../core/interfaces/todosInterface';
const getTodos = async () => {
	const todos = await axiosInstance
		.get('https://jsonplaceholder.typicode.com/users/1/todos')
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	return todos;
};
const Home = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [todos, setTodos] = useState<TodosInterface[]>([]);
	useEffect(() => {
		getTodos().then((res) => {
			console.log(res);
			
			setTodos(res);
		});
	}, []);
	return loading ? (
		<>loading ...</>
	) : (
		<>
			{todos  && todos.map((todo) => {
				return <Todo todo={todo} key={todo.id} />;
			})}
		</>
	);
};

const Todo = ({ todo }:{todo:TodosInterface}) => {
	return (
		<>
			<div className={`border rounded-md m-2 ${todo.completed? "border-green-300":"border-red-400"}`}>
				<h3>{todo.title}</h3>
				<p>{todo.userId}</p>
			</div>
		</>
	);
};

export default Home;
