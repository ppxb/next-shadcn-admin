'use client'

import NextLink from 'next/link'
import { type AnchorHTMLAttributes, forwardRef } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * If the href is an external URL
	 *
	 * automatically determined by default
	 */
	external?: boolean

	/**
	 * Prefetch links, supported on Next.js
	 */
	prefetch?: boolean
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			href = '#',
			// any protocol
			external = href.match(/^\w+:/) ||
				// protocol relative URL
				href.startsWith('//'),
			prefetch,
			children,
			...props
		},
		ref
	) => {
		if (external) {
			return (
				<a
					ref={ref}
					href={href}
					rel="noreferrer noopener"
					target="_blank"
					{...props}
				>
					{children}
				</a>
			)
		}

		return (
			<NextLink ref={ref} href={href} prefetch={prefetch} {...props}>
				{children}
			</NextLink>
		)
	}
)

Link.displayName = 'Link'

export { Link as default }
