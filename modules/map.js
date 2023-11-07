let map = {
    "continents": [{
        "name": "Europe",
        "color": "blue",
        "territories": [
            {
                "name": "Great Britain",
                "neighbors": [
                    { "name": "Westem Europe", "grados": 920 },
                    { "name": "Iceland", "grados": 120 }
                    
                ],
            },
            {
                "name": "Iceland",
                "neighbors": [
                    { "name": "Scandinavia", "grados": 210 },
                    { "name": "Great Britain", "grados": 430 }
                ],
            },
            {
                "name": "Westem Europe",
                "neighbors": [
                    { "name": "Great Britain", "grados": 0 }
                    
                    
                ],
            },
           
            
        ]
    }]
}

export { map };