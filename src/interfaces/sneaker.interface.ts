export interface SneakerProps {
  name: string;
  description: string;
  starRating: number;
  image: string;
  sneakerType: string[];
  stats: [
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    },
    {
      name: string;
      value: number;
    }
  ];
  url: string;
}
