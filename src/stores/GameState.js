import { create } from "zustand";

export const useGameState = create((set, get) => {
  const updateMapCell = (row, col, updater) => {
    const oldMap = get().map;

    const newMap = oldMap.map((r, y) =>
      y === row
        ? r.map((cell, x) => (x === col ? updater(cell) : cell))
        : r
    );

    return newMap;
  };

  return {
    status: "menu",
    wood: 5,
    stone: 0,
    food: 10,
    people: 0,
    time: 0,
    map: [
      [{ type: 'forest', people: 0 }, { type: 'forest', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }],
      [{ type: 'forest', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }],
      [{ type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }],
      [{ type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'forest', people: 0 }],
      [{ type: 'empty', people: 0 }, { type: 'empty', people: 0 }, { type: 'mountain', people: 0 }, { type: 'mountain', people: 0 }, { type: 'forest', people: 0 }]
    ],

    setStatus: (value) => set({ status: value }),
    setWood: (value) => set({ wood: value }),
    setStone: (value) => set({ stone: value }),
    setFood: (value) => set({ food: value }),

    createHouse: (row, col) => {
      const { wood, people } = get();
      const newMap = updateMapCell(row, col, () => ({ type: 'house', people: 0 }));

      set({
        map: newMap,
        wood: wood - 5,
        people: people + 2,
      });
    },

    addPeople: (row, col) => {
      const newMap = updateMapCell(row, col, (cell) => ({
        ...cell,
        people: (cell.people || 0) + 1,
      }));
      set({ map: newMap });
    },

    increaseTime: () => {
      let { time, food, wood, stone, people } = get();
      // every 10 seconds, 1 food is consumed per person
      if (time % 10 === 0) {
        food -= people;
      }
      // every 5 seconds
      const newResources = get().getResourceProduction();
      if (time % 5 === 0) {
        food += newResources.food;
        wood += newResources.wood;
        stone += newResources.stone;
      }
      
      set({
        time: time + 1,
        food: food,
        wood: wood,
        stone: stone,
      });
    },

    checkCanCreateHouse: (row, col) => {
      const { map, wood } = get();
      const cell = map[row][col];
      return cell.type === 'empty' && wood >= 5;
    },

    checkCanAddPeople: (row, col) => {
      const { map } = get();
      const cell = map[row][col];
      return cell.type === 'forest' && get().getAvailablePeople() > 0;
    },

    getAvailablePeople: () => {
      const { map, people } = get();
      let assigned = 0;
      for (let row of map) {
        for (let cell of row) {
          assigned += cell.people || 0;
        }
      }
      return people - assigned;
    },
    getResourceProduction: () => {
        const { map } = get();
        let resources = {
            wood: 0,
            stone: 0,
            food: 0,
        };
        for (let row of map) {
            for (let cell of row) {
            if (cell.type === 'forest') {
                resources.food += cell.people || 0;
                resources.wood += cell.people || 0;

            }
            }
        }
        return resources;
    }
  };
});
