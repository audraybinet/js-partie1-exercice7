function calcul(){
var shoeSize = document.getElementById('shoeSize').value;
var yearOfBirth = document.getElementById('yearOfBirth').value;
var multi = shoeSize * 2;
multi += 5;
multi *= 50;
multi -= yearOfBirth;
multi += 1766;
alert(multi);
return multi;
}
