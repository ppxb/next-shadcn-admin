import { useSortable } from '@dnd-kit/sortable'
import { ColumnDef } from '@tanstack/react-table'
import { GripVertical } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export const schema = z.object({
	id: z.number(),
	header: z.string(),
	type: z.string(),
	status: z.string(),
	target: z.string(),
	limit: z.string(),
	reviewer: z.string()
})

function DragHandle({ id }: { id: number }) {
	const { attributes, listeners } = useSortable({
		id
	})

	return (
		<Button
			{...attributes}
			{...listeners}
			variant="ghost"
			size="icon"
			className="text-muted-foreground size-7 hover:bg-transparent"
		>
			<GripVertical className="text-muted-foreground size-3" />
			<span>Drag to reorder</span>
		</Button>
	)
}

const columns: ColumnDef<z.infer<typeof schema>>[] = [
	{
		id: 'drag',
		header: () => null,
		cell: ({ row }) => <DragHandle id={row.original.id} />
	},
	{
		id: 'select',
		header: () => {},
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={value => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false
	}
]

export function DataTable({
	data: initialData
}: {
	data: z.infer<typeof schema>[]
}) {
	const [data, setData] = useState(() => initialData)
}
