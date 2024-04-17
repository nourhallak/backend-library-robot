export type RackState =
  | "waiting_for_goal"
  | "going_to_goal"
  | "goal_reached"
  | "going_to_home";
export type NavigationState = "READY" | "MOVING" | "SUCCEEDED" | "ABORTED";
