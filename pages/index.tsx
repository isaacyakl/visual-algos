import Head from "next/head";

export default function Home() {
	return (
		<div className="min-h-screen min-w-screen text-black bg-amber-50 dark:bg-neutral-900 dark:text-white">
			<Head>
				<title>visualAlgos - Visualizer for common programming algorithms</title>
				<meta name="description" content="A visualizer for common programming algos." />
			</Head>

			<div id="controls" className="max-w-screen-xl mx-auto flex justify-between items-center">
				<div id="description" className="m-10 grow-0">
					<h1 className="text-2xl text-sky-600 font-bold">visualAlgos</h1>
					<p>A visualizer for common programming algos.</p>
				</div>
				<div id="searchContainer" className="m-10 grow">
					<input type="text" name="search" id="search" className="text-black border-2 border-sky-600 rounded p-2 w-full" placeholder="Search algos..." autoComplete="off" />
					<div id="algo-dd" className="w-full"></div>
				</div>
			</div>
			<main className="max-w-screen-xl mx-auto"></main>
		</div>
	);
}
