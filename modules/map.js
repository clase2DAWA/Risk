let map  = {
    "continents": [
        "name" = "Europe",
        "territories" = [
            {
                "name" : "Western Europe",
                "top": "Great Britain",
                "bottom": null,
                "left": null,
                "right": "Southern Europe",
                "topLeft": null,
                "topRight": "Northern Europe",
                "bottomLeft": null,
                "bottomRight": null
            },
            {
                "name" : "Southern Europe",
                "top": "Northern Europe",
                "bottom": null,
                "left": "Western Europe",
                "right": null,
                "topLeft": null,
                "topRight": "Ukraine",
                "bottomLeft": null,
                "bottomRight": null
            },
            {
                "name" : "Northern Europe",
                "top": "Scandinavia",
                "bottom": "Southern Europe",
                "left": "Great Britain",
                "right": "Ukraine",
                "topLeft": null,
                "topRight": null,
                "bottomLeft": "Western Europe",
                "bottomRight": null
            },
            {
                "name" : "Great Britain",
                "top": "Iceland",
                "bottom": "Western Europe",
                "left": null,
                "right": "Northern Europe",
                "topLeft": null,
                "topRight": "Scandinavia",
                "bottomLeft": null,
                "bottomRight": null
            },
            {
                "name" : "Iceland",
                "top": null,
                "bottom": "Great Britain",
                "left": null,
                "right": "Scandinavia",
                "topLeft": null,
                "topRight": null,
                "bottomLeft": null,
                "bottomRight": null
            },
            {
                "name" : "Scandinavia",
                "top": null,
                "bottom": "Northern Europe",
                "left": "Iceland",
                "right": null,
                "topLeft": null,
                "topRight": null,
                "bottomLeft": "Great Britain",
                "bottomRight": "Ukraine"
            },
            {
                "name" : "Ukraine",
                "top": null,
                "bottom": null,
                "left": "Northern Europe",
                "right": null,
                "topLeft": "Scandinavia",
                "topRight": null,
                "bottomLeft": "Southern Europe",
                "bottomRight": null
            }
        ]
    ]
}

export { map };