/**
 * Created by leelanarasimha on 13/4/18.
 */

export class Form {
    constructor(value) {
        console.log("form called");
        this.percentage = value;
    }

    updatePercentage() {
        this.percentage++;
    }

    getPercentage() {
        return this.percentage;
    }

    
}




