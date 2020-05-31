import { DATA_STORAGE_KEY } from "../../src/constants";
import { data } from "../utils/static_data";

export async function getEntries() {
  const entriesString = window.localStorage.getItem(DATA_STORAGE_KEY);
  const entries = entriesString ? JSON.parse(entriesString) : [];
  return entries;
}

export async function loadEntries() {
  const entriesString = window.localStorage.getItem(DATA_STORAGE_KEY);
  if (!entriesString) {
    window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
  }
  return getEntries();
}
export async function addEntry(entry) {
  const existingEntries = window.localStorage.getItem(DATA_STORAGE_KEY);
  if (existingEntries) {
    const existingEntriesParsed = JSON.parse(existingEntries);
    const newEntries = [...existingEntriesParsed, entry];
    window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(newEntries));
  } else {
    window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify([entry]));
  }
}
export async function resetData() {
  window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
  return getEntries;
}
export async function deleteEntries() {
  window.localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify([]));
  return getEntries;
}
