import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
	let response_data = { result: {}, status: 400 };

	try {
		const { title, description } = await request.json();

		const validate = schema.safeParse({ title, description });

		if(!validate.success) {
			throw new Error("Invalid fields");
		}

		const create_issue_ticket = await prisma.issue.create({
			data: { title, description }
		})

		response_data.status = 201;
		response_data.result = { ...create_issue_ticket }
	} catch (error) {
		response_data.result = { "message": "An error occured" };

		if (error instanceof Error) {
			response_data.result = { "message": error.message };
		}
	}

	return NextResponse.json(response_data.result, { status: response_data.status });
}