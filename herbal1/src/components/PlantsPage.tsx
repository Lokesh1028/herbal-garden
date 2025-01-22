import React from 'react';
import { diseases } from '../data/herbs';

// Get unique plants from diseases data
const uniquePlants = Array.from(
  new Set(
    diseases.flatMap(disease =>
      disease.remedies.map(remedy => ({
        name: remedy.plant,
        benefits: remedy.benefits,
        usedFor: remedy.usedFor
      }))
    ).map(plant => JSON.stringify(plant))
  )
).map(plant => JSON.parse(plant));

// Plant images mapping
const plantImages: { [key: string]: string } = {
  "Ginger (Zingiber officinale)": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "Tulsi (Ocimum sanctum)": "https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "Aloe Vera (Aloe barbadensis)": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "Turmeric (Curcuma longa)": "https://images.unsplash.com/photo-1615485290398-4f1d2643b3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "Peppermint (Mentha piperita)": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
};

// Default plant image for plants without specific images
const defaultPlantImage = "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

function PlantsPage() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Medicinal Plants Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uniquePlants.map((plant, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <div className="h-48 overflow-hidden">
              <img
                src={plantImages[plant.name] || defaultPlantImage}
                alt={plant.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{plant.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Benefits:</strong> {plant.benefits}</p>
                <p className="text-gray-600"><strong>Used For:</strong> {plant.usedFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantsPage;