import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  inactiveToActiveCounterUpdate = new EventEmitter<number>();
  activeToInactiveCounterUpdate = new EventEmitter<number>();

  constructor() {}

  incrementInactiveToActive() {
    // this.inactiveToActiveCounter++;
    this.inactiveToActiveCounterUpdate.emit(++this.inactiveToActiveCounter);
  }

  incrementActiveToInactive() {
    // this.activeToInactiveCounter++;
    this.activeToInactiveCounterUpdate.emit(++this.activeToInactiveCounter);
  }
}
