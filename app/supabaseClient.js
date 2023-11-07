// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://daduccdpirgfjjkopukx.supabase.co"
// const supabaseKey = process.env.SUPABASE_KEY;
// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPERBASE_URL;
// console.log(supabaseUrl, "url");
const supabaseKey = process.env.NEXT_SUPERBASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;