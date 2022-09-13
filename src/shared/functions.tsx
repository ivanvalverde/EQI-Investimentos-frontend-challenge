export const lowerCaseAndRemoveAccents = (word: string): string => {
  console.log(word,'asnjdjsanjasndkaaksjndjkasndjkasndjasnsdd');
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
};
