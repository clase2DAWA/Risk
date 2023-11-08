let map = {
  continents: [
    {
      name: "Europe",
      territories: [
        {
          name: "Western Europe",
          neighbors: [
            {
              name: "Great Bretain",
              degrees: 270,
            },
            {
              name: "Southern Europe",
              degrees: 0,
            },
          ],
        },

        {
          name: "Great Bretain",
          neighbors: [
            {
              name: "Western Europe",
              degrees: 90,
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
          ],
        },
      ],
    },
  ],
};

export { map };
