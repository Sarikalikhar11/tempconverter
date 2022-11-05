const calculateTemp = () =>{
    const numberTemp = document.querySelector("#temp").value;
    const tempSelect = document.querySelector("#temp_diff");
    const valueTemp = temp_diff.options[tempSelect.selectedIndex];

    const celToFah = (cel) =>{
        let farenheit = Math.round((cel*9/5)+32);
        return farenheit;
    }
    const fahToCel = (feh) =>{
        let celcius = Math.round((feh-32) * 5/9);
        return celcius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.querySelector("#resultContainer").innerHTML = `= ${result}°Farenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.querySelector("#resultContainer").innerHTML = `= ${result}°Celsius`;
    }
}