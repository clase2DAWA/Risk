let map = {
    "continents": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Great Britain",
                "neighbors": [
                    { "name": "Iceland", "grados": 120 },
                    { "name": "Northern Europe", "grados": 20 },
                    { "name": "Westem Europe", "grados": 120 }
                ],
            },
            {
                "name": "Iceland",
                "neighbors": [
                    { "name": "Greenland", "grados": 40 },
                    { "name": "Scandinavia", "grados": 210 },
                    { "name": "Great Britain", "grados": 430 }
                ],
            },
            {
                "name": "Westem Europe",
                "neighbors": [
                    { "name": "Great Britain", "grados": 230 },
                    { "name": "Southern Europe", "grados": 230 },
                    { "name": "North Africa", "grados": 230 }
                ],
            },
            {
                "name": "Scandinavia",
                "neighbors": [
                    { "name": "Iceland", "grados": 230 },
                    { "name": "Ukraine", "grados": 40 },
                    { "name": "Great Britain", "grados": 50 },
                    { "name": "Northern Europe", "grados": 30 },
                    { "name": "Great Britain", "grados": 340 }
                ],
            },
            {
                "name": "Northern Europe",
                "neighbors": [
                    { "name": "Great Britain", "grados": 0 },
                    { "name": "Ukraine", "grados": 0 },
                    { "name": "Scandinavia", "grados": 0 },
                    { "name": "Southern Europe", "grados": 0 },
                    { "name": "Westem Europe", "grados": 0 }
                ],
            },
            {
                "name": "Southern Europe",
                "neighbors": [
                    { "name": "Westem Europe", "grados": 0 },
                    { "name": "Middle East", "grados": 0 },
                    { "name": "Northern Europe", "grados": 0 },
                    { "name": "Egypt", "grados": 0 },
                    { "name": "North Africa", "grados": 0 }
                ],
            },
            {
                "name": "Ukraine",
                "neighbors": [
                    { "name": "Scandinavia", "grados": 0 },
                    { "name": "Ural", "grados": 0 },
                    { "name": "Northern Europe", "grados": 0 },
                    { "name": "Middle East", "grados": 0 },
                    { "name": "Southern Europe", "grados": 0 },
                    { "name": "Afghanistan", "grados": 0 }
                ],
            }
        ]
    },
    {
        "name": "Asia",
        "color": "green",
        "territories": [{
            "name": "India",
            "neighbors": [
                { "name": "Middle East", "grados": 0 },
                { "name": "Sian", "grados": 0 },
                { "name": "China", "grados": 0 },
                { "name": "Afghanistan", "grados": 0 }
            ]
        },
        {
            "name": "Ural",
            "neighbors": [
                { "name": "Ukraine", "grados": 0 },
                { "name": "Siberia", "grados": 0 },
                { "name": "Afghanistan", "grados": 0 },
                { "name": "China", "grados": 0 }
            ],
        },
        {
            "name": "Afghanistan",
            "neighbors": [
                { "name": "Ukraine", "grados": 0 },
                { "name": "China", "grados": 0 },
                { "name": "Ural", "grados": 0 },
                { "name": "India", "grados": 0 },
                { "name": "Middle East", "grados": 0 }
            ],
        },
        {
            "name": "Middle East",
            "neighbors": [
                { "name": "Southern Europe", "grados": 0 },
                { "name": "Ukraine", "grados": 0 },
                { "name": "Afghanistan", "grados": 0 },
                { "name": "Egypt", "grados": 0 },
                { "name": "India", "grados": 0 },
                { "name": "East Africa", "grados": 0 }
            ],
        },
        {
            "name": "Siberia",
            "neighbors": [
                { "name": "Ural", "grados": 0 },
                { "name": "Irkutsk", "grados": 0 },
                { "name": "Yakutsk", "grados": 0 },
                { "name": "China", "grados": 0 },
                { "name": "Mongolia", "grados": 0 }
            ],
        },
        {
            "name": "China",
            "neighbors": [
                { "name": "Afghanistan", "grados": 0 },
                { "name": "Ukraine", "grados": 0 },
                { "name": "Ural", "grados": 0 },
                { "name": "Siberia", "grados": 0 },
                { "name": "Mongolia", "grados": 0 },
                { "name": "India", "grados": 0 },
                { "name": "Sian", "grados": 0 }
            ],
        },
        {
            "name": "Sian",
            "neighbors": [
                { "name": "India", "grados": 0 },
                { "name": "China", "grados": 0 },
                { "name": "Indonesia", "grados": 0 }
            ],
        },
        {
            "name": "Yakutsk",
            "neighbors": [
                { "name": "Siberia", "grados": 0 },
                { "name": "Kamchatka", "grados": 0 },
                { "name": "Irkutsk", "grados": 0 },
                { "name": "Mongolia", "grados": 0 }
            ],
        },
        {
            "name": "Irkutsk",
            "neighbors": [
                { "name": "Siberia", "grados": 0 },
                { "name": "Kamchatka", "grados": 0 },
                { "name": "Yakutsk", "grados": 0 },
                { "name": "Mongolia", "grados": 0 }
            ],
        },
        {
            "name": "Mongolia",
            "neighbors": [
                { "name": "Siberia", "grados": 0 },
                { "name": "Japan", "grados": 0 },
                { "name": "Irkutsk", "grados": 0 },
                { "name": "Kamchatka", "grados": 0 },
                { "name": "China", "grados": 0 }
            ]
        }, {
            "name": "Kamchatka",
            "neighbors": [
                { "name": "Irkutsk", "grados": 0 },
                { "name": "Alaska", "grados": 0 },
                { "name": "Yakutsk", "grados": 0 },
                { "name": "Mongolia", "grados": 0 },
                { "name": "Japan", "grados": 0 }
            ],
        },
        {
            "name": "Japan",
            "neighbors": [
                { "name": "Mongolia", "grados": 0 },
                { "name": "Kamchatka", "grados": 0 }
            ],
        }
        ]
    },
    {
        "name": "Australia",
        "color": "purple",
        "territories": [
            {
                "name": "Indonesia",
                "neighbors": [
                    { "name": "Sian", "grados": 0 },
                    { "name": "New Guinea", "grados": 0 },
                    { "name": "Westem Australia", "grados": 0 }
                ],
            },
            {
                "name": "New Guinea",
                "neighbors": [
                    { "name": "Indonesia", "grados": 0 },
                    { "name": "Westem Australia", "grados": 0 },
                    { "name": "Eastem Australia", "grados": 0 }
                ],
            },
            {
                "name": "Westem Australia",
                "neighbors": [
                    { "name": "Indonesia", "grados": 0 },
                    { "name": "New Guinea", "grados": 0 },
                    { "name": "Eastem Australia", "grados": 0 }
                ],
            },
            {
                "name": "Eastem Australia",
                "neighbors": [
                    { "name": "New Guinea", "grados": 0 },
                    { "name": "Westem Australia", "grados": 0 }
                ],
            }
        ]
    },
    {
        "name": "Africa",
        "color": "Orange",
        "territories": [
            {
                "name": "North Africa",
                "neighbors": [
                    { "name": "Westem Europe", "grados": 0 },
                    { "name": "Southern Europe", "grados": 0 },
                    { "name": "Egypt", "grados": 0 },
                    { "name": "Congo", "grados": 0 },
                    { "name": "East Africa", "grados": 0 }
                ],
            },
            {
                "name": "Egypt",
                "neighbors": [
                    { "name": "Southern Europe", "grados": 0 },
                    { "name": "Middle East", "grados": 0 },
                    { "name": "East Africa", "grados": 0 }
                ],
            },
            {
                "name": "East Africa",
                "neighbors": [
                    { "name": "North Africa", "grados": 0 },
                    { "name": "Egypt", "grados": 0 },
                    { "name": "Middle East", "grados": 0 },
                    { "name": "Congo", "grados": 0 },
                    { "name": "Eastem Australia", "grados": 0 },
                    { "name": "South Africa", "grados": 0 },
                    { "name": "Madagascar", "grados": 0 }
                ],
            },
            {
                "name": "Congo",
                "neighbors": [
                    { "name": "North Africa", "grados": 0 },
                    { "name": "East Africa", "grados": 0 },
                    { "name": "South Africa", "grados": 0 }
                ],
            },
            {
                "name": "South Africa",
                "neighbors": [
                    { "name": "Congo", "grados": 0 },
                    { "name": "East Africa", "grados": 0 },
                    { "name": "Madagascar", "grados": 0 }
                ],
            },
            {
                "name": "Madagascar",
                "neighbors": [
                    { "name": "East Africa", "grados": 0 },
                    { "name": "South Africa", "grados": 0 }
                ],
            }
        ]
    },
    {
        "name": "South America",
        "color": "pink",
        "territories": [
            {
                "name": "Venezuela",
                "neighbors": [
                    { "name": "Central America", "grados": 0 },
                    { "name": "Peru", "grados": 0 },
                    { "name": "Brazil", "grados": 0 }
                ],
            },
            {
                "name": "Brazil",
                "neighbors": [
                    { "name": "Venezuela", "grados": 0 },
                    { "name": "Peru", "grados": 0 },
                    { "name": "Argentina", "grados": 0 }
                ],
            },
            {
                "name": "Peru",
                "neighbors": [
                    { "name": "Venezuela", "grados": 0 },
                    { "name": "Brazil", "grados": 0 },
                    { "name": "Argentina", "grados": 0 }
                ],
            },
            {
                "name": "Argentina",
                "neighbors": [
                    { "name": "North Africa", "grados": 0 },
                    { "name": "Peru", "grados": 0 },
                    { "name": "Brazil", "grados": 0 }
                ],
            }
        ]
    },
    {
        "name": "North America",
        "color": "Yellow",
        "territories": [
            {
                "name": "Central America",
                "neighbors": [
                    { "name": "Westem US", "grados": 0 },
                    { "name": "Eastem US", "grados": 0 },
                    { "name": "Venezuela", "grados": 0 }
                ],
            },
            {
                "name": "Westem US",
                "neighbors": [
                    { "name": "Alberta", "grados": 0 },
                    { "name": "Ontario", "grados": 0 },
                    { "name": "Eastem US", "grados": 0 },
                    { "name": "Central America", "grados": 0 }
                ],
            },
            {
                "name": "Eastem US",
                "neighbors": [
                    { "name": "Ontario", "grados": 0 },
                    { "name": "Quebec", "grados": 0 },
                    { "name": "Westem US", "grados": 0 },
                    { "name": "Central America", "grados": 0 }
                ],
            },
            {
                "name": "Alberta",
                "neighbors": [
                    { "name": "Alaska", "grados": 0 },
                    { "name": "Northwest Territory", "grados": 0 },
                    { "name": "Ontario", "grados": 0 },
                    { "name": "Westem US", "grados": 0 }
                ],
            },
            {
                "name": "Ontario",
                "neighbors": [
                    { "name": "Northwest Territory", "grados": 0 },
                    { "name": "Greendland", "grados": 0 },
                    { "name": "Alberta", "grados": 0 },
                    { "name": "Quebec", "grados": 0 },
                    { "name": "Westem US", "grados": 0 },
                    { "name": "Eastem US", "grados": 0 }
                ],
            },
            {
                "name": "Alaska",
                "neighbors": [
                    { "name": "Kamchatka", "grados": 0 },
                    { "name": "NorthWest Territory", "grados": 0 },
                    { "name": "Alberta", "grados": 0 }
                ]
            },
            {
                "name": "NorthWest Territory",
                "neighbors": [
                    { "name": "Alaska", "grados": 0 },
                    { "name": "Greenland", "grados": 0 },
                    { "name": "Alberta", "grados": 0 },
                    { "name": "Ontario", "grados": 0 }
                ]
            },
            {
                "name": "Greenland",
                "neighbors": [
                    { "name": "NorthWest Territory", "grados": 0 },
                    { "name": "Iceland", "grados": 0 },
                    { "name": "Quebec", "grados": 0 },
                    { "name": "Ontario", "grados": 0 }
                ]
            }]
    }]
}

export { map };