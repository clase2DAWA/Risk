let map = {
    "continents": [
        {
            "name": "Europe",
            "territories": [
                {
                    "name": "Western Europe",
                    "neighbors": [
                        {
                            "name": "Great Bretain",
                            "degrees": 270
                        },
                        {
                            "name": "Southern Europe",
                            "degrees": 0
                        },
                        {
                            "name": "Northern Europe",
                            "degrees": 315
                        }
                    ]
                },

                {
                    "name": "Great Bretain",
                    "neighbors": [
                        {
                            "name": "Western Europe",
                            "degrees": 90
                        },
                        {
                            "name": "Iceland",
                            "degrees": 270
                        },
                        {
                            "name": "Scandinavia",
                            "degrees": 315
                        }
                    ]
                },
                {
                    "name": "Southern Europe",
                    "neighbors": [
                        {
                            "name": "Western Europe",
                            "degrees": 180
                        },
                        {
                            "name": "Northern Europe",
                            "degrees": 270
                        },
                        {
                            "name": "Ukraine",
                            "degrees": 315
                        }
                    ]
                },
                {
                    "name": "Northern Europe",
                    "neighbors": [
                        {
                            "name": "Western Europe",
                            "degrees": 135
                        },
                        {
                            "name": "Scandinavia",
                            "degrees": 270
                        },
                        {
                            "name": "Ukraine",
                            "degrees": 0
                        },
                        {
                            "name": "Southern Europe",
                            "degrees": 90
                        },
                    ] 
                },
                {
                    "name": "Scandinavia",
                    "neighbors": [
                        {
                            "name": "Northern Europe",
                            "degrees": 90
                        },
                        {
                            "name": "Great Bretain",
                            "degrees": 135
                        },
                        {
                            "name": "Iceland",
                            "degrees": 225
                        },
                        {
                            "name": "Ukraine",
                            "degrees": 315
                        }
                    ] 
                },
                {
                    "name": "Iceland",
                    "neighbors": [
                        {
                            "name": "Scandinavia",
                            "degrees": 0
                        },
                        {
                            "name": "Great Bretain",
                            "degrees": 90
                        }
                    ] 
                },
                {
                    "name": "Ukraine",
                    "neighbors": [
                        {
                            "name": "Scandinavia",
                            "degrees": 225
                        },
                        {
                            "name": "Northern Europe",
                            "degrees": 180
                        },
                        {
                            "name": "Southern Europe",
                            "degrees": 135
                        }
                    ] 
                }

            ]
        }
    ]
}

export { map };