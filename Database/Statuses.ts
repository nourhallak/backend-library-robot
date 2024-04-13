export interface Status {
  isMoving: boolean;
  isRackMoving: boolean;
  isCodefound: boolean;
  isCentering: boolean;
  currentX: number;
  currentY: number;
  batteryPercentage: number;
}

export const status_1 = {
  isMoving: true,
  isRackMoving: true,
  isCodefound: false,
  isCentering: false,
  currentX: 5.0,
  currentY: 5.0,
  batteyPercentage: 90,
};
