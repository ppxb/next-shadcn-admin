'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { useColorTheme } from '@/components/theme-provider'

const colorThemes = [
	{ name: 'Neutral', value: 'neutral', color: 'bg-gray-500' },
	{ name: 'Blue', value: 'blue', color: 'bg-blue-500' },
	{ name: 'Green', value: 'green', color: 'bg-green-500' },
	{ name: 'Purple', value: 'purple', color: 'bg-purple-500' },
	{ name: 'Orange', value: 'orange', color: 'bg-orange-500' }
] as const

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const { colorTheme, setColorTheme } = useColorTheme()

	return (
		<div className="fixed top-4 right-4 z-50">
			<div className="flex flex-col gap-3 bg-card border border-border rounded-xl p-4 shadow-xl backdrop-blur-sm">
				<div className="flex items-center gap-2 pb-3 border-b border-border">
					<span className="text-xs font-medium text-muted-foreground mr-2">
						Mode:
					</span>
					<button
						type="button"
						onClick={() => setTheme('light')}
						className={`
              p-2 rounded-lg text-sm font-medium transition-all
              ${
								theme === 'light'
									? 'bg-primary text-primary-foreground shadow-md'
									: 'bg-secondary text-secondary-foreground hover:bg-accent'
							}
            `}
						title="Light Mode"
					>
						<Sun className="w-4 h-4" />
					</button>
					<button
						type="button"
						onClick={() => setTheme('dark')}
						className={`
              p-2 rounded-lg text-sm font-medium transition-all
              ${
								theme === 'dark'
									? 'bg-primary text-primary-foreground shadow-md'
									: 'bg-secondary text-secondary-foreground hover:bg-accent'
							}
            `}
						title="Dark Mode"
					>
						<Moon className="w-4 h-4" />
					</button>
				</div>

				<div>
					<span className="text-xs font-medium text-muted-foreground mb-2 block">
						Color Theme:
					</span>
					<div className="flex flex-wrap gap-2">
						{colorThemes.map(ct => (
							<button
								type="button"
								key={ct.value}
								onClick={() => setColorTheme(ct.value as any)}
								className={`
                  px-3 py-2 rounded-lg text-xs font-medium transition-all
                  ${
										colorTheme === ct.value
											? 'bg-primary text-primary-foreground shadow-md'
											: 'bg-secondary text-secondary-foreground hover:bg-accent'
									}
                `}
								title={ct.name}
							>
								<div className="flex items-center gap-2">
									<div
										className={`w-2 h-2 rounded-full ${ct.color} shadow-sm`}
									/>
									<span>{ct.name}</span>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
