import { useRef, useState } from 'react';
import GNB from './GlobalNavigationBar';

export default {
  title: 'UI/GlobalNavigationBar',
  component: GNB,
  parameters: {
    componentSubtitle: 'GlobalNavigationBar',
  },
};

const initSelected = {};

export const primaryGlobalNavigationBar = (): JSX.Element => {
  const init = useRef({
    nav1: false,
    nav2: false,
    nav3: false,
    nav4: false,
    'nav1-1': false,
    'nav1-2': false,
    'nav1-3': false,
    'nav1-4': false,
    'nav1-1-1': false,
    'nav1-1-2': false,
    'nav1-1-3': false,
  });
  const initOpened = useRef({
    testGroup1: false,
    testGroup2: false,
  });

  const [selected, setSelected] = useState({ ...init.current });
  const [opened, setOpened] = useState({
    testGroup1: false,
    testGroup2: false,
  });

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <GNB
        top={<div>Top</div>}
        mid={
          <>
            <GNB.NavGroup
              selected={selected.nav1}
              depth={1}
              opened={opened.testGroup1}
              itemsLen={(() => {
                if (!opened.testGroup1 && !opened.testGroup2) {
                  return 0;
                }
                if (opened.testGroup1 && !opened.testGroup2) {
                  return 4;
                }
                if (opened.testGroup1 && opened.testGroup2) {
                  return 7;
                }
              })()}
              onClick={() => {
                setSelected({
                  ...init.current,
                  nav1: !selected.nav1,
                });
                setOpened({
                  ...opened,
                  testGroup1: !opened.testGroup1,
                });
              }}
              items={
                <>
                  <GNB.NavGroup
                    depth={2}
                    selected={selected['nav1-1']}
                    opened={opened.testGroup2}
                    itemsLen={3}
                    onClick={() => {
                      setSelected({
                        ...init.current,
                        'nav1-1': !selected['nav1-1'],
                      });
                      setOpened({
                        ...opened,
                        testGroup2: !opened.testGroup2,
                      });
                    }}
                    items={
                      <>
                        <GNB.NavItem
                          depth={3}
                          selected={selected['nav1-1-1']}
                          onClick={() => {
                            setSelected({
                              ...init.current,
                              'nav1-1-1': !selected['nav1-1-1'],
                            });
                          }}
                        >
                          Nav1-1-1
                        </GNB.NavItem>
                        <GNB.NavItem
                          depth={3}
                          selected={selected['nav1-1-2']}
                          onClick={() => {
                            setSelected({
                              ...init.current,
                              'nav1-1-2': !selected['nav1-1-2'],
                            });
                          }}
                        >
                          Nav1-1-2
                        </GNB.NavItem>
                        <GNB.NavItem
                          depth={3}
                          selected={selected['nav1-1-3']}
                          onClick={() => {
                            setSelected({
                              ...init.current,
                              'nav1-1-3': !selected['nav1-1-3'],
                            });
                          }}
                        >
                          Nav1-1-3
                        </GNB.NavItem>
                      </>
                    }
                  >
                    Nav1-1
                  </GNB.NavGroup>
                  <GNB.NavItem
                    selected={selected['nav1-2']}
                    onClick={() => {
                      setSelected({
                        ...init.current,
                        'nav1-2': !selected['nav1-2'],
                      });
                    }}
                  >
                    Nav1-2
                  </GNB.NavItem>
                  <GNB.NavItem
                    selected={selected['nav1-3']}
                    onClick={() => {
                      setSelected({
                        ...init.current,
                        'nav1-3': !selected['nav1-3'],
                      });
                    }}
                  >
                    Nav1-3
                  </GNB.NavItem>
                  <GNB.NavItem
                    selected={selected['nav1-4']}
                    onClick={() => {
                      setSelected({
                        ...init.current,
                        'nav1-4': !selected['nav1-4'],
                      });
                    }}
                  >
                    Nav1-4
                  </GNB.NavItem>
                </>
              }
            >
              Nav1
            </GNB.NavGroup>
            <GNB.NavItem
              selected={selected['nav2']}
              onClick={() => {
                setSelected({
                  ...init.current,
                  nav2: !selected['nav2'],
                });
              }}
            >
              Nav2
            </GNB.NavItem>
            <GNB.NavItem
              selected={selected['nav3']}
              onClick={() => {
                setSelected({
                  ...init.current,
                  nav3: !selected['nav3'],
                });
              }}
            >
              Nav3
            </GNB.NavItem>
            <GNB.NavItem
              selected={selected['nav4']}
              onClick={() => {
                setSelected({
                  ...init.current,
                  nav4: !selected['nav4'],
                });
              }}
            >
              Nav4
            </GNB.NavItem>
          </>
        }
        bot={<div>Bot</div>}
      />
    </div>
  );
};
