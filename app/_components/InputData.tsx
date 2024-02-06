'use client';
import { useState } from 'react';

// Shadcn UI Components
import { Input } from '@/components/ui/input';

// Lucide icons
import { Plus } from 'lucide-react';

export const InputData = () => {
	const [title, setTitle] = useState('');

	// Create a new List
	const createItems = async (title: string) => {
		try {
			const res = await fetch(`http://localhost:3000/api/items`, {
				cache: 'no-store',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title }),
			});

			// If res failed
			if (!res.ok) {
				throw new Error('Failed to fetch Items');
			}

      // reset
      setTitle('');

			return res.json();
		} catch (error) {
			console.log('Error loading items', error);
		}
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
					createItems(title);
				}}
			/>
		</div>
	);
};
