export type PropsButton = {
  textButton: string;
};

export type PropsImagesBlock = {
  mainimage: string;
  mainimagealt: string;
  video: string;
  videoalt: string;
  light: string;
  bg?: string;
};

export type PropsFaqItem = {
  id: number;
  title: string;
  text: string;
};

export type PropsTitle = {
  titletext: string;
};

export type PropsPricingPlan = {
  id: number;
  name: string;
  price: number;
  otheritem: string;
};
