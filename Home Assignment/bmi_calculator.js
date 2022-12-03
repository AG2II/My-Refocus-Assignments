//Formula: BMI = (weight) / (height * height)

function calculateBMI(height, weight) {//height in cm. weight in kg
    if (height === "" || isNaN(height)) 
        console.log("Provide a valid Height!");
    else if (weight === "" || isNaN(weight)) 
        console.log("Provide a valid Weight!");
    else {
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6){
            console.log(`Under Weight : ${bmi}`);
        }else if (bmi >= 18.6 && bmi < 24.9){
            console.log(`Normal : ${bmi}`);
        }else{
            console.log(`Over Weight : ${bmi}`);
        } 
    }
}

calculateBMI(174,60);