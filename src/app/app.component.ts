import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  snapshot_url = 'https://snapshots-origin.grafana.net/dashboard/snapshot/PDuiWNW0ha6Hu1ngf9CzVwEEHYY0lhbP?orgId=2';
  goals = [
    {
      title: 'fixing',
      description: 'Simplify the detection of faulty areas and their causes'
    },
    {
      title: 'wellbeing',
      description: 'Prevent system failures and improve system well-being'
    },
    {
      title: 'saving',
      description: 'Save time and reduce unexpected costs'
    }
  ];
}
