import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 space-y-8">
        <Create />
        <Read />
      </div>
    </div>
  );
};

export default App;
