class Validator {
    static checkIfAllFilled = (fieldDataArray) => {
        let errorsCount = 0;
        let singleError = "Unknown validation error occurred";
        fieldDataArray.forEach(fieldData => {
            if (!this.checkIfFilled(fieldData.element)) {
                errorsCount++;
                singleError = fieldData.errorMessage;
            }
        });
        return {errorsCount: errorsCount, errorMessage: errorsCount > 1 ? "Multiple fields validation failed" : singleError };
    };

    static checkIfFilled = (fieldData) => {
        return !(fieldData === null || fieldData === undefined || fieldData === "" || fieldData === " ");
    };

    static checkPassword = (password0, password1, errorMessage) => {
        if (!(this.checkIfFilled(password0) && this.checkIfFilled(password1) && password0 === password1)) {
            return {errorsCount: 1, errorMessage: errorMessage};
        }
        return {errorsCount: 0, errorMessage: ""};
    };

    static checkIfGreater = (from, to, errorMessage) => {
        if (!(this.checkIfFilled(from) && this.checkIfFilled(to) && from < to)) {
            return {errorsCount: 1, errorMessage: errorMessage};
        }
        return {errorsCount: 0, errorMessage: ""};
    };
}

export default Validator;
