import { Territory } from "./territory.js";

let map = {
    "continent": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Great Britain",
                "neighbors": [{
                    "name": "Western Europe",
                    "degrees": 90
                },
                {
                    "name": "Northern Europe",
                    "degrees": 0
                },
                {
                    "name": "Iceland",
                    "degrees": 270
                }
                ]
            },
            {
                "name": "Iceland",
                "neighbors": [{
                    "name": "Great Britain",
                    "degrees": 90
                },
                {
                    "name": "Scandinavia",
                    "degrees": 0
                },
                {
                    "name": "Greenland",
                    "degrees": 225
                }
                ]
            },
            {
                "name": "Western Europe",
                "neighbors": [{
                    "name": "Great Britain",
                    "degrees": 270
                },
                {
                    "name": "Northern Europe",
                    "degrees": 315
                },
                {
                    "name": "Southern Europe",
                    "degrees": 0
                },
                {
                    "name": "North Africa",
                    "degrees": 90
                }
                ]
            }
        ]
    }]
}
/*
}
"top": "Iceland",
"topRight": "Scandinavia",
    "topLeft": null,
        "left": null,
            "right": "Northern Europe",
                "bottom": "Western Europe",
                    "bottomRight": null,
                        "bottomLeft": null,
        },
{
"name": "Western Europe",
    "top": "Great Britain",
        "topRight": "Northern Europe",
            "topLeft": null,
                "left": null,
                    "right": "Southern Europe",
                        "bottom": "North Africa",
                            "bottomRight": null,
                                "bottomLeft": null
},
{
"name": "Southern Europe",
    "top": "Northern Europe",
        "topRight": "Ukraine",
            "topLeft": null,
                "left": "Western Europe",
                    "right": "Middle East",
                        "bottom": "Egypt",
                            "bottomRight": null,
                                "bottomLeft": "North Africa"
},
{
"name": "Northern Europe",
    "top": "Scandinavia",
        "topRight": null,
            "topLeft": null,
                "left": "Great Britain",
                    "right": "Ukraine",
                        "bottom": "Southern Europe",
                            "bottomRight": null,
                                "bottomLeft": "Western Europe",
        },
{
"name": "Scandinavia",
    "top": null,
        "topRight": null,
            "topLeft": null,
                "left": "Iceland",
                    "right": "Ukraine",
                        "bottom": "Northern Europe",
                            "bottomRight": null,
                                "bottomLeft": "Great Britain"
},
{
"name": "Iceland",
    "top": null,
        "topRight": null,
            "topLeft": "Greenland",
                "left": null,
                    "right": "Scandinavia",
                        "bottom": "Great Britain",
                            "bottomRight": null,
                                "bottomLeft": null
},
{
"name": "Ukraine",
    "top": null,
        "topRight": "Ural",
            "topLeft": "Scandinavia",
                "left": "Northern Europe",
                    "right": "Afganistan",
                        "bottom": "Middle East",
                            "bottomRight": null,
                                "bottomLeft": "Southern Europe"
}
    ]
},
{

"name": "Asia",
    "color": "green",
        "territories": [
            {
                "name": "Ural",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Ukraine",
                "right": "Siberia",
                "bottom": "Afghanistan",
                "bottomRight": "China",
                "bottomLeft": null,
            },
            {
                "name": "Siberia",
                "top": null,
                "topRight": "Yakutsk",
                "topLeft": null,
                "left": "Ural",
                "right": "Irkutsk",
                "bottom": "China",
                "bottomRight": "Mongolia",
                "bottomLeft": null
            },
            {
                "name": "Afghanistan",
                "top": "Ural",
                "topRight": null,
                "topLeft": null,
                "left": "Ukraine",
                "right": "China",
                "bottom": null,
                "bottomRight": "India",
                "bottomLeft": "Middle East"
            },
            {
                "name": "China",
                "top": "Siberia",
                "topRight": "Mongolia",
                "topLeft": "Ural",
                "left": "Afghanistan",
                "right": null,
                "bottom": "Siam",
                "bottomRight": null,
                "bottomLeft": "India",
            },
            {
                "name": "India",
                "top": "China",
                "topRight": null,
                "topLeft": "Afghanistan",
                "left": "Middle East",
                "right": "Siam",
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Middle East",
                "top": "Ukraine",
                "topRight": "Afghanistan",
                "topLeft": "Southern Europe",
                "left": "Egypt",
                "right": "India",
                "bottom": "East Africa",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Siam",
                "top": "China",
                "topRight": null,
                "topLeft": null,
                "left": "India",
                "right": null,
                "bottom": "Indonesia",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Mongolia",
                "top": "Irkutsk",
                "topRight": "Kamchatka",
                "topLeft": "Siberia",
                "left": null,
                "right": "Japan",
                "bottom": "China",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Japan",
                "top": "Kamchatka",
                "topRight": null,
                "topLeft": null,
                "left": "Mongolia",
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Kamchatka",
                "top": null,
                "topRight": null,
                "topLeft": "Yakutsk",
                "left": "Irkutsk",
                "right": "Alaska",
                "bottom": "Japan",
                "bottomRight": null,
                "bottomLeft": "Mongolia"
            },
            {
                "name": "Irkutsk",
                "top": "Yakutsk",
                "topRight": null,
                "topLeft": null,
                "left": "Siberia",
                "right": "Kamchatka",
                "bottom": "Mongolia",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Yakutsk",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Siberia",
                "right": "Kamchatka",
                "bottom": "Irkistk",
                "bottomRight": null,
                "bottomLeft": null
            }
        ]
},
{
"name": "Oceania",
    "color": "purple",
        "territories": [
            {
                "name": "Indonesia",
                "top": "Siam",
                "topRight": null,
                "topLeft": null,
                "left": null,
                "right": "New Guinea",
                "bottom": "Western Australia",
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "New Guinea",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Indonesia",
                "right": null,
                "bottom": "Eastern Australia",
                "bottomRight": null,
                "bottomLeft": "Western Australia"
            },
            {
                "name": "Western Australia",
                "top": "Indonesia",
                "topRight": "New Guinea",
                "topLeft": null,
                "left": null,
                "right": "Eastern Australia",
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Eastern Australia",
                "top": "New Guinea",
                "topRight": null,
                "topLeft": null,
                "left": "Western Australia",
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null,
            }
        ]
},
{
"name": "Africa",
    "color": "Brown",
        "territories": [
            {
                "name": "North Africa",
                "top": "Western Europe",
                "topRight": "Southern Europe",
                "topLeft": null,
                "left": "Brazil",
                "right": "Egypt",
                "bottom": "Congo",
                "bottomRight": "East Africa",
                "bottomLeft": null,
            },
            {
                "name": "Egypt",
                "top": "Southern Europe",
                "topRight": "Middle East",
                "topLeft": null,
                "left": "North Africa",
                "right": null,
                "bottom": "East Africa",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "East Africa",
                "top": "Egypt",
                "topRight": "Middle East",
                "topLeft": "North Africa",
                "left": "Congo",
                "right": null,
                "bottom": "South Africa",
                "bottomRight": "Madagascar",
                "bottomLeft": null
            },
            {
                "name": "Congo",
                "top": null,
                "topRight": "East Africa",
                "topLeft": "North Africa",
                "left": null,
                "right": null,
                "bottom": "South Africa",
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "South Africa",
                "top": "Congo",
                "topRight": "East Africa",
                "topLeft": null,
                "left": null,
                "right": "Madagascar",
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "Madagascar",
                "top": "East Africa",
                "topRight": null,
                "topLeft": null,
                "left": "South Africa",
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null,
            }
        ]
},
{
"name": "South America",
    "color": "red",
        "territories": [
            {
                "name": "Venezuela",
                "top": "Central America",
                "topRight": null,
                "topLeft": null,
                "left": null,
                "right": null,
                "bottom": "Brazil",
                "bottomRight": null,
                "bottomLeft": "Peru",
            },
            {
                "name": "Peru",
                "top": "Venezuela",
                "topRight": null,
                "topLeft": null,
                "left": null,
                "right": "Brazil",
                "bottom": "Argentina",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Brazil",
                "top": "Venezuela",
                "topRight": null,
                "topLeft": null,
                "left": "Peru",
                "right": "North Africa",
                "bottom": "Argentina",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Argentina",
                "top": "Peru",
                "topRight": "Brazil",
                "topLeft": null,
                "left": null,
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null,
            }
        ]
},
{
"name": "North America",
    "color": "Yellow",
        "territories": [
            {
                "name": "Central America",
                "top": "Western US",
                "topRight": "Eastern EU",
                "topLeft": null,
                "left": null,
                "right": null,
                "bottom": "Venezuela",
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "Western US",
                "top": "Alberta",
                "topRight": "Ontario",
                "topLeft": null,
                "left": null,
                "right": "Eastern US",
                "bottom": "Central America",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Eastern US",
                "top": "Ontario",
                "topRight": "Quebec",
                "topLeft": null,
                "left": "Western US",
                "right": null,
                "bottom": "Central America",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Quebec",
                "top": "Greenland",
                "topRight": null,
                "topLeft": null,
                "left": "Ontario",
                "right": null,
                "bottom": "Eastern EU",
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "Ontario",
                "top": "Northwest Territory",
                "topRight": "Greenland",
                "topLeft": null,
                "left": "Alberta",
                "right": "Quebec",
                "bottom": "Eastern EU",
                "bottomRight": null,
                "bottomLeft": "Western US",
            },
            {
                "name": "Alberta",
                "top": "Northwest Territory",
                "topRight": null,
                "topLeft": "Alaska",
                "left": null,
                "right": "Ontario",
                "bottom": "Western US",
                "bottomRight": null,
                "bottomLeft": null,
            },
            {
                "name": "Northwest Territory",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Alaska",
                "right": "Greenland",
                "bottom": "Alberta",
                "bottomRight": "Ontario",
                "bottomLeft": null,
            },
            {
                "name": "Alaska",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Kamchatka",
                "right": "Northwest Territory",
                "bottom": null,
                "bottomRight": "Alberta",
                "bottomLeft": null,
            },
            {
                "name": "Greenland",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": "Northwest Territory",
                "right": "Iceland",
                "bottom": "Quebec",
                "bottomRight": null,
                "bottomLeft": "Ontario",
            }
        ]
}
]

}
export { map }; 
*/
