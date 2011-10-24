triviadata={
    baseUrl: "../../src/",
    gameName: "A general spanish trivia game",
	"gameName-es": "Ciencias - trivia multilenguaje test",
	"gameName-en": "trivia game multilanguage support test",
	
	boardImage: "../boards/board2.png",
	boardSize: "640,630",
	helpHtml: "help.html",
	dices: {amount: 1, range: [1, 6]},
	"categories-en": [
		{name: "Math", color: "#328f49"},
		{name: "Physics", color: "#2983db"},
		{name: "Medicine", color: "#df6b16"},
	], 
	
	"categories-es": [
		{name: "Matemáticas", color: "#328f49"}, 
		{name: "Física", color: "#2983db"},
		{name: "Medicina", color: "#df6b16"},
	], 

	pieces: [
	    {name: "normal piece", code: "circle(10, 10, 10)"},
	    {name: "point piece", code: "rect(0,0,35,35)"},
	],
	
	"questions-en": [
		{question: "What mathematical symbol did math whiz Ferdinand von Lindemann determine to be a transcendental number in 1882?", answer: "Pi", categoryName: "Math"},
		{question: "What do you call an angle more than 90 degrees and less than 180 degrees?", answer: "Obtuso", categoryName: "Math"},
		{question: "What's the top number of a fraction called?", answer: "The numerator", categoryName: "Math"},
		{question: "What Greek math whiz noticed that the morning star and evening star were one and the same, in 530 B.C.?", answer: "Pythagoras", categoryName: "Math"},
		{question: "What's a polygon with four unequal sides called?", answer: "A quadrilateral.", categoryName: "Math"},
		{question: "What's a flat image that can be displayed in three dimensions?", answer: "A hologram.", categoryName: "Math"},
		{question: "What number does \"giga\" stand for?", answer: "One billion", categoryName: "Math"},
		{question: "What digit did Arab mathematician al-Khwarizmi give to the West around 800 B/B.?", answer: "Zero. ", categoryName: "Math"},
		{question: "What word describes a number system with a base of two?", answer: "binary", categoryName: "Math"},
		{question: "How many equal sides does an icosahedron have?", answer: "twenty", categoryName: "Math"},
		{question: "What do mathematicians call a regular polygon with eight sides?", answer: "An octagon.", categoryName: "Math"},
		{question: "What T-word is defined in geometry as \"a straight line that touches a curve but continues on with crossing it\"?", answer: "tangent", categoryName: "Math"},
		{question: "What geometrical shape forms the hole that fits and allen wrench?", answer: "The hexagon. ", categoryName: "Math"},
		{question: "What number is an improper fraction always greater than?", answer: "1", categoryName: "Math"},
		{question: "What two letters are both symbols for 1,000?", answer: "K and M. ", categoryName: "Math"},
		{question: "What's short for \"binary digit\"?", answer: "bit", categoryName: "Math"},
		{question: "What century did mathematicians first use plus and minus signs?", answer: "The sixteenth.", categoryName: "Math"},
		{question: "What number, a one followed by 100 zeros, was first used by nine-year-old Milton Sirotta in 1940?", answer: "Googol", categoryName: "Math"},
		{question: "What handy mathematical instrument's days were numbered when the pocket calculator made the scene in the 1970s?", answer: "The Slide rule's. ", categoryName: "Math"},
		
		
		{question: "What method of arranging elements into related groups was invented by Dimitri Mendeleyev?", answer: "The periodic table.", categoryName: "Physics"},
		{question: "What physicist remarked: \"God is subtle, but he is not malicious\"?", answer: "Albert Einstein.", categoryName: "Physics"},
		{question: "What M-word defines anything that occupies space?", answer: "Matter.", categoryName: "Physics"},
		{question: "What do you call a substance containing only one kind of atom?", answer: "An element. ", categoryName: "Physics"},
		{question: "What teenager began studying physics after he noticed a chandelier swinging during a 1581 earthquake?", answer: "Galileo. ", categoryName: "Physics"},
		{question: "What elementary particle's antiparticle is the positron?", answer: "Electron", categoryName: "Physics"},
		{question: "What element comes last alphabetically?", answer: "Zirconium.", categoryName: "Physics"},
		{question: "What radioactive element is extracted from carnotite and pitchblende?", answer: "Uranium.", categoryName: "Physics"},
		{question: "What American physicist pioneered the theory of \"black holes\" in 1939?", answer: "J. Robert Oppenheimer.", categoryName: "Physics"},
		{question: "What's a charged atom, with unequal numbers of electrons and protons?", answer: "An Ion.", categoryName: "Physics"},
		{question: "What theory of physics proposes that energy is not transferred continuously but in discrete amounts?", answer: "The quantum theory.", categoryName: "Physics"},
		{question: "What element was converted to plutonium in the first nuclear reactors?", answer: "Uranium.", categoryName: "Physics"},
		{question: "What astronomical term gradually replaced the cumbersome \"gravitationally completely collapsed object\"?", answer: "Black hole", categoryName: "Physics"},
		{question: "What's short for \"light amplification by stimulated emission of radiation\"?", answer: "Laser", categoryName: "Physics"},
		{question: "What's a single unit of quanta called?", answer: "A quantum", categoryName: "Physics"},
		{question: "What did scientists build in a squash court under a football stadium at the University of Chicago in 1942?", answer: "a nuclear reactor", categoryName: "Physics"},
		{question: "What's the atomic number of hydrogen?", answer: "1", categoryName: "Physics"},
		{question: "What element begins with the letter \"k\"?", answer: "Kripton", categoryName: "Physics"},
		{question: "What F-word is defined in physics as a \"nuclear reaction in which nuclei combine to form more massive nuclei\"?", answer: "Fusion", categoryName: "Physics"},
		
		
		{question: "What's the most frequently diagnosed cancer in men?", answer: "Prostate cancer", categoryName: "Medicine"},
		{question: "What virus did the World Health Organization say would infect 40 million people by the year 2000?", answer: "HIV", categoryName: "Medicine"},
		{question: "What do cosmetic surgeons remove 200,00 pounds of from Americans per year?", answer: "Fat", categoryName: "Medicine"},
		{question: "What do doctors look at through an ophthalmoscope?", answer: "The eye.", categoryName: "Medicine"},
		{question: "What disease accounts for two of every three cases of dementia?", answer: "Alzheimer's", categoryName: "Medicine"},
		{question: "What S-word is defined as \"a lateral curvature of the spine\"?", answer: "Scoliosis.", categoryName: "Medicine"},
		{question: "What's most likely to occur when your diaphragm goes into spasms?", answer: "Hiccups.", categoryName: "Medicine"},
		{question: "What do leukemia sufferers have too many of?", answer: "White blood cells, or leukocytes.  ", categoryName: "Medicine"},
		{question: "What's the itchy skin condition tinea pedis better known as?", answer: "Athlete's foot.  ", categoryName: "Medicine"},
		{question: "What part of the eye may be obscured by cataracts?", answer: "The lens.", categoryName: "Medicine"},
		{question: "What arthritic disorder occurs due t increased uric acid the the blood?", answer: "Gout", categoryName: "Medicine"},
		{question: "What hereditary blood defect is known as \"the royal disease\"?", answer: "Hemophilia.", categoryName: "Medicine"},
		{question: "What organ is inflamed when one has encephalitis?", answer: "The brain.", categoryName: "Medicine"},
		{question: "How many of every 10 victims infected by the Ebola virus will die in two days?", answer: "Nine.", categoryName: "Medicine"},
		{question: "What brain operation was tried first on a confused 63-yuar-old female at George Washington Hospital in 1956?", answer: "A lobotomy", categoryName: "Medicine"},
		{question: "What does the \"myo\" mean in myocardial?", answer: "Muscle", categoryName: "Medicine"},
	],	
	
	"questions-es": [
	                 
		{question: "¿Qué tipo de cáncer es el más diagnosticado en hombre?", answer: "Cancer de Próstata", categoryName: "Medicina"},
		{question: "¿Qué virus según la Organización Mundial de la Salud infectó a 40 millones de personas al año 2000?", answer: "VIH", categoryName: "Medicina"},
		{question: "¿Qué es la materia que las cirugías cosméticas sacan de los norteamericanos, a 20000 libras por año?", answer: "Grasa", categoryName: "Medicina"},
		{question: "¿Qué es lo que examina un doctor con el oftalmoscopio?", answer: "el ojo", categoryName: "Medicina"},
		{question: "¿Qué enfermedad está presente en 2 de cada 3 casos de demencia?", answer: "Alzheimer", categoryName: "Medicina"},
		{question: "¿Qué palabra que comienza por S se define como \"una curvatura lateral de la columna\"?", answer: "escoliosis	", categoryName: "Medicina"},
		{question: "¿Qué es lo que está pasando cuando tu diafragma tiene espasmos?", answer: "hipo", categoryName: "Medicina"},
		{question: "¿Qué es lo que tienen en demasía los enfermos de leucemia?", answer: "glóbulos blancos o leucocitos", categoryName: "Medicina"},
		{question: "¿Cuál es el nombre común de la condición de picazón en la piel tinea pedis?", answer: "El pie de atleta.", categoryName: "Medicina"},
		{question: "¿Qué parte del ojo puede ser oscurecida por las cataratas?", answer: "El cristalino", categoryName: "Medicina"},
		{question: "¿Qué desorden artrítico ocurre debido a un incremento del ácido úrico en la sangre?", answer: "Gota", categoryName: "Medicina"},
		{question: "Qué defecto sanguineo hereditario se conoce comunmente como \"la enfermedad real\"", answer: "hemofilia", categoryName: "Medicina"},
		{question: "¿Qué órgano se inflama cuando se padece encefalitis?", answer: "El cerebro", categoryName: "Medicina"},
		{question: "¿De 10 enfermos del virus del Évola, cuántos morirán dentro de 3 días ?", answer: "9", categoryName: "Medicina"},
		{question: "¿Qué operación cerebral fue la primera vez que se hizo en una paciente confundida de 36 años en el Hospital George Washington en 1956?", answer: "Lobotomía", categoryName: "Medicina"},
		{question: "¿Qué significa \"mio\" en miocardio?", answer: "Músculo", categoryName: "Medicina"},
		
		
		{question: "¿Qué símbolo matemático determinó Ferdinand von Lindemann que era transcendental en 1882?", answer: "Pi", categoryName: "Matemáticas"},
		{question: "¿Cómo se llama a un ángluo que mide más de 90 y menos de 180 grados?", answer: "Obtuso", categoryName: "Matemáticas"},
		{question: "¿Cómo se llama el número superior en una fracción?", answer: "Numerador", categoryName: "Matemáticas"},
		{question: "¿Qué matemático griego determinó que la estrella de la mañana y la estrella de la noche son una y la misma en 530 A.C ?", answer: "Pitágoras", categoryName: "Matemáticas"},
		{question: "¿Cómo se llama  un polígono con 4 lados no iguales?", answer: "Cuadrilátero", categoryName: "Matemáticas"},
		{question: "¿Qué es una imágen plana que puede ser mostrada en tres dimensiones?", answer: "Un Holograma", categoryName: "Matemáticas"},
		{question: "¿A Qué número hace referencia la palabra \"giga\"?", answer: "un billón", categoryName: "Matemáticas"},
		{question: "¿Qué dígito dió el matemático árabe al-Khwarizmi al Oeste hacia 800 D.C?", answer: "El cero", categoryName: "Matemáticas"},
		{question: "¿Qué palabra describe a un sistema de numeración de base 2?", answer: "binario", categoryName: "Matemáticas"},
		{question: "¿Cuántos lados iguales tiene un icosaedro?", answer: "veinte", categoryName: "Matemáticas"},
		{question: "¿Cómo les llaman los matemáticos a un polígono regular con 8 caras?", answer: "Octágono", categoryName: "Matemáticas"},
		{question: "¿Qué palabra que comienza con T se define en geometría como \"la línea recta que toca a una curva pero continua sin cruzarla\"?", answer: "tangente", categoryName: "Matemáticas"},
		{question: "¿Qué forma geométrica es la que se ajusta y entra en una llave Allen?", answer: "El exágono", categoryName: "Matemáticas"},
		{question: "¿Qué número es una fracción impropia siempre mayor que?", answer: "1", categoryName: "Matemáticas"},
		{question: "¿Qué 2 letras son ambas símbolos para 1000?", answer: "K y M", categoryName: "Matemáticas"},
		{question: "¿Cómo se abrevia \"dígito binario\"?", answer: "bit", categoryName: "Matemáticas"},
		{question: "¿En qué siglo los matemáticos comenzaron a utilizar los signos + y -?", answer: "en el 16", categoryName: "Matemáticas"},
		{question: "¿Cómo se le llamó al número, un uno seguido de 100 ceros, que fue utilizado por primera vez por Milton Sirotta a los 9 años ?", answer: "Googol", categoryName: "Matemáticas"},
		{question: "¿Qué herramienta matemática se utilizaba antes de que en 1970 se comenzara a utilizar la calculadora de bolsillo?", answer: "La regla del cálculo", categoryName: "Matemáticas"},
		
		{question: "¿Qué método para ordenar los elementos en grupos fue inventado por Dimitri Mendeleyev?", answer: "Tabla periódica", categoryName: "Física"},
		{question: "¿Qué físico dijo \"Dios es sutil pero no malicioso\"?", answer: "Albert Einstein", categoryName: "Física"},
		{question: "¿Qué palabra que comienza con M define algo que ocupa espacio?", answer: "Materia", categoryName: "Física"},
		{question: "¿Cómo se llama la sustancia que contiene unicamente un sólo tipo de átomo?", answer: "Elementos", categoryName: "Física"},
		{question: "¿Qué adolescente comensó a estudiar física luego de ver una araña balancéandose durante un terremoto en 1581 ?", answer: "Galileo", categoryName: "Física"},
		{question: "¿Qué partícula elemental tiene como antipartícula al positrón?", answer: "Electrón", categoryName: "Física"},
		{question: "¿Qué elemento es el último alfabeticamente?", answer: "Zirconium", categoryName: "Física"},
		{question: "¿Qué elemento radiactivo se extrae de la carnotita y la pechblenda?", answer: "Uranio", categoryName: "Física"},
		{question: "¿Qué científico norteamericano fue pionero en la teoría de los agujeros negros en 1939?", answer: "J. Robert Oppenheimer", categoryName: "Física"},
		{question: "¿Cómo se denomina a un átomo cargado, con número distinto de protones y electrones?", answer: "ion", categoryName: "Física"},
		{question: "¿Qué teoría física propoine que la energía no se transfiere continuamente sino en cantidades discretas?", answer: "La teoría cuántica", categoryName: "Física"},
		{question: "¿Qué elemento se convertía en plutonio en los primeros reactores nucleares?", answer: "Uranio", categoryName: "Física"},
		{question: "¿Qué termino reemplazó al incómodo \"objeto gravitacional completamente colapsado\"?", answer: "Agujero Negro", categoryName: "Física"},
		{question: "¿Cómo se abrevia \"\"light amplification by stimulated emission of radiation\"\" (español: Amplificación de la luz por emisión estimulada de radiación)?", answer: "Laser", categoryName: "Física"},
		{question: "¿Cómo se denomina a una unidad cuántica?", answer: "quanto o quantum", categoryName: "Física"},
		{question: "¿Qué fabricaron los científicos en una pista de squash, debajo de un estadio de fútbol en la universidad de Chicago en 1942?", answer: "un reactor nuclear", categoryName: "Física"},
		{question: "¿Cuál es el número atómico del hidrógeno?", answer: "1", categoryName: "Física"},
		{question: "¿Qué elemento comienza con la letra K?", answer: "Kriptón", categoryName: "Física"},
		{question: "¿Qué palabra que comienza con F se usa para describir una reacción en la cual el núcleos se combinan para formar uno más masivo?", answer: "Fusión", categoryName: "Física"},
		

	]
}
