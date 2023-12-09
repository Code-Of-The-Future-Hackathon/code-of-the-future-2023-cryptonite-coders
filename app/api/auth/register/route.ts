import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(
            { message: "User registered." },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 422 },
        );
    }
}
