import { Navbar, Sidebar, SectionContainer, Footer } from "@/components";
import { BottomAside } from "@/components/aside";

export default function Home() {
	return (
		<div className="h-screen min-w-[50rem] grid overflow-hidden grid-cols-[min-content_auto] gap-y-2 p-2 bg-black">
			<Sidebar/>
			
			<SectionContainer className="overflow-auto relative bg-local bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-900">
				<header className="sticky top-0 px-7 py-5 bg-[hsla(0,0%,7%,0.7)] mb-[-4rem] z-50">
					<Navbar/>
				</header>
				
				<main className="relative flex-1 overflow-y-auto focus:outline-none">
					{/*<div className="py-6">*/}
					{/*	<div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">*/}
					{/*		<h1 className="text-lg text-neutral-600">Here is where you put your stuff</h1>*/}
					{/*	</div>*/}
					{/*	<div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">*/}
					{/*		<div className="py-4">*/}
					{/*			<div className="rounded-lg bg-neutral-50 h-96"></div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</main>
				
				<Footer/>
			</SectionContainer>
			
			<BottomAside/>
		</div>
	);
}
