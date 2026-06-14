
export interface TrussInputs {
  trussType: string;
  bottomBar: number;
  height: number;
  pitch: string;
  frameSize: string;
  frameThickness: number;
  webSize: string;
  webThickness: number;
}
export interface TrussResult {
  topBar: number;
  bottomBar: number;
  pitch: string;
  height: number;
  verticalTrusses: number;
  verticalLength: number;
  crossTrusses: number;
  crossLength: number;
  frameMaterial: string;
  webMaterial: string;
}
export function getTrussConfiguration(data: TrussInputs): TrussResult {
  switch (data.trussType) {
    case "gable":
      return calculateGable(data);

    case "liner":
      return calculateLiner(data);

    default:
      return calculateGable(data);
  }
}

export function calculateGable(data: TrussInputs): TrussResult {
  return {
    topBar: data.bottomBar + 24,
    bottomBar: data.bottomBar,
    pitch: data.pitch,
    height: data.height,

    verticalTrusses: Math.floor(data.bottomBar / 72),
    verticalLength: data.height - data.frameThickness * 3,

    crossTrusses: 21,
    crossLength: 18,

    frameMaterial: `${data.frameSize} x ${data.frameThickness}`,
    webMaterial: `${data.webSize} x ${data.webThickness}`,
  };
}

export function calculateLiner(data: TrussInputs): TrussResult {
  return calculateGable(data);
}



export function calculateEndWall() {}
export function calculateHeader() {}
export function calculateLeanTo() {}
export function calculateMonoSlope() {}