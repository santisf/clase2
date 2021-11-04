// Longitud de una matriz anidada
// Escriba una función que devuelva el número total de elementos no anidados en una matriz anidada.

// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
/*
var cantidadElem = 0

function elementos(array){
  
    for(let i=0; i<array.length; i++){

        if(typeof(array[i])==='number'){    
            
            cantidadElem += 1;
            
        }else{
           
            elementos(array[i]);
            
        }

    }
   
    return "el resultado es: "+cantidadElem;

}


console.log(elementos([1, [2], 1, [2], 1]));

*/

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
/*
var array=[]
function toArray(object){

    for(const atributo in object){

        array.push([atributo, object[atributo]]);

    }

    return array;

}

console.log(toArray({ a: 1, b: 2 }));
*/





/*
function getLength(array){

    let arr=[];

   for(let i=0; i<array.length; i++){

       sumarLengthElementos(array[i]); 
        

   }

   return arr;
   //console.log(getLength([1, [2], 1, [2], 1]));
   function sumarLengthElementos(el){

    if(typeof el != "number"){

        if(el.length>1){

            arr.push(1);
            console.log(el)
            if(typeof el[0] != "number"){

                arr.push(el[0].length);
                el.shift();

            }else{
                
                el.shift();
                
            }
           
            
            if(el.length>1){

                arr.push(1);
                console.log(el);
                el.shift();
                

            }

        }else{
            
            el=el[0];
            
        }
        
        sumarLengthElementos(el);
        
    }else{

        arr.push(1);

    }

   }
   // [2, [3, 4]], 1
        [3, 4], 1
         4 , 1
   //arr = [1, 1, 1, 1 ,1]
}

console.log(getLength([[2,1,2,[2,4],5],[3,2]]));

*/

/*
//pasarle un numero a una funcion y te tiene que sumar desde el numero ese 1 + 2 + 3 + 4

function sumarTodo(num){

    let res=0;

    for(let i=1; i<=num; i++){

        res += i;

    }

    return res;

}

console.log(sumarTodo(7));*/
/*
function choques(array){

    let cruzes=0;

    for(let i=0; i<array.length; i++){

        if(array[i]==0){

            for(let a=i+1; a<array.length; a++){

                if(array[a]==1){

                    cruzes += 1;

                }

            }

        }

    }

    return cruzes;

}

console.log(choques([]));*/

function formulario(){

    const div1=document.createElement("div");
    const form=document.createElement("form");
    const input1=document.createElement("input");
    const button=document.createElement("button");
    input1.name="name";
    button.type="submit";
    div1.appendChild(form);
    form.appendChild(input1);
    form.appendChild(button);
    const body = document.querySelector("body");
    body.appendChild(div1)
    button.style.color="red"
}

formulario();