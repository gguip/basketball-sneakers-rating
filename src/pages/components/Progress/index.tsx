import React from 'react';

interface ProgressProps {
  stats: {
    name: string;
    value: number;
  }[];
}

type TranslateStatsName = {
  [key: string]: string;
};
const Progress = ({ stats }: ProgressProps) => {
  const translateStatsName: TranslateStatsName = {
    traction: 'Tração',
    cushion: 'Conforto',
    material: 'Material',
    support: 'Suporte',
    fit: 'Encaixe',
  };

  return stats.map((eachStats, index) => (
    <div className='flex flex-row items-center gap-2' key={index}>
      <p>{translateStatsName[eachStats.name]}</p>
      <progress
        className='progress-success progress w-56'
        value={eachStats.value}
        max='100'
      />
      <span className='text-sm'>{eachStats.value}</span>
    </div>
  ));
};

export default Progress;
