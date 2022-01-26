import { createStore } from "redux";
import { reducers } from './../reducers'; // همون index اون فایل رو میگیره

//Store
// این reducer قبول میکنه
export const myStore = createStore(
  reducers,
  // برای استفاده از افزونه redux dev tools از این کد استفاده میشه
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Dispatch
// کاربرد subscribe این هست ک هر موقع اتفاقی در store افتاد این بیاد و یک کاری رو برای ما بکنه
// و بیشتر برای log کردن تغییرات توی store از این استفاده میشه
myStore.subscribe(() => console.log(myStore.getState()));

//   myStore.dispatch(increment()); // میاد و اعزام میکنه مثلا increment رو
//   myStore.dispatch(increment());
//   myStore.dispatch(increment());
//   myStore.dispatch(increment());
//   myStore.dispatch(decrement());
