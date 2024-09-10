export default class CustomerModelForAPI {
    constructor(id = 0,
        name = "",
        companyName= "",
        email= "",
        phoneNumber= "",
        address= "",
        city="",
        state="",
        zipCode=0,
        )
    {
        this.id = id;
        this.name = name;
        this.companyName = companyName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        
    }
}