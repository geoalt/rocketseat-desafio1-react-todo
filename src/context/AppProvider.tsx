import React, { ReactNode, createContext, useMemo, useState } from 'react';

export interface ITask {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface IContext {
  task: ITask[];
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const AppContext = createContext<IContext>({} as IContext);

export function AppProvider({ children }: { children: ReactNode }) {
  const [task, setTask] = useState<ITask[]>([]);

  const values = useMemo(
    () => ({
      task,
      setTask,
    }),
    [task]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
