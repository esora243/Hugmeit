"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export type SavedItemType = "job" | "campaign";

export type SavedItem = {
  type: SavedItemType;
  id: string;
  savedAt: string;
};

const SAVED_ITEMS_STORAGE_KEY = "hugmeid:saved-items";

function sortSavedItems(items: SavedItem[]) {
  return [...items].sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime());
}

function readSavedItems(): SavedItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(SAVED_ITEMS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as SavedItem[];
    if (!Array.isArray(parsed)) return [];

    return sortSavedItems(
      parsed.filter(
        (item) =>
          item &&
          (item.type === "job" || item.type === "campaign") &&
          typeof item.id === "string" &&
          typeof item.savedAt === "string",
      ),
    );
  } catch {
    return [];
  }
}

function writeSavedItems(items: SavedItem[]) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(SAVED_ITEMS_STORAGE_KEY, JSON.stringify(sortSavedItems(items)));
  } catch {
    // ignore storage errors
  }
}

export function useSavedItems() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setSavedItems(readSavedItems());
    setHasHydrated(true);
  }, []);

  const isSaved = useCallback(
    (type: SavedItemType, id: string | number) => {
      const normalizedId = String(id);
      return savedItems.some((item) => item.type === type && item.id === normalizedId);
    },
    [savedItems],
  );

  const toggleSaved = useCallback(
    (type: SavedItemType, id: string | number) => {
      const normalizedId = String(id);
      const exists = savedItems.some((item) => item.type === type && item.id === normalizedId);

      const nextItems = exists
        ? savedItems.filter((item) => !(item.type === type && item.id === normalizedId))
        : sortSavedItems([
            { type, id: normalizedId, savedAt: new Date().toISOString() },
            ...savedItems,
          ]);

      setSavedItems(nextItems);
      writeSavedItems(nextItems);

      return !exists;
    },
    [savedItems],
  );

  const removeSaved = useCallback(
    (type: SavedItemType, id: string | number) => {
      const normalizedId = String(id);
      const nextItems = savedItems.filter((item) => !(item.type === type && item.id === normalizedId));
      setSavedItems(nextItems);
      writeSavedItems(nextItems);
    },
    [savedItems],
  );

  const savedCounts = useMemo(
    () => ({
      total: savedItems.length,
      jobs: savedItems.filter((item) => item.type === "job").length,
      campaigns: savedItems.filter((item) => item.type === "campaign").length,
    }),
    [savedItems],
  );

  return {
    savedItems,
    savedCounts,
    hasHydrated,
    isSaved,
    toggleSaved,
    removeSaved,
  };
}
