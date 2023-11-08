let map = {
    "continents": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Great Britain",
                "neighbors": [
                    { "name": "Westem Europe", "grados": 0 },
                    { "name": "Iceland", "grados": 180 }
                    
                ],
            },
            {
                "name": "Iceland",
                "neighbors": [
                    { "name": "Great Britain", "grados": 0 }
                ],
            },
            {
                "name": "Westem Europe",
                "neighbors": [
                    { "name": "Great Britain", "grados": 180 }
                    
                    
                ],
            },
           
            
        ]
    }]
}

export { map };