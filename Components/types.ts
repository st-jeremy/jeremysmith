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
  link: string;
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