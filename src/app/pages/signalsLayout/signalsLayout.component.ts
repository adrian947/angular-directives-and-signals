import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './signalsLayout.component.html',
  styleUrl: './signalsLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsLayoutComponent implements OnInit {
  currentUrl: string = '';
  title: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const routeTitle = this.getRouteChildren(this.router.url);

    this.title = this.findTitleRoute(routeTitle)?.title as string;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeChildren = this.getRouteChildren(event.urlAfterRedirects);
        const routeTitle = this.findTitleRoute(routeChildren);
        this.title = routeTitle?.title as string;
      }
    });
  }

  private findTitleRoute(route: string) {
    return this.route.snapshot.routeConfig?.children?.find(
      (child) => child.path === route
    );
  }

  private getRouteChildren(route: string): string {
    return route.split('/')[2];
  }
}
