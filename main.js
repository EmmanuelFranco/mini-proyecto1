let miArray = [

    {
        nombre: 'Jorge',
        apellido: 'Sosa',
        edad: 29, 
        pasatiempos:[
            'Jugar', 'Programar', 'estudiar'
        ]
        
    },
    {
        nombre: 'Emmanuel',
        apellido: 'Gutierrez',
        edad: 22, 
        pasatiempos:[
            'caminar', 'leer', 'cantar'
        ]
        
    }

 
]
miArray.forEach(persona => {
    console.log(persona.nombre, persona.apellido, 
        persona.edad +" Le gusta " +persona.pasatiempos);    
    
        miArray.forEach(element => {
            element.pasatiempos
        });
});
