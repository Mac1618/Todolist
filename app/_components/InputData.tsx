'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Sonner
import { toast } from 'sonner';

// Shadcn UI Components
import { Input } from '@/components/ui/input';

// Lucide icons
import { Plus } from 'lucide-react';

// Action Items
import { createItems } from '@/actions/Items';

export const InputData = () => {
	const [title, setTitle] = useState('');
	const router = useRouter();
	const handleCreateItems = (title: string) => {
		createItems(title)
			.then(() => {
				// reset
				toast.success('Created Successfully');
				setTitle('');
				return router.refresh();
			})
			.catch((error) => {
				toast.success('Internal Error: ' + error);
			});
	};

	return (
		<div className="h-8 flex justify-between items-center px-4">
			<Input
				placeholder="Add list..."
				className="h-8 w-[90%] bg-transparent text-white border-b-[1px] border-x-0 border-t-0 rounded-none border-white focus-visible:ring-offset-0"
				onChange={(e) => {
					setTitle(e.target.value);
				}}
				value={title}
			/>
			<Plus
				className="bg-white hover:bg-muted-foreground rounded-full cursor-pointer"
				width={25}
				height={25}
				onClick={() => {
					handleCreateItems(title);
				}}
			/>
		</div>
	);
};
