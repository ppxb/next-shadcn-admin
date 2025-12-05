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

import { buttonVariants } from '@/components/button'
import { LayoutBody } from '@/components/layout'
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
import { ThemeToggle } from '@/components/theme-toggler'
import { cn } from '@/lib/utils'

export default function DashboardLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
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

				<main className="[grid-area:main] overflow-y-auto p-2">
					<div className="bg-white dark:bg-black rounded-xl">
						<ThemeToggle />
						{children}
					</div>
				</main>
			</LayoutBody>
		</Sidebar>
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
