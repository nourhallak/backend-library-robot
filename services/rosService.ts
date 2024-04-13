import ROSLIB from "roslib";

export class RosService {
  private static instance: RosService;
  public ros!: ROSLIB.Ros;

  private retryConnect() {
    console.log("Retrying to connect to ros websocket server in 5 seconds.");
    setTimeout(() => {
      this.connectToRos();
    }, 5000);
  }

  private connectToRos() {
    this.ros = new ROSLIB.Ros({
      url: "ws://localhost:9090",
    });

    this.ros.on("connection", () => {
      console.log("Connected to websocket server.");
    });

    this.ros.on("error", (error) => {
      console.log("Error connecting to websocket server: ", error);
      this.retryConnect();
    });

    this.ros.on("close", () => {
      console.log("Connection to websocket server closed.");
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
}
