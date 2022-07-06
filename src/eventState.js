import weddingBrisket from "./img/WeddingBrisket.png";
import fullService from "./img/FullService.png";
import customGrill from "./img/ShedGrill.png";
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
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
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
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
