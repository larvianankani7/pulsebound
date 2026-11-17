export interface RadialCoordinate {
  x: number;
  y: number;
  angle: number;
  placement: "top" | "bottom";
}

/**
 * Calculates radial (x, y) coordinates for desktop and tablet garden layouts.
 * Starts at 12 o'clock (-PI / 2) and distributes evenly clockwise around center (0, 0).
 */
export function getGardenOrbitCoordinates(
  index: number,
  total: number,
  radius: number
): RadialCoordinate {
  if (total <= 0) return { x: 0, y: 0, angle: 0, placement: "bottom" };

  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = Math.round(radius * Math.cos(angle));
  const y = Math.round(radius * Math.sin(angle));
  const placement = y < 0 ? "top" : "bottom";

  return { x, y, angle, placement };
}

/**
 * Computes optimal orbit radius based on the number of garden items.
 * Guarantees generous clearance from central condition vessel (radius ~100px)
 * while keeping all nodes safely within stage boundaries (~580px width/height).
 */
export function getDynamicGardenRadius(total: number): number {
  if (total <= 4) return 190;
  if (total <= 6) return 205;
  if (total <= 8) return 220;
  return 235;
}
