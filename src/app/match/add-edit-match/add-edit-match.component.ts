import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-match',
  templateUrl: './add-edit-match.component.html',
  styleUrls: ['./add-edit-match.component.css']
})
export class AddEditMatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() match:any;
  matchId!:string;
  firstTeamId!:string;
  secondTeamId!:string;
  firstTeamScore!:string;
  secondTeamScore!:string;
  matchDate!:string;
  
  teamId!:string;


  TeamList:any=[];

  ngOnInit(): void {
    this.loadTeamList();
    this.matchId=this.match.matchId;
    this.firstTeamScore=this.match.firstTeamScore;
    this.secondTeamScore=this.match.secondTeamScore;
    this.matchDate=this.match.matchDate;
    this.firstTeamId=this.match.firstTeamId;
    this.secondTeamId=this.match.secondTeamId;
  }

  loadTeamList(){
    this.service.getTeamList().subscribe((data:any)=>{
    this.TeamList=data;

  this.matchId=this.match.matchId;
  })
}

  addMatch(){
    var val = {matchId:this.matchId,
      firstTeamId:this.firstTeamId,
      secondTeamId:this.secondTeamId,
      firstTeamScore:this.firstTeamScore,
      secondTeamScore:this.secondTeamScore,
      matchDate:this.matchDate};
    this.service.addMatch(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateMatch(){
    var val = {matchId:this.matchId,
      firstTeamId:this.firstTeamId,
      secondTeamId:this.secondTeamId,
      firstTeamScore:this.firstTeamScore,
      secondTeamScore:this.secondTeamScore,
      matchDate:this.matchDate};
    var id = this.matchId;
    this.service.updateMatch(val, id).subscribe(res=>{
    alert(res.toString());
    });
  }


}
