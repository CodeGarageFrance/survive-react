import { create } from 'zustand';

const defaultMap = new Array(5).fill(null).map(() => new Array(5).fill({ type: 'empty', people: 0 }));
defaultMap[0][0] = { type: 'forest', people: 0 };
defaultMap[4][4] = { type: 'forest', people: 0 };

export const useGameState = create((set, get) => ({
    // State
    stone: 0,
    wood: 10,
    food: 10,
    people: 0,
    time: 0,
    score: 0,
    season: 'summer',
    cells: [...defaultMap],
    // Getters
    getAvailablePeople: () => {
        const totalPeople = get().people;
        const cells = get().cells;
        const workingPeople = cells.reduce((sum, row) => {
            return sum + row.reduce((rowSum, cell) => {
                return rowSum + cell.people;
            }, 0);
        }
        , 0);
        return totalPeople - workingPeople;
    },
    // Setters
    setStone: (stone) => set({ stone }),
    setWood: (wood) => set({ wood }),
    setFood: (food) => set({ food }),
    setPeople: (people) => set({ people }),
    setScore: (score) => set({ score }),
    setSeason: (season) => set({ season }),
    addTime: (val) => {
        const { time, season } = get();
        if(time % 30 === 0 && time > 0){
            set({ season: season == 'winter' ? 'summer' : 'winter' });
        }
        set({ time: time + val });
    },
    reset: () => {
        set({
            stone: 0,
            wood: 10,
            food: 10,
            people: 0,
            time: 0,
            season: 'summer',
            cells: [...defaultMap],
        });
    },
    // Actions
    consumeFood: () => {
        const { food, people } = get();
        set({ food: food - people });
    },
    createHouse(cell){
        const { wood, people } = get();

        if(wood >= 5){
            set({ wood: wood - 5, people: people + 2 });
            cell.type = 'house';
        }
        return cell;
    },
    updateCellType: (newType, position) => {
        const cells  = get().cells;
        const createHouse = get().createHouse;

        const updatedCells = cells.map((row) => row.map((cell) => ({ ...cell })));
        let cell = updatedCells[position.y][position.x];
        if(cell.type != 'empty'){
            return;
        }
        if(newType === 'house'){
            cell = createHouse(cell);
        }
        updatedCells[position.y][position.x] = cell;
        set({ cells: updatedCells });
    },
    addCellPeople: (position, val) => {
        if(get().getAvailablePeople() <= 0){
            return;
        }
        const cells  = get().cells;
        const updatedCells = cells.map((row) => row.map((cell) => ({ ...cell })));
        let cell = updatedCells[position.y][position.x];
        cell.people = cell.people + val;
        updatedCells[position.y][position.x] = cell;
        set({ cells: updatedCells });
    },
    generateResources: () => {
        const {cells, food, wood, season}  = get();
        const resources = { food: 0, wood: 0 };
        cells.forEach((row) => {
            row.forEach((cell) => {
                if(cell.type === 'forest'){
                    resources.wood += cell.people;
                    if(season === 'summer'){
                        resources.food += cell.people;
                    }
                    resources.food += cell.people;
                }
            });
        });
        set({ food: food + resources.food, wood: wood + resources.wood });
    },
}));
