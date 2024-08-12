
export default class FenceModelForAPI{
  
  constructor(typeOfFence, 
              sqFeet = 0, 
              horizontalTubes = 0, 
              tubeWidth = 0,
              gap = 0,
             )
  {
    this.typeOfFence = typeOfFence;
    this.sqFeet = sqFeet;
    this.horizontalTubes = horizontalTubes;
    this.tubeWidth = tubeWidth;
    this.gap = gap;
    
  }

  
};
