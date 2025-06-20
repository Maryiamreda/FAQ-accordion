import { faq } from './data';

export default async function PostsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {faq && faq.length > 0 ? (
        <div>
          {faq.map((faq, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold">{faq.question}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
