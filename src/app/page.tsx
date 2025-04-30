import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export default async function PostsPage() {
  const { data: questions, error } = await supabase.from("faq").select("id, question, created_at");
  if (error) return <p>Error loading </p>;

  console.log("questions:", questions, "Error:", error);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">qs</h1>
      <ul>
        {questions?.map((question) => (
          <li key={question.id} className="mb-2">
            <Link href={`/post/${question.id}`} className="text-blue-600 hover:underline">
              {question.question}
            </Link>
            <p className="text-sm text-gray-500">{new Date(question.created_at).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

