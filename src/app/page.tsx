import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export default async function PostsPage() {
  const { data: posts, error } = await supabase.from("faq").select("id, question, created_at");
  if (error) return <p>Error loading posts</p>;
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  console.log("Posts:", posts, "Error:", error);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">qs</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.question}
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.created_at).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

