import { NavigationState, RackState } from "./enums";

export interface robotCurrentStatus {
  navigationState: NavigationState;
  rackState: RackState;
  batteryPercentage: number;
}
