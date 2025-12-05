import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

export const metadata: Metadata = {
	title: 'Next Shadcn Admin',
	description: 'An Admin Dashboard Template with Next.js 16 and Shadcn UI'
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
              try {
                const savedColorTheme = localStorage.getItem('color-theme') || 'neutral';
								const theme = localStorage.getItem('theme') || 'light';
                const isDark = theme === 'dark' || 
                     (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                const classes = [];
                if (colorTheme !== 'neutral') classes.push('theme-' + colorTheme);
								if (isDark) classes.push('dark');
								if (classes.length) document.documentElement.classList.add(...classes);
              } catch (_) {}
            `
					}}
				/>
			</head>
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
