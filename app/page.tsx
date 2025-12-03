'use client'

import {
	BarChart,
	BookOpen,
	Calendar as CalendarIcon,
	Code,
	ExternalLink,
	Folder,
	Home as HomeIcon,
	Package,
	Settings,
	Sidebar as SidebarIcon,
	Users,
	Wrench
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

import { buttonVariants } from '@/components/button'
import { useSidebar } from '@/components/sidebar/base'
import {
	Sidebar,
	SidebarCollapseTrigger,
	SidebarContent,
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarSeparator,
	SidebarViewport
} from '@/components/sidebar/sidebar'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

export default function Home() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2025, 5, 12),
		to: new Date(2025, 6, 15)
	})

	return (
		<Sidebar defaultOpenLevel={1}>
			<LayoutBody>
				<SidebarContent className="max-md:hidden">
					<div className="flex items-center justify-between p-4 border-b">
						<span className="text-[15px] font-medium in-[.uwu]:hidden max-md:hidden">
							Next Shadcn Admin
						</span>
						<SidebarCollapseTrigger
							className={cn(
								buttonVariants({
									color: 'ghost',
									size: 'icon-sm',
									className: 'rounded-lg'
								})
							)}
						>
							<SidebarIcon />
						</SidebarCollapseTrigger>
					</div>
					<SidebarViewport>
						<SidebarNav />
					</SidebarViewport>
				</SidebarContent>

				<main className="[grid-area:main] flex items-center justify-center font-sans bg-white dark:bg-black">
					<div className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-6 sm:px-16 sm:items-start">
						<Image
							className="dark:invert"
							src="/next.svg"
							alt="Next.js logo"
							width={100}
							height={20}
							priority
						/>
						<Calendar
							mode="range"
							defaultMonth={dateRange?.from}
							selected={dateRange}
							onSelect={setDateRange}
							className="rounded-lg border border-zinc-200 dark:border-zinc-800"
						/>
						<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
							<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
								To get started, edit the page.tsx file.
							</h1>
							<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
								Looking for a starting point or more instructions? Head over to{' '}
								<a
									href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
									className="font-medium text-zinc-950 dark:text-zinc-50"
								>
									Templates
								</a>{' '}
								or the{' '}
								<a
									href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
									className="font-medium text-zinc-950 dark:text-zinc-50"
								>
									Learning
								</a>{' '}
								center.
							</p>
						</div>
						<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
							<a
								className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
								href="https://vercel.com/new"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									className="dark:invert"
									src="/vercel.svg"
									alt="Vercel logomark"
									width={16}
									height={16}
								/>
								Deploy Now
							</a>
							<a
								className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
								href="https://nextjs.org/docs"
								target="_blank"
								rel="noopener noreferrer"
							>
								Documentation
							</a>
						</div>
					</div>
				</main>
			</LayoutBody>
		</Sidebar>
	)
}

function LayoutBody({ children }: { children: React.ReactNode }) {
	const { collapsed } = useSidebar()

	return (
		<div
			className="grid min-h-screen overflow-x-clip transition-[grid-template-columns]"
			data-sidebar-collapsed={collapsed}
			style={
				{
					gridTemplate: `"sidebar header" auto
                       "sidebar main" 1fr / minmax(var(--fd-sidebar-col), auto) 1fr`,
					'--fd-sidebar-width': '268px',
					'--fd-sidebar-col': collapsed ? '0px' : 'var(--fd-sidebar-width)'
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	)
}

function SidebarNav() {
	return (
		<div className="space-y-1">
			<SidebarSeparator>Main</SidebarSeparator>

			<SidebarItem href="/" icon={<HomeIcon />}>
				Home
			</SidebarItem>

			<SidebarItem href="/dashboard" icon={<BarChart />}>
				Dashboard
			</SidebarItem>

			<SidebarItem href="/calendar" icon={<CalendarIcon />}>
				Calendar
			</SidebarItem>

			<SidebarSeparator>Development</SidebarSeparator>

			<SidebarFolder defaultOpen>
				<SidebarFolderLink href="/projects">
					<Folder />
					Projects
				</SidebarFolderLink>
				<SidebarFolderContent>
					<SidebarItem href="/projects/web">Web Applications</SidebarItem>
					<SidebarItem href="/projects/mobile">Mobile Apps</SidebarItem>

					<SidebarFolder>
						<SidebarFolderTrigger>
							<Code />
							Backend Services
						</SidebarFolderTrigger>
						<SidebarFolderContent>
							<SidebarItem href="/projects/backend/api">REST API</SidebarItem>
							<SidebarItem href="/projects/backend/graphql">
								GraphQL
							</SidebarItem>
							<SidebarItem href="/projects/backend/db">Database</SidebarItem>

							<SidebarFolder>
								<SidebarFolderTrigger>
									<Wrench />
									DevOps
								</SidebarFolderTrigger>
								<SidebarFolderContent>
									<SidebarItem href="/projects/backend/devops/ci">
										CI/CD
									</SidebarItem>
									<SidebarItem href="/projects/backend/devops/docker">
										Docker
									</SidebarItem>
									<SidebarItem href="/projects/backend/devops/k8s">
										Kubernetes
									</SidebarItem>
								</SidebarFolderContent>
							</SidebarFolder>
						</SidebarFolderContent>
					</SidebarFolder>

					<SidebarFolder>
						<SidebarFolderTrigger>
							<Package />
							Libraries
						</SidebarFolderTrigger>
						<SidebarFolderContent>
							<SidebarItem href="/projects/libs/ui">UI Components</SidebarItem>
							<SidebarItem href="/projects/libs/utils">Utilities</SidebarItem>
						</SidebarFolderContent>
					</SidebarFolder>
				</SidebarFolderContent>
			</SidebarFolder>

			<SidebarFolder>
				<SidebarFolderTrigger>
					<BookOpen />
					Documentation
				</SidebarFolderTrigger>
				<SidebarFolderContent>
					<SidebarItem href="/docs/getting-started">
						Getting Started
					</SidebarItem>
					<SidebarItem href="/docs/components">Components</SidebarItem>
					<SidebarItem href="/docs/api">API Reference</SidebarItem>
				</SidebarFolderContent>
			</SidebarFolder>

			<SidebarSeparator>Organization</SidebarSeparator>

			<SidebarFolder>
				<SidebarFolderTrigger>
					<Users />
					Team
				</SidebarFolderTrigger>
				<SidebarFolderContent>
					<SidebarItem href="/team/members">Members</SidebarItem>
					<SidebarItem href="/team/roles">Roles & Permissions</SidebarItem>
					<SidebarItem href="/team/invites">Invitations</SidebarItem>
				</SidebarFolderContent>
			</SidebarFolder>

			<SidebarSeparator>Configuration</SidebarSeparator>

			<SidebarItem href="/settings" icon={<Settings />}>
				Settings
			</SidebarItem>

			<SidebarItem
				href="https://nextjs.org/docs"
				external
				icon={<ExternalLink />}
			>
				Next.js Docs
			</SidebarItem>
		</div>
	)
}
