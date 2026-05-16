"use server";

import { revalidatePath } from "next/cache";

import { addWord } from "@/lib/db/words";

type AddDictionaryWordInput = {
  word: string;
  translation: string;
  partOfSpeech?: string | null;
};

export async function addDictionaryWord(input: AddDictionaryWordInput) {
  const result = await addWord(input);
  revalidatePath("/language");
  return result;
}
