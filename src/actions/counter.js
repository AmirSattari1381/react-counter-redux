//Action
// اگر چیزی قراره ک return بشه در تک خط کافیه توی پرانتز بزاریمش
export const increment = (num) => ({ type: "INCREMENT", payload: num }); 
export const decrement = (num) => ({ type: "DECREMENT", payload: num });
export const sign_in = () => ({ type: "LOGIN" });
