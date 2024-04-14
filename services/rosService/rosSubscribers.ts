import ROSLIB from "roslib";
import { RobotState } from "../../states/roboteState";
import { OdomMessage } from "../../types/rosMessages";

export const rosSubscribers = (ros: ROSLIB.Ros) => {
  const robotState = RobotState.getInstance();

  // odom
  // const odomListener = new ROSLIB.Topic({
  //   ros: ros,
  //   name: "/odom",
  //   messageType: "nav_msgs/Odometry",
  // });

  // odomListener.subscribe(function (message: any) {
  //   robotState.position = message.pose.pose.position;
  // });

  // // pose
  // const poseListener = new ROSLIB.Topic({
  //   ros: ros,
  //   name: "/pose",
  //   messageType: "geometry_msgs/Pose",
  // });

  // poseListener.subscribe(function (message: any) {
  //   robotState.position = message;
  // });

  // // twist
  // const twistListener = new ROSLIB.Topic({
  //   ros: ros,
  //   name: "/pose",
  //   messageType: "geometry_msgs/Pose",
  // });

  // twistListener.subscribe(function (message: any) {
  //   robotState.position = message;
  // });

  // battery percentage
  const batteryListener = new ROSLIB.Topic({
    ros: ros,
    name: "/batterypercentage",
    messageType: "nav_msgs/Odometry",
  });

  batteryListener.subscribe(function (message: any) {
    robotState.position = message;
  });

  return [];
};
