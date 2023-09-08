var config = {
    style: 'mapbox://styles/siggyf/cld8o2gqx002r01qovvuc72q2',
    accessToken: 'pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA',
    showMarkers: false,
    theme: 'dark',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '0-linleiding',
            alignment: 'right',
            classes: ['box'],
            title: 'Droogte 2022',
            image: '',
            description: 'Het was droog en heet in Europa in de zomer van 2022. De scheepvaart had last van de zeer lage afvoer. Was dit te voorzien? Waar had de scheepvaart het meeste last van de lage afvoer? Er werden sluizen gesloten om zout tegen te houden, lukte dat ook? <br /></br /> In deze scrollymap illustreren we met enkele ‘stories’ hoe de situatie was in de zomer van 2022 en waar het zoal knelde voor de scheepvaart. Alle stories zijn gebaseerd op gemeten open data. De scrollymap heeft tot doel enerzijds om de gevolgen van laagwater voor de binnenvaart in beeld te brengen, anderzijds om te laten zien wat de waarde is van data en van het combineren van verschillende databronnen.',
            location: {
                center: [8, 48],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'era5-snow',
                    opacity: 0.0
                },
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '1-lente',
            alignment: 'right',
            classes: ['box'],
            title: 'Sneeuwtekort',
            image: '',
            description: 'Het jaar 2022 was droog. Maar waarom was het droog? De droogte begon al in de lente. Er lag weinig sneeuw in de Alpen. In het rode gebied lag in mei tot 40 cm minder sneeuw dan gemiddeld over de voorgaande 30 jaar. Aangezien de gemsmolten sneeuw een aanzienlijk aandeel is in de totale afvoer van de Rijn, hadden we een mogelijke droogte al vroegtijdig kunnen zien aankomen.',
            location: {
                center: [8, 48],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'era5-snow',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'era5-snow',
                    opacity: 0.0
                }

            ]
        },
        {
            id: '2-lobith',
            alignment: 'right',
            classes: ['box'],
            title: 'Lagere afvoer dan in 2018',
            image: 'images/figures/lobith.png',
            description: 'Doordat er weinig water beschikbaar kwam, daalde de afvoer bij Lobith. De afvoer daalde in 2022 tot 679 m<sup>3</sup>/s, de laagste stand in de 21<sup>e</sup> eeuw. In 2018, toen het vanaf medio juli ook uitzonderlijk droog was, was het afvoerniveau vergelijkbaar, maar hield de laagwaterperiode aanzienlijk langer aan.',
            location: {
                center: [6.087122, 51.8514114],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: '2a-lobith',
            alignment: 'right',
            classes: ['box'],
            title: 'Afvoermetingen',
            image: 'images/lobith-station.jpeg',
            description: 'De afvoer wordt gemeten in het peilstation bij Lobith. In dit centrale referentiestation worden afvoeren (m<sup>3</sup>/s) en waterstanden (m t.o.v. NAP) gemeten.',
            location: {
                center: [6.087122, 51.8514114],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }

            ],
            onChapterExit: [
            ]
        },
        {
            id: '4-nijmegen',
            alignment: 'right',
            title: 'Laagste afvoer ooit gemeten',
            classes: ['box'],
            image: 'images/droogte.jpg',
            description: 'De laagste afvoer ooit gemeten bij Lobith was in 1929 (575 m<sup>3</sup>/s).  Dit is een beeld van de situatie toen (bron: Regionaal Archief Nijmegen). Toen was er ook weinig water, maar niet omdat het verdampte, maar omdat het bevroor.',
            location: {
                center: [5.87332, 51.85232],
                zoom: 14.7,
                pitch: 40.00,
                bearing: -109
            },
            onChapterEnter: [
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }

            ],
            onChapterExit: [

            ]
        },
        {
            id: '5-ivs',
            alignment: 'right',
            classes: ['box'],
            title: 'Meer reizen, minder lading',
            image: 'images/figures/ivs-trends2.png',
            description: 'Door de beperkte waterdiepte op de route naar Duitsland, konden schepen minder vracht meenemen. Er waren ruim 2x zoveel trips nodig om lading van Rotterdam naar Duitsland te vervoeren. ',
            location: {
                center: [5.32039, 51.57223],
                zoom: 7.83,
                pitch: 67.38,
                bearing: 129.05
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '5a-ivs',
            alignment: 'right',
            classes: ['box'],
            title: 'Type schepen',
            image: 'images/figures/ivs-trends_ship.png',
            description: 'Duwstellen waren tijdens het laagwater vrijwel geheel uit de vaart. Ter compensatie werden meer reizen gemaakt door koppelverbanden en motorschepen.',
            location: {
                center: [6.19130, 52.16698],
                zoom: 7.17,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '5b-ivs',
            alignment: 'right',
            classes: ['box'],
            title: 'Twente wordt vermeden',
            image: 'images/figures/lochem-ivs-trend.png',
            description: 'Op de IJssel werd eenrichtingsverkeer overwogen vanwege de zeer beperkte rivierbreedte. Er dreigde een sluiting van het Twentekanaal, omdat het enorme pompcapaciteit vergde om het peil in het kanaal te handhaven. Daardoor stokte de aanvoer van goederen naar Twente.',
            location: {
                center: [6.19130, 52.16698],
                zoom: 12.17,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },

        {
            id: '6a-ais',
            alignment: 'right',
            title: 'Krapte op de Rijn',
            classes: ['box'],
            image: '',
            description: 'Doordat de waterstand daalde, werd de rivier niet alleen ondieper maar ook smaller. Tegelijk was er meer verkeer. Vooral bij de bocht bij Nijmegen was het krap. Dit is de normale situatie.',
            location: {
                center: [5.86498, 51.85151],
                zoom: 15.39,
                pitch: 72.37,
                bearing: -69.59
            },
            onChapterEnter: [
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0.8
                },
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0.0
                },
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '6b-ais',
            alignment: 'right',
            title: 'Krapte op de Rijn',
            classes: ['box'],
            image: '',
            description: 'Dit is de situatie tijdens het laagwater. Het deel van de rivier dat werd bevaren is smaller én de schepen varen ook langzamer door de bocht bij Nijmegen om de inzinking te beperken.',
            location: {
                center: [5.86498, 51.85151],
                zoom: 15.39,
                pitch: 72.37,
                bearing: -69.59
            },
            onChapterEnter: [
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0.8
                },
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0
                },
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0
                }

            ],
            onChapterExit: [
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0
                }
            ]
        },
        {
            id: '6c-ais',
            alignment: 'right',
            title: 'Krapte op de Rijn',
            classes: ['box'],
            image: '',
            description: 'Deze kaart laat het verschil zien tussen een normale week en de droge week (week 38). In de blauwe gebieden zijn meer scheepvaart berichten verstuurd. In de groene berichten zijn minder schepen gesignaleerd. ',
            location: {
                center: [5.86498, 51.85151],
                zoom: 15.39,
                pitch: 72.37,
                bearing: -69.59
            },
            onChapterEnter: [
                {
                    layer: 'nijmegen-2022-w18',
                    opacity: 0
                },
                {
                    layer: 'nijmegen-2022-w34',
                    opacity: 0
                },
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'siggyf-nijmegen-w34-w18',
                    opacity: 0.0
                }
            ]
        },
        {
            id: '7-wachtrij',
            alignment: 'right',
            title: 'Wachtrij bij Grave',
            classes: ['box'],
            image: '',
            description: 'De sluis bij Weurt was in de zomer tijdelijk volledig gestremd door onvoldoende waterdiepte boven de sluisdrempel (oostkolk) en schade aan de deuren (westkolk). Schepen konden omvaren via de Maas, alleen moest dan de kleinere sluis Grave, met slechts 1 kolk, worden gepasseerd. Ook bij sluis Grave ontstonden problemen met de deuren en stenen in de vaarweg. Dit alles resulteerde bij Grave in wachttijden van meerdere uren.',
            location: {
                center: [5.73522, 51.76946],
                zoom: 14.73,
                pitch: 54.41,
                bearing: 59.13
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '8-zout',
            alignment: 'right',
            title: 'Beperkt schutten om zout buiten te houden',
            classes: ['box'],
            image: 'images/figures/salt.png',
            description: 'Vanaf half juli tot half september was bij de Noordersluis bij IJmuiden de maatregel van kracht dat er alleen geschut werd tussen 06:00 en 18:00 uur. Om de zoutindringing te reduceren (vanwege drinkwater) werd er flink minder geschut, met vollere kolk. De zoutindringing is door de maatregel flink gereduceerd: de zoutvracht door de Noordersluis verminderde met circa 140 kg per seconde.',
            location: {
                center: [4.58820, 52.46752],
                zoom: 12.88,
                pitch: 66.50,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '9-toekomst',
            alignment: 'right',
            title: 'Toekomstige droogte als gevolg van klimaatverandering',
            classes: ['box'],
            image: 'images/figures/ships.jpg',
            description: 'In de toekomst zullen perioden met droogte vaker gaan optreden en langer duren als gevolg van klimaatverandering. Zoals deze scrolly laat zien heeft dit een grote impact op de binnenvaart. Het heeft uiteindelijk ook grote financiële gevolgen, bijvoorbeeld voor de industrie in Duitsland. Om het transport van goederen over water in de toekomst te blijven ondersteunen, zijn maatregelen noodzakelijk.',
            location: {
                center: [4.58820, 52.46752],
                zoom: 6,
                pitch: 66.50,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
    ]
};
