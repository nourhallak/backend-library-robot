import ROSLIB from "roslib";
import { rosIP, rosPort } from "./config";
import { json } from "stream/consumers";

var ros = new ROSLIB.Ros({
  url: `ws://${rosIP}:${rosPort}`,
});

ros.on("connection", function () {
  console.log("Connected to websocket server.");
});

ros.on("error", function (error) {
  console.log("Error connecting to websocket server: ", error);
});

ros.on("close", function () {
  console.log("Connection to websocket server closed.");
});

// Publishing a Topic
// ------------------
// Move Mechanism
// var moveMechanismTopic = new ROSLIB.Topic({
//   ros: ros,
//   name: "/goal_distance",
//   messageType: "std_msgs/Int16",
// });

// var mechanismHeight = new ROSLIB.Message({
//   data: 0,
// });
// moveMechanismTopic.publish(mechanismHeight);

// setTimeout(() => {
//   var mechanismHeight = new ROSLIB.Message({
//     data: 100,
//   });
//   moveMechanismTopic.publish(mechanismHeight);
// }, 10000);

// Move Robot
// var moveRobotTopic = new ROSLIB.Topic({
//   ros: ros,
//   name: "/book_pose",
//   messageType: "geometry_msgs/Pose",
// });
// var moveRobot = new ROSLIB.Message({
//   position: {
//     x: 0.5,
//     y: 0,
//     z: 0,
//   },
//   orientation: {
//     x: 0,
//     y: 0,
//     z: 0,
//     w: 1,
//   },
// });
// moveRobotTopic.publish(moveRobot);

// Subscribing to a Topic
// ----------------------
// var listener = new ROSLIB.Topic({
//   ros: ros,
//   name: "/odom",
//   messageType: "nav_msgs/Odometry",
// });

// listener.subscribe(function (message) {
//   console.log(
//     "Received message on " + listener.name + ": " + JSON.stringify(message)
//   );
//   // listener.unsubscribe();
// });

// Getting topics
// ---------------------------------

ros.getTopics(function (topics) {
  console.log(topics);
});
