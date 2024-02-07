// Create a new List
export const createItems = async (title: string) => {
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

		return res.json();
	} catch (error) {
		console.log('Error loading items', error);
	}
};

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

	// Delete a List
	export const deleteItem = async (id: string) => {
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
