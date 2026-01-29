'use client'

import { ChartAreaInteractive } from './_components/chart-area-interactive'
import { SectionCards } from './_components/section-cards'

export default function Dashboard() {
	return (
		<div className="min-h-screen flex flex-1 flex-col">
			<div className="@container/main flex flex-1 flex-col gap-2">
				<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<SectionCards />
					<div className="px-4 lg:px-6 overflow-hidden">
						<ChartAreaInteractive />
					</div>
				</div>
			</div>
		</div>
	)
}
