import Image from 'next/image'
import Link from 'next/link'

import Section from '@/components/section'

export default function NotFound() {
	return (
		<div className="h-full relative overflow-hidden">
			<Section
				className="mb-1 h-[92.3vh] overflow-y-hidden"
				crosses
				crossesOffset="lg:translate-y-[5.25rem]"
				customPaddings
				id="404"
			>
				<div className="relative flex flex-col h-full items-center justify-center dark:bg-black bg-white text-black dark:text-white">
					<div className="relative mb-8">
						<Image
							className="dark:invert"
							src="/next.svg"
							alt="Next.js logo"
							width={100}
							height={20}
							priority
						/>
					</div>
					<h1 className="text-8xl font-normal">404</h1>
					<p className="text-sm mb-8">Need help? Visit the docs</p>
					<div className="flex flex-col items-center gap-6">
						<Link
							href="/"
							className="hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border-2 border-black bg-white px-4 py-1.5 text-sm uppercase text-black transition duration-200 md:px-8"
						>
							Go to home
						</Link>
					</div>
				</div>
			</Section>
		</div>
	)
}
