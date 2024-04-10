import { RoundedButton } from "@/components";
import { ReactNode } from "react";

type MainButtonProps = {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	href?: string;
	className?: string;
};

const MainButton = ({ children, type, href, className }: MainButtonProps) => {
	return (
		<RoundedButton type={ type } href={ href } className={ `text-black justify-center font-bold hover:scale-105 ${ className }` }>
			{ children }
		</RoundedButton>
	);
};

export default MainButton;
