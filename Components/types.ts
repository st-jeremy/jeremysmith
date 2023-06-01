import ContactIcons from './ContactIcons';
export interface IAccordionCard{
  bgColor: string;
  title: string;
  post: string,
  logo: string;
  date: string; 
  about: string;
  points: string[];
}

export interface IPrimaryBtn{
  name: string;
  href: string;
  download?: string;
  bgColor?: string;
  color?: string;
  rightIcon?: any;
  leftIcon?: any;
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