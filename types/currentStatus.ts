import { book } from "../Database/Books";
import { NavigationState, RackState } from "./enums";

export interface robotCurrentStatus {
  navigationState: NavigationState;
  rackState: RackState;
  batteryPercentage: number;
  currentBook: book | undefined;
  booksToDeliver: book[];
  stateText: string;
  waitingForUserToConfirm: boolean;
  //
}
