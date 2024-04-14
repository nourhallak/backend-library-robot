import ROSLIB from "roslib";
import { RobotState } from "../../states/roboteState";
import {
  batteryMessage,
  NavigationStatusMessage,
  OdomMessage,
  PoseMessage,
  RackMessage,
} from "../../types/rosMessages";

export const rosSubscribers = (ros: ROSLIB.Ros) => {
  const robotState = RobotState.getInstance();

  // battery percentage
  const batteryListener = new ROSLIB.Topic({
    ros: ros,
    name: "/battery_percentage",
    messageType: "std_msgs/Float32",
  });

  batteryListener.subscribe(function (message: any) {
    robotState.batteryPercentage = (message as batteryMessage).data;
  });

  // rack status
  const rackStatusListener = new ROSLIB.Topic({
    ros: ros,
    name: "/rackstatus",
    messageType: "std_msgs/String",
  });

  rackStatusListener.subscribe(function (message: any) {
    robotState.rackState = (message as RackMessage).data;
  });

  // navigation status
  const navigationStatusListener = new ROSLIB.Topic({
    ros: ros,
    name: "/navigationstatus",
    messageType: "std_msgs/String",
  });

  navigationStatusListener.subscribe(function (message: any) {
    robotState.navigationState = (message as NavigationStatusMessage).data;
  });

  return [batteryListener, rackStatusListener, navigationStatusListener];
};
