import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  snapshot_url = 'http://142.93.245.131:3000/d/pXFVdhy7k/energy-monitoring-system?orgId=1&from=1652682166936&to=1652703766936';
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
