import { UserData, UserSchema, IDBUserSchema } from "@/@types/custom";
import { openDB } from "idb";

export const getDB = async (): Promise<IDBUserSchema> =>
  await openDB<UserSchema>("users", 1, {
    upgrade: (db: IDBUserSchema, oldVersion, newVersion) => {
      console.log(`DB updated from version ${oldVersion} to ${newVersion}`);
      const userStore = db.createObjectStore("users");
      userStore.createIndex("google", "userId");
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", {
          keyPath: "userId",
          autoIncrement: true
        });
      }
    }
  });

export const getUser = async () => {
  const db = await getDB();
  const tx = db.transaction("users", "readonly");
  const user = tx.objectStore("users");
  const req = await user.openCursor();
  return req?.value;
};

export const getAllUser = async () => {
  const db = await getDB();
  const tx = db.transaction("users", "readonly");
  const user = tx.objectStore("users");
  return await user.getAll();
};

export const addUser = async (data: UserData) => {
  const db = await getDB();
  const tx = db.transaction("users", "readwrite");
  const store = tx.objectStore("users");
  return await store.add(data, data.userId);
};

export const updateUser = async (data: UserData) => {
  const db = await getDB();
  const tx = db.transaction("users", "readwrite");
  const store = tx.objectStore("users");
  return await store.put(data);
};
