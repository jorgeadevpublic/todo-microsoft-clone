import { ReactNode } from "react";
import { FlatButton } from "@/components";

type CircularButtonProps = {
	children: ReactNode;
	className?: string;
	href?: string;
	type?: "button" | "submit" | "reset";
};

const CircularButton = ({ children, className, href, type }: CircularButtonProps) => {
	return (
		<FlatButton
			type={ type }
			href={ href }
			className={ `flex rounded-[50%] aspect-square items-center justify-center ${ className }` }
		>
			{ children }
		</FlatButton>
	);
};

export default CircularButton;
