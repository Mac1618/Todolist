// Connection to database
import connectMongoDB from '@/lib/db';

// Model
import Item from '@/models/itemSchema';

// Next server
import { NextRequest, NextResponse } from 'next/server';

// POST a new Item
export const POST = async (req: NextRequest) => {
	// Descrcture the next request
	const { title } = await req.json();

	// Connect to database
	await connectMongoDB();

	// Create a new item
	await Item.create({ title: title });

	// return a the created item
	return NextResponse.json({ message: 'Created successfully' }, { status: 201 });
};

//GET all Items
export const GET = async (req: NextRequest) => {
	// Connect to database
	await connectMongoDB();

	// Find all the items
	const Items = await Item.find();

	// return all Items
	return NextResponse.json({ Items: Items }, { status: 201 });
};
