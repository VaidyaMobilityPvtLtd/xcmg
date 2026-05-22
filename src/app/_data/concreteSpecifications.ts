import type { SpecRow } from "./evSpecifications";

/** Parameter tables from “specification for CONCRETE MACHINERY.xlsx”. */
export const concreteSpecificationsByModel: Record<string, SpecRow[]> = {
  "SLM4": [{ item: "Quantity", unit: "m³", parameter: "4" }, { item: "Bucket capacity", unit: "L", parameter: "700" }, { item: "Drum rotation angle", unit: "°", parameter: "270" }, { item: "Curb weight", unit: "kg", parameter: "9700" }],
  "XS30175": [{ item: "Max.theoretical spraying capacity", unit: "m³/h", parameter: "30" }, { item: "Output pressure", unit: "Mpa", parameter: "8" }, { item: "Max.spraying height", unit: "m", parameter: "17" }, { item: "Max.front spraying distance", unit: "m", parameter: "14" }, { item: "Max. operation depth", unit: "m", parameter: "7" }],
};

/** Product description copy from the same workbook (when provided per sheet). */
export const concreteDescriptionsByModel: Record<string, string> = {
  "SLM4": "A self-loading concrete mixer is primarily used in situations that require on-site concrete production, such as road and railway construction, highway slope or wall works, dams, drainage systems, and various water conservancy projects. It is also well-suited for infrastructure projects in confined spaces and is especially useful in remote locations where access to a concrete batching plant is limited.\n\nThis machine combines multiple functions into a single unit, including material loading, weighing, mixing, transportation, and discharge. Its all-in-one design ensures efficient operation, ease of use, and strong adaptability to different site conditions.",
  "XS30175": "The XCMG XS-series concrete shotcrete trucks are designed to deliver efficient and high-quality spraying performance. They offer a wide spraying range, smooth and stable operation, and precise positioning, ensuring accuracy during construction.\n\nThese machines also feature minimal reversing impact and reduced material rebound, resulting in better surface finish and improved spraying uniformity. With advanced technology, strong overall performance, high reliability, and long-lasting durability, the XS-series provides a dependable solution for various shotcrete applications.",
};

export function concreteSpecModelKey(model: string): string {
  return model.replace(/\s+/g, "").toUpperCase();
}

export function concreteSpecificationsForModel(model: string): SpecRow[] {
  const key = concreteSpecModelKey(model);
  return concreteSpecificationsByModel[key] ?? [];
}

export function concreteDescriptionForModel(model: string): string | undefined {
  const key = concreteSpecModelKey(model);
  const d = concreteDescriptionsByModel[key];
  return d && d.trim() !== "" ? d : undefined;
}
