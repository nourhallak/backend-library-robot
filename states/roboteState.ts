import { NavigationState, RackState } from "../types/enums";
import { RobotPosition } from "../types/robotPosition";
import { BatteryMessage } from "../types/rosMessages";

export class RobotState {
  private static instance: RobotState;
  public position: RobotPosition["position"] = {
    x: 0,
    y: 0,
    z: 0,
  };
  public orientation: RobotPosition["orientation"] = {
    x: 0,
    y: 0,
    z: 0,
    w: 1,
  };
  public batteryPercentage = 100;
  public rackState: RackState = "HOME";
  public navigationState: NavigationState = "READY";

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): RobotState {
    if (!RobotState.instance) {
      RobotState.instance = new RobotState();
    }

    return RobotState.instance;
  }
}
