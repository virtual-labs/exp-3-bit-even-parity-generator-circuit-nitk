function out() {
    var w = document.getElementById("wire");
    var f = document.getElementById("fault");
    var X = document.getElementById("X").value;
    var Y = document.getElementById("Y").value;
    var Z = document.getElementById("Z").value;
    var wireVal = w.options[w.selectedIndex].text;
    var falutVal = f.options[f.selectedIndex].text;
    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(table.rows.length);
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    document.getElementById("textValue").innerHTML = output(wireVal, falutVal);
    cel1.innerHTML = X;
    cel2.innerHTML = Y;
    cel3.innerHTML = Z;
    cel4.innerHTML = findW(wireVal, falutVal, X, Y, Z);
    cel5.innerHTML = findP(X, Y, Z);
    cel6.innerHTML = findNewP(wireVal, falutVal, X, Y, Z);

}

function output(w, f) {

    if (f == "None") {
        return "&emsp;Equation of fault detected = " + "x⊕y⊕z";
    }
    else if (f == "SA0") {
        if (w == "x") {
            return "&emsp;Equation of fault detected = " + "y⊕z";
        }
        else if (w == "y") {
            return "&emsp;Equation of fault detected = " + "x⊕z";
        }
        else if (w == "z") {
            return "&emsp;Equation of fault detected = " + "x⊕y";
        }
        else if (w == "w") {
            return "&emsp;Equation of fault detected = " + "z";
        }

    }
    else if (f == "SA1") {
        if (w == "x") {
            return "&emsp;Equation of fault detected = " + "y̅⊕z";
        }
        else if (w == "y") {
            return "&emsp;Equation of fault detected = " + "x̅⊕z";
        }
        else if (w == "z") {
            return "&emsp;Equation of fault detected = " + "(x̅⊕y̅)'";
        }
        else if (w == "w") {
            return "&emsp;Equation of fault detected = " + "z̅";
        }
    }
}

function findW(w, f, x, y, z) {
    if(x>1||x<0||y>1||y<0||z>1||z<0){
        alert("Wrong input!")
    }else if (f == "None") {
        return x ^ y;
    }
    else if (f == "SA0") {
                return y;
            
        }
        else if (w == "y") {
                return x;
            
        }
        else if (w == "z") {
                return  x ^ y;
        
        }
        else if (w == "w") {
                return 0;
        
        }
    else if (f == "SA1") {

        if (w == "x") {
            return ~y + 2;
        }
        else if (w == "y") {
            return ~x + 2;
        }
        else if (w == "z") {
            return x ^ y;
        }
        else if (w == "w") {
            return 1;
        }
    }
}

function findP(x, y, z) {
    if(x>1||x<0||y>1||y<0||z>1||z<0){

    }else{
        return x ^ y ^ z;
    }
}

function findNewP(w, f, x, y, z) {
    if(x>1||x<0||y>1||y<0||z>1||z<0){

    }else{
        if (f == "None") {
            return x ^ y ^ z;
        }
        else if (f == "SA0") {
            if (w == "x") {
                return y ^ z;
            }
            else if (w == "y") {
                return x ^ z;
            }
            else if (w == "z") {
                return x ^ y;   
            }
            else if (w == "w") {
                return z;
            }

            }
            else if (f == "SA1") {

            if (w == "x") {
                return ~y + 2 ^ z;
            }
            else if (w == "y") {
                return ~x + 2 ^ z;
            }
            else if (w == "z") {
                return ~(x ^ y) + 2;
            }
            else if (w == "w") {
                return ~z + 2;
            }
}
    }
    
}