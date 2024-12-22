import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
} from '@angular/core';
import { User } from '../../interfaces/user-req.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesComponent {
  public countChanges = signal<number>(0);

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.countChanges()}`);
  });

  onfieldUpdated(field: keyof User, data: string) {
    this.user.update((currentUser) => ({
      ...currentUser,
      [field]: data,
    }));

    this.countChanges.update((currentCount) => currentCount + 1);
  }
}
