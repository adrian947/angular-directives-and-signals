import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter = signal(15);
  public SquareCounter = computed(() => this.counter() ** 2);


  public increment(): void {
    this.counter.update((value) => value + 1);
  }
  public decrement(): void {
    this.counter.update((value) => value - 1);
  }
}
