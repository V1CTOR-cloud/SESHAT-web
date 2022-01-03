// var slides = document.querySelectorAll(".slide");
// var dots = document.querySelectorAll(".dot");
var index = 0;
var autores = [

  autor1={

    imagen: "../IMG/autor-1.png",
    nombre: "Agata Joanna Kornacka",
    texto: "Agata Joanna Kornacka nació el 13 de agosto de 1988 en Kielce (Polonia). Empezó a escribir poemas cuando tenía seis años. El amor por la palabra lo heredó de su padre, el gran maestro de las rimas. Con el paso del tiempo su estilo literario ha ido forjándose entre los misterios de la existencia. Estudió en el Instituto de Lingüística Aplicada en la Universidad de Varsovia. Es doctora en Humanidades, traductora y profesora de español e inglés."

  },

  autor2={

    imagen: "../IMG/autor-2.png",
    nombre: "Lola De Castro Llamas",
    texto: "Lola de Castro nace en la bella ciudad de Jaén un 15 de agosto del año 1965, crece rodeada de las mujeres que marcaran su vida y amor por ella, su madre, tía y abuelas. Abandona los estudios de administración y con 19 años comienza su vida laboral. Con 22 años crea su propia empresa y sigue el mundo empresarial hasta la actualidad siendo la gerente de la empresa “Olivar de Castro” innovación en el mundo del aceite de oliva. Máster en Coaching con Inteligencia Emocional y Programación Neurolingüística, certificado por la Universidad Rey Juan Carlos de Madrid, ASESCO (Asociación Española de Coaching) e ICF (International Coach Federation). Autora del libro “La florista de la calle huertas” publicado por la editorial Circulo Rojo. Escritora, formadora y empresaria, ayuda a personas a que sean conscientes y hagan que suceda lo que desean, basándose en las herramientas que ha aprendido de Coaching, ofreciendo ayuda y acompañamiento en el desarrollo de proyectos personales y profesionales a quien esté decidido a cambiar y diseñar su futuro."

  },

  autor3={

    imagen: "../IMG/autor-3.png",
    nombre: "Ramiro Guzmán Zuluaga",
    texto: "Ramiro Guzmán Zuluaga Nació en 1972, en Montevideo, Uruguay. Su vocación por escribir se manifestó muy tempranamente. En 1982 y 1984, sus cuentos “La huida” y “La experiencia de una vela” fueron premiados en concursos nacionales de cuentos escritos por niños. En 1988 publicó La leyenda de los eoeses, su primer libro. Actualmente, con más de treinta libros publicados, es uno de los escritores uruguayos más relevantes en el mundo. Su obra es muy variada y va desde la poesía a la narrativa fantástica, y de ella a un realismo muy duro. Ha publicado en Montevideo, Madrid, México, Puerto Alegre, Buenos Aires, Miami y Nueva York. Sus obras más destacadas son La leyenda de los eoeses, Ébano Sésamo, La solución está en tus ojos, El cielo peregrino, Sendas femeninas, Palabras a mi tocayo, Blasfemias de un muerto y La rotación supuesta. Con los años, el artista incursionó en la música y la pintura, pero la literatura sigue siendo su pasión por excelencia. También incursionó en el periodismo, habiendo entrevistado a Adolfo Bioy Casares, Fernando Emmerich y a Roberto Fontanarrosa , entre otros. “Uno de los creadores mayores de la literatura uruguaya contemporánea” Hugo Acevedo, Diario La República, Montevideo."

  },

  autor4={

    imagen: "../IMG/autor-4.png",
    nombre: "Helga Fernández Ruiz",
    texto: "Rebelde e inconformista de nacimiento, quizás por eso empezó a escribir desde bien pequeña, pues era la forma que tenía, y tiene, de decirle al mundo, chillarle si hace falta, todo lo que piensa y no le parece justo, es su manera de rebelarse. Su primer contacto serio con el mundo editorial fue en 2003, con un ensayo titulado A qué huele la muerte en el concurso “Rosa de paper de Florida universitaria”. Aunque no es hasta 2018 cuando empieza a tomarse más en serio su faceta como escritora. A partir de entonces nacen 3 libros: Historias diarias de gente corriente (Ed.Tepublicamos), Un Mundo Mejor Es Posible (Ed. Círculo Rojo) un cuento infantil cuyas ilustraciones están hechas por su madre, lo que hace que para ella sea realmente especial. otras publicaciones Cómo salir del armario y no morir en el intento, un libro que da visibilidad a las relaciones LGTBIQ. Poco después sale #NoesNo, un relato muy, muy corto, pero muy intenso, sobre los ASI (Abusos Sexuales en la Infancia). sus últimas obras Como la vida misma y Llámame por mi nombre."

  },

  autor5={

    imagen: "../IMG/autor-5.png",
    nombre: "María Jesús Romero de Avila de Lara",
    texto: "María Jesús Romero de Avila de Lara Licenciada en Filología Hispánica, aunque Periodista de vocación,ha sido Locutora en Radio Horizonte La Solana, donde estuvo diez años, con el programa semanal Crónicas de una solanera. Posteriormente, se sumó al nuevo proyecto de Radioya; allí estuvo cinco años con dos programas, Relatos Nocturnos y Crónicas a pie de calle. Y actualmente, está en Decisión Radio con su programa de entrevistas, Crónicas a pie de calle. En el año 2006 publicó con gran éxito su primera novela, Todo por un sueño gastronómico, novela fresca e irreverente, en torno a las peripecias laborales, lúdico festivas y gastronómicas de su protagonista; va por su sexta edición. En el año 2017, sacó al mercado literario, Viaje a través de una mujer, donde cuenta las aventuras y desventuras de una mujer en plena crisis existencial, a la que un desengaño amoroso le aboca a una tremenda depresión. En octubre de 2021 ha publicado Encadenada al miedo a morir, novela que abarca los géneros de novela negra, histórica y erótica. Luchadora empedernida, piensa a pies juntillas que la edad está en el corazón y la mente. Nunca es tarde para hacer tus sueños realidad, y empezar de nuevo. ​ Su lema, inculcado por su querido padre es, Siempre adelante y que ruede la bola de la vida. ​ Ahora, de la mano de Ediciones Seshat, vuelve a reeditar con más frescura y sabrosos ingredientes, Todo por un sueño gastronómico."

  },

  autor5={

    imagen: "../IMG/autor-6.png",
    nombre: "Poetas de ahora",
    texto: "El grupo literario Poetas de Ahora nace en el año 2013 en Cádiz, con el denominador común de conjugar el verso desde el verbo inspirado, musas que se aprovechan del Levante para recrearse en la Tacita de Plata, donde cantautores y cantantes de la zona enlazan en directo música y poesía íntimamente en un mismo espacio y tiempo, buscando alcanzar una experiencia estética integral. Estos encuentros se realizan desde aquel momento en Cádiz y su provincia."

  }
];


function prevSlide(n){
  index+=n;
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

function changeSlide(){
    
  if(index>autores.length-1)
    index=0;
  
  if(index<0)
    index=autores.length-1;

  nombre = document.getElementById("nombre");
  descripcion = document.getElementById("descripcion");
  imagen = document.getElementById("sliderImagen");

  nombre.innerHTML = autores[index].nombre;
  descripcion.innerHTML = autores[index].texto;
  imagen.src = autores[index].imagen;

}


