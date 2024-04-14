import ROSLIB from "roslib";
import { RobotPosition } from "../../types/robotPosition";
import { rosSubscribers } from "./rosSubscribers";
import { rosIP, rosPort } from "../../config";

export class RosService {
  private static instance: RosService;
  private ros!: ROSLIB.Ros;
  public rosConnected: boolean = false;
  private listeners: ROSLIB.Topic<ROSLIB.Message>[] = [];

  private unsubscribeAll() {
    this.listeners.forEach((listener) => {
      listener.unsubscribe();
    });
  }

  // Retries connecting to the ros websocket server every 5 seconds
  private retryConnect() {
    console.log("Retrying to connect to ros websocket server in 5 seconds.");
    setTimeout(() => {
      this.connectToRos();
    }, 5000);
  }

  private connectToRos() {
    this.ros = new ROSLIB.Ros({
      url: `ws://${rosIP}:${rosPort}`,
    });

    this.ros.on("connection", () => {
      console.log("Connected to websocket server.");
      this.rosConnected = true;
      this.listeners = rosSubscribers(this.ros);
    });

    this.ros.on("error", (error) => {
      console.log("Error connecting to websocket server: ", error);
      this.rosConnected = false;
      this.unsubscribeAll();
      this.retryConnect();
    });

    this.ros.on("close", () => {
      console.log("Connection to websocket server closed.");
      this.rosConnected = false;
      this.unsubscribeAll();
      this.retryConnect();
    });
  }

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    this.connectToRos();
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): RosService {
    if (!RosService.instance) {
      RosService.instance = new RosService();
    }

    return RosService.instance;
  }

  // Publishers
  //move to book publisher
  public moveRobot(robotPosition: RobotPosition) {
    var moveRobotTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: "/book_pose",
      messageType: "geometry_msgs/Pose",
    });

    var moveRobot = new ROSLIB.Message(robotPosition);

    moveRobotTopic.publish(moveRobot);
  }

  // move camera publisher
  public moveCamera(height: number) {
    var moveCameraTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: "/goal_distance",
      messageType: "std_msgs/Int16",
    });

    var cameraHeight = new ROSLIB.Message({
      data: height,
    });

    moveCameraTopic.publish(cameraHeight);
  }

  // pause publisher
  public pause(pause: boolean) {
    var pauseTopic = new ROSLIB.Topic({
      ros: this.ros,
      name: "/pause",
      messageType: "std_msgs/Bool",
    });

    var pauseStatus = new ROSLIB.Message({
      data: pause,
    });

    pauseTopic.publish(pauseStatus);
  }
}
