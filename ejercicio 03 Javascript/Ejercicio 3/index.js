var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];


  var aprobados = alumnos.filter(function(alumnos) {
    return alumnos.nota >= 7;
  });

  var desaprobados = alumnos.filter(function(desaprobados) {
    return desaprobados.nota <= 6;
  });

//escribir aprobados en consola y devuelve cuales son los aprobados//
//escribir desaprobados en consola y devuelve cuales no aprobaron//
