declare module "normalize-wheel" {
  interface NormalizedWheelEvent {
    spinX: number;
    spinY: number;
    pixelX: number;
    pixelY: number;
  }
  export default function normalizeWheel(event: WheelEvent): NormalizedWheelEvent;
}
