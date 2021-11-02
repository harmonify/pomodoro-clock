import NumericType from "../interfaces/NumericType";

export function toClock(time: NumericType): string {
  let minutes : NumericType = Math.floor(Number(time) / 60);
  let seconds : NumericType = Number(time) - minutes * 60;

  return `${addLeadingZeroIfLessThanTen(minutes)}:${addLeadingZeroIfLessThanTen(seconds)}`;
}

function addLeadingZeroIfLessThanTen(num: NumericType) : NumericType {
  return Number(num) < 10 ? '0' + num : num;
}
