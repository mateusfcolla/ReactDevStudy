import React from 'react';
import './CardList.css';
import { Card } from '../Card/Card';

export const CardList = props => {
  return (
    <div className='CardList'>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
