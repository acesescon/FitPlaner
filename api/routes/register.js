import { supabase } from "../../utils/supabase.js";
import bcrypt from "bcryptjs";

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
        "Content-Type": "application/json",
        },
    });
    }

    export async function POST(req) {
    try {
        const body = await req.json();
        const { full_name, email, password } = body;

        if (!full_name || !email || !password) {
        return jsonResponse(
            { error: "Full name, email, and password are required" },
            400
        );
        }

        const { data: existingUser, error: checkError } = await supabase
        .from("users")
        .select("id")
        .eq("email", email)
        .single();

        if (checkError && checkError.code !== "PGRST116") {
        console.error("Supabase check error:", checkError);
        return jsonResponse({ error: "Unable to verify existing user" }, 500);
        }

        if (existingUser) {
        return jsonResponse({ error: "User already exists" }, 409);
        }

        const password_hash = await bcrypt.hash(password, 10);

        const { data, error: insertError } = await supabase
        .from("users")
        .insert([
            {
            full_name,
            email,
            password_hash,
            },
        ])
        .select()
        .single();

        if (insertError || !data) {
        console.error("Supabase insert error:", insertError);
        return jsonResponse({ error: "Failed to create user" }, 500);
        }

        return jsonResponse({
        message: "User registered successfully",
        user: {
            id: data.id,
            full_name: data.full_name,
            email: data.email,
        },
        });

    } catch (err) {
        console.error("Register route exception:", err);
        return jsonResponse(
        { error: err?.message || String(err) },
        500
        );
    }
}