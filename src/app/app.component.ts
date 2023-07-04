import { Component } from "@angular/core";
import { CounterService } from "./counter.service";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.inactiveToActiveCounterUpdate.subscribe((result) => {
      this.inactiveToActiveCounter = result;
      console.log("Inactive --> Active: ", this.inactiveToActiveCounter);
    });

    this.counterService.activeToInactiveCounterUpdate.subscribe((result) => {
      this.activeToInactiveCounter = result;
      console.log("Active --> Inactive: ", this.activeToInactiveCounter);
    });
  }
}
