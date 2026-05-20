import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, email, password } = body;

        // 1. basic validation
        if (!name || !email || !password) {
        return Response.json(
            { error: "Full name, email, and password are required" },
            { status: 400 }
        );
        }

        // 2. check if user already exists
        const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

        if (existingUser) {
        return Response.json(
            { error: "User already exists" },
            { status: 409 }
        );
        }

        // 3. hash password
        const password_hash = await bcrypt.hash(password, 10);

        // 4. insert user
        const { data, error } = await supabase
        .from("users")
        .insert([
            {
            name,
            email,
            password_hash,
            },
        ])
        .select()
        .single();

        if (error) {
        return Response.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
        }

        // 5. response (NO PASSWORD RETURNED)
        return Response.json({
        message: "User registered successfully",
        user: {
            id: data.id,
            name: data.name,
            email: data.email,
        },
        });

    } catch (err) {
        return Response.json(
        { error: err },
        { status: 500 }
        );
    }
}