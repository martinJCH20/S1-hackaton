var idioma = document.getElementById('idioma');
var texto = document.getElementById('txtTexto');

var traductor =[{idioma: "Español",texto: "Bienvenido al curso de React Native en PachaQtec",id_idioma: 1,},
{idioma: "Ingles",texto: "Welcome to the React Native course at PachaQtec",id_idioma: 2,},
{idioma: "Francés",texto: "Bienvenue dans le cours React Native chez PachaQtec",id_idioma: 3,},
{idioma: "Italiano",texto: "Benvenuti al corso React Native presso PachaQtec",id_idioma: 4,},
{idioma: "Portugués",texto: "Bem-vindo ao curso React Native na PachaQtec",id_idioma: 5,}
]

function traduce(){
    var textoTraducido ="";
   
    var isTrue=false;
    var isTrue2=false;
    for(var n of traductor){
        if(isTrue == false){
            if(n.texto==texto.value){
                for(var x of traductor){
                    if(isTrue2 == false){
                        if(x.id_idioma==idioma.value){
                            textoTraducido=x.texto;
                        }else{
                            isTrue2 = false;
                        }
                    }
                }
                
                isTrue = true;
            }
            else{
                isTrue = false;
            }
        }
    }
    if(isTrue == true){
        alert("Traducciòn: "+textoTraducido);
    }else{
        alert("Texto no reconocido a traducir");    
    }
}