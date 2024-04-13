import ROSLIB from "roslib";
import { RobotState } from "../../states/roboteState";

export const rosSubscribers = (ros: ROSLIB.Ros) => {
  const robotState = RobotState.getInstance();

  const odomListener = new ROSLIB.Topic({
    ros: ros,
    name: "/odom",
    messageType: "nav_msgs/Odometry",
  });

  odomListener.subscribe((message) => {
    // console.log(`Received message on odom: ${JSON.stringify(message)}`);

    //! FIX
    // @ts-ignore
    robotState.position = message.data.position;
  });

  return [odomListener];
};
