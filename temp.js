function Temp() {
    let C = document.getElementById("celcius").value;
    const f = (C*9/5)+32;
    document.getElementById("farenhite").value = f;
    return f;
    }