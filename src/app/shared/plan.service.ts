import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destinations } from './destinations';
import { Periods } from './periods';
import { PlanTypes } from './plan-types';
import { Plans } from './plans';
import { Transportation } from './transportation';
import { User } from './user';
import { Travelplan } from './travelplan';
import { Planperiodview } from './planperiodview';
import { Plandestdetails } from './plandestdetails';

@Injectable({
  providedIn: 'root'
})
export class PlanService {



  //retrieve all data from get method
  transportations: Transportation[];
  destinations: Destinations[];
  periods: Periods[];
  types: PlanTypes[];
  plans: Plans[];
  planperiodview: Planperiodview[];
  plandestdetails: Plandestdetails[];
  travelplans: Travelplan[];
  formData: Plans = new Plans();
  formData1: User = new User();
  formData5: PlanTypes = new PlanTypes();
  formData2: Periods = new Periods();
  formData3: Destinations = new Destinations();
  formData4: Transportation = new Transportation();
  formData6: Travelplan = new Travelplan();
  formData7: Plandestdetails = new Plandestdetails();
  formData8: Planperiodview = new Planperiodview();

  constructor(private httpClient: HttpClient) { }


  //plan view 
  bindListTravelPlans() {
    this.httpClient.get(environment.apiUrl + '/api/travelplans/availableplans')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.plans = response as Plans[];
        }
      );
  }

  bindListPlans() {
    this.httpClient.get(environment.apiUrl + '/api/travelplans')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.travelplans = response as Travelplan[];
        }
      );
  }

  bindListTransportations() {
    this.httpClient.get(environment.apiUrl + '/api/transportations')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.transportations = response as Transportation[];
        }
      );
  }

  //get destinations for binding
  bindListDestinations() {
    this.httpClient.get(environment.apiUrl + '/api/destinations')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.destinations = response as Destinations[];
        }
      );
  }

  //get travelperiod for binding
  bindListPeriods() {
    this.httpClient.get(environment.apiUrl + '/api/travelperiod',)
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.periods = response as Periods[];
        }
      );
  }

  //get plan types for binding
  bindListPlanTypes() {
    this.httpClient.get(environment.apiUrl + '/api/travelplans/types')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.types = response as PlanTypes[];
        }
      );
  }

  //get hobbies for binding
  bindListDest() {
    this.httpClient.get(environment.apiUrl + '/api/destinations/getdestination',)
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.plandestdetails = response as Plandestdetails[];
        }
      );
  }

  //get planperiod for binding
  bindListPlanperiod() {
    this.httpClient.get(environment.apiUrl + '/api/travelplans/getplans')
      .toPromise().then(
        response => {
          console.log("from service");
          console.log(response);
          this.planperiodview = response as Planperiodview[];
        }
      );
  }


  getDest(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/destinations/getdestination", { responseType: 'text' });
  }


  getmostfood(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/travelplans/getplans");
  }

  //get all plans
  getAllPlans(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/travelplans/availableplans');
  }

  //get all plans  --main class
  getPlans(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/travelplans');
  }



  getDestination(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/destinations/getdestination", { responseType: 'text' });
  }


  getperiods(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/travelperiod");
  }


  //main travel plan Apis



  //insert custom plan
  insertPlan(plans: Plans): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/travelplans/customplan", plans);
  }
  /* --------------------------------------------------------*/
  //get travel plan by id
  getPlanById(PlanId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/travelplans/" + PlanId);
  }

  //insert main plan
  insertTravelPlan(plans: Plans): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/travelplans", plans);
  }

  //update plan
  updateTravelPlan(plan: Plans): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/travelplans", plan);
  }

  //delete plan
  DeleteTravelPlan(PlanId: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/travelplans/" + PlanId);
  }

  /*------------------------------------------------------*/

  //Login and Register API s
  //insert user
  insertUser(users: User): Observable<any> {
    return this.httpClient.post(environment.roleUrl + "/api/users", users);
  }

  //update user
  updateUser(users: User): Observable<any> {
    return this.httpClient.put(environment.roleUrl + "/api/users", users);
  }
}
