document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Border").addEventListener("click", () => {
        let colorred = document.getElementById("redIndex").value;
        let colorblue = document.getElementById("blueIndex").value;
        let colorgreen = document.getElementById("greenIndex").value;
        let Colors = colorred +  colorgreen + colorblue ; //rgb
        //Checking if this color exists 
        //source:https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
        if (/[0-9A-F]{6}$/i.test(Colors)){  
            document.getElementById("TextBox").style.borderColor = "#" + Colors;
        }
        else{
            console.log("Please input a valide color ");
        }
        //for wedith here 
        let width = document.getElementById("Width").value;
        if (width !== ""){
            document.getElementById("TextBox").style.borderWidth = width + "px ";
        }
    });

    document.getElementById("Background").addEventListener("click", () => {
        let colorred = document.getElementById("groundRed").value;
        let colorgreen = document.getElementById("groundGreen").value;
        let colorblue = document.getElementById("groundBlue").value;
        let Colors = colorred + colorgreen + colorblue ; //rgb
        //source:https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
        if (/[0-9a-f]{6}$/i.test(Colors)){
            document.getElementById("TextBox").style.backgroundColor = "#" + Colors;
        }
        else{
            console.log("Please input a valide color");
        }
    });
})