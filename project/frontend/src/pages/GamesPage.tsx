import Footer from "@/components/Footer";
import { Navbar } from "@/components/homepage";

export default function GamesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-8">
        <h2 className="text-2xl font-bold">Tous les jeux</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="card bg-base-200 shadow p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">Lorem Ipsum Dolor Sit</h3>
              <div className="text-right text-2xl font-bold">{[28,12,38,52,15,3,9,44][index]}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button>Voir plus</button>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
