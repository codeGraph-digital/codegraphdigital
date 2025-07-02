"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface Activity {
  type: string;
  description: string;
  time: string;
}

interface DashboardContextType {
  activities: Activity[];
  addActivity: (activity: Omit<Activity, 'time'>) => void;
}

const initialActivities: Activity[] = [
    { type: "Campaign", description: "Launched the 'Q3 Welcome Series' email campaign", time: "1d ago" },
    { type: "SEO", description: "Completed SEO analysis for /features page", time: "3d ago" },
];

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  const addActivity = (activity: Omit<Activity, 'time'>) => {
    const newActivity: Activity = {
      ...activity,
      time: "Just now",
    };
    setActivities(prev => [newActivity, ...prev]);
  };

  return (
    <DashboardContext.Provider value={{ activities, addActivity }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};