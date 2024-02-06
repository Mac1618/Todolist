// Components
import { InputData } from '../_components/InputData';
import { ListItems } from '../_components/ListItems';

export default function Home() {
	return (
		<section className=" flex justify-center items-center h-[100vh] w-full bg-gradient-to-b from-blue-400 to-slate-800">
			<div className="flex justify-between flex-col bg-slate-950 w-[40%] h-[50%] rounded-lg shadow-md py-10 px-6">
				<h1 className="text-white font-bold text-lg">TO DO LIST</h1>
				<InputData />
				<ListItems />
			</div>
		</section>
	);
}
