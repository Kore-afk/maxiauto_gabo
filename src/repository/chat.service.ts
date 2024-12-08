import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, getDocs, query, where, orderBy } from "firebase/firestore";
import { Chat, Message } from "@/types";

const CHAT_COLLECTION = "chats";

export const createChat = (chat: Chat) => {
  return addDoc(collection(db, CHAT_COLLECTION), chat);
};

export const getChats = async (userId: string) => {
  const q = query(collection(db, CHAT_COLLECTION), where("participants", "array-contains", userId));
  const querySnapshot = await getDocs(q);
  const chats: Chat[] = [];
  querySnapshot.forEach((doc) => {
    chats.push({ id: doc.id, ...doc.data() } as Chat);
  });
  return chats;
};

export const getMessages = async (chatId: string) => {
  const q = query(collection(db, `${CHAT_COLLECTION}/${chatId}/messages`), orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);
  const messages: Message[] = [];
  querySnapshot.forEach((doc) => {
    messages.push({ id: doc.id, ...doc.data() } as Message);
  });
  return messages;
};

export const sendMessage = (chatId: string, message: Message) => {
  return addDoc(collection(db, `${CHAT_COLLECTION}/${chatId}/messages`), message);
};