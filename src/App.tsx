import { Hero } from './components/sections/Hero';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      {/* TODO: Add remaining sections */}
      <div className="py-20 text-center text-gray-400">
        Weitere Sektionen folgen...
      </div>
    </main>
  );
}

export default App;
