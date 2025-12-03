import { Plus } from 'lucide-react'
import type React from 'react'

const Section = ({
	className,
	id,
	crosses,
	crossesOffset,
	customPaddings,
	children
}: {
	className: string
	id: string
	crosses?: boolean
	crossesOffset: string
	customPaddings: boolean
	children: React.ReactNode
}) => {
	return (
		<div
			id={id}
			className={`
      relative
      ${customPaddings || `py-10 lg:py-16  ${crosses ? '' : ''}`}
      ${className || ' '}`}
		>
			{children}

			<div className="hidden absolute top-0 left-5 w-px h-[calc(100%+30px)] dark:bg-[#26242C] bg-stone-200  pointer-events-none lg:block lg:left-16 xl:left-16" />
			<div className="hidden absolute top-0 right-5 w-px h-[calc(100%+30px)]  dark:bg-[#26242C] bg-stone-200  pointer-events-none lg:block lg:right-14 xl:right-14" />

			{crosses && (
				<>
					<Plus
						className={`hidden absolute -top-1.25 h-6 w-6 ${
							crossesOffset && crossesOffset
						} pointer-events-none lg:block lg:left-[3.275rem] text-neutral-300 dark:text-neutral-600 translate-y-[.5px]`}
					/>

					<Plus
						className={`hidden absolute -top-1.25 h-6 w-6 right-[1.4625rem] ${
							crossesOffset && crossesOffset
						} pointer-events-none lg:block lg:right-[2.7750rem] text-neutral-300 dark:text-neutral-600 translate-y-[.5px]`}
					/>
				</>
			)}
		</div>
	)
}

export default Section
