export declare function setColorValue(color: string): {
  r: any
  g: any
  b: any
  a: any
  h: number
  s: number
  v: number
}
export declare function createAlphaSquare(size: number): HTMLCanvasElement
export declare function createLinearGradient(
  direction: any,
  ctx: any,
  width: any,
  height: any,
  color1: any,
  color2: any
): void
export declare function rgb2hex({ r, g, b }: any, toUpper: boolean): string
export declare function hex2rgb(hex: any): {
  r: number
  g: number
  b: number
}
export declare function rgb2rgba(rgba: any): any
export declare function rgb2hsv({ r, g, b }: any): {
  h: number
  s: number
  v: number
}
export declare function hsv2rgb({
  h,
  s,
  v,
}: {
  h: number
  s: number
  v: number
}): {
  r: number
  g: number
  b: number
}
export declare function hsv2hsl({
  h,
  s,
  v,
}: {
  h: number
  s: number
  v: number
}): {
  h: number
  s: number
  v: number
  l: number
}
export declare function hsv2hslString(data: {
  h: number
  s: number
  v: number
}): string
