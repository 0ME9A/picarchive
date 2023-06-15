import { BasicPhotoFace } from "../_types/BasicPhotoFace";
import { route, theme } from "../_rtk/Store/reducers";

export function random(): string {
  const characters: string = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength: number = characters.length;
  let result: string = "";
  for (var i: number = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function randomNum(n: number): number {
  return Math.round(Math.random() * n)
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Theme function
export function toggleTheme(dispatch: any) {
  const currentTheme = localStorage.getItem("theme");
  let newTheme = "";

  if (currentTheme === null || currentTheme === "light") {
    newTheme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    newTheme = "light";
    document.documentElement.classList.remove("dark");
  }

  localStorage.setItem("theme", newTheme);
  dispatch(theme(newTheme));
}


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function dateFunc(date: number | string | Date): string {
  const newDate: Date = new Date(date);
  return newDate.toDateString();
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function splitArrayByCount(arr: BasicPhotoFace[], count: number) {
  const result: BasicPhotoFace[][] = [];

  // Create the specified number of empty arrays
  for (let i: number = 0; i < count; i++) { result.push([]); }

  // Distribute elements from the input array into the result arrays
  for (let i = 0; i < arr.length; i++) {
    // Determine the index of the current array based on the modulo operation
    const index: number = i % count;

    // Push the current element into the corresponding array
    result[index].push(arr[i]);
  }

  return result;
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function randomSelection(data: string[]): string {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

export function setRouteToStore(routes: string[], path: string, dispatch: (e: any) => void) {
  let matched = false;
  for (let i = 0; i < routes.length; i++) {
    const element = routes[i];
    if (path.startsWith(`/${element}`)) {
      dispatch(route(element));
      matched = true;
      break;
    }
  }
  if (!matched) {
    dispatch(route(null));
  }
}