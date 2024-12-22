import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { UsersService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-req.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  providers: [UsersService],
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  public userId = signal<number>(1);
  public user = signal<User | undefined>(undefined);
  public userWasFound = signal<boolean>(false);

  constructor(private userUserService: UsersService) {}

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  public loadUser(id: number) {
    this.userId.set(id);
    this.userUserService.getUserById(this.userId()).subscribe({
      next: (user) => {
        this.user.set(user);
        this.userWasFound.set(true);
      },
      error: () => this.userWasFound.set(false),
    });
  }
}
