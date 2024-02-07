'use client';

import { useRouter } from 'next/navigation';

// Sonner
import { toast } from 'sonner';

// Lucide icons
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

// Items Actions
import { deleteItem, getItems } from '@/actions/Items';

export const ListItems = async () => {
	const [Items, isItems] = useState();
	const router = useRouter();

	// Run the getItems on render
	useEffect(() => {
		const storeItems = async () => {
			const items = await getItems();
			isItems(items);
		};

		storeItems();
	}, [Items]);

	// Handle delete
	const handleDeleteItem = (id: string) => {
		deleteItem(id)
			.then(() => {
				toast.success('Deleted Successfully');
				return router.refresh();
			})
			.catch((error) => {
				toast.success('Internal Error:' + error);
			});
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
								handleDeleteItem(item._id);
							}}
						/>
					</li>
				))}
		</ul>
	);
};
