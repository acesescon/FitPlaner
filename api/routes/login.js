import { supabase } from "../../utils/supabase";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const body = await req.json();

        const { email, password } = body;

        if (!email || !password) {
        return Response.json(
            { error: "Email and password required" },
            { status: 400 }
        );
        }

        // find user
        const { data: user, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

        if (error || !user) {
        return Response.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
        }

        // compare password
        const validPassword = await bcrypt.compare(
        password,
        user.password_hash
        );

        if (!validPassword) {
        return Response.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
        }

        // create jwt
        const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
        );

        return Response.json({
        message: "Login successful",
        token,
        user: {
            id: user.id,
            email: user.email,
        },
        });

    } catch (err) {
        return Response.json(
        { error: err },
        { status: 500 }
        );
    }
}