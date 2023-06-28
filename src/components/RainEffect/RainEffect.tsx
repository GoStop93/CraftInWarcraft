import React, { useEffect, useState } from 'react';
import { Container, Icon } from './RainEffect.styles';
import useWowService from '../../utils/services/WoWService';
import { IRainEffectProps } from './type';

const generateRandomPosition = () => Math.floor(Math.random() * 100);
const generateRandomDelay = () => Math.random() * 3;

export const RainEffect = ({ rain }: IRainEffectProps) => {
    const [icons, setIcons] = useState<any[]>([]);
    const { getRandomItemIcon } = useWowService();
  
    useEffect(() => {
      const fetchItemIcons = async () => {
        const itemIcons = [];
        for (let i = 0; i < 20; i++) {
          const icon = await getRandomItemIcon();
          itemIcons.push(icon);
        }
        setIcons(itemIcons);
      };
  
      fetchItemIcons();
    }, []);
  
    return (
      <Container rain={rain}>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            iconSrc={icon.url}
            position={generateRandomPosition()}
            delay={generateRandomDelay()}
          />
        ))}
      </Container>
    );
  };
