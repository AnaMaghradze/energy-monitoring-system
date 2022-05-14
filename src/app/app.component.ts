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
      description: 'Simplify The Detection Of Faulty Areas'
    },
    {
      title: 'wellbeing',
      description: 'Prevent System Failures And Improve System Well-being'
    },
    {
      title: 'saving',
      description: 'Save Time And Reduce Unexpected Costs'
    }
  ];
}
