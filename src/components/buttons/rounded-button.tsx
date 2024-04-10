import { FlatButton } from "@/components";
import { ReactNode } from "react";

type RoundedButtonProps = {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	href?: string;
	className?: string;
};

const RoundedButton = ({ children, type, href, className }: RoundedButtonProps) => {
	return (
		<FlatButton type={ type } href={ href } className={ `rounded-3xl ${ className }` }>
			{ children }
		</FlatButton>
	);
};

export default RoundedButton;
