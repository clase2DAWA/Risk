let map = {
    "continent": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Grand Britain",
                "topLeft": null,
                "top": "Iceland",
                "topRight": "Scandinavia",
                "left": null,
                "right": "Northern Europe",
                "bottomLeft": null,
                "bottom": "Western Europe",
                "bottomRight": null,


            },
            {
                "name": "Iceland",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Greenland",
                "right": "Scandinavia",
                "bottomLeft": null,
                "bottom": "Great Britain",
                "bottomRight": null,


            },
            {
                "name": "Western Europe",
                "topLeft": null,
                "top": "Great Britain",
                "topRight": "Nothern Europe",
                "left": null,
                "right": "Southern Europe",
                "bottomLeft": null,
                "bottom": "North Africa",
                "bottomRight": null,


            },
            {
                "name": "Scandinavia",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Iceland",
                "right": "Ukraine",
                "bottomLeft": "Great Britain",
                "bottom": "Northern Europe",
                "bottomRight": null,

            },
            {
                "name": "Northern Europe",
                "topLeft": null,
                "top": "Scandinavia",
                "topRight": null,
                "left": "Great Britain",
                "right": "Ukraine",
                "bottomLeft": "Western Europe",
                "bottom": "Southern Europe",
                "bottomRight": null,

            },
            {
                "name": "Southern Europe",
                "topLeft": null,
                "top": "Northern Europe",
                "topRight": null,
                "left": "Western Europe",
                "right": "Middle East",
                "bottomLeft": "North Africa",
                "bottom": "Egypt",
                "bottomRight": null,

            },
            {
                "name": "Ukraine",
                "topLeft": "Scandinavia",
                "top": null,
                "topRight": null,
                "left": "Northern Europe",
                "right": "Ural",
                "bottomLeft": "Southern Europe",
                "bottom": "Middle East",
                "bottomRight": "Afghanistan",

            }


        ]
    },
    {
        "name": "Asia",
        "color": "green",
        "territories": [
            {
                "name": "Ural",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Ukraine",
                "right": "Siberia",
                "bottomLeft": null,
                "bottom": "Afghanistan",
                "bottomRight": "china",


            },
            {
                "name": "Afghanistan",
                "topLeft": null,
                "top": "Ural",
                "topRight": null,
                "left": "Ukraine",
                "right": "China",
                "bottomLeft": "Middle East",
                "bottom": null,
                "bottomRight": "India",


            },
            {
                "name": "Middle East",
                "topLeft": "Southern Europe",
                "top": "Ukraine",
                "topRight": "Afghanistan",
                "left": "Egypt",
                "right": " India",
                "bottomLeft": "East Africa",
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Siberia",
                "topLeft": null,
                "top": null,
                "topRight": "Yakutsk",
                "left": "Ural",
                "right": "Irkutsk",
                "bottomLeft": null,
                "bottom": "China",
                "bottomRight": "Mongolia",

            },
            {
                "name": "China",
                "topLeft": "Ural",
                "top": "Siberia",
                "topRight": "Mongolia",
                "left": "Afghanistan",
                "right": "Ukraine",
                "bottomLeft": "India",
                "bottom": "Siam",
                "bottomRight": null,

            },
            {
                "name": "Sian",
                "topLeft": null,
                "top": "China",
                "topRight": null,
                "left": "India",
                "right": null,
                "bottomLeft": null,
                "bottom": "Indonesia",
                "bottomRight": null,

            },
            {
                "name": "Yakutsk",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Siberia",
                "right": "Kamchatka",
                "bottomLeft": null,
                "bottom": "Irkutsk",
                "bottomRight": null,

            },
            {
                "name": "Irkutsk",
                "topLeft": null,
                "top": "Yakutsk",
                "topRight": null,
                "left": "Siberia",
                "right": "Kamchatka",
                "bottomLeft": null,
                "bottom": "Mongolia",
                "bottomRight": null,

            },
            {
                "name": "Mogolia",
                "topLeft": null,
                "top": "Irkutsk",
                "topRight": "Kamchatka",
                "left": "Siberia",
                "right": "Japan",
                "bottomLeft": null,
                "bottom": "China",
                "bottomRight": null,

            },
            {
                "name": "Kamchatka",
                "topLeft": "Yakutsk",
                "top": null,
                "topRight": null,
                "left": "Irkutsk",
                "right": "Alaska",
                "bottomLeft": "Mongolia",
                "bottom": "Japan",
                "bottomRight": null,

            }


        ]
    },
    {
        "name": "Australia",
        "color": "purple",
        "territories": [
            {
                "name": "Indonesia",
                "topLeft": null,
                "top": "Siam",
                "topRight": null,
                "left": null,
                "right": "New Guinea",
                "bottomLeft": null,
                "bottom": "Western Australia",
                "bottomRight": null,


            },
            {
                "name": "New Guinea",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Indonesia",
                "right": null,
                "bottomLeft": "Western Australia",
                "bottom": "Eastern Australia",
                "bottomRight": null,


            },
            {
                "name": "Western Australia",
                "topLeft": null,
                "top": "Indonesia",
                "topRight": "New Guinea",
                "left": null,
                "right": " Eastern Australia",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Eastern Australia",
                "topLeft": null,
                "top": "New Guinea",
                "topRight": null,
                "left": "Western Australia",
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            }
        ]
    },
    {
        "name": "Africa",
        "color": "Orange",
        "territories": [
            {
                "name": "North Africa",
                "topLeft": null,
                "top": "Western Europe",
                "topRight": "Southern Europe",
                "left": "Brazil",
                "right": "Egypt",
                "bottomLeft": null,
                "bottom": "Congo",
                "bottomRight": "East Africa",


            },
            {
                "name": "Egypt",
                "topLeft": null,
                "top": "Southern Europe",
                "topRight": null,
                "left": null,
                "right": "Middle East",
                "bottomLeft": null,
                "bottom": "East Africa",
                "bottomRight": null,


            },
            {
                "name": "East Africa",
                "topLeft": "North Africa",
                "top": "Egypt",
                "topRight": "Middle East",
                "left": "Congo",
                "right": " Eastern Australia",
                "bottomLeft": "South Africa",
                "bottom": null,
                "bottomRight": "Madagascar",


            },
            {
                "name": "Congo",
                "topLeft": "North Africa",
                "top": null,
                "topRight": null,
                "left": null,
                "right": "East Africa",
                "bottomLeft": null,
                "bottom": "South Africa",
                "bottomRight": null,

            },
            {
                "name": "South Africa",
                "topLeft": null,
                "top": "Congo",
                "topRight": "East Africa",
                "left": null,
                "right": "Madagascar",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Madagascar",
                "topLeft": "East Africa",
                "top": null,
                "topRight": null,
                "left": "South Africa",
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            }
        ]
    }
        , {
        "name": "South America",
        "color": "pink",
        "territories": [
            {
                "name": "Venezuela",
                "topLeft": "Central America",
                "top": null,
                "topRight": null,
                "left": null,
                "right": null,
                "bottomLeft": "Peru",
                "bottom": "Brazil",
                "bottomRight": null,


            },
            {
                "name": "Brazil",
                "topLeft": null,
                "top": "Venezuela",
                "topRight": null,
                "left": "Peru",
                "right": "North Africa",
                "bottomLeft": "Argentina",
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Peru",
                "topLeft": null,
                "top": "Venezuela",
                "topRight": null,
                "left": null,
                "right": "Brazil",
                "bottomLeft": null,
                "bottom": "Argentina",
                "bottomRight": null,


            },
            {
                "name": "Argentina",
                "topLeft": "North Africa",
                "top": "Peru",
                "topRight": "Brazil",
                "left": null,
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            }
        ]
    }, {
        "name": "Nothr America",
        "color": "Yellow",
        "territories": [
            {
                "name": "Central America",
                "topLeft": null,
                "top": "Western US",
                "topRight": "Eastern US",
                "left": null,
                "right": null,
                "bottomLeft": null,
                "bottom": "Venezuela",
                "bottomRight": null,


            },
            {
                "name": "Western US",
                "topLeft": null,
                "top": "Alberta",
                "topRight": "Ontario",
                "left": null,
                "right": "Eastern US",
                "bottomLeft": null,
                "bottom": "Central America",
                "bottomRight": null,


            },
            {
                "name": "Eastern US",
                "topLeft": null,
                "top": "Ontario",
                "topRight": "Quebec",
                "left": "Western US",
                "right": null,
                "bottomLeft": "Central America",
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Alberta",
                "topLeft": "Alaska",
                "top": "Northwest Territory",
                "topRight": null,
                "left": null,
                "right": "Ontario",
                "bottomLeft": null,
                "bottom": "Western US",
                "bottomRight": null,

            },
            {
                "name": "Ontario",
                "topLeft": null,
                "top": "Northwest Territory",
                "topRight": "Greendland",
                "left": "Alberta",
                "right": "Quebec",
                "bottomLeft": "Western US",
                "bottom": "Eastern US",
                "bottomRight": null,

            },
            {
                "name": "Quebec",
                "topLeft": null,
                "top": null,
                "topRight": "Greendaland",
                "left": "Ontario",
                "right": null,
                "bottomLeft": null,
                "bottom": "Eastern US",
                "bottomRight": null,

            },
            {
                "name": "Alaska",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Kamchatka",
                "right": "NorthWest Territory",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": "Alberta",

            },
            {
                "name": "NorthWest Territory",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Alaska",
                "right": "Greenland",
                "bottomLeft": null,
                "bottom": "Alberta",
                "bottomRight": "Ontario",

            },
            {
                "name": "Greenland",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "NorthWest Territory",
                "right": "Iceland",
                "bottomLeft": "Ontario",
                "bottom": "Quebec",
                "bottomRight": null,

            },
        ]
    },
    ]
}


export { map };