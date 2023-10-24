let map = {
    "continent": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Grand Breatain",
                "topLeft": null,
                "top": "Iceland",
                "topRight": "Scandinavia",
                "left": null,
                "right": "Northern Europe",
                "bottomLeft": null,
                "bottom": "Westem Europe",
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
                "name": "Westem Europe",
                "topLeft": null,
                "top": "Great Britain",
                "topRight": "Nothern Europe",
                "left": null,
                "right": "Southern Europe",
                "bottomLeft": null,
                "bottom": null,
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
                "bottomLeft": "Westem Europe",
                "bottom": "Southern Europe",
                "bottomRight": null,

            },
            {
                "name": "Southern Europe",
                "topLeft": null,
                "top": "Northern Europe",
                "topRight": null,
                "left": "Westem Europe",
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            },
            {
                "name": "Ukraine",
                "topLeft": "Scandinavia",
                "top": null,
                "topRight": null,
                "left": "Northern Europe",
                "right": null,
                "bottomLeft": "Southern Europe",
                "bottom": null,
                "bottomRight": null,

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
                "bottom": "Westerm Australia",
                "bottomRight": null,


            },
            {
                "name": "New Guinea",
                "topLeft": null,
                "top": null,
                "topRight": null,
                "left": "Indonesia",
                "right": null,
                "bottomLeft": "Westerm Australia",
                "bottom": "Eastem Australia",
                "bottomRight": null,


            },
            {
                "name": "Westerm Australia",
                "topLeft": null,
                "top": "Indonesia",
                "topRight": "New Guinea",
                "left": null,
                "right": " Eastem Australia",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Eastem Australia",
                "topLeft": null,
                "top": "New Guinea",
                "topRight": null,
                "left": "Westerm Australia",
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
                "top": "Westerm Europe",
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
                "bottom": "Eastem Australia",
                "bottomRight": null,


            },
            {
                "name": "Westerm Australia",
                "topLeft": null,
                "top": "Indonesia",
                "topRight": "New Guinea",
                "left": null,
                "right": " Eastem Australia",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Eastem Australia",
                "topLeft": null,
                "top": "New Guinea",
                "topRight": null,
                "left": "Westerm Australia",
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            },
            {
                "name": "Westerm Australia",
                "topLeft": null,
                "top": "Indonesia",
                "topRight": "New Guinea",
                "left": null,
                "right": " Eastem Australia",
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,


            },
            {
                "name": "Eastem Australia",
                "topLeft": null,
                "top": "New Guinea",
                "topRight": null,
                "left": "Westerm Australia",
                "right": null,
                "bottomLeft": null,
                "bottom": null,
                "bottomRight": null,

            }
        ]
    }]
}


export { map };