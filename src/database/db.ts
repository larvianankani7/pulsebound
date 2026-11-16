import Dexie, { type EntityTable } from "dexie";

export interface UserProgress {
  id: string;
  completedAt?: string;
  data: Record<string, unknown>;
}

class SylvaraDatabase extends Dexie {
  userProgress!: EntityTable<UserProgress, "id">;

  constructor() {
    super("SYLVARA");
    this.version(1).stores({
      userProgress: "id, completedAt",
    });
  }
}

export const db = new SylvaraDatabase();
