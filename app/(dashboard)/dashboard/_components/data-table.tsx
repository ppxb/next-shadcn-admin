import { useSortable } from '@dnd-kit/sortable'
import { GripVertical } from 'lucide-react'
import { z } from 'zod'
import { Button } from '@/components/ui/button'

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
