'use client'

import {
	Calendar as CalendarIcon,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	FileText,
	Folder,
	Home as HomeIcon,
	Settings,
	Users
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

import {
	SidebarCollapseTrigger,
	SidebarContent,
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarViewport
} from '@/components/sidebar/base'
import { Calendar } from '@/components/ui/calendar'

export default function Home() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(2025, 5, 12),
		to: new Date(2025, 6, 15)
	})

	return (
		<SidebarProvider defaultOpenLevel={1}>
			<div className="flex min-h-screen bg-zinc-50 dark:bg-black">
				{/* Sidebar */}
				<SidebarContent>
					{({ ref, collapsed }) => (
						<aside
							ref={ref}
							className={`bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300 flex flex-col ${
								collapsed ? 'w-16' : 'w-64'
							}`}
						>
							{/* Sidebar Header */}
							<div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
								{!collapsed && (
									<h2 className="text-lg font-semibold text-black dark:text-zinc-50">
										Navigation
									</h2>
								)}
								<SidebarCollapseTrigger className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors">
									{collapsed ? (
										<ChevronRight
											size={20}
											className="text-zinc-600 dark:text-zinc-400"
										/>
									) : (
										<ChevronLeft
											size={20}
											className="text-zinc-600 dark:text-zinc-400"
										/>
									)}
								</SidebarCollapseTrigger>
							</div>

							{/* Sidebar Content */}
							{!collapsed ? (
								<SidebarViewport>
									<div className="space-y-1">
										<SidebarSeparator className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
											Main Menu
										</SidebarSeparator>

										<SidebarItem
											href="/"
											icon={
												<HomeIcon
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
											}
											className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
										>
											Home
										</SidebarItem>

										<SidebarItem
											href="/dashboard"
											icon={
												<FileText
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
											}
											className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
										>
											Dashboard
										</SidebarItem>

										<SidebarItem
											href="/calendar"
											icon={
												<CalendarIcon
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
											}
											className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
										>
											Calendar
										</SidebarItem>

										<SidebarSeparator className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
											Projects
										</SidebarSeparator>

										<SidebarFolder defaultOpen>
											<SidebarFolderLink
												href="/projects"
												className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
											>
												<Folder
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
												My Projects
											</SidebarFolderLink>
											<SidebarFolderContent>
												<SidebarItem
													href="/projects/web"
													className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
												>
													Web Projects
												</SidebarItem>
												<SidebarItem
													href="/projects/mobile"
													className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
												>
													Mobile Apps
												</SidebarItem>

												<SidebarFolder>
													<SidebarFolderTrigger className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 w-full">
														<Folder
															size={16}
															className="text-zinc-600 dark:text-zinc-400"
														/>
														Backend
													</SidebarFolderTrigger>
													<SidebarFolderContent>
														<SidebarItem
															href="/projects/backend/api"
															className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
														>
															API Service
														</SidebarItem>
														<SidebarItem
															href="/projects/backend/db"
															className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
														>
															Database
														</SidebarItem>
													</SidebarFolderContent>
												</SidebarFolder>
											</SidebarFolderContent>
										</SidebarFolder>

										<SidebarFolder>
											<SidebarFolderTrigger className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 w-full">
												<Users
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
												Team
											</SidebarFolderTrigger>
											<SidebarFolderContent>
												<SidebarItem
													href="/team/members"
													className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
												>
													Members
												</SidebarItem>
												<SidebarItem
													href="/team/roles"
													className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
												>
													Roles
												</SidebarItem>
											</SidebarFolderContent>
										</SidebarFolder>

										<SidebarSeparator className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
											Settings
										</SidebarSeparator>

										<SidebarItem
											href="/settings"
											icon={
												<Settings
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
											}
											className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
										>
											Settings
										</SidebarItem>

										<SidebarItem
											href="https://nextjs.org/docs"
											external
											icon={
												<ExternalLink
													size={18}
													className="text-zinc-600 dark:text-zinc-400"
												/>
											}
											className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors data-[active=true]:bg-zinc-100 data-[active=true]:text-black dark:data-[active=true]:bg-zinc-800 dark:data-[active=true]:text-zinc-50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
										>
											Documentation
										</SidebarItem>
									</div>
								</SidebarViewport>
							) : (
								<div className="flex-1 overflow-y-auto p-4">
									<div className="space-y-2 flex flex-col items-center">
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<HomeIcon
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<FileText
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<CalendarIcon
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<Folder
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<Users
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
										<div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md cursor-pointer">
											<Settings
												size={20}
												className="text-zinc-600 dark:text-zinc-400"
											/>
										</div>
									</div>
								</div>
							)}
						</aside>
					)}
				</SidebarContent>

				{/* Main Content */}
				<div className="flex min-h-screen flex-1 items-center justify-center font-sans">
					<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
								href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
								href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
								target="_blank"
								rel="noopener noreferrer"
							>
								Documentation
							</a>
						</div>
					</main>
				</div>
			</div>
		</SidebarProvider>
	)
}
