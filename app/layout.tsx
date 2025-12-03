import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggler'

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
                if (savedColorTheme !== 'neutral') {
                  document.documentElement.classList.add('theme-' + savedColorTheme);
                }
                
                const savedTheme = localStorage.getItem('theme') || 'light';
                if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `
					}}
				/>
			</head>
			<body
				className={`${GeistSans.variable} ${GeistMono.variable} bg-background font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<ThemeToggle />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
