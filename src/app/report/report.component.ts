import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { PlanService} from '../shared/plan.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  profile: any;
  editMode = false;
  destination : string;

  constructor(public planService: PlanService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void 
  {

    this.planService.bindListPlanperiod();
    this.planService.bindListDest();
    this.planService.getDest().subscribe(
      result => {
    console.log(result); 
    this.destination = result;
    });

    this.route.data.subscribe(data => {
      this.profile = data['profile'];
    });

  }
  //logout
  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('signin');
  }

  planlists()
  {
    this.router.navigateByUrl('plan-period-list');
  }
}
