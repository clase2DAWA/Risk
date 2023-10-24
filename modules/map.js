let map = {
    "continents": [
        {
        "name": "Europe",
        "territories": [
            {
                "name": "Western Europe",
                "top": "Great Britain",
                "topRight": "Northern Europe",
                "topLeft": null,
                "left": null,
                "right": "Southern Europe",
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Great Britain",
                "top": "Iceland",
                "topRight": "Scandinavia",
                "topLeft": null,
                "left": null,
                "right": "Northern Europe",
                "bottom": "Western Europe",
                "bottomRight": null,
                "bottomLeft": null
            },
            {
                "name": "Southern Europe",
                "top": "Northern Europe",
                "topRight": "Ukraine",
                "topLeft": null,
                "left": "Western Europe",
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": null
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
                "name": "Iceland",
                "top": null,
                "topRight": null,
                "topLeft": null,
                "left": null,
                "right": "Scandinavia",
                "bottom": "Great Britain",
                "bottomRight": null,
                "bottomLeft": null
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
                "name": "Ukraine",
                "top": null,
                "topRight": null,
                "topLeft": "Scandinavia",
                "left": "Northern Europe",
                "right": null,
                "bottom": null,
                "bottomRight": null,
                "bottomLeft": "Southern Europe"
            }
        ]
    }
    ]
};


export { map };