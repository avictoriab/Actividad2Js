function calcular(){
    var nombreCapturar = document.getElementById("nombretxt").value;
    var apellidoCapturar = document.getElementById("apellidotxt").value;
    var cedulaCapturar = document.getElementById("cedulatxt").value;
    var horasdiurnas = document.getElementById("horasdiurnastxt").value;
    var horasnocturnas = document.getElementById("horasnocturnastxt").value;
    var horasvespertinas = document.getElementById("horasvespertinastxt").value;

    const resultado1 = document.getElementById('resultado1');
    const resultado2 = document.getElementById('resultado2');
    const resultado3 = document.getElementById('resultado3');
    const resultado4 = document.getElementById('resultado4');
    const resultado5 = document.getElementById('resultado5');

    let costohorad = 675;
    let costohorav = 700;
    let costohoran = 956.23;

    let quincena = (horasdiurnas * costohorad + horasvespertinas * costohorav + horasnocturnas * costohoran)/2;

    let sueldomensual = (horasdiurnas * costohorad + horasvespertinas * costohorav + horasnocturnas * costohoran);
  
    if(quincena<85000){
        ah = 0.1;
        sc = 0.15;
        descuentoah = sueldomensual*ah;
        descuentosc = sueldomensual*sc;
        descuentos = descuentoah + descuentosc;
        let sueldomensualcond = sueldomensual - descuentos;

        let quincenacond = sueldomensualcond/2;

        resultado1.textContent = nombreCapturar+" "+apellidoCapturar+" "+"C.I."+cedulaCapturar;
        resultado2.textContent = quincena + " Bs. F.";
        resultado3.textContent = descuentoah + " Bs. F.";
        resultado4.textContent = descuentosc + " Bs. F.";
        resultado5.textContent = quincenacond + " Bs. F.";
       
      
    }

    if(quincena>85000 && quincena<150000){
        ah = 0.15;
        sc = 0.2;
        descuentoah = sueldomensual*ah;
        descuentosc = sueldomensual*sc;
        descuentos = descuentoah + descuentosc;
        let sueldomensualcond = sueldomensual - descuentos;

        let quincenacond = sueldomensualcond/2;

        resultado1.textContent = nombreCapturar+" "+apellidoCapturar+" "+"C.I."+cedulaCapturar;
        resultado2.textContent = quincena + " Bs. F.";
        resultado3.textContent = descuentoah + " Bs. F.";
        resultado4.textContent = descuentosc + " Bs. F.";
        resultado5.textContent = quincenacond + " Bs. F.";
      
    }

    if(quincena>150000){
        ah = 0.3;
        sc = 0.25;
        descuentoah = sueldomensual*ah;
        descuentosc = sueldomensual*sc;
        descuentos = descuentoah + descuentosc;
        let sueldomensualcond = sueldomensual - descuentos;

        let quincenacond = sueldomensualcond/2;

        resultado1.textContent = nombreCapturar+" "+apellidoCapturar+" "+"C.I."+cedulaCapturar;
        resultado2.textContent = quincena + " Bs. F.";
        resultado3.textContent = descuentoah + " Bs. F.";
        resultado4.textContent = descuentosc + " Bs. F.";
        resultado5.textContent = quincenacond + " Bs. F.";
      
    }

   

   
}


