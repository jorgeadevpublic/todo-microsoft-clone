import { ReactNode } from "react";
import Link from "next/link";

type FlatButtonProps = {
	children: ReactNode;
	className?: string;
	href?: string;
	type?: "button" | "submit" | "reset";
};

const FlatButton = ({ children, className, href = "", type }: FlatButtonProps) => {
	const btnClass = `focus:outline-[3px] focus:outline-white whitespace-nowrap ${ className }`;
	
	return (
		href ? (
			<button type={ type } className={ btnClass }>
				{ children }
			</button>
		) : (
			<Link href={ href } className={ className }>
				{ children }
			</Link>
		)
	);
};

export default FlatButton;
