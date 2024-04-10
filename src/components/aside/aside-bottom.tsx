import { SecondaryButton } from "@/components";

const BottomAside = () => {
	return (
		<aside className="col-span-2 flex justify-between items-center bg-gradient-to-r from-accent-1 to-accent-2 px-4 py-3 h-16 rounded-lg">
			<p>
					<span className="block text-sm tracking-wider">
						PREVIEW OF SPOTIFY
					</span>
				Sign up to get unlimited songs and podcasts with occasional ads. No
				credit card needed.
			</p>
			
			<SecondaryButton href="#" className="px-8 py-3">
				Sign up free
			</SecondaryButton>
		</aside>
	);
};

export default BottomAside;
