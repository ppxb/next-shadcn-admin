'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import {
	type ComponentProps,
	createContext,
	useContext,
	useEffect,
	useState
} from 'react'

type ColorTheme = 'neutral' | 'blue' | 'green' | 'purple' | 'orange'

interface ThemeContextType {
	colorTheme: ColorTheme
	setColorTheme: (theme: ColorTheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useColorTheme() {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useColorTheme must be used within ThemeProvider')
	}
	return context
}

export function ThemeProvider({
	children,
	...props
}: ComponentProps<typeof NextThemesProvider>) {
	const [colorTheme, setColorThemeState] = useState<ColorTheme>('neutral')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		const saved = localStorage.getItem('color-theme') as ColorTheme
		if (saved) {
			setColorThemeState(saved)
			applyColorTheme(saved)
		}
	}, [])

	const applyColorTheme = (theme: ColorTheme) => {
		document.documentElement.classList.remove(
			'theme-blue',
			'theme-green',
			'theme-purple',
			'theme-orange'
		)

		if (theme !== 'neutral') {
			document.documentElement.classList.add(`theme-${theme}`)
		}
	}

	const setColorTheme = (theme: ColorTheme) => {
		setColorThemeState(theme)
		localStorage.setItem('color-theme', theme)
		applyColorTheme(theme)
	}

	if (!mounted) {
		return null
	}

	return (
		<ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			<NextThemesProvider {...props}>{children}</NextThemesProvider>
		</ThemeContext.Provider>
	)
}
