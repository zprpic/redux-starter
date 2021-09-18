// []
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          Id: ++lastId,
          description: action.payload.descripiton,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id != action.payload.id);

    default:
      return state;
  }

  return state;
}
