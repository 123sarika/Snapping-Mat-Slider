import {Component, ViewEncapsulation} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})

export class AppComponent {
  public interval: Observable<number> = Observable.interval(500);
  public task: Subscription;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  thumbLabel = false;
  vertical = false;
  _value = 1;
  _step = 1;
  _tickInterval = 1;

  get value(): number {
    return Math.round(this._value);
  }
  set value(v) {
    if (this.task !== undefined) {
      this.task.unsubscribe();
    }
    this.task = this.interval.subscribe(() => {
      v = Math.round(Number(v));
      this._value = v;
    });
  }
  get step(): number {
    return this._step;
  }
  set step(v) {
    this._step = this.max / 100;
  }
  get tickInterval(): number | 'auto' {
    return this._tickInterval;
  }
  set tickInterval(v) {
    this._tickInterval = 100 / this.max;
  }
}
