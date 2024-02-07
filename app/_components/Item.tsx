// NExt Router
import { useRouter } from 'next/navigation';

// Lucide icons
import { Trash2 } from 'lucide-react';

// Sonner
import { toast } from 'sonner';

interface itemProps {
	id: string;
	title: string;
}

export const Item = async ({ id: id, title: title }: itemProps) => {
	const router = useRouter();

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
			return router.refresh();
			// res.json();
		} catch (error) {
			console.log('Error loading items', error);
		}
	};

	return (

	);
};
