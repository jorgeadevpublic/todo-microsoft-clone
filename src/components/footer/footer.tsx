import { CircularButton, FooterList } from "@/components";
import { communityLinks, companyLinks, usefulLinks } from "@/config";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/icons";

const Footer = () => {
	return (
		<footer className="flex flex-col gap-9 px-7 pb-10 mt-16">
			<div className="flex justify-between gap-10">
				<div className="flex flex-wrap gap-x-28 gap-y-10">
					<FooterList title="Company" links={ companyLinks } />
					<FooterList title="Comunities" links={ communityLinks } />
					<FooterList title="Useful links" links={ usefulLinks } />
				</div>
				
				<ul className="flex gap-2 items-start">
					<li className="p-2">
						<CircularButton className="w-12 bg-neutral-700 hover:bg-neutral-500 p-3" href="#">
							<TwitterIcon />
						</CircularButton>
					</li>
					<li className="p-2">
						<CircularButton className="w-12 bg-neutral-700 hover:bg-neutral-500 p-3" href="#">
							<InstagramIcon />
						</CircularButton>
					</li>
					<li className="p-2">
						<CircularButton className="w-12 bg-neutral-700 hover:bg-neutral-500 p-3" href="#">
							<FacebookIcon />
						</CircularButton>
					</li>
				</ul>
			</div>
			<hr className="border-t-neutral-600" />
			<p className="text-sm text-neutral-400">&copy; 2024 Spotify by Jorge Gomez</p>
		</footer>
	);
};

export default Footer;
