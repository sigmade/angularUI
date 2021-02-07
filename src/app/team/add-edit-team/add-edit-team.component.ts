import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-team',
  templateUrl: './add-edit-team.component.html',
  styleUrls: ['./add-edit-team.component.css']
})
export class AddEditTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() team:any;
  teamId!:string;
  teamName!:string;

  ngOnInit(): void {
    this.teamId=this.team.teamId;
    this.teamName=this.team.teamName;
  }

  addTeam(){
    var val = {teamId:this.teamId,
                teamName:this.teamName};
    this.service.addTeam(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTeam(){
    var val = {teamId:this.teamId,
      teamName:this.teamName};
    var id = this.teamId; 
    this.service.updateTeam(val, id).subscribe(res=>{
    alert(res.toString());
    });
  }

}
