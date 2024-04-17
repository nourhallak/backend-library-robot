export interface book {
  name: string;
  auther: string;
  decoded_string: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  orientation: {
    x: number;
    y: number;
    z: number;
    w: number;
  };
}

export const Books: book[] = [
  {
    name: "Elementary differential equations",
    auther: "Micheal Taylor",
    decoded_string: "5626AN5772014CO",
    position: {
      x: 3.7,
      y: 1.9,
      z: 90,
    },
    orientation: {
      x: 0,
      y: 0,
      z: 0.99,
      w: 0.04,
    },
  },
  {
    name: "The art of computer programming",
    auther: "David Dagan Feng",
    decoded_string: "67812D3UI2D77C1",
    position: {
      x: 5.3,
      y: 3.2,
      z: 2.2,
    },
    orientation: {
      x: 0,
      y: 0,
      z: 0,
      w: 1,
    },
  },
  {
    name: "Visual basic 6 from the ground up",
    auther: "Gary Cornell",
    decoded_string: "5732JKD8972C2",
    position: {
      x: 5.3,
      y: 3.2,
      z: 2.2,
    },
    orientation: {
      x: 0,
      y: 0,
      z: 0,
      w: 1,
    },
  },
  {
    name: "Biomedical information technology",
    auther: "David John Rease",
    decoded_string: "1836H7832C1",
    position: {
      x: 5.3,
      y: 3.2,
      z: 2.2,
    },
    orientation: {
      x: 0,
      y: 0,
      z: 0,
      w: 1,
    },
  },
];
