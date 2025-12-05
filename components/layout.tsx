import { ComponentProps } from 'react'

import { useSidebar } from '@/components/sidebar/base'
import { cn } from '@/lib/utils'

export function LayoutHeader(props: ComponentProps<'header'>) {
	return <header {...props}>{props.children}</header>
}

export function LayoutBody({
	className,
	children,
	style,
	...props
}: ComponentProps<'div'>) {
	const { collapsed } = useSidebar()

	return (
		<div
			id="na-layout"
			className={cn(
				'grid transition-[grid-template-columns] overflow-x-clip h-(--fd-docs-height) auto-cols-auto auto-rows-auto [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-sidebar-width:0px] [--na-popover-height:0px]',
				className
			)}
			data-sidebar-collapsed={collapsed}
			style={
				{
					gridTemplate: `"sidebar header" auto
                       "sidebar main" 1fr / minmax(var(--fd-sidebar-col), auto) 1fr`,
					'--fd-sidebar-width': '268px',
					'--fd-sidebar-col': collapsed ? '0px' : 'var(--fd-sidebar-width)',
					...style
				} as object
			}
			{...props}
		>
			{children}
		</div>
	)
}
