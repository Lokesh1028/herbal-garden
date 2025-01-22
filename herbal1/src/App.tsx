import React, { useState } from 'react';
import { Leaf, Search } from 'lucide-react';
import { diseases } from './data/herbs';
import PlantsPage from './components/PlantsPage';

function App() {
  const [search, setSearch] = useState('');
  const [showPlants, setShowPlants] = useState(false);

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Herbal Garden</h1>
            </div>
            <nav>
              <button
                onClick={() => setShowPlants(!showPlants)}
                className="text-gray-600 hover:text-green-600 font-medium"
              >
                {showPlants ? 'Search Remedies' : 'View All Plants'}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80"
            alt="Herbal Garden"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-60 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Gateway to Natural Healing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-green-100">
            Explore the Power of Medicinal Plants
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {showPlants ? (
          <PlantsPage />
        ) : (
          <>
            {/* Search Section */}
            <div className="max-w-xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Find Your Natural Remedy</h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-400"
                  placeholder="Search for an illness or condition..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Results Section - Only show when there's a search query */}
            {search && (
              <div className="max-w-2xl mx-auto">
                {filteredDiseases.length > 0 ? (
                  filteredDiseases.map((disease) => (
                    <div
                      key={disease.name}
                      className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{disease.name}</h3>
                        <div className="space-y-6">
                          {disease.remedies.map((remedy, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                              <h4 className="text-lg font-semibold text-green-600 mb-2">{remedy.plant}</h4>
                              <div className="space-y-2">
                                <p className="text-gray-700"><strong>Benefits:</strong> {remedy.benefits}</p>
                                <p className="text-gray-700"><strong>Used For:</strong> {remedy.usedFor}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-600">
                    No remedies found for "{search}". Try a different search term.
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;