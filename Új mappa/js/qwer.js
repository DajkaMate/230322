// változók
let x = 5;
{
    var y = 7;
}
z = x * y;

console.log("Az x * y = " + z);

// tömbök
const keses = [];

keses[0] = 23;
keses[1] = 45;
keses[2] = 65;

console.log("1. késés " + keses[0] + " perc");
console.log("2. késés " + keses[1] + " perc");
console.log("3. késés " + keses[2] + " perc");

// ciklus
let szamok = [];

for (let i = 0; i < 6; i++) {
    szamok[i] = Math.floor(Math.random()*10)+1;
}

for (let i = 0; i < szamok.length; i++) {
    console.log(i + 1 + ". " + szamok[i]);
}

i = 0;
while(i < szamok.length){
    console.log("A szám: " + szamok[i] * 2)
    i++;
}

// elágazás
let jegy = 1;

if(jegy == 1)
{
    console.log("false");
}
else
{
    console.log("true");
}

// dátumok
function ido(){
    let datum = new Date();
    let ora = datum.getHours();
    let perc = datum.getMinutes();
    let mp = datum.getSeconds();
    console.log(ora + ":" + perc + ":" + mp)
}

setInterval(ido, 1000);


