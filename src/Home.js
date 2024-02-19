import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<div className="text-center m-[50px] p-[20px] border-[2px] border-[solid] border-[#ccc] rounded-[10px] bg-[#fff] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)]">
				<h1 className="text-[20px] text-[#e7475d] mb-[10px] font-bold">
					Hello there, this is Yahia :")
				</h1>
				<p className="max-w-[500px] text-center">
					Here you can find my attempts to apply what I
					learned while studying React Hooks.
				</p>
			</div>

			<div className=" display: flex justify-content: space-around flex-flow: wrap ">
				<Link to={"/SprintTasks"}>
					<div class="px-[16px] py-[10px] mx-[0] my-[10px] border-b-[1px] border-b-[#fafafa] hover:shadow-[1px_1px_60px_rgba(0,0,0,0.342)] ">
						<div class="text-[20px] text-[#e7475d] mb-[8px] font-semibold">
							<h1>Sptint Tasks</h1>
						</div>
						<div class="text-center px-[10px] py-[50px] bg-gray-100 text-[#130505] ">
							<p className="font-medium">
								Try to insert React Usestate hook into a
								simple interactive page that manage adding
								and deleting tasks
							</p>
						</div>
					</div>
				</Link>

				<div class="px-[16px] py-[10px] mx-[0] my-[10px] border-b-[1px] border-b-[#fafafa] hover:shadow-[1px_1px_60px_rgba(0,0,0,0.342)] ">
					<div class="text-[20px] text-[#e7475d] mb-[8px] font-semibold">
						<h1>Lorem, ipsum</h1>
					</div>
					<div class="text-center px-[10px] py-[50px] bg-gray-100 text-[#130505]">
						<p>
							Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Culpa, recusandae!
						</p>
					</div>
				</div>
			</div>
			<div className=" display: flex justify-content: space-around flex-flow: wrap ">
				<div class="px-[16px] py-[10px] mx-[0] my-[10px] border-b-[1px] border-b-[#fafafa] hover:shadow-[1px_1px_60px_rgba(0,0,0,0.342)]">
					<div class="text-[20px] text-[#e7475d] mb-[8px] font-semibold">
						<h1>Vue</h1>
					</div>
					<div class="text-center px-[10px] py-[50px] bg-gray-100 text-[#130505]">
						<p>
							Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Culpa, recusandae!
						</p>
					</div>
				</div>

				<div class="px-[16px] py-[10px] mx-[0] my-[10px] border-b-[1px] border-b-[#fafafa] hover:shadow-[1px_1px_60px_rgba(0,0,0,0.342)]">
					<div class="text-[20px] text-[#e7475d] mb-[8px] font-semibold">
						<h1>Vue</h1>
					</div>
					<div class="text-center px-[10px] py-[50px] bg-gray-100 text-[#130505]">
						<p>
							Lorem, ipsum dolor sit amet consectetur
							adipisicing elit. Culpa, recusandae!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
