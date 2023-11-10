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
                            "degrees": 0
                        },
                        {
                            "name": "Southern Europe",
                            "degrees": 90
                        }
                    ]
                },

                {
                    "name": "Great Bretain",
                    "neighbors": [
                        {
                            "name": "Western Europe",
                            "degrees": 180
                        }
                    ]
                },
                {
                    "name": "Southern Europe",
                    "neighbors": [
                        {
                            "name": "Western Europe",
                            "degrees": 270
                        }
                    ]
                }

            ]
        }
    ]
}

export { map };