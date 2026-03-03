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

export type PropsTeam = {
	count: number;
}

export type PropsTeamItem = {
	id: number;
	image: string;
	alt: string;
	name: string;
	position: string;
}

export interface IBlogItems {
  id:number;
  image: string;
  alt: string;
  beige: string;
  title: string;
}