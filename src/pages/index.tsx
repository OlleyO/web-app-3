import type { NextPage } from "next";
import { useEffect, useState } from "react";

import HomeView from "../components/views/home";
import { months, years, days } from "../core/constraints";
import {
  ContactsData,
  FeedPerson,
  GraphDataSingleElement,
  ProgressData,
  RevenueData,
  ShipmentsData,
  Stat,
  Task,
} from "../core/types";
import { generateRandomNumberInRange } from "../utils";

const stats: Stat[] = [
  {
    title: "Daily Visitors",
    value: 150_0000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Customers",
    value: 120_0000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Orders",
    value: 900_000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Sales",
    value: 850_000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Shipments",
    value: 750_000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Revenue",
    value: 985_0000,
    rise: 1020,
    fall: 1020,
  },
  {
    title: "Daily Reviews",
    value: 600_000,
    rise: 1020,
    fall: 1020,
  },
];

const graphDataForMonth: GraphDataSingleElement[] = [];
const graphDataForDay: GraphDataSingleElement[] = [];
const graphDataForYear: GraphDataSingleElement[] = [];

months.forEach((month) => {
  graphDataForMonth.push({
    name: month,
    value: generateRandomNumberInRange(100_000, 400_000),
    value1: generateRandomNumberInRange(100_000, 400_000),
    value2: generateRandomNumberInRange(100_000, 400_000),
  });
});

days.forEach((day) => {
  graphDataForDay.push({
    name: day,
    value: generateRandomNumberInRange(100_000, 400_000),
    value1: generateRandomNumberInRange(100_000, 400_000),
    value2: generateRandomNumberInRange(100_000, 400_000),
  });
});

years.forEach((year) => {
  graphDataForYear.push({
    name: year,
    value: generateRandomNumberInRange(100_000, 400_000),
    value1: generateRandomNumberInRange(100_000, 400_000),
    value2: generateRandomNumberInRange(100_000, 400_000),
  });
});

const revenue: RevenueData = {
  revenue: 95,
  rise: 1020,
  fall: 1020,
};

const message =
  "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type";

const feedInitial: FeedPerson[] = [
  {
    fullname: "Sophie Turner",
    photo: "",
    messages: [message, message, message],
    lastSeen: "10 Min Ago",
  },
  {
    fullname: "Peter Quill",
    photo: "",
    messages: [message],
    lastSeen: "15 Min Ago",
  },
];

const tasks: Task[] = [
  {
    title: "Arrange",
    description: "simply dummy text of the printing and blah blah blah",
    time: new Date(2022, 6, 6, 0, 24).toString(),
  },
  {
    title: "Shipment",
    description: "simply dummy text of the printing and blah blah blah",
    time: new Date(2022, 6, 6, 1, 10).toString(),
  },
  {
    title: "Make List",
    description: "simply dummy text of the printing and blah blah blah",
    time: new Date(2022, 6, 6, 1, 24).toString(),
  },
  {
    title: "Review",
    description: "simply dummy text of the printing and blah blah blah",
    time: new Date(2022, 6, 6, 1, 30).toString(),
  },
];

const progressData: ProgressData = {
  progresses: [50, 60, 45, 48, 50, 45, 65, 85],
  total: 150_0000,
  rise: 1020,
  fall: 1020,
};

const shipmentsData: ShipmentsData = {
  total: 15_000,
  rise: 1020,
  fall: 1020,
};

const contactsData: ContactsData = {
  contacts: [
    {
      fullname: "Jennifer Lawrence",
      position: "Cheif Authority",
      avatar: "",
    },
    {
      fullname: "Brad Pitt",
      position: "Cheif Authority",
      avatar: "",
    },
    {
      fullname: "Leonardo DiCaprio",
      position: "Cheif Authority",
      avatar: "",
    },
    {
      fullname: "Jesse Eisenberg",
      position: "Cheif Authority",
      avatar: "",
    },
    {
      fullname: "Kristen Stewart",
      position: "Cheif Authority",
      avatar: "",
    },
    {
      fullname: "Ben Affleck",
      position: "Cheif Authority",
      avatar: "",
    },
  ],
};

interface AllData {
  stats: Stat[];
  graphDataForMonth: GraphDataSingleElement[];
  graphDataForDay: GraphDataSingleElement[];
  graphDataForYear: GraphDataSingleElement[];
  revenue: RevenueData;
  feedInitial: FeedPerson[];
  tasks: Task[];
  progressData: ProgressData;
  shipmentsData: ShipmentsData;
  contactsData: ContactsData;
}

const allData: AllData = {
  stats,
  graphDataForMonth,
  graphDataForDay,
  graphDataForYear,
  revenue,
  feedInitial,
  tasks,
  progressData,
  shipmentsData,
  contactsData,
};

console.log(JSON.stringify(allData));

const Home: NextPage = () => {
  const [dataFor, setDataFor] = useState<"month" | "day" | "year">("month");
  const [allData, setAllData] = useState<AllData | null>(null);

  const [feedData, setFeedData] = useState<FeedPerson[]>(
    allData?.feedInitial || []
  );

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: AllData) => setAllData(data));
  }, []);

  useEffect(() => {
    if (!feedData[0]?.photo)
      Promise.all(
        feedData.map(async (_person, index) => {
          fetch("https://random.imagecdn.app/42/42").then((res) => {
            const copy = [...feedData];
            copy[index].photo = res.url;
            setFeedData(copy);
          });
        })
      );
  }, [feedData]);

  useEffect(() => {
    if (allData) setFeedData(allData.feedInitial);
  }, [allData]);

  const [graphData, setGraphData] = useState<GraphDataSingleElement[]>();

  useEffect(() => {
    if (allData) {
      switch (dataFor) {
        case "month":
          setGraphData(allData.graphDataForMonth);
          break;
        case "day":
          setGraphData(allData.graphDataForDay);
          break;
        case "year":
          setGraphData(allData.graphDataForYear);
          break;
      }
    }
  }, [dataFor, allData]);

  const handleChangeDataFor = (dataFor: "month" | "day" | "year") =>
    setDataFor(dataFor);

  return (
    allData && (
      <>
        <HomeView
          stats={allData.stats}
          dataFor={dataFor}
          graphData={graphData || [{ name: "", value: 0 }]}
          revenue={allData.revenue}
          feedData={feedData}
          tasks={allData.tasks}
          progressData={allData.progressData}
          shipmentsData={allData.shipmentsData}
          contactsData={allData.contactsData}
          onDataForChange={handleChangeDataFor}
        />
      </>
    )
  );
};

export default Home;
