export interface HerbalRemedy {
  plant: string;
  benefits: string;
  usedFor: string;
}

export interface Disease {
  name: string;
  remedies: HerbalRemedy[];
}

export const diseases: Disease[] = [
  {
    name: "Cold",
    remedies: [
      {
        plant: "Ginger (Zingiber officinale)",
        benefits: "Anti-nausea, anti-inflammatory, and digestive aid",
        usedFor: "Nausea, motion sickness, indigestion, and cold/flu symptoms"
      },
      {
        plant: "Tulsi (Ocimum sanctum)",
        benefits: "Boosts immunity, reduces cough, and acts as an expectorant",
        usedFor: "Cold, cough, and respiratory infections"
      }
    ]
  },
  {
    name: "Cough",
    remedies: [
      {
        plant: "Licorice Root (Glycyrrhiza glabra)",
        benefits: "Soothes throat, reduces inflammation, and acts as an expectorant",
        usedFor: "Sore throat, cough, and bronchitis"
      },
      {
        plant: "Peppermint (Mentha piperita)",
        benefits: "Relieves congestion and soothes the throat",
        usedFor: "Cough, cold, and sinusitis"
      }
    ]
  },
  {
    name: "Headache",
    remedies: [
      {
        plant: "Peppermint (Mentha piperita)",
        benefits: "Relieves tension headaches and improves blood flow",
        usedFor: "Headaches and migraines"
      },
      {
        plant: "Feverfew (Tanacetum parthenium)",
        benefits: "Reduces migraine frequency and severity",
        usedFor: "Migraines and headaches"
      }
    ]
  },
  {
    name: "Diabetes",
    remedies: [
      {
        plant: "Fenugreek (Trigonella foenum-graecum)",
        benefits: "Regulates blood sugar levels and improves insulin sensitivity",
        usedFor: "Diabetes and digestive issues"
      },
      {
        plant: "Bitter Melon (Momordica charantia)",
        benefits: "Lowers blood sugar levels and improves glucose tolerance",
        usedFor: "Diabetes and weight management"
      }
    ]
  },
  {
    name: "Arthritis",
    remedies: [
      {
        plant: "Turmeric (Curcuma longa)",
        benefits: "Anti-inflammatory and antioxidant properties",
        usedFor: "Arthritis, joint pain, and inflammation"
      },
      {
        plant: "Ginger (Zingiber officinale)",
        benefits: "Reduces inflammation and pain",
        usedFor: "Arthritis and muscle pain"
      }
    ]
  },
  {
    name: "Indigestion",
    remedies: [
      {
        plant: "Peppermint (Mentha piperita)",
        benefits: "Relieves bloating, gas, and indigestion",
        usedFor: "Irritable bowel syndrome (IBS) and digestive issues"
      },
      {
        plant: "Fennel (Foeniculum vulgare)",
        benefits: "Aids digestion and reduces bloating",
        usedFor: "Indigestion and colic in infants"
      }
    ]
  },
  {
    name: "Insomnia",
    remedies: [
      {
        plant: "Chamomile (Matricaria chamomilla)",
        benefits: "Calming and mild sedative effects",
        usedFor: "Insomnia and anxiety"
      },
      {
        plant: "Valerian Root (Valeriana officinalis)",
        benefits: "Promotes sleep and reduces anxiety",
        usedFor: "Insomnia and stress"
      }
    ]
  },
  {
    name: "High Blood Pressure",
    remedies: [
      {
        plant: "Garlic (Allium sativum)",
        benefits: "Lowers blood pressure and improves heart health",
        usedFor: "Hypertension and cardiovascular diseases"
      },
      {
        plant: "Hawthorn (Crataegus monogyna)",
        benefits: "Improves blood flow and reduces blood pressure",
        usedFor: "High blood pressure and heart conditions"
      }
    ]
  },
  {
    name: "Skin Irritation",
    remedies: [
      {
        plant: "Aloe Vera (Aloe barbadensis)",
        benefits: "Soothes skin, reduces inflammation, and promotes healing",
        usedFor: "Burns, sunburns, and skin irritation"
      },
      {
        plant: "Calendula (Calendula officinalis)",
        benefits: "Anti-inflammatory and wound-healing properties",
        usedFor: "Skin irritation, cuts, and bruises"
      }
    ]
  },
  {
    name: "Acne",
    remedies: [
      {
        plant: "Neem (Azadirachta indica)",
        benefits: "Antibacterial and anti-inflammatory properties",
        usedFor: "Acne, skin infections, and eczema"
      },
      {
        plant: "Tea Tree Oil (Melaleuca alternifolia)",
        benefits: "Antimicrobial and anti-inflammatory",
        usedFor: "Acne and fungal infections"
      }
    ]
  },
  {
    name: "Asthma",
    remedies: [
      {
        plant: "Licorice Root (Glycyrrhiza glabra)",
        benefits: "Reduces inflammation and soothes the respiratory tract",
        usedFor: "Asthma and bronchitis"
      },
      {
        plant: "Ginger (Zingiber officinale)",
        benefits: "Reduces airway inflammation and improves breathing",
        usedFor: "Asthma and respiratory issues"
      }
    ]
  },
  {
    name: "Diarrhea",
    remedies: [
      {
        plant: "Blackberry Root (Rubus fruticosus)",
        benefits: "Astringent properties that reduce diarrhea",
        usedFor: "Diarrhea and digestive issues"
      },
      {
        plant: "Psyllium (Plantago ovata)",
        benefits: "Adds bulk to stool and regulates bowel movements",
        usedFor: "Diarrhea and constipation"
      }
    ]
  },
  {
    name: "Constipation",
    remedies: [
      {
        plant: "Senna (Senna alexandrina)",
        benefits: "Natural laxative that stimulates bowel movements",
        usedFor: "Constipation"
      },
      {
        plant: "Psyllium (Plantago ovata)",
        benefits: "Adds bulk to stool and relieves constipation",
        usedFor: "Constipation and digestive health"
      }
    ]
  },
  {
    name: "Fever",
    remedies: [
      {
        plant: "Holy Basil (Ocimum sanctum)",
        benefits: "Reduces fever and boosts immunity",
        usedFor: "Fever, cold, and flu"
      },
      {
        plant: "Elderberry (Sambucus nigra)",
        benefits: "Reduces fever and fights viral infections",
        usedFor: "Fever and flu"
      }
    ]
  },
  {
    name: "Anxiety",
    remedies: [
      {
        plant: "Ashwagandha (Withania somnifera)",
        benefits: "Reduces stress and anxiety",
        usedFor: "Anxiety, stress, and fatigue"
      },
      {
        plant: "Lavender (Lavandula angustifolia)",
        benefits: "Calming and relaxing effects",
        usedFor: "Anxiety and insomnia"
      }
    ]
  },
  {
    name: "Urinary Tract Infection (UTI)",
    remedies: [
      {
        plant: "Cranberry (Vaccinium macrocarpon)",
        benefits: "Prevents bacteria from adhering to the urinary tract",
        usedFor: "UTIs and bladder health"
      },
      {
        plant: "Buchu (Agathosma betulina)",
        benefits: "Diuretic and antiseptic properties",
        usedFor: "UTIs and kidney health"
      }
    ]
  },
  {
    name: "Allergies",
    remedies: [
      {
        plant: "Butterbur (Petasites hybridus)",
        benefits: "Reduces allergy symptoms and inflammation",
        usedFor: "Allergies and migraines"
      },
      {
        plant: "Stinging Nettle (Urtica dioica)",
        benefits: "Reduces histamine levels and allergy symptoms",
        usedFor: "Allergies and hay fever"
      }
    ]
  },
  {
    name: "Wounds",
    remedies: [
      {
        plant: "Aloe Vera (Aloe barbadensis)",
        benefits: "Promotes wound healing and reduces inflammation",
        usedFor: "Cuts, burns, and wounds"
      },
      {
        plant: "Turmeric (Curcuma longa)",
        benefits: "Antimicrobial and wound-healing properties",
        usedFor: "Wounds and skin infections"
      }
    ]
  },
  {
    name: "Hair Loss",
    remedies: [
      {
        plant: "Amla (Phyllanthus emblica)",
        benefits: "Strengthens hair and promotes growth",
        usedFor: "Hair loss and scalp health"
      },
      {
        plant: "Rosemary (Rosmarinus officinalis)",
        benefits: "Stimulates hair growth and improves scalp health",
        usedFor: "Hair loss and dandruff"
      }
    ]
  },
  {
    name: "Liver Disorders",
    remedies: [
      {
        plant: "Milk Thistle (Silybum marianum)",
        benefits: "Detoxifies and regenerates liver cells",
        usedFor: "Liver disorders and toxin removal"
      },
      {
        plant: "Dandelion (Taraxacum officinale)",
        benefits: "Supports liver function and detoxification",
        usedFor: "Liver health and digestion"
      }
    ]
  }
];