import { useState, useMemo } from "react";
import { Search, Copy, Check, Filter } from "lucide-react";
import { functions } from "./data/functions";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedFunction, setCopiedFunction] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = [...new Set(functions.map((f) => f.category))];
    return ["all", ...cats.sort()];
  }, []);

  const filteredFunctions = useMemo(() => {
    // 重複を防ぐために、一意の関数名のみを保持
    const uniqueFunctions = Array.from(
      new Map(functions.map((func) => [func.name, func])).values()
    );

    const result = uniqueFunctions.filter((func) => {
      const matchesSearch =
        func.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        func.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || func.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    console.log("Filtered Functions:", result); // デバッグ用ログ
    return result;
  }, [searchTerm, selectedCategory]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFunction(text);
    setTimeout(() => setCopiedFunction(null), 2000);
  };

  return (
    <div className="w-[400px] h-[600px] bg-white">
      <div className="p-4 bg-gradient-to-r from-green-600 to-green-700">
        <h1 className="text-white text-xl font-bold mb-4">
          Google Sheets 関数ヘルパー
        </h1>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="関数を検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg pl-10 pr-4 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex items-center gap-2 bg-green-500 bg-opacity-20 p-2 rounded-lg">
          <Filter className="text-white w-4 h-4" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent text-white text-sm focus:outline-none cursor-pointer flex-1"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="text-black">
                {category === "all" ? "すべてのカテゴリー" : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-180px)] bg-gray-50">
        {filteredFunctions.map((func) => (
          <div
            key={func.name}
            className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-lg font-bold text-green-600">
                  {func.name}
                </h2>
                <p className="text-sm text-gray-600">{func.category}</p>
              </div>
              <button
                onClick={() => handleCopy(func.syntax)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="構文をコピー"
              >
                {copiedFunction === func.syntax ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
            <p className="text-gray-800 mb-3">{func.description}</p>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
              <p className="font-mono text-sm text-gray-700">{func.syntax}</p>
            </div>
            {func.example && (
              <div className="mt-3 text-sm text-gray-600">
                <span className="font-semibold">例:</span> {func.example}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
