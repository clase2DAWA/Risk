let map = {
    "continents": [
        {
            "name": "europe",
            "color": "blue",
            "territories": [
                {
                    "name": "Western Europe",
                    "TopLeft": null,
                    "Top": "Great Bretain",
                    "TopRight": "Northern Europe",
                    "Right": "Southern Europe",
                    "BottomRight": null,
                    "Bottom": null,
                    "BottomLeft": null,
                    "Left": null
                },
                {
                    "name": "Southern Europe",
                    "TopLeft": null,
                    "Top": "Northern Europe",
                    "TopRight": "Ukraine",
                    "Right": null,
                    "BottomRight": null,
                    "Bottom": null,
                    "BottomLeft": null,
                    "Left": "Western Europe"
                },
                {
                    "name": "Northern Europe",
                    "TopLeft": null,
                    "Top": "Scandinavia",
                    "TopRight": null,
                    "Right": "Ukraine",
                    "BottomRight": null,
                    "Bottom": null,
                    "BottomLeft": "Western Europe",
                    "Left": "Great Bretain"
                },
                {
                    "name": "Ukraine",
                    "TopLeft": "Scandinavia",
                    "Top": null,
                    "TopRight": null,
                    "Right": null,
                    "BottomRight": null,
                    "Bottom": null,
                    "BottomLeft": "Southern Europe",
                    "Left": "Northern Europe"
                },
                {
                    "name": "Scandinavia",
                    "TopLeft": null,
                    "Top": null,
                    "TopRight": null,
                    "Right": "Ukraine",
                    "BottomRight": "Ukraine",
                    "Bottom": "Northern Europe",
                    "BottomLeft": "Great Bretain",
                    "Left": "Iceland"
                },
                {
                    "name": "Iceland",
                    "TopLeft": null,
                    "Top": null,
                    "TopRight": null,
                    "Right": "Scandinavia",
                    "BottomRight": null,
                    "Bottom": "Great Bretain",
                    "BottomLeft": null,
                    "Left": null
                },
                {
                    "name": "Great Bretain",
                    "TopLeft": null,
                    "Top": "Iceland",
                    "TopRight": "Scandinavia",
                    "Right": "Northern Europe",
                    "BottomRight": null,
                    "Bottom": "Western Europe",
                    "BottomLeft": null,
                    "Left": null,
                }
            ]
        },
        {
            "name": "Asia",
            "color": "Green",
            "territories": [
                {

                }
            ]
        }
    ]
}

export { map };