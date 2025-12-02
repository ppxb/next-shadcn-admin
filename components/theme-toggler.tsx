'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<div>
			<button onClick={() => setTheme('light')}>Light</button>
			<button onClick={() => setTheme('dark')}>Dark</button>
			<button onClick={() => setTheme('system')}>System</button>
		</div>
	)
}
