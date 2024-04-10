import { FlatButton } from "@/components";

type FooterListProps = {
	title: string;
	links?: string[];
};

const FooterList = ({ title, links }: FooterListProps) => {
	return (
		<ul className="flex flex-col gap-2">
			<li className="font-bold">{ title }</li>
			
			{ links && links.map((link) => (
				<li key={ link }>
					<FlatButton
						href="#"
						className="text-neutral-400 hover:text-white hover:underline hover:underline-offset-2"
					>
						{ link }
					</FlatButton>
				</li>
			)) }
		</ul>
	);
};

export default FooterList;
