
export type DisplaySubtype = {
  name: string;
  slug: string;
  models: string[];
};

export type DisplayCategory = {
  key: string;
  tab: string;
  label: string;
  blurb: string;
  subtypes: DisplaySubtype[];
};

export const displayEquipmentCatalog: DisplayCategory[] = [
  {
    key: "earth-moving",
    tab: "Earth Moving",
    label: "Earth Moving",
    blurb:
      "Wheel loaders and Excavators built for productivity, fuel efficiency, and reliability on Nepal jobsites.",
    subtypes: [
      {
        name: "Wheel loader",
        slug: "wheelloader",
        models: ["Lw200kv", "ZL30E", "XC936", "XC938", "XC958", "XC938EV", "XC968EV"],
      },
      {
        name: "Excavator",
        slug: "excavator",
        models: ["XE140I_K", "XE215I_K", "XE230CLC", "XE380C"],
      },
    ],
  },
  {
    key: "electric-vehicle",
    tab: "EV",
    label: "Electric Vehicle",
    blurb:
      "Battery electric loaders, excavators, pavers, rough terrain cranes, and rollers for lower-emission jobsite operations.",
    subtypes: [
      {
        name: "Wheel loader",
        slug: "wheelloader",
        models: ["XC938EV", "XC968EV", "XC975EV", "XC918EV"],
      },
      {
        name: "Excavator",
        slug: "excavator",
        models: ["XE215EV"],
      },
      {
        name: "Paver",
        slug: "paver",
        models: ["RP905HEV"],
      },
      {
        name: "Rough terrain crane",
        slug: "rough-terrain-crane",
        models: ["XCR40_EV"],
      },
      {
        name: "Roller",
        slug: "roller",
        models: ["XS265HEV"],
      },
    ],
  },
  {
    key: "road-building",
    tab: "Road Building",
    label: "Road Building Machinery",
    blurb: "Graders and pneumatic rollers for road building, finishing, and compaction.",
    subtypes: [
      { name: "Grader", slug: "grader", models: ["GR150", "GR165"] },
      { name: "Pneumatic roller", slug: "pneumatic-roller", models: ["XP163"] },
    ],
  },
  {
    key: "hoisting",
    tab: "Hoisting",
    label: "Hoisting Machinery",
    blurb: "Truck-mounted and truck cranes for lifting, placement, and demanding pick-and-carry work.",
    subtypes: [
      {
        name: "Truck mounted crane",
        slug: "truck-mounted-crane",
        models: ["SQS125TL_4", "SQS68TL_5"],
      },
      {
        name: "Truck crane",
        slug: "truck-crane",
        models: ["XCT25L4_Y", "XCT25_Y1", "XCT50_Y1", "XCT80_Y1", "XCT110_Y1"],
      },
    ],
  },
  {
    key: "underground-mining",
    tab: "Underground",
    label: "Underground Mining Machinery",
    blurb: "Road headers and drill jumbos for underground excavation and support operations.",
    subtypes: [
      {
        name: "Road header",
        slug: "road-header",
        models: ["XTR4/260", "XTR6/280", "XTR7/360"],
      },
      {
        name: "Drill jumbo",
        slug: "drill-jumbo",
        models: ["XUD135", "XUD275", "XUD295"],
      },
    ],
  },
  {
    key: "piling",
    tab: "Drilling",
    label: "Drilling Machinery",
    blurb: "Rotary drilling rigs for foundation, bridge, and geotechnical applications.",
    subtypes: [
      {
        name: "Rotary drilling rig",
        slug: "drilling-rig",
        models: ["XR138E", "XR158E", "XR178E", "XR210I", "XR240E"],
      },
    ],
  },
  {
    key: "concrete",
    tab: "Concrete",
    label: "Concrete Machinery",
    blurb: "Self-loading mixers and shotcrete equipment for concrete placement and sprayed applications.",
    subtypes: [
      { name: "Self loading mixer", slug: "self-loading-mixer", models: ["SLM4"] },
      { name: "Shotcrete", slug: "shotcrete", models: ["XS3017S"] },
    ],
  },
  {
    key: "other-machinery",
    tab: "Other",
    label: "Other Machinery",
    blurb:
      "Dozers, soil compactors, horizontal directional drilling rigs, and backhoe loaders for specialised earthworks and utility installation.",
    subtypes: [
      {
        name: "Dozer",
        slug: "dozer",
        models: ["D170", "D170LGP", "D5AT", "D260(EU StageⅠ)", "D360(EU StageⅠ)"],
      },
      {
        name: "Soil compactor",
        slug: "soil-compactor",
        models: ["XH235L", "XH285L", "XH365L(Stage Ⅴ)", "XH365L(Stage Ⅲ)"],
      },
      {
        name: "Horizontal directional drilling rig",
        slug: "horizontal-directional-drilling-rig",
        models: ["XZ450E-R", "XZ6000F", "XZ3000F", "XZ1000E", "XZ230E", "XZ6600", "XZ5000F"],
      },
      {
        name: "Backhoe loader",
        slug: "backhoe-loader",
        models: ["XC8-S3580", "XC8-S3570", "XC8-C2570", "XC8-S2570", "XC8-S0750", "WZ30-25"],
      },
    ],
  },
];

export function productHref(segment: string, subtype: string, model: string) {
  const params = new URLSearchParams({
    segment,
    subtype,
    model,
  });
  return `/products?${params.toString()}`;
}

export function productsSegmentHref(segmentKey: string) {
  return `/products?${new URLSearchParams({ segment: segmentKey }).toString()}`;
}

export function productsSubtypeHref(segmentKey: string, subtypeSlug: string) {
  return `/products?${new URLSearchParams({ segment: segmentKey, subtype: subtypeSlug }).toString()}`;
}

function modelKey(model: string) {
  return model.replace(/\s+/g, "").replace(/-/g, "_").toUpperCase();
}

const wheelLoaderImages: Record<string, string> = {
  LW200KV: "/equipment/wheelloaders/LW200KV.png",
  ZL30E: "/equipment/wheelloaders/ZL30E.png",
  XC936: "/equipment/wheelloaders/XC936.png",
  /** Diesel XC938; provisional hero until a dedicated XC938 render is added. */
  XC938: "/equipment/wheelloaders/XC936.png",
  XC958: "/equipment/wheelloaders/XC958.png",
  XC938EV: "/equipment/electric-vehicles/EV-PIC/XC938-EV.png",
  XC968EV: "/equipment/electric-vehicles/EV-PIC/XC968-EV.png",
  XC975EV: "/equipment/electric-vehicles/EV-PIC/XC975-EV.png",
  XC918EV: "/equipment/electric-vehicles/EV-PIC/XC918-EV.png",
};

const excavatorImages: Record<string, string> = {
  XE140I_K: "/equipment/excavators/XE140I-K.png",
  XE215I_K: "/equipment/excavators/XE215I-K.png",
  XE215EV: "/equipment/electric-vehicles/EV-PIC/XE215-EV.png",
  XE230CLC: "/equipment/excavators/XE230CLC.png",
  XE380C: "/equipment/excavators/XE380C.png",
};

const pneumaticRollerImages: Record<string, string> = {
  XP163: "/equipment/pneumatic-rollers/XP163.png",
};

const drillJumboImages: Record<string, string> = {
  XUD135: "/equipment/drill-jumbos/XTD135.png",
  XUD275: "/equipment/drill-jumbos/XTD275.png",
  XUD295: "/equipment/drill-jumbos/XTD295.png",
};

const shotcreteImages: Record<string, string> = {
  XS3017S: "/equipment/shotcrete/XS3017S.png",
};

const selfLoadingMixerImages: Record<string, string> = {
  SLM4: "/equipment/self-loading-mixers/SLM4.png",
};

const graderImages: Record<string, string> = {
  GR150: "/equipment/graders/GR150.png",
  GR165: "/equipment/graders/GR165.png",
};

const drillingRigImages: Record<string, string> = {
  XR138E: "/equipment/drilling-rigs/XR138E.png",
  XR158E: "/equipment/drilling-rigs/XR158E.png",
  XR178E: "/equipment/drilling-rigs/XR178E.png",
  XR210I: "/equipment/drilling-rigs/XR210I.png",
  XR210C: "/equipment/drilling-rigs/XR210I.png",
  XR240E: "/equipment/drilling-rigs/XR240E.png",
};

const roadHeaderImages: Record<string, string> = {
  "XTR4/260": "/equipment/road-headers/XTR4-260.png",
  "XTR6/280": "/equipment/road-headers/XTR6-280.png",
  "XTR7/360": "/equipment/road-headers/XTR7-360.png",
};

const truckCraneImages: Record<string, string> = {
  XCT25L4_Y: "/equipment/truck-cranes/XCT25L4.png",
  XCT25_Y1: "/equipment/truck-cranes/XCT25-Y1.png",
  XCT50_Y1: "/equipment/truck-cranes/XCT50-Y1.png",
  XCT80_Y1: "/equipment/truck-cranes/XCT80-Y1.png",
  XCT110_Y1: "/equipment/truck-cranes/XCT110-Y1.png",
};

const truckMountedCraneImages: Record<string, string> = {
  SQS125TL_4: "/equipment/truck-mounted-cranes/SQS125TL-4.png",
  /** Listed model SQS68TL_5; on-disk asset remains TL-4 until a TL-5 render is added. */
  SQS68TL_5: "/equipment/truck-mounted-cranes/SQS68TL-4.png",
};

const paverImages: Record<string, string> = {
  RP905HEV: "/equipment/electric-vehicles/EV-PIC/RP905HEV.png",
};

const rollerImages: Record<string, string> = {
  XS265HEV: "/equipment/electric-vehicles/EV-PIC/XS265HEV.png",
};

const roughTerrainCraneImages: Record<string, string> = {
  XCR40_EV: "/equipment/electric-vehicles/EV-PIC/XCR40_EV.png",
};

const dozerImages: Record<string, string> = {
  D170: "/equipment/dozers/D170.png",
  D170LGP: "/equipment/dozers/D170LGP.png",
  D5AT: "/equipment/dozers/D5AT.png",
  "D260(EUSTAGEⅠ)": "/equipment/dozers/D260.png",
  "D360(EUSTAGEⅠ)": "/equipment/dozers/D360.jpg",
};

const soilCompactorImages: Record<string, string> = {
  XH235L: "/equipment/soil-compactors/XH235L.jpg",
  XH285L: "/equipment/soil-compactors/XH285L-render.png",
  "XH365L(STAGEⅤ)": "/equipment/soil-compactors/XH365L-Stage-V-render.png",
  "XH365L(STAGEⅢ)": "/equipment/soil-compactors/XH365L-Stage-III-render.png",
};

const horizontalDirectionalDrillingRigImages: Record<string, string> = {
  XZ450E_R: "/equipment/horizontal-directional-drilling-rigs/XZ450E-R.png",
  XZ6000F: "/equipment/horizontal-directional-drilling-rigs/XZ6000F.png",
  XZ3000F: "/equipment/horizontal-directional-drilling-rigs/XZ3000F.png",
  XZ1000E: "/equipment/horizontal-directional-drilling-rigs/XZ1000E.png",
  XZ230E: "/equipment/horizontal-directional-drilling-rigs/XZ230E.png",
  XZ6600: "/equipment/horizontal-directional-drilling-rigs/XZ6600.png",
  XZ5000F: "/equipment/horizontal-directional-drilling-rigs/XZ5000F.png",
};

const backhoeLoaderImages: Record<string, string> = {
  XC8_S3580: "/equipment/backhoe-loaders/XC8-S3580.png",
  XC8_S3570: "/equipment/backhoe-loaders/XC8-S3570.png",
  XC8_C2570: "/equipment/backhoe-loaders/XC8-C2570.png",
  XC8_S2570: "/equipment/backhoe-loaders/XC8-S2570.png",
  XC8_S0750: "/equipment/backhoe-loaders/XC8-S0750.png",
  WZ30_25: "/equipment/backhoe-loaders/WZ30-25.png",
};

export function equipmentImageForModel(model: string, subtypeSlug: string): string | null {
  const k = modelKey(model);
  if (subtypeSlug === "wheelloader") {
    return wheelLoaderImages[k] ?? null;
  }
  if (subtypeSlug === "excavator") {
    return excavatorImages[k] ?? null;
  }
  if (subtypeSlug === "pneumatic-roller") {
    return pneumaticRollerImages[k] ?? null;
  }
  if (subtypeSlug === "drill-jumbo") {
    return drillJumboImages[k] ?? null;
  }
  if (subtypeSlug === "shotcrete") {
    return shotcreteImages[k] ?? null;
  }
  if (subtypeSlug === "self-loading-mixer") {
    return selfLoadingMixerImages[k] ?? null;
  }
  if (subtypeSlug === "grader") {
    return graderImages[k] ?? null;
  }
  if (subtypeSlug === "road-header") {
    return roadHeaderImages[k] ?? null;
  }
  if (subtypeSlug === "drilling-rig") {
    return drillingRigImages[k] ?? null;
  }
  if (subtypeSlug === "truck-crane") {
    return truckCraneImages[k] ?? null;
  }
  if (subtypeSlug === "truck-mounted-crane") {
    return truckMountedCraneImages[k] ?? null;
  }
  if (subtypeSlug === "paver") {
    return paverImages[k] ?? null;
  }
  if (subtypeSlug === "roller") {
    return rollerImages[k] ?? null;
  }
  if (subtypeSlug === "rough-terrain-crane") {
    return roughTerrainCraneImages[k] ?? null;
  }
  if (subtypeSlug === "dozer") {
    return dozerImages[k] ?? null;
  }
  if (subtypeSlug === "soil-compactor") {
    return soilCompactorImages[k] ?? null;
  }
  if (subtypeSlug === "horizontal-directional-drilling-rig") {
    return horizontalDirectionalDrillingRigImages[k] ?? null;
  }
  if (subtypeSlug === "backhoe-loader") {
    return backhoeLoaderImages[k] ?? null;
  }
  return null;
}

/** Transparency is supported by Next's optimizer; only SVGs bypass it. */
export function equipmentImageShouldBypassOptimization(src: string): boolean {
  return src.toLowerCase().endsWith(".svg");
}

export function excavatorUsesUnifiedFraming(subtypeSlug: string): boolean {
  return subtypeSlug === "excavator";
}

/** XE380C asset is tighter in-frame than other excavators — slightly lower scale avoids crop and “oversized” thumbs. */
export function excavatorShouldUseReducedZoom(model: string): boolean {
  return modelKey(model) === "XE380C";
}

export function wheelLoaderShouldZoomImage(model: string): boolean {
  const k = modelKey(model);
  if (wheelLoaderIsEvModel(k)) return false;
  return Boolean(wheelLoaderImages[k]);
}

export function wheelLoaderShouldModerateZoom(model: string): boolean {
  if (wheelLoaderIsEvModel(modelKey(model))) return false;
  return modelKey(model) === "XC958";
}

export function wheelLoaderShouldShiftDown(model: string): boolean {
  if (wheelLoaderIsEvModel(modelKey(model))) return false;
  return modelKey(model) === "LW200KV";
}

export function wheelLoaderShouldSlightShiftDown(model: string): boolean {
  if (wheelLoaderIsEvModel(modelKey(model))) return false;
  return modelKey(model) === "XC958";
}

export function wheelLoaderShouldUseLightZoom(model: string): boolean {
  if (wheelLoaderIsEvModel(modelKey(model))) return false;
  return modelKey(model) === "XC938EV";
}

function wheelLoaderIsEvModel(model: string): boolean {
  return model === "XC918EV" || model === "XC938EV" || model === "XC968EV" || model === "XC975EV";
}
