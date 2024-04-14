import { NavigationState, RackState } from "./enums";

export type OdomMessage = {
  header: {
    seq: number;
    stamp: { secs: number; nsecs: number };
    frame_id: string;
  };
  child_frame_id: string;
  pose: {
    pose: {
      position: { x: number; y: number; z: number };
      orientation: {
        x: number;
        y: number;
        z: number;
        w: number;
      };
    };
    covariance: number[];
  };
  twist: {
    twist: {
      linear: { x: number; y: number; z: number };
      angular: { x: number; y: number; z: number };
    };
    covariance: number[];
  };
};

export type PoseMessage = {
  position: { x: number; y: number; z: number };
  orientation: { x: number; y: number; z: number; w: number };
};

export type RackMessage = { data: RackState };

export type NavigationStatusMessage = { data: NavigationState };

export type batteryMessage = { data: number };
