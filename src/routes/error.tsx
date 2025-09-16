export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-500 underline">Go back home</a>
    </div>
  );
}