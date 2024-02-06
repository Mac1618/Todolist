// Connection to database
import connectMongoDB from '@/lib/db';

// Model
import Item from '@/models/itemSchema';

// Next server
import { NextRequest, NextResponse } from 'next/server';

// DELETE an Item
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
	// Id form the Parameter
	const paramsId = params.id;

	// Connect to database
	await connectMongoDB();

	// Find an item using pramsId and delete the item
	const deletedItem = await Item.findByIdAndDelete({
		_id: paramsId,
	});

	// return a next response
	return NextResponse.json({ message: 'Delete success' }, { status: 201 });
};

// UPDATE an Item
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
	// Descrcture the next request
	const { title } = await req.json();

	// Id form the Parameter
	const paramsId = params.id;

	// Connect to database
	await connectMongoDB();

	// Find the item using paramsId and update the Item
	const updatedItem = await Item.findByIdAndUpdate(
		{ _id: paramsId },
		{ title: title },
		{ new: true }
	);

	// return a next response
	return NextResponse.json({ updatedItem: 'Update success' }, { status: 201 });
};
