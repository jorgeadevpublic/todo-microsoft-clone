import { ReactNode } from "react";

type SectionContainerProps = {
	children: ReactNode;
	className?: string;
};

const SectionContainer = ({ children, className }: SectionContainerProps) => {
	return (
		<div className={ `flex flex-col bg-neutral-900 rounded-lg ${ className }` }>
			{ children }
		</div>
	);
};

export default SectionContainer;
