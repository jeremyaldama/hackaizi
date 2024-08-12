import {ref, set} from 'firebase/database';
import { database } from './firebase';

export function writeOrden(orden) {
  set(ref(database, 'ordenes/' + orden.id), orden);
}

export function readOrden(ordenId) {
  return ref(database, 'ordenes/' + ordenId);
}
