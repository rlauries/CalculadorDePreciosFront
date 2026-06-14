import { useMemo, useState } from "react";
import { getTrussConfiguration } from "./trussCalculations.ts";
import "./TrussCalculator.css";

const trussTypes = [
  { value: "gable", label: "Gable" },
  { value: "liner", label: "Liner" },
  { value: "end-wall", label: "End Wall" },
  { value: "header", label: "Header" },
  { value: "lean-to", label: "Lean-To" },
  { value: "mono-slope", label: "Mono Slope" },
];

const pitches = [
  "2/12",
  "3/12",
  "4/12",
  "5/12",
  "6/12",
  "7/12",
  "8/12",
  "9/12",
  "10/12",
  "12/12",
];
const frameSizes = [
  '2x2',
  '2x3',
  '3x3',
];

const frameThicknesses = [
  { value: 0.093, label: '.093"' },
  { value: 0.125, label: '1/8"' },
  { value: 0.188, label: '3/16"' },
  { value: 0.25, label: '1/4"' },
];
const webSizes = [
  '1-1/4 x 1-1/4',
  '2x2',
];

const webThicknesses = [
  { value: 0.093, label: '.093"' },
  { value: 0.125, label: '1/8"' },
  { value: 0.188, label: '3/16"' },
  { value: 0.25, label: '1/4"' },
];


export default function TrussCalculator() {
  const [trussType, setTrussType] = useState("gable");
  const [bottomBar, setBottomBar] = useState(249);
  const [pitch, setPitch] = useState("4/12");
  const [height, setHeight] = useState(16);
  const [frameSize, setFrameSize] = useState('2x2');
  const [frameThickness, setFrameThickness] = useState(0.125);
  const [webSize, setWebSize] = useState('1-1/4 x 1-1/4');
  const [webThickness, setWebThickness] = useState(0.093);
  const result = useMemo(() => {
    return getTrussConfiguration({
      trussType,
      bottomBar,
      pitch,
      height,
      frameSize,
      frameThickness,
      webSize,
      webThickness,
    });
  }, [
    trussType,
    bottomBar,
    pitch,
    height,
    frameSize,
    frameThickness,
    webSize,
    webThickness,
  ]);

  return (
    <div className="truss-calculator" 
         style={{ maxWidth: 700, margin: "auto", padding: 24 }}
    >
       <h2>Truss Material Calculator</h2>
       <p>This calculator will help you determine the materials needed for your truss.</p>
       <br /><br />
      <label className="truss-field">
        Truss Type:
        <select
            value={trussType}
            onChange={(e) => setTrussType(e.target.value)}
        >
            {trussTypes.map((type) => (
            <option key={type.value} value={type.value}>
                {type.label}
            </option>
            ))}
        </select>
      </label>
      <br /><br />     

      <div className="truss-form-grid">
        <label className="truss-field">
          Frame Material:
          <select
              value={frameSize}
              onChange={(e) => setFrameSize(e.target.value)}
          >
              {frameSizes.map((size) => (
              <option key={size} value={size}>
                  {size}
              </option>
              ))}
          </select>
        </label>
        <label className="truss-field">
          Frame Thickness:
          <select
            value={frameThickness}
            onChange={(e) => setFrameThickness(Number(e.target.value))}
          >
            {frameThicknesses.map((thickness) => (
              <option key={thickness.value} value={thickness.value}>
                {thickness.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <br /><br />
      <div className="truss-form-grid">      
        <label className="truss-field">
          Web Material:
          <select
              value={webSize}
              onChange={(e) => setWebSize(e.target.value)}
          >
              {webSizes.map((size) => (
              <option key={size} value={size}>
                  {size}
              </option>
              ))}
          </select>
        </label>
        <label className="truss-field">
          Web Thickness:
          <select
            value={webThickness}
            onChange={(e) => setWebThickness(Number(e.target.value))}
          >
            {webThicknesses.map((thickness) => (
              <option key={thickness.value} value={thickness.value}>
                {thickness.label}
              </option>
            ))}
          </select>
        </label>
      </div>  
        <br /><br />
        
        <div className="truss-divider"></div>
        <label className="truss-field">
          Bottom Bar Length (inches):
          <input
            type="number"
            value={bottomBar}
            onChange={(e) => setBottomBar(Number(e.target.value))}
          />{" "}
          
        </label>

        <br /><br />

        <label className="truss-field">
          Roof Pitch / Profile (degrees):
          <select value={pitch} onChange={(e) => setPitch(e.target.value)}>
            {pitches.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <br /><br />

        <label className="truss-field">
          Height (inches):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />{" "}
          inches
        </label>

      <div className="truss-divider"></div>

      <h3>Fabrication Sheet</h3>

      <table className="truss-table">
        <tbody>
          <tr>
            <td>Bottom Bar</td>
            <td>{result.bottomBar}"</td>
          </tr>
          <tr>
            <td>Top Bar</td>
            <td>{result.topBar}"</td>
          </tr>
          <tr>
            <td>Roof Pitch / Profile</td>
            <td>{result.pitch}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{result.height}"</td>
          </tr>
          <tr>
            <td>Vertical Trusses</td>
            <td>
              {result.verticalTrusses} pcs @ {result.verticalLength}"
            </td>
          </tr>
          <tr>
            <td>Cross Trusses</td>
            <td>
              {result.crossTrusses} pcs @ {result.crossLength}"
            </td>
          </tr>
          <tr>
            <td>Frame Material</td>
            <td>{result.frameMaterial}</td>
          </tr>
          <tr>
            <td>Web Material</td>
            <td>{result.webMaterial}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}