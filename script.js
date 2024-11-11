const display = document.getElementById("display");

    // Función para añadir texto al display
    function appendToDisplay(value) {
        display.value += value;
        adjustFontSize(); // Ajustar tamaño de fuente después de añadir
    }

    // Función para calcular el resultado y formatearlo
    function calculate() {
        try {
            let result = eval(display.value);
            // Formatea el resultado con separador de miles y decimales
            display.value = result.toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 100 // Máximo de decimales para resultados largos
            });
        } catch (error) {
            display.value = "muchos numeros";
        }
        adjustFontSize(); // Ajustar tamaño de fuente después de calcular
    }

    // Función para limpiar el display
    function clearDisplay() {
        display.value = "";
        display.style.fontSize = "2rem"; // Tamaño inicial
    }

    // Función para borrar el último carácter
    function deleteLast() {
        display.value = display.value.slice(0, -1);
        adjustFontSize(); // Ajustar tamaño de fuente después de borrar
    }

    // Función para ajustar el tamaño de la fuente
    function adjustFontSize() {
        const maxDisplayWidth = 300; // Ancho máximo en px
        let fontSize = parseFloat(window.getComputedStyle(display).fontSize);
        
        while (display.scrollWidth > maxDisplayWidth && fontSize > 0.5) {
            fontSize -= 0.5;
            display.style.fontSize = fontSize + "px";
        }
    }