const calculate = {
    BMI: function(height, weight) {//height in cm. weight in kg
        if (height === "" || isNaN(height)){ 
            return 'Provide a valid Height!';
        }else if (weight === "" || isNaN(weight)) 
            return 'Provide a valid Weight!';
        else {
            let bmi = (weight / ((height * height) 
                                / 10000)).toFixed(2);
    
            if (bmi < 18.6){
                return parseFloat(bmi);
            }else if (bmi >= 18.6 && bmi < 24.9){
                return parseFloat(bmi);
            }else{
                return parseFloat(bmi);
            } 
        }
    },
}

module.exports = calculate;



