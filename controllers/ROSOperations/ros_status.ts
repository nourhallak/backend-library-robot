// Require rosnodejs itself
import Rosnodejs from "rosnodejs";
// Requires the std_msgs message package
const std_msgs = Rosnodejs.require("std_msgs").msg;

function status_reader() {
  // Register node with ROS master
  Rosnodejs.initNode("/backend_node").then((rosNode: any) => {
    // Create ROS subscriber on the 'chatter' topic expecting String messages
    let sub = rosNode.subscribe(
      "/read_status",
      std_msgs.String,
      (data: any) => {
        // define callback execution
        Rosnodejs.log.info("Status: " + data.data);
      }
    );
  });
}

if (require.main === module) {
  // Invoke Main Listener Function
  status_reader();
}
