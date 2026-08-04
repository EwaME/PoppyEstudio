/**
 * Siembra los posts de blog importados desde docs-context/Blogs.md (contenido
 * extraido y reescrito en Markdown limpio, sin el HTML/CSS original de cada
 * pagina). Idempotente (onConflictDoNothing por slug) — se puede correr mas
 * de una vez sin duplicar.
 *
 * Uso: pnpm tsx scripts/seed-blog-posts.ts
 * Requiere DATABASE_URL en .env.local.
 */
import './load-env';
import { eq } from 'drizzle-orm';
import { db } from '../src/lib/db';
import { blogCategorias, blogPosts } from '../src/lib/db/schema/blog';

function slugify(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const POST_1_CRICUT_GUIA = `Materiales, tapetes y cuidados — consejos prácticos para aprovechar al máximo tu máquina de corte.

## Introducción

Una máquina Cricut es un cortador de vinilo y papel controlado por computadora que ha revolucionado el mundo de las manualidades y los productos personalizados. Desde stickers hasta camisetas, abre un universo de posibilidades para emprendedores creativos.

## Tipos de máquinas Cricut

- **Cricut Joy** (Compacta) — Pequeña y portátil. Ideal para etiquetas y proyectos pequeños.
- **Cricut Explore 3** (Emprendedores) — Corta más de 100 materiales. Perfecta para emprendedores.
- **Cricut Maker 3** (Pro) — La más completa. Corta más de 300 materiales.

## Tipos de tapetes Cricut

- **LightGrip** — Papel, cartulina ligera
- **StandardGrip** — Vinil y cartulina
- **StrongGrip** — Cartón grueso, madera balsa
- **FabricGrip** — Tela y fieltro

> **Tip:** Limpia tus tapetes con toallitas sin alcohol para prolongar su vida útil.

## Materiales que puedes cortar

- **Vinil Adhesivo** — Para stickers, vasos y decoración.
- **Vinil Textil (HTV)** — Para camisetas y bolsas.
- **Cartulina** — Ideal para invitaciones y toppers.
- **Papel Sticker / Glitter** — Etiquetas y proyectos decorativos.

## Gramajes recomendados de cartulina

| Uso | Gramaje recomendado |
|---|---|
| Flores de papel | 180 – 220 g |
| Invitaciones | 200 – 250 g |
| Toppers | 220 – 300 g |
| Cajas pequeñas | 250 – 300 g |

> **Tip:** Entre más gruesa sea la cartulina, más importante es hacer una prueba de corte antes del proyecto final.

## Herramientas básicas

- Depilador (Weeder)
- Espátula / Raspador
- Tijeras de precisión
- Rodillo (Brayer)

## Cuidados y errores comunes

### Buenas prácticas
- Limpia las cuchillas regularmente.
- Mantén la máquina cubierta cuando no la uses.
- No jales los tapetes al retirarlos.
- Actualiza el software de diseño.
- Guarda los materiales en un lugar seco.
- Realiza pruebas de corte antes de proyectos grandes.

### Errores que evitar
- Usar el tapete incorrecto.
- Cortar sin hacer una prueba previa.
- Utilizar una cuchilla desgastada.
- Despegar el material de forma brusca.
- No configurar correctamente el tipo de material.

## Proyectos ideales para comenzar

- Stickers personalizados
- Toppers para cumpleaños
- Etiquetas para negocios
- Camisetas personalizadas
- Cajas de regalo
- Decoraciones para fiestas

## Conclusión

> "La Cricut es una herramienta increíble para emprender y crear proyectos únicos. Conociendo los materiales, tapetes y cuidados adecuados, podrás sacarle el máximo provecho y hacer que tu máquina dure por muchos años."

> **Tip de la semana:** Antes de cortar cualquier material nuevo, siempre haz una **prueba de corte en una esquina del tapete**. Esto te ahorra material, tiempo y frustraciones — especialmente con cartulinas gruesas o vinil especializado.
`;

const POST_2_PORTAPLATOS = `*paso a paso*

Desde los materiales hasta el corte final, todo lo que necesitás saber para crear portaplatos personalizados que dejan boquiabiertos.

Tutorial completo · Nivel: principiante · Materiales básicos

> "Un portaplatos no es solo donde va el plato. Es lo primero que ve el invitado cuando se sienta, y lo último que recuerda cuando se va. Es parte de la ambientación."

![Diseño de portaplatos](https://i.ibb.co/pcyZ5QC/Whats-App-Image-2026-06-15-at-4-07-09-PM.jpg)

## Los materiales que necesitás

La calidad del resultado depende en gran parte de qué materiales usás. No importa qué tan bien manejes el diseño si el papel es el incorrecto, el portaplatos se va a ver flojo, sin cuerpo y poco profesional. Acá están los esenciales:

1. **Papel Diploma** — Específicamente de 216 g/m². Este gramaje es clave: le da rigidez suficiente para que el portaplatos mantenga su forma plana sin que se doble. Un papel más delgado se ve amateur y se arruga con la humedad de los platos.
2. **Impresora para diseños** — Idealmente una impresora de inyección de tinta con buena resolución (mínimo 300 dpi). Si podés, hacé siempre una prueba en papel bond antes de imprimir en el papel diploma.
3. **Cinta de doble cara** — Para unir piezas si el portaplatos tiene capas o elementos 3D. Preferí las de espuma doble (foam tape) para dar altura y profundidad a ciertos elementos decorativos.
4. **Máquina Cricut** *(opcional pero recomendado)* — Para cortes precisos, especialmente si el portaplatos tiene formas personalizadas, esquinas redondeadas o calados.

## El diseño: donde todo empieza

Antes de tocar ningún material, el portaplatos ya tiene que existir en tu pantalla. El diseño define el tamaño, los colores, los elementos decorativos y si vas a necesitar la Cricut o no. Usá Canva, Adobe Illustrator o Cricut Design Space dependiendo de lo que tengas disponible.

El tamaño estándar para un portaplatos de fiesta es de **30 × 30 cm**, aunque podés hacerlo desde 28 hasta 35 cm según la vajilla del cliente. Siempre preguntá antes de diseñar.

## Paso a paso

Seguí este orden. Saltarse pasos —especialmente en la preparación del diseño y la calibración de la impresora— es lo que más arruina portaplatos que ya venían bien encaminados.

### 1. Tomá las medidas y acordalas con el cliente

Antes de abrir cualquier programa de diseño, confirmá con la persona el tamaño exacto del portaplatos que necesita. Las medidas importan: un portaplatos de 28 cm en una mesa con platos de 32 cm se va a ver mal.

También en este punto confirmás la temática, los colores, si quiere nombre o no, y cuántas unidades necesita.

> **Tip:** Creá un formulario sencillo en Google Forms o un mensaje de WhatsApp con preguntas clave. Te ahorrás idas y venidas y el cliente siente que sos profesional desde el primer momento.

### 2. Creá el diseño digital

Configurá el documento al tamaño final del portaplatos con sangrado de 3 mm en todos los lados. Diseñá en alta resolución: mínimo 300 dpi para impresión.

Definí el fondo, los elementos decorativos, el texto (nombre, edad, año) y cualquier imagen de personaje que el cliente haya pedido. Una vez terminado el diseño, exportalo en PDF de alta calidad o en PNG a 300 dpi.

> **Tip:** Antes de exportar, cambiá la vista del diseño a escala de grises para revisar si hay suficiente contraste.

> **Ojo:** No uses imágenes tomadas de Google sin verificar la resolución. Buscalas en Freepik, Flaticon o Canva Pro donde garantizan calidad de impresión.

### 3. Imprimí en papel diploma

Este es el paso más delicado y donde más se arruinan los trabajos. Antes de imprimir el trabajo final, hacé una prueba en papel bond normal al mismo tamaño. Solo cuando estés segura, pasá al papel diploma de 216 g.

Configurá la impresora en la calidad más alta disponible ("Papel fotográfico" o "Calidad alta").

> **Tip:** Dejá secar la impresión mínimo 5 minutos antes de tocarla.

> **Ojo:** No todas las impresoras aceptan papel de 216 g. Revisá el manual de tu impresora para ver el gramaje máximo que soporta.

### 4. Corte: tijeras, exacto o Cricut

Si el portaplatos es rectangular con esquinas rectas, podés cortarlo con guillotina o regla y exacto. Si el diseño tiene esquinas redondeadas o formas decorativas, aquí es donde la Cricut marca la diferencia.

Para la Cricut, configurá el material como "Papel grueso" o "Cardstock pesado" y hacé siempre un corte de prueba antes del trabajo terminado.

> **Tip de Cricut:** Cambiá la cuchilla cada 2-3 proyectos intensivos. Una cuchilla nueva es la diferencia entre un borde impecable y uno con pelusas.

### 5. Armado y acabados finales

Si el portaplatos tiene capas, usá cinta de doble cara o foam tape para pegar los elementos. El foam tape le da dimensión y hace que se vea más premium.

Si algún corte quedó con pelusas, usá una lija muy fina (grano 400). Si el cliente quiere que sea resistente a la humedad, podés aplicar un sellador en spray.

> **Tip de presentación:** Empacá cada portaplatos en una bolsa de celofán o papel de seda. El packaging hace que la entrega se sienta más profesional.

### 6. Control de calidad antes de entregar

Revisá uno por uno todos los portaplatos: manchas de tinta, bordes con pelusas, elementos mal pegados, errores tipográficos. Tomá fotos de los terminados en buena luz — son tu portafolio para futuros clientes.

> **Tip de negocio:** Pedile al cliente que te mande foto del portaplatos en la mesa de la fiesta. Esa foto es infinitamente más poderosa para tu Instagram que una foto de estudio.

![Resultado final del portaplatos](https://i.ibb.co/23rr4tZC/Whats-App-Image-2026-06-15-at-4-07-10-PM.jpg)

## De la pantalla a la mesa

Cuando todo el proceso se hace con cuidado, el resultado es un accesorio de fiesta que parece salido de una tienda de decoración de alto nivel. Lo que la gente ve en la mesa no es un pedazo de papel. Ve la intención detrás, el detalle pensado, el color que combina exactamente con el resto de la decoración.

## Extras que elevan el resultado

- **Agregale escarcha o foil** — Una capa fina de glitter transparente sobre elementos metálicos hace que el portaplatos brille de forma elegante.
- **Terminaciones con lazo** — Un lazo de listón del color principal del evento lo eleva visualmente al instante.
- **Elementos 3D en foam** — Cortá elementos decorativos en foam de colores y pegálos sobre el portaplatos para dar textura real.
- **Coordina con el resto** — Servilleteros, etiquetas de botella, toppers del pastel. Ofrecer el set completo aumenta el valor del pedido.
- **Sellador para exteriores** — Protegé la impresión con un sellador en spray si la fiesta es al aire libre.
- **Pedidos con anticipación** — Recibí pedidos con al menos 5 días de anticipación para tener tiempo de pruebas y ajustes.

## El proceso real

¿Preferís verlo antes de intentarlo? [Mirá el proceso completo en TikTok](https://vt.tiktok.com/ZSQVdDY71/).
`;

const POST_3_PORTAPLATOS_MEDITERRANEO = `*Tutorial exclusivo*

Aprendé a diseñar portaplatos con relieve y cortes perfectos, estilo cerámica mediterránea pintada a mano.

## La inspiración

Fíjate en cómo los detalles en 3D hacen la diferencia. Las flores azules en acuarela y los limones vibrantes no están simplemente impresos en el fondo; están cortados individualmente y montados con relieve.

Este estilo de bordes ondulados e imperfecciones calculadas evoca la cerámica pintada a mano del Mediterráneo. ¡Lograr esto con papel es un arte!

## Nuestras herramientas

- **Papel Diploma (216g)** — El corazón del proyecto. Su rigidez es clave para que el portaplatos no se doble.
- **Impresora a color** — Para fondos vibrantes y tipografías nítidas.
- **Máquina Cricut** — Imposible lograr esos bordes ondulados perfectos sin ella.
- **Cinta foam relieve** — El secreto de la magia. Levanta los limones y las hojas del fondo para el efecto 3D.

## Creación paso a paso

1. **Diseño digital** — En Design Space, creá la forma principal. Acomodá las tipografías elegantes (como el nombre en cursiva) asegurando que no queden tapadas por el plato real.
2. **Impresión** — Imprimí por separado: primero la base principal, luego en una hoja aparte los elementos decorativos (limones y flores). Usá calidad máxima.
3. **Corte (Print then Cut)** — Usá la función "Print Then Cut" de tu Cricut para recortar exactamente por el borde de las flores y los limones, dejando un acabado estilo offset.
4. **Ensamblaje 3D** — Colocá cinta doble cara con relieve en la parte trasera de los elementos y pegálos estratégicamente rompiendo los marcos del diseño base.

## Detrás de escena

[Mirá el proceso completo en TikTok](https://vt.tiktok.com/ZSQVdDY71/) — entendé el armado viéndolo en acción.

## ¿Lista para hacer tu pedido?

Si te encantó este diseño o querés una temática diferente, ¡contactame!
`;

const POST_4_CORONAS = `Poppy Craft · Choluteca, Honduras

Cada corona es única. Diseñada a mano, adaptada a tus colores, tu estilo y tu fotografía.

## Sobre nuestras coronas

En Poppy Craft creemos que cada cumpleaños merece un detalle especial. Por eso elaboramos coronas de fomi completamente personalizadas, diseñadas con mucho amor y creatividad para hacer de tu celebración un momento inolvidable.

![Corona de fomi personalizada](https://i.ibb.co/8D6mTYPt/Chat-GPT-Image-28-jun-2026-03-25-56-p-m.png)

## Tú decides cada detalle

- **Colores** — Elegí la paleta que mejor refleje tu estilo o la temática de tu fiesta.
- **Estilo y temática** — Desde princesa clásica hasta minimalista moderno.
- **Edad** — Colocamos el número que quieras con la tipografía y el material que elijas.
- **Tu fotografía** — Integrá tu foto o la del cumpleañero directamente en el diseño de la corona.
- **Detalles extra** — Cintas, piedras decorativas, glitter, encajes.
- **Referencias** — Podés enviarnos imágenes de referencia para recrear el diseño que tenés en mente.

## Características del producto

- Elaboradas con foami, foami perchado, cintas, piedras decorativas y detalles personalizados.
- Medida estándar de 40 centímetros de largo.
- Incluyen cinta posterior ajustable.
- Disponibles para niños, jóvenes y adultos.
- Reutilizables — se conservan como un hermoso recuerdo de tu celebración.

## Ideales para

- Cumpleaños infantiles y de adultos
- Sesiones de fotos
- Fiestas temáticas
- Celebraciones especiales

## Reserva con anticipación

Recomendamos hacer el pedido con al menos **3 a 7 días de anticipación** para garantizar la disponibilidad de materiales y una personalización cuidadosa.

Entregas locales en Choluteca y envíos a nivel nacional en Honduras.

**Precio desde: L. 120.00** *(varía según diseño y detalles adicionales)*

## ¿Cómo hacer tu pedido?

1. **Escribinos** por WhatsApp o Instagram
2. **Compartí tu idea** — Enviá fotos de referencia o describila
3. **Elegí los detalles** — Colores, edad, fotografía y extras
4. **Nosotros creamos** tu corona única lista para celebrar
`;

const POST_5_MANTENIMIENTO = `Cuando comprás una Cricut, casi nadie te explica que la máquina necesita cuidados constantes para seguir cortando bien. Se habla mucho de diseños y proyectos, pero muy poco del mantenimiento real: esa rutina simple que evita que tu máquina falle justo cuando tenés una entrega pendiente.

## Por qué importa

Una Cricut corta con base en presión, profundidad y velocidad calculadas para cada material. Si el tapete está sucio, la cuchilla tiene residuos o los rodillos no giran parejo, esa precisión se pierde aunque la configuración esté perfecta.

## Frecuencia recomendada

| Frecuencia | Acción |
|---|---|
| Después de cada proyecto | Retirá los residuos del tapete antes de guardarlo. |
| Cada semana (uso frecuente) | Revisá la cuchilla y limpiala si notás pelusa o adhesivo. |
| Una vez al mes | Limpiá los rodillos y revisá la adherencia del tapete. |
| Cada 3–6 meses | Evaluá si el tapete necesita reemplazo. |

## Limpiar el tapete de corte

Retirá los residuos grandes con una espátula, sin rascar fuerte. Pasá un paño ligeramente húmedo para el polvo fino y dejá secar por completo antes de guardarlo. Si ya no sujeta el material ni después de limpiarlo, reemplazalo.

## Cuidar la cuchilla

Nunca la toques directamente con los dedos. Si el material se rasga en vez de cortarse limpio, revisá si tiene residuos acumulados. Guardala siempre en su soporte cuando no esté en uso: una cuchilla desgastada no se arregla limpiándola, hay que cambiarla.

## Rodillos y almacenamiento

Los rodillos jalan el tapete durante el corte; si acumulan polvo, el tapete avanza despareja y arruina la alineación. Pasales un paño seco cada mes, sobre todo con foamy o glitter. Para guardar la máquina: cubrila, evitá humedad y sol directo, y sacá el tapete de adentro cuando no la uses.

> **Ojo:** guardar el tapete con recortes pegados, dejar la cuchilla puesta meses sin revisarla, forzar materiales gruesos sin ajustar la configuración, y no limpiar el polvo de foamy o glitter son los errores que más acortan la vida de la máquina.

El mantenimiento no requiere productos especiales ni mucho tiempo: es cuestión de crear el hábito. Una limpieza rápida después de cada proyecto y una revisión mensual más completa bastan para que tu máquina corte con precisión durante años.
`;

const POST_6_ERRORES = `La mayoría de los problemas al usar una Cricut no son culpa de la máquina, sino de decisiones que se toman antes de darle "cortar": una configuración mal elegida, un paso saltado en Design Space o una prueba que nunca se hizo. Estos son los errores más frecuentes, especialmente entre quienes recién empiezan.

## Material equivocado en la configuración

Design Space te pide seleccionar el tipo de material antes de cortar, y de ahí depende la presión y velocidad de la cuchilla. Confundir "cartulina" con vinil textil es la causa número uno de cortes incompletos.

## Saltarse la prueba de corte

Cortar directo sobre el material bueno sin probar antes en un retazo es lo que más desperdicio genera. Una prueba de 3x3 cm te dice si la presión está bien calibrada antes de arriesgar una hoja completa.

## Ignorar las actualizaciones del software

Design Space se actualiza con frecuencia, y algunas actualizaciones corrigen fallos de calibración o compatibilidad con materiales. Una versión desactualizada genera fallos que parecen "culpa de la máquina" cuando son del software.

## Despegar el material antes de tiempo

Retirar el sobrante de vinil o HTV antes de que la máquina termine puede arrancar piezas pequeñas que aún no estaban totalmente cortadas, arruinando detalles finos como letras.

## No calibrar imprimir y cortar

Saltarse la calibración del escáner provoca que el corte no coincida con el diseño impreso. Calibrar toma un par de minutos y evita desperdiciar hojas ya impresas.

## Presión incorrecta en materiales gruesos

Foamy grueso, cartón o acetato necesitan ajustes de presión distintos al vinil estándar. Usar la configuración por defecto sin ajustar termina en cortes a medias.

## No revisar el diseño antes de cortar

Líneas superpuestas, textos sin soldar o formas duplicadas se traducen en cortes sin sentido o que consumen más material.

Casi todos estos errores comparten una causa: apurar el proceso y saltarse una verificación previa. Elegir bien el material en el software, probar antes de cortar en grande y mantener el programa actualizado resuelve la mayoría de los problemas antes de que ocurran.
`;

const POST_7_MATERIALES_TAPETES = `Una de las dudas más comunes al empezar con una Cricut no es cómo diseñar, sino qué material usar para cada proyecto y con qué tapete combinarlo. Elegir mal cualquiera de los dos afecta directamente la calidad del corte. Acá tenés una guía de referencia rápida.

## Materiales más usados

| Material | Uso recomendado |
|---|---|
| Vinil adhesivo | Stickers, tazas, vasos, superficies lisas. |
| Vinil textil (HTV) | Se aplica con calor sobre tela: camisetas, gorras, bolsas. |
| Cartulina | Tarjetas, toppers, detalles de papelería. |
| Papel fotográfico | Proyectos de impresión y corte, stickers con imágenes. |
| Foamy delgado | Coronas, manualidades infantiles, decoración ligera. |
| Acetato | Ventanas de cajas, toppers transparentes. |

> **Ojo:** telas muy gruesas, cuero grueso sin la cuchilla adecuada, o foamy con purpurina barata sueltan residuo y ensucian la cuchilla y los rodillos más rápido de lo normal.

## Tipos de tapete

| Tapete | Uso recomendado |
|---|---|
| LightGrip | Papel fino, calco, cartulina delgada. |
| StandardGrip | Vinil adhesivo, cartulina estándar, papel fotográfico. |
| StrongGrip | Cartón, foamy grueso, madera delgada, cuero. |
| FabricGrip | Tela, junto con entretela adhesiva que la estabilice. |

## Conservar el adhesivo del tapete

Cubrí el tapete con su lámina protectora después de cada uso, evitá tocar la superficie adhesiva con los dedos y no lo dejés expuesto al sol ni a la humedad. Si ya no sujeta bien, limpialo primero; si el problema persiste, cumplió su vida útil.

La combinación correcta de material y tapete es la base de un buen corte, incluso antes de pensar en diseño o configuración de la máquina.
`;

const POST_8_PONTE_DERECHA = `*Mi historia con la escoliosis*

Durante mucho tiempo el dolor de espalda fue simplemente parte de mi día. Me levantaba con él, iba a la universidad con él, y me acostaba con él. No era un dolor que apareciera de vez en cuando; era constante, como un ruido de fondo al que ya me había acostumbrado a ignorar porque nadie parecía tomarlo en serio, ni siquiera yo misma.

Aprendí a acomodarme para que doliera menos. Evitaba ciertas posiciones al sentarme en clase, cambiaba de lado la mochila sin saber muy bien por qué un hombro se cansaba más rápido que el otro, y algunas noches el dolor era tan fuerte que me costaba encontrar una postura para dormir. Nada de eso me parecía suficiente como para preocupar a alguien.

Mi mamá tenía una explicación para todo: mala postura. "Ponte derecha", me decía casi todos los días. No lo decía con mala intención, lo decía porque genuinamente creía que ese era el problema, y yo también terminé creyéndolo. Me esforzaba por enderezarme, por sentarme "bien", y el dolor seguía ahí, indiferente a mis esfuerzos.

Lo más difícil no era el dolor en sí. Era la soledad de sentir que algo estaba mal en mi cuerpo y no tener cómo explicarlo. "Ponte derecha" no es un comentario agresivo, y por eso mismo es más difícil de cuestionar. Viene de la gente que te quiere, y aun así, con el tiempo, empieza a sonar como que el dolor es una exageración tuya.

![Silueta caminando](https://i.ibb.co/0VJ7QBHP/Chat-GPT-Image-12-jul-2026-02-06-21-p-m.png)

Hace aproximadamente un año pasó algo que cambió todo. Mi mamá me fue a traer a la universidad, algo que hacía siempre, y ese día notó algo que nunca antes había visto: mi pantalón estaba más abajo de un lado que del otro. Y no solo eso, mi camisa también caía desnivelada. No era la ropa. Era yo.

Ese fue el momento en que "ponte derecha" dejó de tener sentido para ella también. Me llevó al doctor esa misma semana.

## El diagnóstico

Me hicieron una radiografía, y ahí apareció, por fin, un nombre para el dolor que había cargado durante tanto tiempo: escoliosis. En mi caso, leve. Después de esa primera consulta fui donde dos médicos más para confirmar el diagnóstico. No fue solo una opinión, fueron tres, y las tres coincidían: la curvatura estaba ahí, y era la causa real de años de dolor que nadie —incluyéndome a mí— había sabido explicar.

Hubo algo casi liberador en ese momento, y también algo incómodo. Liberador porque por fin tenía una razón médica, algo que se podía ver en una placa. Incómodo porque significaba aceptar que durante años había normalizado un dolor que no tenía por qué normalizar.

![Radiografía de columna](https://i.ibb.co/v6rFWhLB/Chat-GPT-Image-12-jul-2026-02-08-35-p-m.png)

> **¿Qué es la escoliosis?** Es una curvatura lateral anormal de la columna vertebral. En lugar de ser recta cuando se observa de frente, la columna se curva hacia un lado, formando una "C" o una "S". En la mayoría de los casos diagnosticados en adolescentes y adultos jóvenes, no hay una causa identificable; se le llama escoliosis idiopática, y es el tipo más común. El grado de curvatura se mide en "grados Cobb" y según eso se clasifica en leve, moderada o severa — esa clasificación es la que define el tratamiento. Uno de los mitos más comunes es que la escoliosis se puede prevenir o corregir solo con "buena postura". En la mayoría de los casos idiopáticos esto no es cierto.

En mi caso, por ser leve, la cirugía se consideró como posibilidad al inicio, pero finalmente los médicos determinaron que no era necesaria. Con terapias constantes, se podía mejorar sin llegar a ese punto.

## Las terapias

Lo que siguió no fue fácil. Tuve que empezar terapias físicas, y durante las primeras dos semanas tenía que ir todos los días. Eso significaba levantarme a las cinco de la mañana para poder llegar a tiempo, hacer la sesión, y después ir directo a la universidad. Esos meses fueron de los más agotadores que he vivido.

Con el tiempo, la frecuencia de las terapias bajó, y aunque hoy sigo yendo, ya no es todos los días. También me recetaron pastillas y cremas para manejar el dolor en los momentos más difíciles, y una faja para ayudar a mantener la postura mientras el tratamiento avanza. Ninguno de estos tratamientos es una solución instantánea; son parte de un proceso que sigue en curso.

![Sesión de fisioterapia](https://i.ibb.co/pBxZcPH4/Chat-GPT-Image-12-jul-2026-02-10-34-p-m.png)

## Lo que ahora entiendo

Pienso en todos esos años escuchando "ponte derecha" como si fuera así de simple, como si mi cuerpo estuviera eligiendo estar así. Nadie lo decía para lastimar, pero cada comentario cargaba una idea de fondo: que el dolor era exagerado. Ahora sé que no era una cuestión de voluntad. Era mi columna, curvada de una forma que yo no había elegido ni podía corregir solo con "pararme bien".

También pienso en mi mamá, y en que su explicación no venía de indiferencia, sino de no tener otra forma de entender lo que veía. Fue ella misma quien, al notar el desnivel en mi ropa, cambió esa idea y me llevó a buscar respuestas reales.

Si hay alguien leyendo esto que también carga un dolor sin nombre, que también ha escuchado que el problema es su postura, su esfuerzo, su actitud: no se queden con esa explicación si algo dentro de ustedes sabe que hay más. A veces hace falta que alguien más vea lo que tú no puedes ver de ti mismo —en mi caso, fue un pantalón desnivelado— para empezar a hacer las preguntas correctas. Y si nadie más lo nota, insistan ustedes mismos. Un dolor constante nunca es "solo postura" hasta que un médico lo confirme.

![Imagen de cierre](https://i.ibb.co/ZRfYrxP5/Chat-GPT-Image-12-jul-2026-02-12-40-p-m.png)
`;

async function main() {
  console.log('Verificando categoria "Manualidades"...');
  await db
    .insert(blogCategorias)
    .values({ nombre: 'Manualidades', slug: 'manualidades', descripcion: 'Tips de Cricut, sublimacion y manualidades.' })
    .onConflictDoNothing({ target: blogCategorias.slug });

  const [categoria] = await db.select().from(blogCategorias).where(eq(blogCategorias.slug, 'manualidades')).limit(1);
  if (!categoria) throw new Error('No se pudo crear/encontrar la categoria "manualidades".');

  console.log('Sembrando posts de blog...');
  const posts = [
    {
      titulo: 'Guía completa de Cricut: materiales, tapetes y cuidados',
      resumen: 'Todo lo que necesitas saber sobre tu Cricut: tipos de maquina, tapetes, materiales, gramajes, herramientas y cuidados.',
      contenido: POST_1_CRICUT_GUIA,
      imagenPortada: 'https://i.ibb.co/5XFkcwbm/perfil-poppy.jpg',
      tiempoLectura: 6,
      fechaPublicacion: new Date('2026-07-05'),
    },
    {
      titulo: 'Cómo hacer un portaplatos para fiestas',
      resumen: 'Tutorial completo paso a paso para crear portaplatos personalizados con papel diploma y Cricut.',
      contenido: POST_2_PORTAPLATOS,
      imagenPortada: 'https://i.ibb.co/bjWwDbRL/hero.jpg',
      tiempoLectura: 8,
      fechaPublicacion: new Date('2026-07-12'),
    },
    {
      titulo: 'Portaplatos estilo mediterráneo: detalles en relieve',
      resumen: 'Como lograr un portaplatos con elementos 3D en relieve estilo ceramica mediterranea pintada a mano.',
      contenido: POST_3_PORTAPLATOS_MEDITERRANEO,
      imagenPortada: null as string | null,
      tiempoLectura: 4,
      fechaPublicacion: new Date('2026-07-14'),
    },
    {
      titulo: 'Coronas personalizadas de fomi',
      resumen: 'Coronas de fomi hechas a mano y personalizadas para cumpleanos, con tu foto, colores y estilo.',
      contenido: POST_4_CORONAS,
      imagenPortada: 'https://i.ibb.co/8D6mTYPt/Chat-GPT-Image-28-jun-2026-03-25-56-p-m.png',
      tiempoLectura: 4,
      fechaPublicacion: new Date('2026-07-18'),
    },
    {
      titulo: 'Mantenimiento de tu Cricut: la rutina que nadie te cuenta',
      resumen: 'La rutina simple de limpieza y cuidado que evita que tu Cricut falle justo cuando mas la necesitas.',
      contenido: POST_5_MANTENIMIENTO,
      imagenPortada: null as string | null,
      tiempoLectura: 3,
      fechaPublicacion: new Date('2026-07-22'),
    },
    {
      titulo: 'Errores comunes al usar una Cricut y cómo evitarlos',
      resumen: 'Los 7 errores mas frecuentes al usar una Cricut y como prevenirlos antes de que arruinen tu proyecto.',
      contenido: POST_6_ERRORES,
      imagenPortada: null as string | null,
      tiempoLectura: 3,
      fechaPublicacion: new Date('2026-07-25'),
    },
    {
      titulo: 'Materiales y tapetes para Cricut: cuál usar y cuándo',
      resumen: 'Guia de referencia rapida para elegir el material y el tapete correcto segun tu proyecto.',
      contenido: POST_7_MATERIALES_TAPETES,
      imagenPortada: null as string | null,
      tiempoLectura: 3,
      fechaPublicacion: new Date('2026-07-28'),
    },
    {
      titulo: '"Ponte derecha": un año conviviendo con un dolor que sí tenía nombre',
      resumen: 'Mi historia con la escoliosis — un dolor que durante anos se explico como mala postura, hasta que dejo de tener sentido.',
      contenido: POST_8_PONTE_DERECHA,
      imagenPortada: 'https://i.ibb.co/WNZHDpCH/Chat-GPT-Image-12-jul-2026-02-05-04-p-m.png',
      tiempoLectura: 7,
      fechaPublicacion: new Date('2026-08-01'),
    },
  ];

  await db
    .insert(blogPosts)
    .values(
      posts.map((p) => ({
        categoriaId: categoria.id,
        titulo: p.titulo,
        slug: slugify(p.titulo),
        resumen: p.resumen,
        contenido: p.contenido,
        imagenPortada: p.imagenPortada,
        tiempoLectura: p.tiempoLectura,
        publicado: true,
        fechaPublicacion: p.fechaPublicacion,
      }))
    )
    .onConflictDoNothing({ target: blogPosts.slug });

  console.log('Listo. Posts de blog sembrados (o ya existian).');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
