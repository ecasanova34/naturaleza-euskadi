var config = {
    style: 'mapbox://styles/ec-maps/cmfs43hp500hm01sdad7dg0jt',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZWMtbWFwcyIsImEiOiJjbWZzM3VoZXEwODMwMmxzOHN0bjJhNHVoIn0.LMh3MNYF6cHKmco1UWer6w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Parajes naturales en Euskadi',
    subtitle: 'Euskadi cuenta con 55 espacios integrados en la Red Natura 2000, que se extienden por una superficie aproximada de 1.500 kilómetros cuadrados (en torno al 20,5% de su territorio). Aquí veremos algunos de ellos: 8 Biotopos protegidos, 9 Parques Naturales y una Reserva de la Biosfera.',
    byline: 'Eneritz Casanova',
    footer: 'Fuentes:<br>https://es.wikipedia.org/wiki/Gaztelugache <br>https://es.wikipedia.org/wiki/Lagunas_de_Laguardia <br>https://es.wikipedia.org/wiki/Parque_natural_de_las_Pe%C3%B1as_de_Aya <br>https://es.wikipedia.org/wiki/Rasa_mareal_entre_Deva_y_Zumaya <br>https://es.wikipedia.org/wiki/Valle_Salado_(A%C3%B1ana) <br>https://es.wikipedia.org/wiki/Zona_Minera_(Vizcaya) <br>https://golocalsansebastian.com/es/parques-naturales-pais-vasco/https://meatzaldea.eus/ <br>https://turismo.euskadi.eus/es/espacios-naturales/biotopo-protegido-complejo-lagunar-de-laguardia/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/biotopo-protegido-de-san-juan-de-gaztelugatxe/webtur00-content/es/" <br>https://turismo.euskadi.eus/es/espacios-naturales/biotopo-protegido-de-inurritza/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/biotopo-protegido-de-leitzaran/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/biotopo-protegido-de-itxina/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/la-rasa-mareal-y-los-acantilados-del-flysch/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-armanon/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-pagoeta/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-aiako-harria/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-aralar/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-aizkorri-aratz/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-urkiola/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-gorbeia/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-valderejo/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/espacios-naturales/parque-natural-de-izki/webtur00-content/es/ <br>https://turismo.euskadi.eus/es/top10/espacios-naturales/reserva-de-la-biosfera-de-urdaibai/webtur00-content/es/ <br>https://www.euskadi.eus/contenidos/documentacion/adaptacion_biotopos/es_def/adjuntos/adaptacionBiotopos.pdf <br>https://www.geo.euskadi.eus/geobisorea?lang=es <br>https://www.gipuzkoanatura.eus/es/espacios/parques-naturales/-/parkeak/T02/biotopo-protegido-de-leitzaran <br>https://www.turismozarautz.eus/es/-/inurritzako-biotopoa<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Armañón',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000206373_g2_rec_turismo/es_206373/images/GL_ParqueNaturaldeArmanon2Karrantza.jpg',
            description: 'En el extremo occidental de Bizkaia ya en el límite con Cantabria, se extiende un macizo montañoso dentro del paisaje de Las Encartaciones: el Parque Natural de Armañón. Se trata de una sucesión de terrenos colinos y montañosos de carácter eminentemente rural, entre los que destacan las cumbres de Armañón, Ranero, Surbias y Los Jorrios. El subsuelo del Parque está surcado por más de 200 cuevas y simas con un notable valor. Entre ellas destaca la Cueva de Pozalagua, que permite contemplar espectaculares formaciones como sus estalactitas excéntricas. En este territorio altamente rural perduran varias razas de ganado autóctono fácilmente reconocibles durante la visita al entorno del Parque: la oveja carranzana de cara rubia y la de cara negra, el perro villano de las Encartaciones o la vaca monchina son sólo algunos de ellos.',
            location: {
                center: [-3.317247, 43.273914],
                zoom: 10,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Biotopo Protegido Meatzaldea-Zona Minera de Bizkaia',
            image: 'https://meatzaldea.eus/wp-content/uploads/2024/10/galeria-20.jpg',
            description: 'La Zona Minera (en euskera, Meatzaldea) es una subcomarca no oficial de la Margen Izquierda de Bizkaia. Fue declarado Biotopo Protegido dado que se trata de un espacio con formaciones de notoria singularidad,   belleza e  interés científico. Se trata de un área explotada por sus filones de hierro y cuya explotación ha dado lugar a un paisaje de gran singularidad, único en la Comunidad Autónoma del País Vasco, cuyos valores están asociados al legado minero y a su patrimonio cultural. Se trata de un área de modelado kárstico con numerosas manifestaciones externas (dolinas, fuentes, sumideros...), entre los que destacan los lapiaces de agujas. En el subsuelo existe una de las mayores densidades de cavernamiento de Euskadi. Las cicatrices dejadas en el área por la extracción del hierro suponen uno de sus mayores atractivos paisajísticos.',
            location: {
                center: [-3.08039, 43.26036],
                zoom: 11,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Biotopo Protegido del Área de Gaztelugatxe',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gaztelugatxe_au_drone.jpg/1920px-Gaztelugatxe_au_drone.jpg',
            description: 'El Biotopo Protegido de Gaztelugatxe (158 ha) abarca un tramo de la costa vizcaína comprendido entre las cercanías de Bakio al oeste y el cabo de Matxitxako (Bermeo) al este. Se trata de un enclave del litoral singular, conformado por acantilados y laderas de fuertes pendientes. Incluye dos islotes de roca caliza: San Juan de Gaztelugatxe y Aketze. El primero está unido a tierra mediante un puente construido sobre las rocas que quedaron entre la isla y tierra firme; en uno de sus extremos, el oleaje ha horadado perfectos túneles en la roca. En su cima, a la que se accede atravesando el puente y subiendo una larga escalinata, se alza la ermita de San Juan; lugar al que, según la leyenda, San Juan Bautista llegó tras desembarcar en Bermeo y dar tres pasos que quedaron grabados en la roca del camino. Esta ermita tiene su origen en el siglo X y pudo ser un monasterio templario. A lo largo de los años, la ermita ha sufrido muchos avatares, incluidos incendios y saqueos de corsarios como el de Francis Drake, por lo que hoy en día la encontramos totalmente reconstruida. El peñón de Aketze sólo es accesible en barco. Este aislamiento la ha convertido en un santuario para las aves marinas: 200 parejas de paiño común, cormoranes moñudos y gaviotas patiamarillas nidifican en este excepcional lugar.<br> Foto: Por Clementp.fr - Trabajo propio, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=90887176',
            location: {
                center: [-2.785, 43.447],
                zoom: 11,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Reserva de la Biosfera de Urdaibai',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000005161_g2_rec_turismo/es_5161/images/GL_laga2.jpg',
            description: 'Urdaibai es un espacio natural extraordinariamente bello y variado, por eso fue declarado Reserva de la Biosfera por la UNESCO en 1984. Su corazón es el río Oka, que nace en el monte Oiz y se transforma en ría al llegar a Mundaka, creando unas espectaculares marismas llenas de vida. El águila pescadora, la espátula, el avetoro... son aves muy difíciles de avistar en toda la Península Ibérica y que se pueden ver en Urdaibai, un paraje de gran riqueza ornitológica. Además de singulares marismas, Urdaibai ofrece algunas de las playas más bellas y apreciadas de Euskadi: la de Laida, que varía constantemente de forma y tamaño; o la espectacular playa de Laga, situada bajo el imponente Peñón de Ogoño. En el seno de Urdaibai se puede disfrutar de varios miradores naturales,  divisar la isla de Izaro o acercarse hasta el cabo de Matxitxako, el más saliente de la costa cantábrica y con vistas panorámicas a San Juan de Gaztelugatxe. Los pueblos pesqueros de Bermeo, Elantxobe y Mundaka son parada obligada, este último muy conocido por tener una de las mejores olas del mundo. Más hacia el interior, Urdaibai también esconde grandes tesoros, como las Cuevas de Santimamiñe, que albergan pinturas rupestres de incalculable valor. <br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.656924326269510, 43.34689731959000],
                zoom: 10,
                pitch: 20,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Biotopo Protegido Litoral Deba - Zumaia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sakoneta%2C_Deba.jpg/960px-Sakoneta%2C_Deba.jpg?20171020073208',
            description: 'La franja costera situada en el sector occidental del litoral guipuzcoano entre las localidades de Deba y Zumaia comprende unos 8 kilómetros de acantilados, un lugar donde las montañas descienden de forma abrupta hacia el mar formando uno de los espacios naturales más espectaculares de Euskadi: el  Flysch. Este tramo incluye elementos de valor geológico y geomorfológico de reconocido prestigio internacional, así como el ecosistema marino más rico de todo el litoral vasco. Por ello, en 2010 fue declarada Geoparque de la Costa Vasca junto a la zona kárstica del interior. Sus altos acantilados se elevan sobre un fenómeno peculiar, la "rasa mareal" o "plataforma de abrasión", esculpida poco a poco en el Flysch. Durante miles de años, la erosión producida por las olas en los acantilados ha formado una superficie llana en la línea costera, secuencias de estratos a modo de milhojas, en los que se alternan capas de material duro (calizas y areniscas) con otras blandas (margas y rocas arcillosas). Los materiales estratificados del "flysch" representan un santuario geológico y son objeto de estudio de numerosos geólogos provenientes de todo el mundo, ya que recogen información sobre los principales eventos climáticos, biológicos y geológicos de la Tierra durante 50 millones de años. <br>Foto: Por Oier Araolaza CC BY-SA 2.0 https://commons.wikimedia.org/wiki/File:Sakoneta,_Deba.jpg',
            location: {
                center: [-2.30421, 43.29677],
                zoom: 10,
                pitch: 20,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Biotopo Protegido de Iñurritza',
            image: 'https://www.turismozarautz.eus/documents/2957482/3402062/Biotopoa+barrua.jpg/8d9cda90-0be5-bc8c-6d36-cfd15b1dfe14?t=1674754085000',
            description: 'Situado en las inmediaciones del casco urbano de Zarautz, el Biotopo Protegido de Iñurritza constituye el campo de dunas más extenso y mejor conservado del litoral de la Comunidad Autónoma Vasca. Este paraje natural se sitúa entre el norte de la playa y la margen izquierda de la ría de Iñurritza y tiene una superficie total de 177.200 m², la mayoría de los cuales están ocupados por las instalaciones del Club de Golf de Zarautz.  Este espacio, caracterizado por el paisaje dunar, se encuentra asociado a otros ambientes típicamente costeros, como son los acantilados o la costa rocosa, así como la marisma y el estuario ligados a la desembocadura de la regata de Iñurritza.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.1715665423278000, 43.2803679053378],
                zoom: 12,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Pagoeta',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000004922_g2_rec_turismo/es_4922/images/GL_Plan12_Pagoeta.jpg',
            description: 'Cerca de Zarautz se abre una variante de paisaje humanizado de campiña y caseríos, con su centro en el Monte Pagoeta, alzándose sobre los núcleos rurales de Aia y Laurgain (Gipuzkoa). El Parque Natural de Pagoeta desarrolla una función formativa y recreativa de notable interés. Una escuela de la naturaleza y centro de visitantes, en un magnífico caserío del siglo XV, componen la oferta divulgativa del Parketxe Iturraran. Es de alto interés la exposición etnográfica en torno a la vida en los caseríos y el gran jardín botánico de las proximidades. Otros elementos interesantes de Pagoeta son la ferrería de Agorregi, de comienzos del siglo XV; las neveras (elurzuloak), que muestran las antiguas técnicas de consevación por frío; y las huellas prehistóricas que alberga este parque, como dólmenes, túmulos y yacimientos en cuevas. La presencia de razas de ganado autóctono es de singular valor, como la vaca betizu o el caballo pottoka.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.177435, 43.233574],
                zoom: 10.5,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Parque Natural Aiako Harria',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Vista_desde_Pe%C3%B1as_de_Aya.jpg/1920px-Vista_desde_Pe%C3%B1as_de_Aya.jpg',
            description: 'El Parque Natural Aiako Harria es un enclave de singular belleza situado en las estribaciones de los Pirineos, en el extremo oriental de Gipuzkoa. Las tres cimas principales son Irumugarrieta (806 m), Txurrumurru (821 m) y Erroilbide (843 m). Desde Aiako Harria se admira la Bahía de Txingudi, con las poblaciones de Hondarribia, Irún y Hendaya; el Monte Jaizkibel y el valle de Oiartzun. El barranco de Aiztondo, con una cascada de 100 metros de desnivel, ofrece un paisaje singular. Dentro de la masa rocosa de Aiako Harria existen decenas de pozos y galerías mineras. La mina de Arditurri (Oiartzun), ofrece una interesantísima visita desde la Casa del Parque Natural, el que fuera antaño laboratorio de las minas. Desde aquí se accede a la explotación minera que tuvo lugar desde la romanización hasta 1984. La proximidad a la frontera francesa hizo que la ingeniería militar se fijara en las elevaciones montañosas de la zona para instalar en el territorio del actual parque algunas fortificaciones fácilmente visitables.<br>Foto: por Nachopicture CC BY-SA 4.0 https://commons.wikimedia.org/wiki/File:Vista_desde_Pe%C3%B1as_de_Aya.jpg',
            location: {
                center: [-1.79, 43.283325],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Biotopo Protegido de Leitzaran',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000010105_g2_rec_turismo/es_10105/images/valleleitzaran.jpg',
            description: 'El río Leitzaran se interna en Gipuzkoa desde el territorio navarro de Leitza, y discurre por rápidos, presas y meandros, a la sombra de una aliseda por un valle angosto y despoblado, hasta desembocar en el río Oria, a la altura de Andoain. Este biotopo acoge al río y su entorno. Es un lugar muy interesante desde el punto de vista faunístico y florístico, ya que en él se fusionan el medio acuático y el terrestre. Sin embargo, el Biotopo no está aislado, y es un componente más de un paisaje mucho más amplio. Así, el Valle de Leitzaran en su conjunto, guarda un gran patrimonio cultural y natural. Por lo tanto, las características del Biotopo enriquecen al conjunto del valle, y viceversa. <br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2, 43.165990],
                zoom: 10,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Parque Natural de Aralar',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000001938_g2_rec_turismo/es_1938/images/GL_Aralar.jpg',
            description: 'Estamos en una de las áreas montañosas más importantes en cuanto a extensión, altitud, usos del suelo y valores naturales de Euskadi, además de ser una de las más frecuentadas. Enmarcado entre las comarcas del Goierri y Tolosaldea, supone una referencia paisajística de primer orden, con la emblemática cima del Txindoki (Larrunarri). El entorno es ideal para conocer un caserío de cerca, degustar queso Idiazabal, probar la sidra y degustar un típico menú de sidrería, pedalear sobre una bicicleta de montaña, montar a caballo y ver monumentos megalíticos: una treintena de dólmenes, túmulos, monolitos, yacimientos en cueva y al aire libre, dos crómlech...  Grandes y pequeños recorridos están balizados como itinerarios montañeros, además de existir conexiones peatonales entre las áreas con equipamiento recreativo.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.03223, 42.99642],
                zoom: 10.5,
                pitch: 20,
                bearing: 0,
                speed: 0.5
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Aizkorri-Aratz',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000004911_g2_rec_turismo/es_4911/images/Aizkorri%20nevado%20385x220.jpg',
            description: 'El Parque Natural de Aizkorri-Aratz, situado entre Álava y Gipuzkoa, destaca por sus sierras calizas e interminables hayedos. Su sierra, la cadena montañosa más alta de Euskadi, se presenta como una auténtica muralla montañosa entre ambas provincias. Cuenta con la cima más alta de Euskadi, el Aitxuri (1.551 m) y dice la leyenda que entre sus cumbres puede aún encontrarse a la diosa mitológica Mari. El patrimonio cultural del Parque contiene dólmenes, cuevas ancestrales y antiguas calzadas romanas. Destaca el túnel de San Adrián, patrimonio de la UNESCO, atravesado por su antiquísima calzada que forma parte del Camino Real y el Camino de Santiago.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.360619, 42.965853],
                zoom: 11,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Parque Natural de Urkiola',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000001943_g2_rec_turismo/es_1943/images/GL_Plan9Urkiola2.jpg',
            description: 'El Parque Natural de Urkiola agrupa los terrenos de mayor altitud de la Sierra de Aramotz, constituyendo una gran barrera caliza entre las comarcas vizcaínas de Arratia, el Duranguesado y el valle alavés de Aramaio, y separando las cuencas cantábrica y mediterránea. El Parque incluye una serie de sierras y peñas calizas, barrancos y valles profundos, con cumbres que han fomentando una gran afición al montañismo y al senderismo. Es muy frecuentado Anboto, su cumbre más alta, con la cueva de Mari como referente mitológico. Toma su nombre del Santuario de Urkiola, edificado en honor a San Antonio Abad y San Antonio de Padua. Delante del Santuario se halla una simbólica piedra que es lugar de peregrinación para quienes desean encontrar pareja en breve tiempo. Según la leyenda, tan sólo hace falta dar tres vueltas a la piedra para lograrlo.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.65083821, 43.10352955],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Gorbeia',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000001937_g2_rec_turismo/es_1937/images/GL_OTXANDIO_HONTZA_ALAVA_BAIAS127min.jpg',
            description: 'El Parque Natural de Gorbeia es un tradicional punto de referencia del montañismo vasco. Su cumbre, de 1.482 metros de altitud, marca el límite entre el territorio vizcaíno y el alavés, y exhibe la muy buscada Cruz del Gorbeia. En Gorbeia hay paisajes muy distintos de rocas escarpadas, zonas suaves de pastos, o bosques de hayedos y robledales, todo ello sobre un conjunto kárstico con casi 500 cavidades catalogadas. El Biotopo Protegido de Itxina y la cascada de Gujuli, con más de 100 metros de caída, son dos elementos paisajísticos reseñables. La calidad paisajista y la significación cultural y afectiva que el Parque tiene para el pueblo vasco ha influido para que sea centro de numerosas actividades: senderismo, montaña, rutas en bicicleta de montaña y a caballo, espeleología, etc.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.81120549, 43.03173446],
                zoom: 10.5,
                pitch: 20,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Biotopo Protegido de Itxina',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000004910_g2_rec_turismo/es_4910/images/GL_itxinagorbeia.jpg',
            description: 'El macizo de Itxina (571 ha) se encuentra en el interior del Parque Natural de Gorbeia y constituye un magnífico ejemplo de formación kárstica. En las calizas, con alto contenido en carbonato cálcico, el agua de la lluvia ha ido, a lolargo de millones de años, disolviendo la roca, que a pesar de ser muy sólida, es altamente soluble en plazos de tiempo tan prolongados. Así, la lluvia va produciendo desgastes en la roca, hasta llegar a dejar todo un macizo montañoso agrietado en superficie y atravesado por innumerables conductos subterráneos. Desde el aire, en Itxina se aprecia una meseta rocosa que se alza del entorno, con los bordes formando una cresta. El interior del macizo es un gran laberinto de simas circundadas por elevaciones rocosas agrietadas y resquebrajadas.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.8114700317382800, 43.06587799626200],
                zoom: 12,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ffifteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Valderejo',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000001942_g2_rec_turismo/es_1942/images/GL_5ParuqedeValderejo.jpg',
            description: 'El Parque Natural de Valderejo es un espacioso valle cercado por empinadas laderas que culminan en rocas y atravesado por nueve sendas, entre las que destaca el hermoso desfiladero del río Purón. Valderejo es el hogar de una variada fauna y flora. Sus valores ornitológicos son especialmente llamativos, y entre sus rocas se encuentra la colonia de buitre leonado más numerosa de Euskadi. En Lalastra, corazón de Valderejo, se encuentran la Casa del Parque, que informa sobre rutas y servicios, y el Museo Etnográfico, que muestra la historia y costumbres del valle.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-3.2302409687865700, 42.87517825461720],
                zoom: 11,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Biotopo Protegido Diapiro de Añana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Salinas_de_A%C3%B1ana_--_Valle_Salado_01.jpg/1920px-Salinas_de_A%C3%B1ana_--_Valle_Salado_01.jpg',
            description: 'El valle salado de Añana es una salina de interior, que aprovecha cuatro manantiales de agua salada que brotan en la parte más alta de este valle. En él se encuentran numerosas eras que se llenan con estas aguas, dejándose secar al sol para obtener sal. Fue declarado Biotopo Protegido con la finalidad de proteger el paisaje que conforma la formación geológica de tipo diapírico en que se enmarca, así como el sistema hidrogeológico que alberga y los hábitats y especies de flora y fauna silvestre que acoge.  El área del Biotopo también incluye el lago de Caicedo-Yuso, el lago natural más importante del País Vasco.<br>Foto: por Basotxerri. CC BY-SA 4.0 https://commons.wikimedia.org/wiki/File:Salinas_de_A%C3%B1ana_--_Valle_Salado_01.jpg',
            location: {
                center: [-2.98707, 42.78777],
                zoom: 12,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Parque Natural de Izki',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000001944_g2_rec_turismo/es_1944/images/Izki%20paisaje%20385x220.jpg',
            description: 'A 31 kilómetros de Vitoria-Gasteiz, el Parque Natural de Izki es una extensa zona eminentemente forestal recorrida por el río Izki y bordeada por montañas, con la cota más alta en el Monte Kapildui (1.176 m). Estás en un rincón ideal para realizar turismo ornitológico, paseos y excursiones a pie, en bicicleta o a caballo. Izki alberga la reserva de "Quercus pirenaica" mayor de Europa y en su seno se ha desarrollado una peculiar cultura rural digna de conservar y conocer. Desde Korres, donde se halla el Centro de Interpretación, se puede atravesar el Barranco de Izki y llegar hasta Bujanda, donde se puede disfrutar de la espectacular foz del río Izki y una amplia zona recreativa. En su entorno destacan las cuevas eremíticas de Laño, Faido y Marquínez. Merece también una visita las hoces y roquedos de Arluzea y la villa de Peñacerrada.<br>Foto: turismo.euskadi.eus',
            location: {
                center: [-2.5240938, 42.756878],
                zoom: 11,
                pitch: 20,
                bearing:0, 
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Biotopo Protegido de Lagunas de Laguardia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/LAGUNAS_LAGUARDIA_%28ARGAZKIA_EJ_M.ARRAZOLA%29.jpg',
            description: 'Las Lagunas de Laguardia se encuentran en pleno corazón de Rioja Alavesa, en las proximidades del amurallado núcleo de Laguardia. Al norte, delimitando  la comarca, se extiende de oeste a este la alta sierra de Toloño. Este complejo lagunar engloba cuatro pequeños humedales: Carralogroño, Carravalseca, Musco y El Prao de la Paúl. Carralogroño y Carravalseca son unas depresiones secas, lisas y blancas, por la costra de sal que se forma en la superficie cuando se evapora el agua acumulada en la estación húmeda. Son "cubetas endorreicas", sin comunicación con ríos o arroyos, que sólo reciben agua de lluvia y de escorrentía. Se inundan en la época de lluvias y pierden el agua por evaporación, dejando sobre la superficie la sal disuelta en el agua. La antigua laguna de Musco fue desecada para la puesta en cultivo de sus terrenos, aunque se negocia su regeneración e integración en el Biotopo. El Prao de la Paúl es un pequeño embalse creado sobre una antigua zona encharcada,  con agua represada procedente de un arroyo. Este complejo lagunar es extraordinariamente interesante, tanto desde el punto de vista geológico como por la flora y fauna peculiar que acoge.<br>Foto: Gobierno Vasco - Irekia',
            location: {
                center: [-2.57015772163868, 42.54931474104520],
                zoom: 12,
                pitch: 20,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
