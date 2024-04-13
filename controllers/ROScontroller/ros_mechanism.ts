// Require rosnodejs itself
import Rosnodejs from "rosnodejs";
// Requires the std_msgs message package
const std_msgs = Rosnodejs.require("std_msgs").msg;
// Import z from data base
import { book, Books } from "../../Database/Books";

function distance_sender(bookid: string) {
  // Register node with ROS master
  Rosnodejs.initNode("/backend_node").then((rosNode: any) => {
    // Create ROS publisher on the 'chatter' topic with String message
    let pub = rosNode.advertise("/goal_distance", std_msgs.String);
    let count = 0;
    const msg = new std_msgs.String();
    // Define a function to execute every 100ms
    const emptybook: book = {
      name: "",
      auther: "",
      decoded_string: "",
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      orientation: {
        x: 0,
        y: 0,
        z: 0,
        w: 0,
      },
    };
    var desired_book: book = emptybook;

    Books.forEach((book) => {
      if (book.decoded_string == bookid) {
        desired_book = book;
      }
    });
    // Construct the message
    msg.data = Books[Books.indexOf(desired_book)].position.z;
    // Publish over ROS
    pub.publish(msg);
    // Log through stdout and /rosout
    Rosnodejs.log.info("Desired distance: " + msg.data);
  });
}

if (require.main === module) {
  // Invoke Main Talker Functions
  distance_sender("abc123");
}
