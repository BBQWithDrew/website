import weddingBrisket from "./img/WeddingBrisket.png";
import fullService from "./img/FullService.png";
import customGrill from "./img/GrillonGrill1.png";
import grillOnGrill from "./img/GrillonGrill.png";
import family1 from "./img/Family1.png";
import family2 from "./img/Family2.png";

export const EventState = () => {
  return [
    {
      title: "Weddings",
      mainImg: weddingBrisket,
      secondaryImg: fullService,
      url: "/work/weddings",
      awards: [
        {
          title: "Couple from Texas",
          description: "“Best BBQ North of Texas.”",
        },
        {
          title: "Standing Ovation -Wedding Party",
          description: "“Not your average wedding food.”",
        },
        {
          title: "-Thomas W.",
          description: "“I can not get enough”",
        },
      ],
    },
    {
      title: "Fire Power",
      mainImg: grillOnGrill,
      url: "/work/grills",
      secondaryImg: customGrill,
      awards: [
        {
          title: "Custom Smoker",
          description: "Built from the ground up, perfected for any cook",
        },
        {
          title: "Traegers",
          description:
            "Where it all started. From the first traeger to the fith. We have enough fire power for any size event",
        },
      ],
    },
    {
      title: "You're part of the family",
      mainImg: family1,
      url: "/work/family",
      secondaryImg: family2,
      awards: [
        {
          title: "To New Friends",
          description: "Best memories made around a good meal",
        },
        {
          title: "Family",
          description: "Couldn't do it without the help and support",
        },
      ],
    },
  ];
};
