import type { SpecRow } from "./evSpecifications";
import { concreteSpecificationsForModel } from "./concreteSpecifications";
import { evSpecificationsForModel } from "./evSpecifications";
import { otherMachinerySpecificationsForModel } from "./otherMachinerySpecifications";
import { roadEarthSpecificationsForModel } from "./roadEarthSpecifications";

/**
 * Prefer EV workbook rows when present, then other machinery, concrete machinery, then road-building / earth-moving diesel tables.
 */
export function productSpecificationsForModel(model: string): SpecRow[] {
  const ev = evSpecificationsForModel(model);
  if (ev.length > 0) return ev;
  const other = otherMachinerySpecificationsForModel(model);
  if (other.length > 0) return other;
  const concrete = concreteSpecificationsForModel(model);
  if (concrete.length > 0) return concrete;
  return roadEarthSpecificationsForModel(model);
}

function isBlankSpecValue(value: string): boolean {
  const trimmed = value.trim();
  return trimmed === "" || trimmed === "/" || trimmed === "\\";
}

/** Rows shown in the Parameters table — drops blank or placeholder values. */
export function displayProductSpecifications(model: string): SpecRow[] {
  return productSpecificationsForModel(model).filter(
    (row) => row.item.trim() !== "" && !isBlankSpecValue(row.parameter),
  );
}
