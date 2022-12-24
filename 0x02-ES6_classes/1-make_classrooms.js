import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomStudents = [19, 20, 34];
  const rooms = [];

  for (const rs of roomStudents) {
    rooms.push(new ClassRoom(rs));
  }
  return rooms;
}
