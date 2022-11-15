import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  ContactsData,
  FeedPerson,
  GraphDataSingleElement,
  ProgressData,
  RevenueData,
  ShipmentsData,
  Stat,
  Task,
} from "../../../core/types";
import FeedCard from "../../feed-card";
import GraphCard from "../../graph-card";
import Layout from "../../layout";
import ProgressCard from "../../progress-card";
import RevenueCard from "../../revenue-card";
import ShipmentsCard from "../../shipments-card";
import Statistics from "../../statistics";
import TasksCard from "../../tasks-card";
import TabPanel, { a11yProps } from "../../tab-panel";

import Users from "../../../../public/users.svg";
import Chat from "../../../../public/chat.svg";
import Like from "../../../../public/like.svg";

import styles from "./styles.module.scss";
import ContactsTab from "../../contacts-tab";
import SearchInput from "../../search-input";

// logos
import Rdio from "../../../../public/rdio-logo.svg";
import Css3 from "../../../../public/css-3-logo.svg";
import Deviantart from "../../../../public/deviantart.svg";
import Xing from "../../../../public/xing-logo.svg";
import Vimeo from "../../../../public/vimeo.svg";
import VK from "../../../../public/vk-social-netwo.svg";
import classNames from "classnames";

interface Props {
  stats: Stat[];
  graphData: GraphDataSingleElement[];
  revenue: RevenueData;
  feedData: FeedPerson[];
  tasks: Task[];
  progressData: ProgressData;
  shipmentsData: ShipmentsData;
  contactsData: ContactsData;
  dataFor: "month" | "day" | "year";
  onDataForChange(dataFor: "month" | "day" | "year"): void;
}

const Home: React.FC<Props> = ({
  stats,
  dataFor,
  graphData,
  revenue,
  feedData,
  tasks,
  progressData,
  shipmentsData,
  contactsData,
  onDataForChange,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Statistics stats={stats} />
      <div className={styles["main-wrapper"]}>
        <div className={styles["main-content"]}>
          <GraphCard
            title="Monthly Revenue Progress"
            dataFor={dataFor}
            data={graphData}
            wrapperClassName={styles["graph-card-wrapper"]}
            onDataForChange={onDataForChange}
          />
          <RevenueCard
            data={revenue}
            wrapperClassName={styles["revenue-card-wrapper"]}
          />
          <FeedCard
            data={feedData}
            wrapperClassName={styles["feed-card-wrapper"]}
          />

          <TasksCard
            data={tasks}
            wrapperClassName={styles["tasks-card-wrapper"]}
          />
          <ProgressCard
            data={progressData}
            wrapperClassName={styles["progress-card-wrapper"]}
          />
          <ShipmentsCard
            data={shipmentsData}
            wrapperClassName={styles["shipments-card-wrapper"]}
          />
        </div>
        <div className={styles.left}>
          <div className={styles.tab}>
            <Tabs onChange={handleChange}>
              <Tab
                {...a11yProps(0)}
                className={value === 0 && "tab-active"}
                label={<Users />}
              />
              <Tab
                {...a11yProps(1)}
                className={value === 1 && "tab-active"}
                label={<Chat />}
              />
              <Tab
                {...a11yProps(2)}
                label={<Like />}
                className={value === 2 && "tab-active"}
              />
            </Tabs>
            <TabPanel
              wrapperClassName={styles["tab-panel-wrapper"]}
              value={value}
              index={0}
            >
              <ContactsTab data={contactsData} />
            </TabPanel>
            <TabPanel
              wrapperClassName={styles["tab-panel-wrapper"]}
              value={value}
              index={1}
            >
              No content
            </TabPanel>
            <TabPanel
              wrapperClassName={styles["tab-panel-wrapper"]}
              value={value}
              index={2}
            >
              No content
            </TabPanel>
          </div>
          <div className={styles.control}>
            <SearchInput
              type="plain"
              placeholder="Search Peoples, Chats and Reviews"
            />
          </div>
          <div className={styles.companies}>
            <div className={styles.title}>Featured Companies</div>
            <div className={styles.companies__list}>
              <div className={classNames(styles.logo, styles["logo-rdio"])}>
                <Rdio />
              </div>
              <div className={classNames(styles.logo, styles["logo-css3"])}>
                <Css3 />
              </div>
              <div
                className={classNames(styles.logo, styles["logo-deviantart"])}
              >
                <Deviantart />
              </div>
              <div className={classNames(styles.logo, styles["logo-xing"])}>
                <Xing />
              </div>
              <div className={classNames(styles.logo, styles["logo-vimeo"])}>
                <Vimeo />
              </div>
              <div
                className={classNames(
                  styles.logo,
                  styles["logo-vk-social-network"]
                )}
              >
                <VK />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
