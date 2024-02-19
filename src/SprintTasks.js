import { useState } from "react";
import {
	AiOutlinePlus,
	AiOutlineClose,
} from "react-icons/ai";
const SptintTasks = () => {
	const [tasks, setTasks] = useState([]);
	const [input, setInput] = useState("");

	// add tasks
	const addTask = (e) => {
		e.preventDefault();
		const addTask = {
			id: Math.floor(Math.random() * 1000),
			text: input,
			completed: false,
		};
		setTasks([...tasks, addTask]);
		setInput("");
	};

	//delete Tasks
	const deleteTasks = (id) => {
		const filteredTasks = [...tasks].filter(
			(tasks) => tasks.id !== id
		);
		setTasks(filteredTasks);
		console.log("task deleted");
	};
	return (
		<div className="max-w-[400px] m-auto p-4 text-center">
			<div className="container">
				<h1 className="mb-4 font-semibold text-[#e74040]">
					Sprint Tasks
				</h1>

				<form onSubmit={addTask}>
					<div className="relative w-full flex self-center justify-center">
						<AiOutlinePlus className="absolute left-[15px] top-[0] text-[25px] text-[#000000] h-full flex justify-center items-center" />
						<input
							className="border-[2px] border-[solid] border-[#eee] pl-[50px] pr-[10px] py-[5px] text-[18px] leading-[30px] outline-[0] block w-full rounded-[8px]"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter a task"
							type="text"
						/>
					</div>
				</form>

				<div>
					{tasks.map((task) => (
						<div
							className={`border-[2px] border-[solid] border-[#eee] p-[10px] text-[18px] leading-[30px] mx-[0] my-[8px] w-[94%] rounded-[8px] flex items-center justify-between ${
								task.completed ? "completed" : ""
							}`}
						>
							<p className="capitalize">{task.text} </p>
							<AiOutlineClose
								onClick={() => deleteTasks(task.id)}
								className="text-[25px] text-[#f84141]"
							/>
						</div>
					))}
				</div>

				<p className="mx-[0] my-4">
					{tasks < 1
						? "You have no tasks"
						: `Tasks: ${tasks.length}`}
				</p>
			</div>
		</div>
	);
};

export default SptintTasks;
