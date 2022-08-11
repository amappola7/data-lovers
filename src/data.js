// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const sumar = (num1,num2)=>{
  return num1+num2
}

sumar(2,4)


export const saludar = (string)=>{
  return `Hola ${string} cómo estás`
}

saludar('Amiga')

export const encontrarDiez = (numLargo) =>{
  let array = numLargo.split('')
  let nuestroArray = []
  
  array.forEach(element => {
        let elem = parseInt(element)
      nuestroArray.push(elem)
    });

    let suma = nuestroArray.reduce((a,b)=> a+b,0)

    return suma >= 10 ? true : false
}