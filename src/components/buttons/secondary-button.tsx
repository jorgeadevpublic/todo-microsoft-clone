import { MainButton } from "@/components";
import { ReactNode } from "react";

type SecondaryButtonProps = {
	children: ReactNode;
	type?: "button" | "submit" | "reset";
	href?: string;
	className?: string;
};

const SecondaryButton = ({ children, type, href, className }: SecondaryButtonProps) => {
	return (
		<MainButton type={ type } href={ href } className={ `text-sm bg-white ${ className }` }>
			{ children }
		</MainButton>
	);
};

export default SecondaryButton;
