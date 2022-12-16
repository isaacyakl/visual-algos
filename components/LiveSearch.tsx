import LiveSearchResult from "./LiveSearchResult";

const LiveSearch = () => {
	return (
		<div className="relative">
			<input type="text" name="search" id="search" className="text-black border-2 border-sky-600 rounded p-2 w-full" placeholder="Search algos..." autoComplete="off" autoFocus />
			<div id="algo-dd" className="absolute w-full max-h-[50vh] flex flex-wrap justify-start items-start overflow-y-auto bg-gray-900">
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
				<LiveSearchResult />
			</div>
		</div>
	);
};

export default LiveSearch;
