export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <div className="w-11/12 sm:w-full max-w-2xl bg-white bg-opacity-25 backdrop-blur-lg shadow-lg p-4 sm:p-8 rounded-xl flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800 text-center mb-6">
          Welcome to HRMS Lite 🚀
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 text-center mb-8">
          Manage your small business HR needs efficiently and effectively
        </p>

        <div className="mt-4">
          <a
            href="/login"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            Start Managing Your Team
          </a>
        </div>
      </div>
    </main>
  );
}
