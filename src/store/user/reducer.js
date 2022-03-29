const initialState = {
  name: "David",
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}
