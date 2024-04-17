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
    name: "The best book in the world",
    auther: "Best Author",
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
    name: "The 2nd best book in the world",
    auther: "2nd Best Author",
    decoded_string: "n98d3c",
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
    name: "The 3rd best book in the world",
    auther: "3rd Best Author",
    decoded_string: "k3908v",
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
    name: "The 4th best book in the world",
    auther: "4th Best Author",
    decoded_string: "coi78h",
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
