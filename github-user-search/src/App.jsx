import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          GitHub User Search
        </h1>
        <Search />
      </div>
    </div>
  );
}

export default App;

