import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY
    )

    export default async function handler(req, res) {
    const { error } = await supabase
        .from('users')
        .select('id')
        .limit(1)

    if (error) {
        return res.status(500).json({
        ok: false,
        error: error.message
        })
    }

    res.status(200).json({
        ok: true
    })

    console.log(res)
}