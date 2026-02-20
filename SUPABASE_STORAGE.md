# Supabase Storage – Fix "Bucket not found"

The admin panel uploads category and product images to a Supabase Storage bucket named **`products`**. If you see **"Error uploading image: Bucket not found"**, create the bucket once:

## Steps

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **Storage** in the left sidebar.
3. Click **New bucket**.
4. Set:
   - **Name:** `products`
   - **Public bucket:** **On** (so image URLs work on the storefront).
5. Click **Create bucket**.

Optional: under **Policies**, add a policy so authenticated users (e.g. admin) can upload:

- **Policy name:** Allow authenticated uploads  
- **Allowed operation:** INSERT (and SELECT if you want)  
- **Target roles:** authenticated  
- **USING expression:** `true` (or restrict by `auth.role() = 'authenticated'`)  
- **WITH CHECK:** `true`

If the bucket is **public**, the anon key can read; the app uses the service role or authenticated client for uploads, so ensure your RLS/policies allow inserts for admin users.

After creating the bucket, try adding a category or product image again.
