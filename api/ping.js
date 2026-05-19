import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
    try {

        // Check env variables
        if (!import.meta.env.SUPABASE_URL) {
        return res.status(500).json({
            error: 'Missing SUPABASE_URL'
        })
        }

        if (!import.meta.env.SUPABASE_SERVICE_ROLE_KEY) {
        return res.status(500).json({
            error: 'Missing SUPABASE_SERVICE_ROLE_KEY'
        })
        }

        const supabase = createClient(
        import.meta.env.SUPABASE_URL,
        import.meta.env.SUPABASE_SERVICE_ROLE_KEY
        )

        const { data, error } = await supabase
        .from('users')
        .select('*')
        .limit(1)

        if (error) {
        return res.status(500).json({
            supabaseError: error.message
        })
        }

        return res.status(200).json({
        ok: true,
        data
        })

    } catch (err) {
        return res.status(500).json({
        crash: err.message
        })
    }
}