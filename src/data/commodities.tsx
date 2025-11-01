import {
  Apple,
  Zap,
  Shirt,
  Cog,
  Hammer,
  TreePine,
  Gem,
  Gift,
  Crown,
  LucideProps,
} from "lucide-react";
import {
  CommodityDescription,
  createDescriptionItem as item,
} from "@/components/CommodityDescription";
import { lazyImg } from "@/lib/lazyImages";

// Remove all static image imports - images will now load on demand
// OLD: import BeefPoultryFish from "@/assets/seafood/Beef-Poultry-Fish.webp";
// NEW: Uses lazyImg("seafood/Beef-Poultry-Fish.webp") inline

export interface Commodity {
  id: string;
  name: string;
  description: string | React.ReactNode;
  images?: string[]; // Optional array for multiple images
  specifications: string[];
  features: string[];
  categoryId: number;
}

export interface CommodityCategory {
  id: number;
  slug: string;
  name: string;
  description: string | React.ReactNode;
  commodities: Commodity[];
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  color: string;
  bgColor: string;
}

export const commoditiesData: CommodityCategory[] = [
  {
    id: 1,
    slug: "animal-food-beverages",
    name: "Animal, Food & Beverages",
    description: (
      <>
        Premium quality meat, dairy, fruits, grains, and beverages for global
        markets
      </>
    ),
    icon: Apple,
    color: "text-green-600",
    bgColor: "bg-green-50",
    commodities: [
      {
        id: "meat-poultry-seafood",
        name: "Meat, Poultry & Seafood",
        description: (
          <>
            The Meat, Poultry & Seafood commodity covers live animals, fresh /
            frozen meat, seafood, processed forms, and by-products. It falls
            under HS code 0101–0106 (live animals), 0201–0210 (meat), 0301–0308 (fish/seafood), 1601–1605 (prepared/preserved meat/fish), depending on product form
            (fresh, frozen, processed). Export quality requires adherence to
            Codex, HACCP, GMP, food safety and veterinary standards. Inspection,
            testing (microbial, residue, sensory) and third-party certification
            are essential. Packaging must maintain the cold chain; transport via
            reefer containers or temperature-controlled air. End markets include
            retail, foodservice, processed foods, pet food, and specialty
            segments. Key challenges: sanitary protocols, residue compliance,
            logistics, shelf life, and regulatory barriers.
          </>
        ),
        images: [
          lazyImg("seafood/Beef-Poultry-Fish.webp"),
          lazyImg("seafood/meat-2.webp"),
          lazyImg("seafood/meat-poultry-seafood.webp"),
          lazyImg("seafood/meat-seafood-34-thumb.webp"),
        ], // Multiple images for gallery
        specifications: [
          "Fresh meat & meat products",
          "Premium poultry varieties",
          "Packaging & Labelling (Export)",
          "Logistics (Cold Chain)",
        ],
        features: [
          "Consistent Grade & Trim",
          "Strict Food Safety",
          "Cold-Chain Integrity",
          "High Yield, Low Drip",
          "Clear Traceability",
          "Export-Ready Packaging",
          "Flexible MOQs",
        ],
        categoryId: 1,
      },
      {
        id: "dairy-related-products",
        name: "Dairy & Related Products",
        description: (
          <CommodityDescription
            intro="Our dairy range includes raw milk, concentrates and powders, fermented products, butter and ghee, cheese, ice cream, and specialty nutritional products."
            items={[
              item(
                "HS code",
                "0401–0406 covering milk, cream, whey, butter, cheese, and fermented products."
              ),
              item(
                "Manufacturing",
                "ISO 22000, HACCP, and GMP certified with full batch traceability."
              ),
              item(
                "Quality parameters",
                "Fat, protein, SNF, moisture, solubility for powders; MFFB/FDM for cheese; peroxide/FFA for butter; microbiology tests."
              ),
              item(
                "Safety checks",
                "Allergen declarations, aflatoxin M1 and antibiotic residue screening."
              ),
              item(
                "Testing",
                "Independent third-party lab certification available before shipment."
              ),
              item(
                "Applications",
                "Retail, HORECA, bakery, confectionery, beverages, sports nutrition, pharmaceutical uses."
              ),
              item(
                "Packaging",
                "25kg bags or FIBCs for powders; 10–25kg butter blocks and cheese bricks; consumer UHT packs."
              ),
              item(
                "Transport",
                "LCL for samples; 20FT/40FT FCL reefers for chilled products; dry containers with desiccants for powders."
              ),
              item(
                "Storage",
                "Fresh milk 0–4°C; cheese 0–8°C; butter 0–6°C; ice cream -18°C or below; powders ambient."
              ),
              item(
                "Documentation",
                "Health certificates, certificates of analysis, temperature logs, ISPM-15 pallets, compliant labelling."
              ),
              item(
                "Order flexibility",
                "Sample quantities to bulk orders with reliable delivery schedules."
              ),
              item(
                "Service standards",
                "Industry-compliant production, pre-shipment quality control, custom specifications supported."
              ),
            ]}
          />
        ),
        images: [
          lazyImg("dairy/d1.webp"),
          lazyImg("dairy/d2.webp"),
          lazyImg("dairy/d3.webp"),
          lazyImg("dairy/d4.webp"),
          lazyImg("dairy/d5.webp"),
        ], // 2 images for demo
        specifications: [
          "Fresh dairy products",
          "Animal and plant-based fats",
          "Extended shelf life options",
          "Organic and conventional varieties",
        ],
        features: [
          "Fresh Dairy",
          "Edible Oils",
          "Organic Options",
          "Long Shelf Life",
        ],
        categoryId: 1,
      },
      {
        id: "fruits-vegetables-produce",
        name: "Fruits, Vegetables & Natural Produce",
        description: (
          <CommodityDescription
            intro="We handle fresh fruits, vegetables, processed products, and value-added produce for international markets."
            items={[
              item(
                "HS code",
                "0701–0714 (vegetables), 0801–0814 (fruits), 2001–2009 (processed items), 2202–2209 (juices)."
              ),
              item(
                "Classification",
                "Fresh items under HS 07/08; processed items under 20/23 per product type."
              ),
              item(
                "Certifications",
                "GLOBALG.A.P., ISO, HACCP compliance with market-specific residue limits."
              ),
              item(
                "Quality control",
                "Grading, size and color checks, MRL testing, phytosanitary certification."
              ),
              item(
                "Cold chain",
                "Temperature-controlled transport from farm to port with humidity monitoring."
              ),
              item(
                "Traceability",
                "Lot and batch coding with full recall procedures."
              ),
              item(
                "Markets",
                "Retail, foodservice, and industrial processors for juices, purees, frozen and dehydrated products."
              ),
              item(
                "Specialty options",
                "Organic varieties, exotic fruits, ready-to-eat salads, pre-cut packs, mixed assortments."
              ),
              item(
                "Packaging",
                "Vented crates, food-grade liners, MAP/CA pouches, palletized export cartons."
              ),
              item(
                "Shipping",
                "LCL for samples; FCL reefer for bulk orders; airfreight for perishables; break-bulk for oversized items."
              ),
              item(
                "Documentation",
                "Commercial invoice, packing list, certificate of origin, bill of lading, phytosanitary certificates."
              ),
              item(
                "Inspection",
                "Third-party verification, sealed reefers with data loggers."
              ),
              item(
                "Flexible orders",
                "Sample sizes to bulk shipments; seasonal availability; contract farming options."
              ),
              item(
                "Quality assurance",
                "Pest management, contamination prevention, temperature monitoring protocols."
              ),
            ]}
          />
        ),

        images: [
          lazyImg("vagies/v1.webp"),
          lazyImg("vagies/v2.webp"),
          lazyImg("vagies/v3.webp"),
          lazyImg("vagies/v4.webp"),
        ], // 4 images for demo
        specifications: [
          "Seasonal fresh fruits & vegetables",
          "Premium nuts & dry fruits",
          "Natural honey varieties",
          "Organic farming methods",
        ],
        features: [
          "Farm Fresh",
          "Seasonal Varieties",
          "Natural Products",
          "Organic Certified",
        ],
        categoryId: 1,
      },
      {
        id: "grains-bakery-staples",
        name: "Grains, Bakery & Processed Staples",
        images: [
          lazyImg("bakery/b1.avif"),
          lazyImg("bakery/b2.avif"),
          lazyImg("bakery/b3.avif"),
          lazyImg("bakery/b4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We export grains, flours, starches, bakery products, pasta, and processed staples worldwide."
            items={[
              "HS code: raw cereals 1001–1008; processed items 1101–1905.",
              "ISO 22000, HACCP, and Codex Alimentarius compliance.",
              "Grading based on moisture, protein, gluten strength, and milling performance.",
              "Quality testing for aflatoxin, pesticide residues, and microbiology.",
              "Third-party inspection for weight accuracy and shipment integrity.",
              "Serving bakeries, pasta manufacturers, cereal producers, and food processors.",
              "Byproducts like bran and husk available for feed and supplements.",
              "Packaging: 25–50kg PP bags, FIBC big bags, or corrugated cartons.",
              "ISPM-15 certified for international shipping.",
              "Bulk vessels, LCL for samples, reefer FCL for sensitive goods.",
              "Full documentation: certificate of origin, invoice, packing list, inspection certificate.",
              "Batch coding and quality certifications for traceability.",
              "Orders from samples to high-volume bulk shipments.",
              "Export-ready across all staple food categories.",
            ]}
          />
        ),
        specifications: [
          "Various cereals & grains",
          "Fresh bakery products",
          "Frozen food varieties",
          "Processed food items",
        ],
        features: [
          "Grain Varieties",
          "Fresh Bakery",
          "Frozen Options",
          "Processed Foods",
        ],
        categoryId: 1,
      },
      {
        id: "sweets-confectionery",
        name: "Sweets & Confectionery",
        images: [
          lazyImg("sweet/s1.avif"),
          lazyImg("sweet/s2.avif"),
          lazyImg("sweet/s3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Premium confectionery and sweet products for global markets."
            items={[
              "Comprehensive category covering cocoa, sugar confectionery, gum, chocolate, and specialty sweets.",
              "HS code: 1701–1704 (sugars), 1801–1806 (cocoa/chocolate), 1905 (biscuits/bakery goods with sugar).",
              "Food-safety systems aligned with ISO 22000/FSSC, HACCP, and Codex good manufacturing practices.",
              "Spec-driven sourcing: cocoa content, fat profile, viscosity, moisture, and water activity validated.",
              "Allergen management for milk, nuts, soy, gluten with documented changeover and traceability.",
              "Quality controls include microbiology, mycotoxins (where applicable), heavy metals, and packaging migration.",
              "Functional performance assured: temper, gloss, bloom resistance, snap/chew, and controlled melt.",
              "End-uses span retail confectionery, bakery and ice-cream inclusions, snacks, and HORECA desserts.",
              "Value-added lines: sugar-free/stevia, fortified/enriched, premium origin, seasonal and gifting assortments.",
              "Packaging formats: pouches, flow-wraps, blisters, tins; 10–25 kg cartons or pails for B2B ingredients.",
              "Logistics: insulated or reefer containers for heat-sensitive SKUs; tamper-evident, data-logged shipments.",
              "Documentation set: invoice, packing list, certificate of origin, test reports, and inspection certificate.",
              "Flexible MOQs for pilots and private label; scalable to contract-manufactured bulk programs.",
              "Third-party inspections: load-plan verification, quality control, and phytosanitary certification.",
            ]}
          />
        ),
        specifications: [
          "Traditional confectionery",
          "Modern sweet varieties",
          "Export quality packaging",
          "Extended shelf life",
        ],
        features: [
          "Premium Sweets",
          "Traditional & Modern",
          "Export Quality",
          "Long Shelf Life",
        ],
        categoryId: 1,
      },
      {
        id: "beverages",
        name: "Beverages",
        description: (
          <CommodityDescription
            intro="We supply waters, juices, concentrates, soft drinks, coffee, tea, and alcoholic beverages for global markets."
            items={[
              "HS code: 2201–2208 for finished beverages; 2009/2101/2106 for bases and concentrates.",
              "ISO 22000/FSSC and HACCP certified with validated analytical methods.",
              "Quality testing: Brix, pH, acidity, carbonation, alcohol content, turbidity, color.",
              "Safety compliance: microbiology testing, additive limits, caffeine content, contaminants screening.",
              "Full batch traceability for fruit concentrates, coffee extracts, botanicals, sweeteners.",
              "Packaging: PET bottles, glass, cans, aseptic cartons; bulk drums, IBCs, flexitanks, ISO tanks.",
              "Shelf life validated; seal integrity and leakage testing.",
              "Specialty products: functional beverages, low/no alcohol options, sugar-free, premium origins, private label.",
              "Markets: retail, HORECA, travel catering, contract bottling, industrial ingredients.",
              "Temperature-controlled shipping with data loggers for heat/freeze protection.",
              "Documentation: invoice, packing list, certificate of origin, bill of lading, phytosanitary certificates.",
              "Pre-shipment quality control: packaging migration tests, net content verification, labeling compliance.",
              "Orders from samples to FCL, flexitank, and bulk programs.",
            ]}
          />
        ),
        images: [
          lazyImg("beverages/be1.avif"),
          lazyImg("beverages/be2.avif"),
          lazyImg("beverages/be3.avif"),
          lazyImg("beverages/be4.avif"),
        ],
        specifications: [
          "Premium tea & coffee varieties",
          "Quality cocoa products",
          "Alcoholic beverages (wine, beer, spirits)",
          "Non-alcoholic beverages (juices, sodas)",
        ],
        features: [
          "Premium Quality",
          "Alcoholic & Non-Alcoholic",
          "Global Varieties",
          "Export Standards",
        ],
        categoryId: 1,
      },
      {
        id: "sauces-condiments-ready-foods",
        name: "Sauces, Condiments & Ready Foods",
        images: [
          lazyImg("sauces/sa1.avif"),
          lazyImg("sauces/sa2.avif"),
          lazyImg("sauces/sa3.avif"),
          lazyImg("sauces/sa4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We export sauce bases, finished condiments, soups, gravies, and ready-to-eat meals."
            items={[
              "HS code: 0904–0910 (spices), 1509–1517 (oils), 2001–2010 (processed vegetables), 2103–2104 (sauces).",
              "Food safety: ISO 22000/FSSC, HACCP, GMP, allergen management.",
              "Quality specs: pH, acidity, Brix, salt content, viscosity, water activity, color.",
              "Microbiology testing: TPC, yeast, mold, coliforms; pathogen screening.",
              "Contaminant compliance: pesticide residues, mycotoxins, heavy metals, additive limits.",
              "Thermal processing validation for cans/retort products; seam integrity, commercial sterility.",
              "Packaging: glass/PET bottles, squeeze pouches, cans, retort pouches, portion cups; bulk drums/IBCs.",
              "Shelf life and transport testing; packaging migration testing.",
              "Markets: retail, private label, HORECA, industrial ingredients.",
              "Specialty options: clean label, organic, low sodium, sugar-free, fortified, ethnic varieties.",
              "Ambient or temperature-controlled shipping; ISPM-15 pallets.",
              "Documentation: certificate of origin, invoice, packing list, lab certificates, inspection records.",
              "Orders from samples to large-scale production runs with full traceability.",
            ]}
          />
        ),
        specifications: [
          "Variety of sauces & condiments",
          "Ready-to-eat meal packages",
          "Preservative options available",
          "International taste profiles",
        ],
        features: [
          "Sauce Varieties",
          "Ready-to-Eat",
          "Convenient Packaging",
          "Global Flavors",
        ],
        categoryId: 1,
      },
    ],
  },
  {
    id: 2,
    slug: "minerals-chemicals-plastics",
    name: "Minerals, Chemicals & Plastics",
    description: (
      <>Industrial chemicals, fertilizers, plastics, and energy solutions</>
    ),
    icon: Zap,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    commodities: [
      {
        id: "agricultural-agrochemicals",
        name: "Agricultural & Agrochemicals",
        images: [
          lazyImg("agricultural/a1.avif"),
          lazyImg("agricultural/a2.avif"),
          lazyImg("agricultural/a3.avif"),
          lazyImg("agricultural/a4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We supply fertilizers, crop protection products, seeds, adjuvants, and biostimulants to global markets."
            items={[
              "HS code: 3101–3105 (fertilizers), 3808 (pesticides), 1209 (seeds), 3402–3404 (adjuvants).",
              "ISO 9001/14001, ISO 22000/HACCP certified; GLP studies; ISO/IEC 17025 testing capability.",
              "Fertilizers tested for N-P-K, micronutrients, moisture, granule strength, heavy metals.",
              "Crop protection verified for active content, impurities, emulsion stability, shelf life.",
              "Seeds certified for germination, purity, moisture, vigor, thousand-kernel weight.",
              "GHS/CLP classification, SDS compliance, UN transport standards.",
              "Applications: broadacre farming, horticulture, greenhouses, hydroponics, turf, plantations.",
              "Packaging: 25/50kg PP sacks, FIBC big bags, UN-rated drums/IBCs, water-soluble sachets.",
              "ISPM-15 pallets, desiccants, tamper-evident seals, ventilated/segregated loads.",
              "LCL for samples; FCL 20FT/40FT for bulk; bulk/blend options available.",
              "Pre-shipment QC: assay reports, stability checks, compatibility tests, seal verification.",
              "Documentation: invoice, packing list, certificate of origin, SDS, inspection certificate.",
              "Flexible order quantities and contract programs with full traceability.",
            ]}
          />
        ),

        specifications: [
          "High-quality fertilizers",
          "Effective agrochemicals",
          "Targeted pesticides",
          "Crop-specific solutions",
        ],
        features: [
          "Enhanced Productivity",
          "Crop Protection",
          "Soil Enhancement",
          "Sustainable Solutions",
        ],
        categoryId: 2,
      },
      {
        id: "basic-specialty-chemicals",
        name: "Basic & Specialty Chemicals",
        images: [
          lazyImg("chemical/c1.webp"),
          lazyImg("chemical/c2.webp"),
          lazyImg("chemical/c3.avif"),
          lazyImg("chemical/c4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We supply inorganic and organic chemicals, polymeric materials, and specialty formulations worldwide."
            items={[
              "HS code: 2801–2850 (inorganic), 2901–2942 (organic), 3401–3407 (surfactants), 3801–3809 (specialty).",
              "ISO 9001/14001/45001, REACH, GHS, CLP compliant.",
              "Testing: purity %, assay, pH, viscosity, specific gravity.",
              "Safety verified: flash point, stability, material compatibility.",
              "Environmental compliance: VOC and heavy metal screening.",
              "Applications: coatings, plastics, adhesives, lubricants, cosmetics, water treatment.",
              "Packaging: 25/50kg bags, 200L drums, 1000L IBCs, bulk ISO tanks.",
              "UN-certified packaging with international hazard labeling.",
              "Pre-shipment QC: purity verification, sealing, labeling checks.",
              "Documentation: certificate of analysis, SDS, invoice, packing list, inspection certificate.",
              "Hazard segregation; inspected and sealed containers.",
              "Order flexibility: small batches to full industrial bulk loads.",
              "Export-ready with traceability, third-party inspection, safety compliance.",
            ]}
          />
        ),
        specifications: [
          "Organic & inorganic chemicals",
          "Pharmaceutical grade chemicals",
          "Biochemical products",
          "High purity standards",
        ],
        features: [
          "High Purity",
          "Pharmaceutical Grade",
          "Biochemical Solutions",
          "Industrial Applications",
        ],
        categoryId: 2,
      },
      {
        id: "industrial-chemicals-applications",
        name: "Industrial Chemicals & Applications",
        images: [
          lazyImg("dyes/dy1.avif"),
          lazyImg("dyes/dy2.avif"),
          lazyImg("dyes/dy3.avif"),
          lazyImg("dyes/dy4.avif"),
          lazyImg("dyes/dy5.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We supply base inorganic and organic chemicals, solvents, intermediates, polymers, and specialty additives."
            items={[
              "HS code: 2801–2850 (inorganic), 2901–2942 (organic), 3204–3215 (dyes/pigments), 3401–3507 (enzymes/adhesives), 3808–3825 (specialty).",
              "ISO 9001/14001/45001 quality systems; GHS/CLP hazard classification; SDS compliance.",
              "Testing: assay, purity (GC/HPLC), water (KF), metals (ICP), pH, specific gravity, viscosity, color.",
              "Safety validated: flash point, auto-ignition, stability, compatibility, corrosion index, conductivity.",
              "Environmental compliance: VOC limits, halogen/heavy metal screening, effluent management.",
              "Applications: coatings, inks, adhesives, plastics, rubber, water treatment, oil & gas, mining, textiles, paper, leather.",
              "Electronics-grade options for wet-process etching and cleaning with low-metal, high-purity specs.",
              "Packaging: 25/50kg bags, FIBC, 20–25L cans, 200L drums, 1000L IBCs; bulk ISO tanks/flexitanks.",
              "UN-certified packaging with seal integrity checks, tamper evidence, hazard segregation.",
              "LCL for samples; FCL for bulk; temperature-controlled or insulated equipment as needed.",
              "Pre-shipment QC: certificate of analysis with full analytics, stability/compatibility tests, net content verification.",
              "Documentation: invoice, packing list, certificate of origin, SDS, inspection/seal records.",
              "Orders from pilot batches to continuous bulk supply with full traceability.",
            ]}
          />
        ),

        specifications: [
          "Dyes & pigments",
          "Textile industry chemicals",
          "Essential oils",
          "Detergents & cosmetic chemicals",
        ],
        features: [
          "Color Solutions",
          "Textile Applications",
          "Natural Oils",
          "Cleaning Products",
        ],
        categoryId: 2,
      },
      {
        id: "paints-coatings-additives",
        name: "Paints, Coatings & Additives",
        images: [
          lazyImg("paints/p1.avif"),
          lazyImg("paints/p2.avif"),
          lazyImg("paints/p3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We supply binders and resins, pigments, solvents, dispersions, additives, and finished coatings and inks."
            items={[
              "HS code: 3208–3215 (paints/inks), 2901–2905 (solvents), 3204–3206 (pigments), 3901–3915 (polymers).",
              "ISO 9001/14001/45001 certified; GHS/CLP hazard labeling, SDS compliance.",
              "Performance testing: adhesion, corrosion, gloss, hardness, impact, dry time.",
              "Quality specs: solids %, VOC, viscosity, density, particle size, curing properties.",
              "Specialty options: waterborne, solventborne, powder, UV/EB-curable, high solids, intumescent, marine antifouling.",
              "Applications: architectural, decorative, protective, marine, automotive OEM/refinish, wood, metal, coil, packaging.",
              "Substrate compatibility guidance for steel, aluminum, concrete, plastics, wood.",
              "Packaging: 1–5L cans, 18–20L pails, 200L drums, 1000L IBCs; powder in 20–25kg antistatic bags.",
              "UN-rated containers for flammable items; seal integrity and closure torque verified.",
              "LCL for samples; FCL for bulk; temperature-controlled to prevent freezing or overheating.",
              "Pre-shipment QC: certificate of analysis, witness panels, packaging migration tests, net content checks.",
              "Regulatory compliance: VOC limits, heavy metal restrictions, biocide content screening.",
              "Color matching and batch consistency; orders from samples to bulk production.",
            ]}
          />
        ),

        specifications: [
          "Quality paints & varnishes",
          "Strong adhesives",
          "Durable resins & silicones",
          "Protective waxes",
        ],
        features: [
          "Durable Coatings",
          "Strong Adhesion",
          "Weather Resistant",
          "Protective Solutions",
        ],
        categoryId: 2,
      },
      {
        id: "plastics-rubber",
        name: "Plastics & Rubber",
        images: [
          lazyImg("rubber/r1.avif"),
          lazyImg("rubber/r2.avif"),
          lazyImg("rubber/r3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="We supply polymers, elastomers, compounds, masterbatches, and recyclates for various industries."
            items={[
              "HS code: 3901–3915 (plastics), 4001–4017 (rubber).",
              "ISO 9001/14001/45001 certified; ASTM, DIN, ISO testing compliance.",
              "Testing: MFI, density, tensile strength, impact resistance, hardness, thermal stability.",
              "Rubber specs: Mooney viscosity, cure time, elongation, abrasion resistance.",
              "REACH/RoHS compliant; heavy metal, odor, volatile content screening.",
              "Applications: automotive, packaging, electronics, construction, footwear.",
              "Specialty products: engineering plastics, flame retardant, conductive, bio-based, food grade.",
              "Packaging: 25kg bags, FIBC, crated shipments; shrink wrapped and palletized.",
              "Rubber in bales or sheets with polyethylene wrapping, strapped pallets.",
              "Orders from trial lots to full container exports.",
              "Third-party inspection for loading verification, sampling, seal checks.",
              "Documentation: certificate of analysis, invoice, packing list, certificate of origin, test reports.",
              "Export-ready with full traceability and logistics control.",
            ]}
          />
        ),

        specifications: [
          "Primary form plastics",
          "Finished plastic products",
          "Raw & processed rubber",
          "Rubber articles",
        ],
        features: [
          "Versatile Materials",
          "Custom Products",
          "Durable Solutions",
          "Industrial Applications",
        ],
        categoryId: 2,
      },
      {
        id: "energy-fuels-gases",
        name: "Energy, Fuels & Gases",
        images: [
          lazyImg("gas/g1.avif"),
          lazyImg("gas/g2.avif"),
          lazyImg("gas/g3.avif"),
          lazyImg("gas/g4.webp"),
        ],
        description: (
          <CommodityDescription
            intro="We supply crude oil, refined fuels, LNG/LPG, industrial gases, lubricants, coal, coke, and biofuels."
            items={[
              "HS code: 2701–2709 (coal/coke), 2710–2713 (fuels/lubricants), 2804–2811 (gases), 2207 (ethanol), 3826 (biodiesel).",
              "ISO/API/ASTM/EN testing methods with quantity and quality control documentation.",
              "Fuel analysis: density, API gravity, sulfur content, octane/cetane rating, distillation curve, flash/pour/cloud point.",
              "Gas specifications: purity %, Wobbe index, HHV, H₂S/mercaptans, moisture/dew point; odorization as required.",
              "Lubricant testing: viscosity grade, VI, TBN/TAN, oxidation stability, wear metals.",
              "Safety compliance: SDS, GHS/CLP labeling, UN numbers, tank calibration, seal verification.",
              "Applications: power generation, transport fuels, petrochemical feedstocks, metals processing, glass/cement kilns.",
              "Specialty gases for medical, food, welding, calibration, electronics-grade processes.",
              "Packaging and logistics: bulk tankers, pipelines, ISO tanks, cryogenic tanks, cylinders, rail/road transport.",
              "Temperature and pressure monitoring, bonding/grounding, vapor recovery per facility standards.",
              "Documentation: certificate of analysis, bill of lading, ullage/calibration reports, certificate of origin, inspection records.",
              "Specialty options: fuel additives, custom gas blends, low-sulfur variants, certified biofuel blends.",
              "Flexible order quantities from trial liftings to long-term contracts under FOB/CIF/Delivered terms.",
            ]}
          />
        ),
        specifications: [
          "Industrial gases",
          "Mineral fuels",
          "Petrochemical products",
          "Quality lubricants",
        ],
        features: [
          "Energy Solutions",
          "Industrial Gases",
          "Fuel Products",
          "Lubrication Systems",
        ],
        categoryId: 2,
      },
    ],
  },
  {
    id: 3,
    slug: "leather-textiles-clothing",
    name: "Leather, Textiles & Clothing",
    description: (
      <>Premium leather goods, fashion textiles, and clothing materials</>
    ),
    icon: Shirt,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    commodities: [
      {
        id: "leather-leather-products",
        name: "Leather & Leather Products",
        images: [
          lazyImg("leather/le1.avif"),
          lazyImg("leather/le2.avif"),
          lazyImg("leather/le3.avif"),
          lazyImg("leather/le4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Category spans wet-salted/wet-blue/crust hides, finished leathers, and made-ups (belts, wallets, bags, footwear uppers)."
            items={[
              "HS code: 4101–4115 (leather/skins), 4201–4203 (articles), 6403–6406 (footwear/parts).",
              "Standards-driven QA: thickness, yield, tensile/tear, flex, abrasion, finish adhesion, and grain uniformity.",
              "Chemical compliance: chromium VI, azo dyes, PCP, formaldehyde, heavy metals; compliant finishing systems.",
              "Color performance: rub fastness (dry/wet), migration, lightfastness per buyer specification.",
              "Odor and fogging checks for automotive/interior applications.",
              "Traceability and grade mapping from lot to finished cut components.",
              "Applications: footwear, upholstery, automotive interiors, leather goods, apparel trims.",
              "Value-added lines: embossed, corrected-grain, nubuck/suede, waterproof/oil-pull-up, fire-retardant.",
              "Cutting optimization and defect mapping to maximize yield and cost efficiency.",
              "Packaging: interleaved sheets, silica/desiccants, export cartons or bales; ISPM-15 pallets.",
              "Logistics: LCL for samples; FCL for bulk; temperature/ventilation per product.",
              "Pre-shipment QC: dimensional checks, finish inspection, metal-hardware pull tests for articles.",
              "Documentation: COA, restricted-substance declaration, packing list, invoice, certificate of origin.",
            ]}
          />
        ),

        specifications: [
          "Raw hides & skins",
          "Finished leather goods",
          "Handbags, belts & wallets",
          "Footwear & leather apparel",
        ],
        features: [
          "Premium Leather",
          "Finished Products",
          "Fashion Accessories",
          "Durable Quality",
        ],
        categoryId: 3,
      },
      {
        id: "textile-fabrics-fibers",
        name: "Textile Fabrics & Fibers",
        images: [
          lazyImg("textile/te1.avif"),
          lazyImg("textile/te2.avif"),
          lazyImg("textile/te3.avif"),
          lazyImg("textile/te4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio covers fibers, yarns, woven/knitted fabrics, technical textiles, and finishes."
            items={[
              "HS code: 5001–5509 (fibers/yarns), 5601–5705 (fabrics/woven), 5801–6006 (special fabrics/knitted).",
              "Quality specs: GSM, count/denier/tex, ends-picks, course/wale, tensile/tear/burst, evenness.",
              "Dimensional stability: shrinkage, skew, spirality; relaxation/wash protocols agreed.",
              "Color/appearance: shade approval, Lab* tolerance, colorfastness to wash, rub, perspiration, and light.",
              "Hand-feel and finish options: enzyme, silicon softener, mercerized, coated, water-repellent, FR.",
              "Compliance: OEKO-TEX/chemical conformance and restricted-substance alignment.",
              "Applications: apparel fabrics, upholstery, home textiles, industrial/technical end-uses.",
              "Defect control: AQL and 4-point fabric inspection with roll mapping.",
              "Packaging: roll packing with tubes, poly-wrap, humidity control; bale or pallet options.",
              "Logistics: LCL sample rolls; FCL fabric loads; humidity/temperature care.",
              "Pre-shipment: lab dips, bulk shade bands, test reports, roll-wise yardage and inspection charts.",
              "Documentation: invoice, packing list, certificate of origin, test summary.",
            ]}
          />
        ),

        specifications: [
          "Cotton, silk & wool textiles",
          "Synthetic & embroidered fabrics",
          "Technical & industrial textiles",
          "Textile yarns & fibers",
        ],
        features: [
          "Natural Fibers",
          "Synthetic Options",
          "Technical Applications",
          "Industrial Grade",
        ],
        categoryId: 3,
      },
      {
        id: "garments-apparel",
        name: "Garments & Apparel",
        images: [
          lazyImg("garments/ga1.avif"),
          lazyImg("garments/ga2.avif"),
          lazyImg("garments/ga3.avif"),
          lazyImg("garments/ga4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Coverage includes knitwear, wovens, denim, outerwear, activewear, uniforms, and kidswear."
            items={[
              "HS code: 6101–6117 (knit apparel), 6201–6217 (woven apparel), 6301–6310 (made-ups).",
              "Quality gates: fit/measurement specs, workmanship AQL, seam strength/slippage, stitch density.",
              "Performance tests: colorfastness (wash/rub/perspiration/light), pilling, snag, dimensional stability.",
              "Safety/compliance: needle detection, metal-hardware pull, sharp-point checks; chemical conformity.",
              "Sizing and grading control with tolerance charts and PPS/GP samples.",
              "Trims/embellishments validated for migration, durability, and wash resistance.",
              "Applications: retail/private label, workwear, promotional, and e-commerce programs.",
              "Packaging: polybags with size/GTIN labels, cartons by ratio packs, moisture control.",
              "Logistics: LCL pilot runs; FCL scale shipments; GOH or flat-pack as specified.",
              "Pre-shipment: inline & final inspection, carton audit, labeling/UPC verification.",
              "Documentation: invoice, packing list, certificate of origin, test reports, and inspection record.",
              "Value-added: quick-response replenishment, sustainable fibers, recycled content lines.",
            ]}
          />
        ),

        specifications: [
          "Sarees & ethnic wear",
          "Men, women, kids garments",
          "Hosiery & knitwear",
          "Denim garments",
        ],
        features: [
          "Ethnic Wear",
          "All Age Groups",
          "Knitwear Specialty",
          "Denim Products",
        ],
        categoryId: 3,
      },
      {
        id: "home-floor-textiles",
        name: "Home & Floor Textiles",
        images: [
          lazyImg("hometextiles/ho1.avif"),
          lazyImg("hometextiles/ho2.avif"),
          lazyImg("hometextiles/ho3.avif"),
          lazyImg("hometextiles/ho4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Category spans bed/bath linen, curtains, upholstery, table linen, rugs, carpets, and mats."
            items={[
              "HS code: 5701–5705 (carpets/rugs), 6301–6310 (home textiles/made-ups), 5801–5811 (decorative fabrics).",
              "Quality metrics: GSM/ply, absorbency, tensile/tear/burst, seam strength, tuft bind (carpets).",
              "Durability: abrasion (Martindale), pilling, snagging, and stitch/slippage resistance.",
              "Colorfastness: wash, rub, perspiration, water/chlorine, and light as per end-use.",
              "Dimensional stability and skew/torque control for washed items.",
              "Safety: flammability (as applicable), formaldehyde/chemical limits, anti-slip backing tests.",
              "Applications: retail, hospitality, institutional, and contract décor projects.",
              "Finishes: anti-microbial, stain-repellent, WR/PU coating, blackout/thermal, FR.",
              "Packaging: roll/flat-fold, insert cards, retail packs, vacuum packing for bulky items.",
              "Logistics: palletized cartons or bales; humidity control and desiccants for sea freight.",
              "Pre-shipment: size set verification, shade band approval, carton drop tests, labeling checks.",
              "Documentation: invoice, packing list, certificate of origin, test summary.",
            ]}
          />
        ),

        specifications: [
          "Quality carpets & rugs",
          "Bedsheets & towels",
          "Curtains & drapes",
          "Home textile accessories",
        ],
        features: [
          "Home Decor",
          "Quality Materials",
          "Comfort Products",
          "Interior Solutions",
        ],
        categoryId: 3,
      },
      {
        id: "fashion-accessories",
        name: "Fashion & Accessories",
        images: [
          lazyImg("handbag/h1.avif"),
          lazyImg("handbag/h2.avif"),
          lazyImg("handbag/h3.avif"),
          lazyImg("handbag/h4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Range covers handbags, small leather goods, belts, scarves, hats, wallets, and fashion jewelry."
            items={[
              "HS code: 4201–4203 (bags/leather goods), 6217 (accessories), 6504–6505 (headgear), 7113/7117 (jewelry).",
              "Material QA: leather grade/finish, fabric strength, hardware plating, zipper quality, and lining specs.",
              "Mechanical tests: seam/handle pull, rivet attachment, buckle/closure fatigue, stitch density.",
              "Chemical compliance: nickel release, lead/cadmium limits, azo dyes, phthalates where applicable.",
              "Color/appearance: shade tolerance, rub fastness, plating thickness, anti-tarnish treatment.",
              "Sizing and fit checks for belts/hats/gloves with tolerance charts.",
              "Applications: retail/private label, gifting/seasonal, promotional, and corporate programs.",
              "Packaging: dust bags, tissue, reinforced cartons, anti-tarnish tabs for jewelry; barcode/GTIN labeling.",
              "Logistics: GOH where needed; poly-bagged units with desiccants; LCL pilots to FCL rollouts.",
              "Pre-shipment: AQL inspection, needle detection where required, carton integrity and count verification.",
              "Documentation: invoice, packing list, certificate of origin, restricted-substance declaration, inspection record.",
              "Value-added: sustainable materials, recycled metals, RFID security tagging, customization/private label.",
            ]}
          />
        ),

        specifications: [
          "Textile accessories",
          "Scarves & shawls",
          "Fashion hats & gloves",
          "Style accessories",
        ],
        features: [
          "Fashion Forward",
          "Style Accessories",
          "Seasonal Items",
          "Quality Materials",
        ],
        categoryId: 3,
      },
    ],
  },
  {
    id: 4,
    slug: "machinery-equipment",
    name: "Machinery, Electrical Equipment & Vehicles",
    description: (
      <>
        Industrial machinery, electrical equipment, and transportation solutions
      </>
    ),
    icon: Cog,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    commodities: [
      {
        id: "industrial-heavy-machinery",
        name: "Industrial & Heavy Machinery",
        images: [
          lazyImg("ind/ind1.avif"),
          lazyImg("ind/ind2.avif"),
          lazyImg("ind/ind3.avif"),
          lazyImg("ind/ind4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio covers construction, mining, material handling, metalworking, and process-plant machinery."
            items={[
              "HS code: 8401–8486 (machinery), 8704–8705 (trucks/special vehicles), 8901–8908 (ships/boats).",
              "Engineering QA: dimensional accuracy, load rating, duty cycle, and vibration/noise thresholds.",
              "Materials and finishes verified for hardness, weld integrity, coating thickness, and corrosion resistance.",
              "Powertrain/hydraulics validated for pressure, flow, leak tightness, and thermal stability.",
              "Control systems: PLC/HMI readiness, sensor calibration, safety interlocks, and diagnostics.",
              "Compliance: guarding, emergency stops, CE-like safety conformity, and electrical protection levels.",
              "Applications: infrastructure projects, quarries, factories, ports/warehouses, and agro-processing.",
              "Preventive maintenance kits and wear parts programs available with documented MTBF.",
              "Packaging: skid/crate with rust inhibition, shock indicators, and moisture control.",
              "Shipment: LCL for spares; FCL/break-bulk for oversized units; lift plans and lashing diagrams included.",
              "Pre-shipment FAT/SAT, no-load/load tests, and alignment verification.",
              "Documentation: drawings, manuals, spare lists, test reports, and certificate of origin.",
              "After-sales options: remote commissioning support and operator training packages.",
            ]}
          />
        ),

        specifications: [
          "Industrial machinery",
          "Agricultural machinery",
          "Construction equipment",
          "Mining machinery",
        ],
        features: [
          "Heavy Duty",
          "Industrial Grade",
          "Multi-Purpose",
          "Reliable Performance",
        ],
        categoryId: 4,
      },
      {
        id: "engines-power-energy-equipment",
        name: "Engines, Power & Energy Equipment",
        images: [
          lazyImg("engines/en1.webp"),
          lazyImg("engines/en2.avif"),
          lazyImg("engines/en3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Coverage includes diesel/gas engines, gensets, turbines, alternators, switchgear, and balance-of-plant."
            items={[
              "HS code: 8401–8413 (engines/turbines), 8501–8504 (generators/transformers), 8506–8507 (batteries).",
              "Performance validation: kW/kVA output, efficiency, PF, harmonics, voltage regulation, and transient response.",
              "Fuel and cooling systems tested for consumption, emissions readiness, and thermal margins.",
              "Acoustic and vibration levels measured against site requirements; enclosure IP rating confirmed.",
              "Protection and control: AVR/governor tuning, sync/parallel capability, protections, and event logging.",
              "Applications: standby/prime power, microgrids, construction sites, data centers, and industrial plants.",
              "Fuel flexibility options (diesel, gas, dual-fuel) and hybrid integration with storage/solar interfaces.",
              "Packaging: skid-mounted or containerized power modules with integrated auxiliaries.",
              "Shipment: FCL or break-bulk; lifting lugs, center-of-gravity tags, and bracing provided.",
              "Pre-shipment FAT including load-bank tests and heat run; SAT support on request.",
              "Documentation: single-line diagrams, GA drawings, wiring, spares, and maintenance schedules.",
              "After-sales: commissioning assistance, training, and long-term service kits.",
            ]}
          />
        ),

        specifications: [
          "Engines & motors",
          "Pumps & compressors",
          "Power generators",
          "Electrical transformers",
        ],
        features: [
          "Power Solutions",
          "Energy Equipment",
          "High Efficiency",
          "Reliable Operation",
        ],
        categoryId: 4,
      },
      {
        id: "electrical-electronic-equipment",
        name: "Electrical & Electronic Equipment",
        images: [
          lazyImg("electronic/el1.avif"),
          lazyImg("electronic/el2.avif"),
          lazyImg("electronic/el3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Range includes switchgear, drives, transformers, cables, control panels, sensors, and industrial electronics."
            items={[
              "HS code: 8504–8538 (transformers/switches), 8544 (cables), 8531–8543 (electrical equipment), 9025–9029 (instruments).",
              "Electrical ratings verified for voltage class, short-circuit withstand, insulation, and temperature rise.",
              "Power quality: THD, EMC/EMI compatibility, surge immunity, and grounding/earthing design.",
              "Control and automation readiness with PLC/SCADA interfaces and industrial communication protocols.",
              "Safety compliance: enclosure IP/IK, creepage/clearance, and protective device coordination.",
              "Applications: factories, utilities, infrastructure, buildings, and process plants.",
              "Energy efficiency features: high-efficiency transformers, VFDs, soft starters, and smart metering.",
              "Packaging: anti-static protection, shock monitoring, desiccants, and humidity indicators.",
              "Shipment: palletized, crated, or containerized with tilt/impact recorders and secured busbars.",
              "Pre-shipment FAT/inspection: dielectric, ratio, routine and functional tests with test reports.",
              "Documentation: wiring diagrams, parameter sets, manuals, and spare-part lists.",
              "Lifecycle support: firmware updates, remote diagnostics, and field service options.",
            ]}
          />
        ),

        specifications: [
          "Switchgear & circuit breakers",
          "Wires & cables",
          "Electrical appliances",
          "Electronic components",
        ],
        features: [
          "Electrical Solutions",
          "Safety Equipment",
          "Quality Components",
          "Reliable Systems",
        ],
        categoryId: 4,
      },
      {
        id: "vehicles-transportation",
        name: "Vehicles & Transportation",
        images: [
          lazyImg("vehicles/ve1.webp"),
          lazyImg("vehicles/ve2.avif"),
          lazyImg("vehicles/ve3.avif"),
          lazyImg("vehicles/ve4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio spans passenger/commercial vehicles, buses, trailers, off-highway equipment, and material movers."
            items={[
              "HS code: 8601–8609 (rail vehicles), 8701–8716 (motor vehicles/parts), 8801–8803 (aircraft).",
              "Engineering validation: chassis strength, braking, steering, NVH, and durability cycles.",
              "Powertrain options: ICE, hybrid, and electric; charging interface and energy management readiness.",
              "Safety features: structural integrity, restraint systems, lighting, and driver-assist readiness per target specs.",
              "Applications: logistics, public transport, construction/mining sites, and municipal services.",
              "Body and interior options for payload, seating, climate control, and corrosion protection.",
              "Telematics/connectivity for fleet monitoring, maintenance scheduling, and route optimization.",
              "Packaging for CKD/SKD kits with assembly guides; rust inhibitors and protective films.",
              "Shipment: Ro-Ro, containerized CKD, or break-bulk; lashing schemes and tie-down points defined.",
              "Pre-shipment inspection: road tests, brake/ABS function, emission/OBD checks, and PDI.",
              "Documentation: parts books, service manuals, wiring diagrams, and spares lists.",
              "After-sales: training, toolkits, and warranty/maintenance programs.",
            ]}
          />
        ),

        specifications: [
          "Cars, motorcycles, trucks",
          "Auto parts & spares",
          "Bicycles",
          "Ships, boats & aircraft parts",
        ],
        features: [
          "Transportation Solutions",
          "Vehicle Parts",
          "Marine Equipment",
          "Aviation Components",
        ],
        categoryId: 4,
      },
      {
        id: "tools-precision-equipment",
        name: "Tools & Precision Equipment",
        images: [lazyImg("tools/tool1.avif"), lazyImg("tools/tool2.avif")],
        description: (
          <CommodityDescription
            intro="Coverage includes hand tools, power tools, cutting tools, metrology, fixtures, and test instruments."
            items={[
              "HS code: 8201–8215 (hand tools), 8466–8467 (machine tools), 9018–9031 (measuring/testing instruments).",
              "Material and heat-treat control for hardness, toughness, and wear resistance.",
              "Cutting performance validated for tool life, geometry, coating adhesion, and runout/accuracy.",
              "Metrology accuracy certified with calibration traceability and uncertainty budgets.",
              "Safety features for power tools: insulation class, guards, braking, and dust extraction interfaces.",
              "Applications: machining, fabrication, construction, MRO, electronics assembly, and labs.",
              "Packaging: rust-preventive wraps, thermoformed trays, foam inlays, and protective cases.",
              "Shipment: palletized cartons or flight cases with shock/tilt indicators; LCL/FCL as required.",
              "Pre-shipment QA: dimensional checks, balance, torque/insulation tests, and function verification.",
              "Documentation: calibration certificates, manuals, parts lists, and maintenance schedules.",
              "Value-added: custom kits, laser marking, inventory coding, and reorder programs.",
            ]}
          />
        ),

        specifications: [
          "Machine tools",
          "Precision equipment",
          "Industrial tools",
          "Quality instruments",
        ],
        features: [
          "Precision Tools",
          "Machine Equipment",
          "Industrial Grade",
          "High Accuracy",
        ],
        categoryId: 4,
      },
    ],
  },
  {
    id: 5,
    slug: "base-metals-materials",
    name: "Base Metals, Stone, Ceramic & Glass",
    description: "Steel, aluminum, building materials, and metal fabrications",
    icon: Hammer,
    color: "text-red-600",
    bgColor: "bg-red-50",
    commodities: [
      {
        id: "metals-alloys",
        name: "Metals & Alloys",
        images: [
          lazyImg("metals/metals1.avif"),
          lazyImg("metals/metals2.avif"),
          lazyImg("metals/metals3.avif"),
          lazyImg("metals/metals4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Coverage: ferrous (carbon/alloy/stainless) and non-ferrous (Al, Cu, Ni, Zn, Ti) metals and master alloys."
            items={[
              "HS code: 7201–7229 (iron/steel), 7301–7317 (steel articles), 7601–7617 (aluminum), 7401–7419 (copper), 7801–8113 (other metals).",
              "Forms: ingots, billets, blooms, slabs, coils, sheets/plates, bars/rods, wire, tubes, forgings, castings.",
              "Specs: chemical composition, grain size, inclusion control, and heat treatment (anneal, quench/temper).",
              "Mechanical properties to order: UTS/Y.S., elongation, hardness, impact, fatigue, creep where relevant.",
              "Surfaces/finishes: hot/cold rolled, pickled & oiled, polished, brushed, coated (Zn/Al/organic).",
              "NDT & integrity: UT, RT, MT/PT, eddy current; flatness, thickness, gauge and camber control.",
              "Standards alignment: ASTM/EN/DIN/JIS grades and mill certificates per heat/lot.",
              "Applications: construction steel, automotive, marine, aerospace, energy, food-grade, and machining stock.",
              "Value-added: cut-to-length, slitting, beveling, CNC saw, profile cutting, and CNC machining.",
              "Packaging: rust inhibitors, VCI wraps, edge protectors, wooden skids/crates; ISPM-15 pallets.",
              "Logistics: LCL for samples, FCL/break-bulk for heavy coils/plates; lifting/lashing plans provided.",
              "Pre-shipment QC: heat/lot traceability, dimensional maps, surface inspection, mechanical test COA.",
              "Documentation: invoice, packing list, certificate of origin, mill test certificate, inspection record.",
            ]}
          />
        ),

        specifications: [
          "Iron & steel products",
          "Aluminum & alloys",
          "Copper & brass",
          "Zinc, lead, nickel & tin",
        ],
        features: [
          "Multiple Metals",
          "Quality Alloys",
          "Industrial Grade",
          "Certified Materials",
        ],
        categoryId: 5,
      },
      {
        id: "metal-products-fabrications",
        name: "Metal Products & Fabrications",
        images: [
          lazyImg("fabrication/fb1.avif"),
          lazyImg("fabrication/fb2.avif"),
          lazyImg("fabrication/fb3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio: laser/plasma cut parts, formed/welded structures, sheet-metal enclosures, frames, railings, and assemblies."
            items={[
              "HS code: 7301–7326 (steel articles), 7411–7419 (copper articles), 7614–7616 (aluminum articles), 8201–8215 (tools).",
              "Manufacturing: CNC laser/punch, press brake, roll forming, stamping, machining, robotic welding.",
              "Welding/WPS: qualified procedures, welder quals, distortion control, and weld NDT (VT/MT/PT/UT).",
              "Finishes: galvanizing, electro-zinc, anodizing (Al), powder coating, liquid paint, passivation.",
              "Tolerances & GD&T held to drawings; flatness, perpendicularity, and hole positional accuracy verified.",
              "Fastening: rivets, PEM inserts, clinching, TIG/MIG spots, and bolted assemblies per torque spec.",
              "Functional checks: fit-up, cycle tests, load tests, vibration and environmental exposure as required.",
              "Applications: construction steelwork, machinery guards, cabinets, HVAC ducts, street furniture, OEM parts.",
              "Documentation: BOMs, drawings (2D/3D), weld maps, PPAP/FAI where applicable.",
              "Packaging: foam/film protection, corner boards, anti-scratch separators, crate/skid packing.",
              "Logistics: LCL for kits; FCL/break-bulk for oversize; lifting points and COG tagging included.",
              "Pre-shipment: dimensional inspection reports, coating thickness, adhesion/salt-spray data.",
              "Traceability: part/lot labels, routing cards, and batch-wise COA.",
            ]}
          />
        ),

        specifications: [
          "Wires & rods",
          "Pipes & tubes",
          "Structural metal products",
          "Castings & forgings",
        ],
        features: [
          "Fabricated Products",
          "Structural Solutions",
          "Custom Fabrication",
          "Quality Manufacturing",
        ],
        categoryId: 5,
      },
      {
        id: "building-construction-materials",
        name: "Building & Construction Materials",
        images: [
          lazyImg("building/bu1.webp"),
          lazyImg("building/bu2.avif"),
          lazyImg("building/bu3.avif"),
          lazyImg("building/bu4.avif"),
          lazyImg("building/bu5.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Category spans cement, aggregates, blocks/bricks, rebar/structurals, roofing, insulation, glass, doors/windows, and tiles."
            items={[
              "HS code: 6801–6815 (stone/cement), 6901–6924 (ceramics), 7001–7020 (glass), 3901–3926 (plastics), 4401–4419 (wood).",
              "Performance specs: compressive/flexural strength, density, water absorption, frost resistance, and dimensional tolerances.",
              "Durability: corrosion protection, alkali-silica control, sulfate resistance, UV/weathering performance.",
              "Fire & safety: fire rating/class, smoke/toxicity where applicable, and slip/impact resistance for floors.",
              "Thermal/acoustic: R-value/U-value, STC/NC metrics for insulation and glazing systems.",
              "Surface quality: gloss/matte, color/shade tolerance, glaze quality, and flatness.",
              "Applications: residential/commercial buildings, infrastructure, industrial facilities, and fit-outs.",
              "Standards alignment: product-specific EN/ASTM/ISO references and factory QA controls.",
              "Packaging: strapped pallets, edge guards, shrink wrap, desiccants; wooden crates for glass/stone.",
              "Logistics: FCL/break-bulk for heavy items; container loading plans and weight distribution charts.",
              "Pre-shipment: cube tests, bend tests, water absorption, dimensional checks, and visual grading.",
              "Documentation: invoice, packing list, certificate of origin, lot test reports, and inspection note.",
              "Value-added: custom colors, sizes, surface treatments, and ready-mix/project bundles.",
            ]}
          />
        ),

        specifications: [
          "Bricks, cement, tiles",
          "Ceramics & sanitaryware",
          "Glass & safety glass",
          "Natural stone (marble, granite, slate)",
        ],
        features: [
          "Construction Materials",
          "Ceramic Products",
          "Glass Solutions",
          "Natural Stone",
        ],
        categoryId: 5,
      },
      {
        id: "hardware-tools-fittings",
        name: "Hardware, Tools & Fittings",
        images: [
          lazyImg("hardware/hardware1.avif"),
          lazyImg("hardware/hardware2.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Range: fasteners, anchors, hinges, locks, handles, glass/door fittings, plumbing/brassware, and cabinet hardware."
            items={[
              "HS code: 7307–7326 (steel fasteners), 7411–7419 (copper fittings), 8301–8309 (misc. hardware), 8201–8215 (tools).",
              "Materials: carbon/stainless steel, brass/bronze, aluminum, zinc alloys; heat treatment where required.",
              "Finishes: electro-zinc, hot-dip galvanizing, nickel/chrome, PVD, anodizing, powder coat; salt-spray targets.",
              "Dimensional/functional checks: thread gauges, torque/drive, pull-out/push-in, cycle and fatigue tests.",
              "Safety/compatibility: lead-free brass options, food/water-contact conformance where applicable.",
              "Applications: construction/hardware retail, furniture, glazing, HVAC/plumbing, and fit-out projects.",
              "Packaging: small packs to bulk cartons; blister/kit sets; barcoded labels and instructions.",
              "Logistics: palletized cartons with corner boards and desiccants; LCL for assortments, FCL for bulk.",
              "Pre-shipment: AQL sampling, finish adhesion, plating thickness, thread fit and hardness checks.",
              "Documentation: invoice, packing list, certificate of origin, test summary, and inspection report.",
              "Value-added: custom assortments, private label, kitting, and hardware BOM consolidation.",
              "Traceability: batch coding, material certs, and finish lot records.",
              "After-sales: replenishment programs and spare-part kits for projects.",
            ]}
          />
        ),

        specifications: [
          "Tools & hardware",
          "Hand tools",
          "Locks & fittings",
          "Industrial hardware",
        ],
        features: [
          "Quality Tools",
          "Hardware Solutions",
          "Security Fittings",
          "Industrial Grade",
        ],
        categoryId: 5,
      },
      {
        id: "household-kitchen-laboratory-items",
        name: "Household, Kitchen & Laboratory Items",
        images: [
          lazyImg("household/household1.avif"),
          lazyImg("household/household2.avif"),
          lazyImg("household/household3.avif"),
          lazyImg("household/household4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio: stainless-steel cookware/utensils, cast aluminum, glassware, ceramic tableware, plastic storage, and basic labware."
            items={[
              "HS code: 7323–7324 (steel household), 3919–3924 (plastics), 7010–7018 (glass/labware), 6911–6914 (ceramics), 7615 (aluminum).",
              "Food-contact quality: migration limits, metal release, BPA-free plastics as specified.",
              "Performance: thickness/weight, thermal conductivity, non-stick adhesion, impact/chip resistance, dishwasher/oven safety.",
              "Labware basics: beakers, flasks, cylinders; heat/chemical shock and dimensional accuracy checks.",
              "Surface & finish: polish grade, coating integrity, glaze quality, and color/shade tolerance.",
              "Applications: retail, hospitality, institutional kitchens, and education/lab supply.",
              "Packaging: color boxes, mailer cartons, protective inserts, corner guards; drop-test verified.",
              "Logistics: palletized master cartons, moisture control, barcoded SKUs; LCL for assortments, FCL for programs.",
              "Pre-shipment QC: visual AQL, dimensional checks, leakage tests, handle/rivet pull tests.",
              "Traceability: batch/lot codes, cookware coating batch records, and glaze/ink lot control.",
              "Documentation: invoice, packing list, certificate of origin, test reports per item type.",
              "Value-added: private label, sets/kitting, multi-language IFUs and shelf-ready packaging.",
              "Sustainability options: recycled steel/aluminum, glass, and refillable storage systems.",
            ]}
          />
        ),

        specifications: [
          "Metal & glass kitchenware",
          "Quality cutlery",
          "Laboratory glassware",
          "Household items",
        ],
        features: [
          "Kitchen Solutions",
          "Quality Cutlery",
          "Lab Equipment",
          "Household Items",
        ],
        categoryId: 5,
      },
      {
        id: "jewelry-stones",
        name: "Jewelry & Stones",
        images: [
          lazyImg("jewelry/jewelry1.avif"),
          lazyImg("jewelry/jewelry2.avif"),
          lazyImg("jewelry/jewelry3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Range covers fine jewelry (gold/silver/platinum), fashion jewelry, loose diamonds, and colored gemstones."
            items={[
              "HS code: 7102–7104 (diamonds/gems), 7106–7108 (silver/gold/platinum), 7113–7114 (precious jewelry), 7117 (imitation jewelry).",
              "Metal quality: fineness/hallmark, karat accuracy, plating thickness (Au/Rh/Pd), solder integrity.",
              "Gem parameters: 4Cs for diamonds; color/clarity/origin and treatment disclosure for colored stones.",
              "Mechanical checks: prong/setting security, clasp/hinge fatigue, and chain tensile tests.",
              "Chemical/safety: nickel release, lead/cadmium limits, and skin-contact compliance where applicable.",
              "Finishing: polish, symmetry, stone alignment, rhodium flash, and anti-tarnish treatments.",
              "Certification options: grading reports for significant stones and batch QC for melee.",
              "Applications: retail, bridal, fashion/private label, corporate gifting, and OEM lines.",
              "Packaging: display boxes, pouches, anti-tarnish tabs, tamper-evident seals; barcoded labels.",
              "Logistics: insured shipments, sealed parcels, and discreet packing; LCL/FCL or courier for high-value.",
              "Pre-shipment: 100% visual check, random destructive clasp tests, weight verification, and metal assay.",
              "Documentation: invoice, packing list, certificate of origin, metal assay/grading summaries.",
              "Value-added: custom design/CAD, engraving, matching sets, and recycled-metal options.",
            ]}
          />
        ),

        specifications: [
          "Semi-precious stones",
          "Fashion jewelry",
          "Non-precious jewelry",
          "Quality gemstones",
        ],
        features: [
          "Precious Stones",
          "Fashion Jewelry",
          "Quality Gems",
          "Decorative Items",
        ],
        categoryId: 5,
      },
    ],
  },
  {
    id: 6,
    slug: "wood-wood-products",
    name: "Wood & Wood Products",
    description: "Sustainable wood products, furniture, and wooden materials",
    icon: TreePine,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    commodities: [
      {
        id: "raw-processed-wood",
        name: "Raw & Processed Wood",
        images: [
          lazyImg("wood/wood1.webp"),
          lazyImg("wood/wood2.avif"),
          lazyImg("wood/wood3.avif"),
          lazyImg("wood/wood4.avif"),
          lazyImg("wood/wood5.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio spans round logs, sawn timber, KD/AD lumber, veneers, plywood, LVL/CLT, MDF/HDF, and chips/pellets."
            items={[
              "HS code: 4401–4413 (wood/logs/boards), 4410–4413 (plywood/panels), 4415–4421 (wooden articles).",
              "Moisture management: kiln/air-dried to target MC with calibrated meters and conditioning protocols.",
              "Grading per species and use: appearance/structural grades, knot/defect limits, straightness, and warpage.",
              "Mechanical properties verified: density, MOR/MOE, screw withdrawal, bond strength for panels.",
              "Adhesive/UF/MF/PMDI systems controlled for formaldehyde/low-emission classes as specified.",
              "Surface prep: planed/S4S, sanded, calibrated thickness; ready for finishing or fabrication.",
              "Sustainability options: certified legal harvest, due-diligence documentation, and chain-of-custody.",
              "Applications: construction framing, joinery, furniture cores, flooring substrates, packaging, and biomass.",
              "Processing services: ripping, crosscutting, finger-jointing, edge-gluing, CNC profiling.",
              "Packaging: poly-wrapped packs with stickers, VCI (where needed), corner boards, and strapped bundles.",
              "Logistics: FCL/break-bulk for heavy packs; stow plans and dunnage to control movement/humidity.",
              "Pre-shipment QC: MC charts, grade tally, dimension maps, bond tests for panels.",
              "Documentation: invoice, packing list, certificate of origin, species declaration, and fumigation/ISPM-15 records.",
            ]}
          />
        ),

        specifications: [
          "Timber & logs",
          "Quality plywood",
          "Wooden boards",
          "Bamboo products",
        ],
        features: [
          "Sustainable Sourcing",
          "Quality Materials",
          "Eco-Friendly",
          "Versatile Products",
        ],
        categoryId: 6,
      },
      {
        id: "furniture-furnishings",
        name: "Furniture & Furnishings",
        images: [
          lazyImg("furniture/fr1.avif"),
          lazyImg("furniture/fr3.avif"),
          lazyImg("furniture/fr4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Coverage: case goods, seating, dining/bedroom sets, cabinetry, modular/flat-pack, outdoor, and upholstery."
            items={[
              "HS code: 9401–9403 (furniture), 9404 (mattresses/assemblies), 9405–9406 (lamps/illumination), 4414/4418 (joinery).",
              "Engineering & durability: static/impact/cycle tests for chairs, tables, and beds to buyer standards.",
              "Materials: solid wood, engineered panels, metal frames, rattan, and compliant foam/fabrics.",
              "Finish systems: PU/AC/waterborne/oil; stain and color matching with gloss and adhesion targets.",
              "Dimensional control for knock-down fittings; hardware torque and pull-out values verified.",
              "Safety & compliance: stability/anti-tip, sharp edge/point checks, flame/smoke where required.",
              "Upholstery QA: fabric/leather rub fastness, seam strength, foam density, recovery.",
              "Applications: residential, hospitality, office, education, and outdoor projects/private label.",
              "Packaging: ISTA drop-tested flat packs, corner protectors, honeycomb/foam inserts, and moisture barriers.",
              "Logistics: FCL mixed loads or dedicated SKUs; assembly manuals and hardware kits included.",
              "Pre-shipment: line/final inspection, finish acceptance panels, carton integrity checks.",
              "Documentation: invoice, packing list, certificate of origin, assembly guides, and QC reports.",
              "Value-added: CAD customization, colorways, BOM optimization, and spare/after-sales kits.",
            ]}
          />
        ),

        specifications: [
          "Quality furniture",
          "Wooden flooring",
          "Doors & windows",
          "Interior furnishings",
        ],
        features: [
          "Premium Furniture",
          "Flooring Solutions",
          "Architectural Elements",
          "Interior Design",
        ],
        categoryId: 6,
      },
      {
        id: "wooden-articles-utilities",
        name: "Wooden Articles & Utilities",
        images: [lazyImg("woodan/wo1.avif"), lazyImg("woodan/wo2.avif")],
        description: (
          <CommodityDescription
            intro="Range includes kitchenware (boards, bowls, utensils), home décor, organizers, toys/games, and pallets/crates."
            items={[
              "HS code: 4415 (pallets/crates), 4419 (table/kitchenware), 4420 (ornamental articles), 9503 (selected toys).",
              "Material selection by species for food-contact, durability, and appearance; grain/orientation controlled.",
              "Surface & finish: food-safe oils/waxes or compliant coatings; smoothness and edge radius verified.",
              "Dimensional accuracy and warp control through proper drying, lamination, and joint design.",
              "Safety checks: splinter/edge, small-parts and coating migration for toys; load tests for pallets/crates.",
              "Hygiene & food-contact compliance: migration limits and clean manufacturing practices where applicable.",
              "Branding-ready through laser/engrave/deboss options and barcode/GTIN labelling.",
              "Applications: retail, hospitality, gifting, storage/物流, and industrial packaging flows.",
              "Packaging: shrink/poly wrap, protective paper, inner cartons, desiccants; retail-ready sets on request.",
              "Logistics: assorted LCL shipments or FCL program loads; humidity-controlled stuffing as needed.",
              "Pre-shipment QC: visual AQL, dimensions, finish adhesion, functional/load tests per SKU.",
              "Documentation: invoice, packing list, certificate of origin, compliance/test summaries.",
              "Sustainability options: recycled/fast-growing species, waste minimization, and certified wood supply.",
            ]}
          />
        ),

        specifications: [
          "Wooden handicrafts",
          "Packaging materials",
          "Utility items",
          "Decorative articles",
        ],
        features: [
          "Handcrafted Items",
          "Packaging Solutions",
          "Utility Products",
          "Decorative Pieces",
        ],
        categoryId: 6,
      },
    ],
  },
  {
    id: 7,
    slug: "precious-metals",
    name: "Precious Metals",
    description:
      "Gold, silver, platinum, and precious jewelry for investment and trade",
    icon: Gem,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    commodities: [
      {
        id: "precious-metals-commodities",
        name: "Precious Metals Commodities",
        images: [
          lazyImg("gold/gold1.webp"),
          lazyImg("gold/gold2.avif"),
          lazyImg("gold/gold3.avif"),
          lazyImg("gold/gold4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Full-spectrum coverage: gold, silver, platinum, palladium, jewelry articles, and bullion/coins for investment and industry."
            items={[
              "HS code: 7106–7108 (silver/gold/platinum unwrought), 7110 (manufacturing), 7112 (scrap), 7113–7114 (jewelry), 7118 (coins).",
              "Purity to market fineness: Au 995–999.9‰, Ag 999–999.9‰, Pt/Pd 999.5‰ with serialized traceability.",
              "Assay methods: fire assay for Au/Ag; instrumental analysis (e.g., XRF/ICP) for multi-element verification.",
              "Dimensional and weight tolerances controlled for bars/blanks; hallmarking and fineness marks on jewelry.",
              "Jewelry QA: alloy composition, hardness, solder integrity, plating thickness, setting security, and polish.",
              "Industrial forms for electronics and catalysts: controlled particle size, surface area, and impurity profiles.",
              "Security protocols: tamper-evident packs, numbered seals, dual-control custody, and vault-ready documentation.",
              "Packaging formats: sealed assay cards/capsules for retail; vacuum foil/pouches, lined cans, or drums for industrial.",
              "Logistics: insured air/courier for high value; dedicated secure cages or sealed FCL for volume consignments.",
              "Compliance set: COA/assay certificate, packing list, invoice, certificate of origin, and sealed-sample records.",
              "Pre-shipment controls: weight reconciliation, serial match, dimensional checks, and independent witness assays.",
              "Applications: investment portfolios, jewelry manufacturing, electronics/connectors, catalysts, dental/medical, and PV.",
              "Commercial readiness: flexible MOQs from trial lots to institutional volumes with end-to-end traceability.",
            ]}
          />
        ),

        specifications: [
          "Gold & silver",
          "Platinum & palladium",
          "Precious metal jewelry",
          "Bullion & coins",
        ],
        features: [
          "Investment Grade",
          "Certified Purity",
          "Precious Jewelry",
          "Collectible Coins",
        ],
        categoryId: 7,
      },
    ],
  },
  {
    id: 8,
    slug: "miscellaneous-manufactures",
    name: "Miscellaneous Manufactures",
    description:
      "Sports equipment, musical instruments, toys, and household items",
    icon: Gift,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    commodities: [
      {
        id: "toys-games-sports",
        name: "Toys, Games & Sports",
        images: [lazyImg("toys/toys1.avif"), lazyImg("toys/toys2.avif")],
        description: (
          <CommodityDescription
            intro="Category includes indoor/outdoor toys, puzzles, educational kits, playground sets, and sports gear."
            items={[
              "HS code: 9503 (toys), 9504 (games/puzzles), 9506 (sports equipment), 9508 (rides/amusement).",
              "Materials: plastic, wood, rubber, metal, fabric composites; non-toxic paints and finishes.",
              "Safety standards: EN 71, ASTM F963, ISO 8124 for mechanical, chemical, and flammability safety.",
              "Testing: small parts, tension, torque, drop, and chemical migration (phthalates, heavy metals).",
              "Age-grade and labeling verified for compliance and proper packaging instructions.",
              "Sports equipment tested for rebound, grip, tensile, and impact performance.",
              "Applications: retail, institutional sports supply, playground projects, and promotional products.",
              "Packaging: blister, display boxes, color cartons, shrink packs; retail and bulk options.",
              "Logistics: palletized cartons, moisture control, barcode labeling; LCL or FCL per SKU.",
              "Pre-shipment: AQL inspection, labeling verification, and performance checks.",
              "Documentation: invoice, packing list, certificate of origin, and compliance certificates.",
              "Value-added: custom branding, private label packaging, and certified eco-friendly toy lines.",
            ]}
          />
        ),

        specifications: [
          "Quality toys",
          "Sports goods",
          "Safety certified",
          "Age-appropriate designs",
        ],
        features: [
          "Safe Materials",
          "Sports Equipment",
          "Educational Toys",
          "Quality Assured",
        ],
        categoryId: 8,
      },
      {
        id: "arts-music-education",
        name: "Arts, Music & Education",
        images: [lazyImg("art/art1.avif"), lazyImg("art/art2.avif")],
        description: (
          <CommodityDescription
            intro="Covers art supplies, musical instruments, educational aids, stationery, and creative kits."
            items={[
              "HS code: 9201–9209 (musical instruments), 9609 (stationery), 4901–4905 (books/prints).",
              "Materials: wood, metal, paper, plastics, textiles depending on product type.",
              "Art media tested for pigment concentration, non-toxicity, and color permanence.",
              "Instruments validated for tuning accuracy, tone stability, and component finishing.",
              "Educational sets verified for safety, usability, and ergonomic design for various age groups.",
              "Applications: schools, training centers, studios, retail, and cultural institutions.",
              "Packaging: protective cartons, padded cases, tubes, shrink wrap, and color display boxes.",
              "Logistics: LCL/FCL, humidity and shock protection for sensitive items.",
              "Quality checks: tone calibration (instruments), count accuracy (stationery), surface integrity (canvas).",
              "Documentation: invoice, packing list, certificate of origin, and test report.",
              "Value-added: private label kits, eco-friendly materials, and multi-language instruction sets.",
            ]}
          />
        ),

        specifications: [
          "Musical instruments",
          "Stationery items",
          "Educational materials",
          "Creative supplies",
        ],
        features: [
          "Musical Quality",
          "Educational Value",
          "Creative Tools",
          "Professional Grade",
        ],
        categoryId: 8,
      },
      {
        id: "gifts-handicrafts-decorative",
        name: "Gifts, Handicrafts & Decorative Items",
        images: [
          lazyImg("gift/gift1.avif"),
          lazyImg("gift/gift2.avif"),
          lazyImg("gift/gift3.avif"),
          lazyImg("gift/gift4.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Portfolio includes handmade crafts, glass/ceramic décor, souvenirs, candles, and seasonal gifts."
            items={[
              "HS code: 6913–6914 (ceramics), 7013–7018 (glass), 8306 (statues), 9602–9606 (misc. items), 9703 (collections).",
              "Materials: metal, wood, glass, ceramic, resin, textiles, recycled composites.",
              "Finishing: polish, enamel, plating, coating, glazing, and hand-painting verified for durability.",
              "Design validation: dimensional stability, balance, and adhesion of decorative elements.",
              "Chemical compliance: lead-free glazes, non-toxic paints, and REACH-conforming coatings.",
              "Applications: retail, gifting, hospitality décor, and corporate gifting.",
              "Packaging: bubble-wrap, foam, corner protection, gift boxes, and export cartons.",
              "Logistics: FCL for volume orders, LCL for assorted ranges; humidity-controlled where needed.",
              "Pre-shipment inspection: visual AQL, adhesion, finish consistency, and count verification.",
              "Documentation: invoice, packing list, certificate of origin, test/craft authenticity certificate.",
              "Value-added: eco-friendly/recycled crafts, local artistry, and private-label branding options.",
            ]}
          />
        ),

        specifications: [
          "Gift articles",
          "Handcrafted items",
          "Decorative pieces",
          "Novelty items",
        ],
        features: [
          "Unique Gifts",
          "Handcrafted Quality",
          "Decorative Appeal",
          "Novelty Designs",
        ],
        categoryId: 8,
      },
      {
        id: "fashion-personal-accessories",
        name: "Fashion & Personal Accessories",
        images: [
          lazyImg("watches/watch1.avif"),
          lazyImg("watches/watch2.avif"),
          lazyImg("watches/watch3.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Category covers handbags, wallets, belts, scarves, sunglasses, watches, and jewelry accessories."
            items={[
              "HS code: 4202–4203 (bags/leather), 6101–6117/6201–6217 (apparel accessories), 7117 (jewelry), 9004 (eyewear).",
              "Material QA: leather/fabric strength, plating thickness, clasp/buckle pull, and seam durability.",
              "Finishes verified for colorfastness, anti-tarnish, and scratch resistance.",
              "Safety compliance: nickel release, lead/cadmium, azo dye and phthalate content control.",
              "Style and sizing validation for belts, eyewear frames, and headwear tolerances.",
              "Applications: retail, fashion brands, gifting, private label, and promotional markets.",
              "Packaging: dust bags, pouches, boxes, or blisters with barcodes and GTINs.",
              "Logistics: LCL samples; FCL for bulk; anti-tarnish tabs, moisture control, and secure sealing.",
              "Pre-shipment: visual inspection, function checks, and lab tests for coatings/metal release.",
              "Documentation: invoice, packing list, certificate of origin, compliance declaration.",
              "Value-added: sustainable materials, RFID integration, recycled alloys, and branding support.",
            ]}
          />
        ),

        specifications: [
          "Clocks & watches",
          "Optical goods",
          "Travel accessories",
          "Luggage & bags",
        ],
        features: [
          "Fashion Accessories",
          "Travel Solutions",
          "Quality Timepieces",
          "Optical Products",
        ],
        categoryId: 8,
      },
      {
        id: "household-daily-use-items",
        name: "Household & Daily Use Items",
        images: [
          lazyImg("baby/baby1.webp"),
          lazyImg("baby/baby2.avif"),
          lazyImg("household/household1.avif"),
          lazyImg("household/household2.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Range includes home essentials, storage, cleaning tools, organizers, utensils, and lifestyle items."
            items={[
              "HS code: 3924 (plastics), 7323–7324 (steel household), 7615 (aluminum), 6911–6914 (ceramics), 7013–7018 (glassware).",
              "Quality metrics: thickness, impact strength, finish uniformity, and ergonomic performance.",
              "Food-contact and hygiene compliance per relevant safety standards.",
              "Durability tests for handles, seals, hinges, and coating adhesion under daily-use conditions.",
              "Applications: household retail, institutional supply, hospitality, and e-commerce packs.",
              "Finishing options: polish, enamel, powder coating, or printed surfaces.",
              "Packaging: polywrap, cartons, vacuum packs, barcoded SKU labels.",
              "Logistics: palletized shipments, humidity protection, and stack stability.",
              "Pre-shipment QC: AQL visual checks, fit/function verification, and packaging tests.",
              "Documentation: invoice, packing list, certificate of origin, and product conformity report.",
              "Value-added: private label sets, promotional assortments, and sustainable packaging solutions.",
            ]}
          />
        ),

        specifications: [
          "Household items",
          "Baby products",
          "Daily use articles",
          "Safety certified",
        ],
        features: [
          "Household Solutions",
          "Baby Safety",
          "Daily Essentials",
          "Quality Products",
        ],
        categoryId: 8,
      },
    ],
  },
  {
    id: 9,
    slug: "antiques",
    name: "Antiques",
    description:
      "Rare antique furniture, art, collectibles, and historical items",
    icon: Crown,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    commodities: [
      {
        id: "antique-commodities",
        name: "Antique Commodities",
        images: [
          lazyImg("antique/an1.avif"),
          lazyImg("antique/an2.avif"),
          lazyImg("antique/an3.avif"),
          lazyImg("antique/an4.avif"),
          lazyImg("antique/an5.avif"),
        ],
        description: (
          <CommodityDescription
            intro="Category includes antique furniture, jewelry, paintings, coins, manuscripts, and archaeological artifacts."
            items={[
              "HS code: 9701 (paintings/sculptures), 9702 (antiques >100 years), 9704 (stamps), 9705 (collections), 9706 (archaeological items).",
              "Authenticity: age verification, provenance documentation, and expert appraisal certificates.",
              "Material preservation: humidity/temperature control, pest and corrosion prevention.",
              "Conservation standards: museum-grade restoration materials and reversible methods.",
              "Handling and packaging per cultural heritage export guidelines.",
              "Security: sealed crates, tamper-proof documentation, and GPS-tracked shipments for valuables.",
              "Applications: collectors, museums, auction houses, galleries, and heritage investors.",
              "Packaging: climate-controlled crates, desiccants, shock and vibration monitoring devices.",
              "Logistics: insured air/sea freight with heritage compliance documents.",
              "Documentation: export license (if required), provenance, condition report, certificate of authenticity.",
              "Compliance: UNESCO/UNIDROIT heritage protection regulations and national export laws.",
              "Value-added: cataloging, digital imaging, restoration, and curatorial condition summaries.",
            ]}
          />
        ),

        specifications: [
          "Antique furniture & jewelry",
          "Art & paintings",
          "Coins & stamps",
          "Archaeological objects & rare manuscripts",
        ],
        features: [
          "Historical Value",
          "Authenticated Pieces",
          "Collectible Items",
          "Cultural Heritage",
        ],
        categoryId: 9,
      },
    ],
  },
];

export const getCommodityByCategory = (
  categorySlug: string
): CommodityCategory | undefined => {
  return commoditiesData.find((category) => category.slug === categorySlug);
};

export const getCommodityById = (
  categorySlug: string,
  commodityId: string
): Commodity | undefined => {
  const category = getCommodityByCategory(categorySlug);
  return category?.commodities.find(
    (commodity) => commodity.id === commodityId
  );
};

export const getAllCategories = (): CommodityCategory[] => {
  return commoditiesData;
};
