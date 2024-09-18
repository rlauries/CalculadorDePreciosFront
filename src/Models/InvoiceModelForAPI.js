// InvoiceModelForPI.js
import FenceModelForAPI from "./FenceModelForAPI";

export default class InvoiceModelForAPI extends FenceModelForAPI {
  constructor(fenceModel, numberOfGates = 0, stateName) {
    // Llama al constructor de la clase padre con los parámetros adecuados
    super(
      fenceModel.typeOfFence,
      fenceModel.sqFeet,
      fenceModel.horizontalTubes,
      fenceModel.tubeWidth,
      fenceModel.gap
    );

    // Inicializa las propiedades específicas de la clase hija
    this.typeOfFence = fenceModel.typeOfFence;
    this.sqFeet = fenceModel.sqFeet;
    this.horizontalTubes = fenceModel.horizontalTubes;
    this.tubeWidth = fenceModel.tubeWidth;
    this.gap = fenceModel.gap;

    this.numberOfGates = numberOfGates;
    this.stateName = stateName;
    
  }
}
