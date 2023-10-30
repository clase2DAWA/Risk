let map = {
    "continents":[
        {
            "name":"europe",
            "territories":[
                {
                    "name":"Western Europe",
                    "neighbors":[
                        {
                            "name":"Great Bretain",
                            "degrees":0
                        },
                        {
                            "name":"Northern Europe",
                            "degrees":45
                        },
                        {
                            "name":"Southern Europe",
                            "degrees":90
                        }
                    ]
                },
                {
                    "name":"Southern Europe",
                    "neighbors":[
                        {
                            "name":"Northern Europe",
                            "degrees":0
                        },
                        {
                            "name":"Ukraine",
                            "degrees":45
                        },
                        {
                            "name":"Western Europe",
                            "degrees":270
                        }
                    ]
                },
                {
                    "name":"Northern Europe",
                    "neighbors":[
                        {
                            "name":"Scandinavia",
                            "degrees":0
                        },
                        {
                            "name":"Ukraine",
                            "degrees":90
                        },
                        {
                            "name":"Western Europe",
                            "degrees":225
                        },
                        {
                            "name":"Ukraine",
                            "degrees":270
                        }
                    ]
                },
                {
                    "name":"Ukraine",
                    "neighbors":[
                        {
                            "name":"Southern Europe",
                            "degrees":225
                        },
                        {
                            "name":"Northern Europe",
                            "degrees":270
                        },
                        {
                            "name":"Scandinavia",
                            "degrees":315
                        }
                    ]
                },
                {
                    "name":"Scandinavia",
                    "neighbors":[
                        {
                            "name":"Ukraine",
                            "degrees":135
                        },
                        {
                            "name":"Northern Europe",
                            "degrees":180
                        },
                        {
                            "name":"Great Bretain",
                            "degrees":225
                        },
                        {
                            "name":"Iceland",
                            "degrees":270
                        }
                    ]
                },
                {
                    "name":"Iceland",
                    "neighbors":[
                        {
                            "name":"Scandinavia",
                            "degrees":90
                        },
                        {
                            "name":"Great Bretain",
                            "degrees":180
                        }
                    ]
                },
                {
                    "name":"Great Bretain",
                    "neighbors":[
                        {
                            "name":"Iceland",
                            "degrees":0
                        },
                        {
                            "name":"Scandinavia",
                            "degrees":45
                        },
                        {
                            "name":"Northern Europe",
                            "degrees":90
                        },
                        {
                            "name":"Western Europe",
                            "degrees":180
                        }
                    ]
                }
            ]
        }
    ]
}

export {map};