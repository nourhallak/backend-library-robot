import {
  NavigationStatusMessage,
  RackMessage,
  BatteryMessage,
} from "./rosMessages";
export interface robotCurrentStatus {
  navigationState: NavigationStatusMessage;
  rackState: RackMessage;
  batteryPercentage: BatteryMessage;
}
