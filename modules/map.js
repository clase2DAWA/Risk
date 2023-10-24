import { Territory } from "./territory";

let map = {
    "continent": "Europe",
    "territories": [
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
}

export { map };