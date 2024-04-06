import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@trello-clone/app.component';
import { appConfig } from '@trello-clone/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
