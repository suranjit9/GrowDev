import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getTimeStamp = (createdAt: Date): string => {
  const currentDate: Date = new Date();
  const timeDifference: number = currentDate.getTime() - createdAt.getTime();

  const seconds: number = Math.floor(timeDifference / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  
  if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
};

export const formatAndDivideNumber = (number?: number): string => {
  if (typeof number === 'number') {
    if (number >= 1000000) {
      const formattedNumber = (number / 1000000).toFixed(1);
      return `${formattedNumber}M`;
    } else if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return `${formattedNumber}K`;
    } else {
      return number.toString();
    }
  } else {
    return "0"; // Or any other default value or message you prefer
  }
};



