import type { SpecRow } from "./evSpecifications";
import { concreteSpecificationsForModel } from "./concreteSpecifications";
import { evSpecificationsForModel } from "./evSpecifications";
import { roadEarthSpecificationsForModel } from "./roadEarthSpecifications";

/**
 * Prefer EV workbook rows when present, then concrete machinery, then road-building / earth-moving diesel tables.
 */
export function productSpecificationsForModel(model: string): SpecRow[] {
  const ev = evSpecificationsForModel(model);
  if (ev.length > 0) return ev;
  const concrete = concreteSpecificationsForModel(model);
  if (concrete.length > 0) return concrete;
  return roadEarthSpecificationsForModel(model);
}
