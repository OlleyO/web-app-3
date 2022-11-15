export interface Profile {
  fullname: string;
  position: string;
}

export interface Stat {
  title: string;
  value: number;
  rise: number;
  fall: number;
}

export interface GraphDataSingleElement {
  name: string;
  value: number;
  [key: `value${number}`]: number;
}

export interface RevenueData {
  revenue: number;
  rise: number;
  fall: number;
}

export interface FeedPerson {
  fullname: string;
  photo: string;
  lastSeen: string;
  messages: string[];
}

export interface Task {
  title: string;
  description: string;
  time: string;
}

export interface ProgressData {
  progresses: number[];
  total: number;
  rise: number;
  fall: number;
}

export interface ShipmentsData {
  total: number;
  rise: number;
  fall: number;
}

export interface ContactsData {
  contacts: {
    fullname: string;
    position: string;
    avatar: string;
  }[];
}
