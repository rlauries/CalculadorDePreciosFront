export default class LeadModel {
    constructor( name = null , email = "", phoneNumber = "", additionalInformation = null, files = null){
        
        if (!email) throw new Error("Email is required");
        if (!phoneNumber) throw new Error("Phone number is required");
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.additionalInformation = additionalInformation;
        this.files = files;
    }
}