'use client';

import { useRouter } from 'next/navigation';

// Sonner
import { toast } from 'sonner';

// Lucide icons
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// Components

// Query all the List
export const getItems = async () => {
	try {
		const res = await fetch('http://localhost:3000/api/items', {
			cache: 'no-store',
		});

		// If res failed
		if (!res.ok) {
			throw new Error('Failed to fetch Items');
		}

		return res.json();
	} catch (error) {
		console.log('Error loading items', error);
	}
};

export const ListItems = async () => {
	const router = useRouter();
	const { Items } = await getItems();

	// Delete a List
	const deleteItem = async (id: string) => {
		try {
			const res = await fetch(`http://localhost:3000/api/items/${id}`, {
				cache: 'no-store',
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			// If res failed
			if (!res.ok) {
				throw new Error('Failed to fetch Items');
			}

			toast.success('Item was deleted Successfully');
			router.refresh();

			return res.json();
		} catch (error) {
			console.log('Error loading items', error);
		}
	};

	return (
		<ul className="flex flex-col items-center justify-start gap-y-3 overflow-hidden overflow-y-scroll no-scrollbar py-5">
			{Items &&
				Items.map((item: any) => (
					<li
						key={item._id}
						className="text-white text-sm flex justify-between px-4 items-center h-8 bg-slate-700 w-full bg-opacity-40 rounded-lg"
					>
						{item.title}
						<Trash2
							className="text-red-500 rounded-sm hover:text-red-300 cursor-pointer"
							width={20}
							height={20}
							onClick={() => {
								deleteItem(item._id);
							}}
						/>
					</li>
				))}
		</ul>
	);
};
