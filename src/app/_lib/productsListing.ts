import {
  excavatorShouldUseReducedZoom,
  excavatorUsesUnifiedFraming,
  wheelLoaderShouldModerateZoom,
  wheelLoaderShouldShiftDown,
  wheelLoaderShouldSlightShiftDown,
  wheelLoaderShouldUseLightZoom,
  wheelLoaderShouldZoomImage,
} from "../_data/displayEquipment";

/** Turns URL slug segments like `wheel-loader` into display text. */
export function formatEquipmentTypeLabel(raw: string): string {
  return raw
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const portfolioImageByCategory: Record<string, string> = {
  "earth-moving": "/portfolio-categories/earth-moving.png",
  "road-building": "/portfolio-categories/road-building.png",
  hoisting: "/portfolio-categories/hoisting.png",
  piling: "/portfolio-categories/piling.png",
  "underground-mining": "/portfolio-categories/underground-mining.png",
  concrete: "/portfolio-categories/concrete.png",
  "electric-vehicle": "/portfolio-categories/electric-vehicle.png",
};

export function portfolioImageForCategory(categoryKey: string): string {
  return portfolioImageByCategory[categoryKey] ?? "/hero2.png";
}

export type EquipmentModelCardVisual = {
  /** Padding inside the image frame */
  framePaddingClass: string;
  /** Scale / translate on the product image */
  imageScaleClass: string;
  /** Excavator-style framing (bottom-aligned image) */
  excavatorLayout: boolean;
};

export type EquipmentModelCardVisualOptions = {
  /**
   * When true, omit zoom / scale transforms so the full image stays inside frames that use
   * `overflow-hidden` (avoids clipping booms, buckets, and stick outlines on PNG cutouts).
   */
  containWithoutCrop?: boolean;
};

/** Tailwind classes for listing grid thumbnails (wheel loaders vs excavators). */
export function equipmentModelCardVisual(
  subtypeSlug: string,
  model: string,
  options?: EquipmentModelCardVisualOptions,
): EquipmentModelCardVisual {
  const zoomWheelLoader = subtypeSlug === "wheelloader" && wheelLoaderShouldZoomImage(model);
  const moderateWheelLoader = subtypeSlug === "wheelloader" && wheelLoaderShouldModerateZoom(model);
  const lightZoomWheelLoader = subtypeSlug === "wheelloader" && wheelLoaderShouldUseLightZoom(model);
  const shiftDownWheelLoader = subtypeSlug === "wheelloader" && wheelLoaderShouldShiftDown(model);
  const slightShiftDownWheelLoader = subtypeSlug === "wheelloader" && wheelLoaderShouldSlightShiftDown(model);
  const zoomExcavator = excavatorUsesUnifiedFraming(subtypeSlug);
  const excavatorLoose = zoomExcavator && excavatorShouldUseReducedZoom(model);

  let framePaddingClass: string;
  if (zoomWheelLoader) {
    framePaddingClass = lightZoomWheelLoader ? "p-4" : "p-3";
  } else if (moderateWheelLoader) {
    framePaddingClass = "p-4";
  } else if (zoomExcavator) {
    framePaddingClass = excavatorLoose ? "p-3.5" : "p-3";
  } else {
    framePaddingClass = "p-4";
  }

  let imageScaleClass: string;
  if (zoomWheelLoader) {
    if (lightZoomWheelLoader) imageScaleClass = "scale-[1.2] translate-y-2";
    else if (shiftDownWheelLoader) imageScaleClass = "scale-[1.28] translate-y-1.5";
    else if (slightShiftDownWheelLoader) imageScaleClass = "scale-[1.28] translate-y-2";
    else imageScaleClass = "scale-[1.28]";
  } else if (moderateWheelLoader) {
    imageScaleClass = "scale-[1.1] origin-center";
  } else if (zoomExcavator) {
    imageScaleClass = excavatorLoose
      ? "scale-[1.06] origin-bottom translate-y-1"
      : "scale-[1.14] origin-bottom translate-y-0.5";
  } else {
    imageScaleClass = "scale-[1.03]";
  }

  if (options?.containWithoutCrop) {
    imageScaleClass = "";
  }

  return {
    framePaddingClass,
    imageScaleClass,
    excavatorLayout: zoomExcavator,
  };
}

function normalizeModelKey(model: string): string {
  return model.replace(/\s+/g, "").toUpperCase();
}

/** Product detail hero — listing-style zoom for most wheel loaders; EV PNGs stay smaller to avoid clipping. */
export function equipmentModelDetailImageClass(subtypeSlug: string, model: string): string {
  if (subtypeSlug === "wheelloader") {
    const k = normalizeModelKey(model);
    const isEv = k === "XC918EV" || k === "XC938EV" || k === "XC968EV" || k === "XC975EV";
    if (isEv) return "origin-center scale-[1.14]";
    if (k === "LW200KV") return "origin-center scale-[1.5] translate-y-1";
    return "origin-center scale-[1.42]";
  }

  const card = equipmentModelCardVisual(subtypeSlug, model);
  if (card.imageScaleClass) return card.imageScaleClass;
  return "origin-center scale-[1.05]";
}
