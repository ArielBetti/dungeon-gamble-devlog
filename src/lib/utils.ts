import { format, isSameDay } from "date-fns";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ptBR } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeDateWithYear(date: Date) {
  if (date instanceof Date) {
    const dateString = format(date, "d 'de' MMMM 'em' yyyy", {
     locale: ptBR,
    });
    return dateString;
  }

  return "";
}
