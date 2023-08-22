import { create } from "zustand";

const useList = create((set) => ({
  tasks: [{ title: "Title", state: "ONGOING" }],
  draggedTask: null,

  //v1
  addTask: (title, state) =>
    set((data) => ({ tasks: [...data.tasks, { title, state }] })),

  // V2
  // addTask: (title, state) =>
  //   set((datas) => ({
  //     tasks: [
  //       ...datas.tasks,
  //       ...(datas.tasks?.some((data) => data.title === title && data.state == state)
  //         ? [{ title: `${title}_copy`, state }]
  //         : [{ title, state }]),
  //     ],
  //   })),
  
  delTask: (title) =>
    set((data) => ({ tasks: data.tasks.filter((d) => d.title != title) })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks?.map((data) =>
        data.title == title ? { title, state } : data
      ),
    })),
}));

export default useList;
