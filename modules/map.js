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
              degrees: 270,
            },
            {
              name: "Northern Europe",
              degrees: 315,
            },
            {
              name: "Southern Europe",
              degrees: 0,
            },
          ],
        },
        {
          name: "Northern Europe",
          neighbors: [
            {
              name: "Southern Europe",
              degrees: 90,
            },
            {
              name: "Scandinavia",
              degrees: 270,
            },
            {
              name: "Great Britain",
              degrees: 180,
            },
            {
              name: "Western Europe",
              degrees: 135,
            },
          ],
        },
        {
          name: "Southern Europe",
          neighbors: [
            {
              name: "Western Europe",
              degrees: 180,
            },
            {
              name: "Northern Europe",
              degrees: 270,
            },
          ],
        },
        {
          name: "Great Britain",
          neighbors: [
            {
              name: "Western Europe",
              degrees: 90,
            },
            {
              name: "Northern Europe",
              degrees: 0,
            },
            {
              name: "Scandinavia",
              degrees: 315,
            },
          ],
        },
        {
          name: "Scandinavia",
          neighbors: [
            {
              name: "Great Britain",
              degrees: 135,
            },
            {
              name: "Northern Europe",
              degrees: 90,
            },
          ],
        },
      ],
    },
  ],
};

export { map };
