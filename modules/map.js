let map = {
  continents: [
    {
      name: "Europe",
      color: "#2c93c4",
      territories: [
        {
          name: "Western Europe",
          neighbors: [
            {
              name: "Great Britain",
              degrees: 0,
            },
            {
              name: "Northen Europe",
              degrees: 45,
            },
            {
              name: "Southern Europe",
              degrees: 90,
            },
          ],
        },
        {
          name: "Northern Europe",
          neighbors: [
            {
              name: "Southern Europe",
              degrees: 180,
            },
            {
              name: "Scandinavia",
              degrees: 0,
            },
            {
              name: "Great Britain",
              degrees: 270,
            },
            {
              name: "Western Europe",
              degrees: 225,
            },
            {
              name: "Ukraine",
              degrees: 90,
            },
          ],
        },
        {
          name: "Southern Europe",
          neighbors: [
            {
              name: "Western Europe",
              degrees: 270,
            },
            {
              name: "Northern Europe",
              degrees: 0,
            },
            {
              name: "Ukraine",
              degrees: 45,
            },
          ],
        },
        {
          name: "Great Britain",
          neighbors: [
            {
              name: "Western Europe",
              degrees: 180,
            },
            {
              name: "Northern Europe",
              degrees: 90,
            },
            {
              name: "Scandinavia",
              degrees: 45,
            },
          ],
        },
        {
          name: "Scandinavia",
          neighbors: [
            {
              name: "Ukraine",
              degrees: 135,
            },
            {
              name: "Great Britain",
              degrees: 225,
            },
            {
              name: "Northern Europe",
              degrees: 180,
            },
          ],
        },
        {
          name: "Ukraine",
          neighbors: [],
        },
      ],
    },
  ],
};

export { map };
