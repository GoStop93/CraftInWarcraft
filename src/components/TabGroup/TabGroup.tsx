import { useState } from 'react';

import { ITabGroupProps } from './type';

import { Tab } from './Tab/Tab';

import { StyledContainer, StyledContent, TabContent } from './TabGroup.styles';

export const TabGroup = ({ tabs, handleChangeTab, className, collabsGroup }: ITabGroupProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const onChangeTab = (index: number) => () => {
    setCurrentTab(index);

    if (handleChangeTab) handleChangeTab();
  };

  return (
    <div className={className}>
      <StyledContainer collabsGroup={collabsGroup}>
        {tabs.map(({ name, description, icon }, index) => (
          <StyledContent>
            <Tab onClick={onChangeTab(index)} isActive={currentTab === index} name={name} description={description} icon={icon} />
          </StyledContent>
        ))}
      </StyledContainer>
      <TabContent>{tabs[currentTab]!.content}</TabContent>
    </div>
  );
};
