export default function Page() {
  return (
    <div className="px-6 py-8 text-center">
      {/* Hero Content */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-white">
          Welcome to PT Sarana Komunikasi Data
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Solusi terbaik untuk kebutuhan komunikasi dan teknologi Anda.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Lorem Ipsum
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel erat vel urna ullamcorper convallis sit amet eget augue.
          Nam tincidunt sapien ac lacus varius, eget varius sapien fermentum. Suspendisse potenti.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Integer non nisl magna. Etiam vulputate orci a ipsum dignissim, ac venenatis ante malesuada. Sed consectetur justo sit amet turpis
          feugiat, et placerat nisl dictum.
        </p>
      </section>
    </div>
  );
}
