import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getTeamList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Teams');
  }

  addTeam(val:any){
    return this.http.post(this.APIUrl+'/Teams', val);
  }

  updateTeam(val:any, id){
    return this.http.put(this.APIUrl+'/Teams/'+id, val);
  }

  deleteTeam(val:any){
    return this.http.delete(this.APIUrl+'/Teams/'+val);
  }

  getPlayerList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Players');
  }

  addPlayer(val:any){
    return this.http.post(this.APIUrl+'/Players', val);
  }

  updatePlayer(val:any, id){
    return this.http.put(this.APIUrl+'/Players/'+id, val);
  }

  deletePlayer(val:any){
    return this.http.delete(this.APIUrl+'/Players/'+val);
  }

  getMatchList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Matches/GetTeamName');
  }

  addMatch(val:any){
    return this.http.post(this.APIUrl+'/Matches', val);
  }

  updateMatch(val:any, id){
    return this.http.put(this.APIUrl+'/Matches/'+id, val);
  }

  deleteMatch(val:any){
    return this.http.delete(this.APIUrl+'/Matches/'+val);
  }
}
