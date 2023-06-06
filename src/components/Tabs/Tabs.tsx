import React from "react";
import "./Tabs.style.scss";

interface TabProps {
  id: number;
  title: string;
}

interface TabsProps {
  tabCount: number;
  tabTitles: string[];
  selectedTab: number;
  onClick: (tabId: number, tabTitle: string) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabCount,
  tabTitles,
  onClick,
  selectedTab,
}) => {
  const renderTabs = () => {
    const tabs: JSX.Element[] = [];
    for (let i = 0; i < tabCount; i++) {
      const tabTitle = tabTitles[i];
      tabs.push(
        <div
          key={i}
          className={"tab" + (i === selectedTab ? " choosen-tab" : " ")}
          onClick={() => onClick(i, tabTitle)}
        >
          {tabTitle}
        </div>
      );
    }
    return tabs;
  };

  return <div className="tabs">{renderTabs()}</div>;
};

export default Tabs;
