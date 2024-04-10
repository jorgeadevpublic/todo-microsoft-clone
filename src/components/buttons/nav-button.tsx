import { CircularButton } from "@/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type NavButtonProps = {
	back?: boolean;
	disabled?: boolean;
};

const NavButton = ({ back, disabled }: NavButtonProps) => {
	return (
		<CircularButton
			className={ `w-8 bg-neutral-950 ${ disabled ? "cursor-not-allowed" : "cursor-pointer" }` }
		>
			{ back
				? (<ChevronLeftIcon className="h-6 w-6" strokeWidth={ 2 } color={ disabled ? "gray" : "white" } />)
				: (<ChevronRightIcon className="h-6 w-6" strokeWidth={ 2 } color={ disabled ? "gray" : "white" } />)
			}
		</CircularButton>
	);
};

export default NavButton;
