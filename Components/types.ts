import ContactIcons from './ContactIcons';
export interface IAccordionCard{
  bgColor: string;
  title: string;
  post: string;
  logo: string;
  date: string; 
  about: string;
  points?: string[];
}

export interface IProjectCard{
  src: string;
  alt: string; 
  heading: string;
  description: string;
  disable?: any;
  badges: string[];
  repoLink: string;
  link: string;
}
export interface IPrimaryBtn{
  name: string;
  href: string;
  download?: string;
  bgColor?: string;
  color?: string;
  width?: string;
  rightIcon?: any;
  leftIcon?: any;
  border?: string;
}


export interface INavlink{
  display: string;
  flexDir: 'row' | 'column';
}

export interface ITechImage{
  tooltip: string;
  src: string;
  alt: string;
}

export interface IContactIcon{
  icon: any;
  href: string;
  tooltip?: string;
}

export interface IContactIcons{
  ml?: string;
  mt?: string;
  justifyContent?: string;
}