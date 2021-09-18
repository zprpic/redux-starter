import store from "./Store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1"));

store.dispatch(bugAdded("bug2"));

store.dispatch(bugResolved(1));

/* unsubscribe();

store.dispatch(bugRemoved(1)); */

console.log(store.getState());
