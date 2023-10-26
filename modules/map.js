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
          neighbors: [],
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
          ],
        },
      ],
    },
  ],
};

export { map };
