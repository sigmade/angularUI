import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() player:any;
  playerId!:string;
  fullName!:string;
  team!:string;
  teamId!:string;

  TeamList:any=[];

  ngOnInit(): void {
    this.loadTeamList();
  }

  loadTeamList(){
    this.service.getTeamList().subscribe((data:any)=>{
      this.TeamList=data;

      this.playerId=this.player.playerId;
      this.fullName=this.player.fullName;
      this.team=this.player.team;
    })
  }

  addPlayer(){
    var val = {playerId:this.playerId,
               fullName:this.fullName,
               teamId:this.teamId};
    this.service.addPlayer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePlayer(){
    var val = {playerId:this.playerId,
              fullName:this.fullName,
              teamId:this.teamId};
    var id = this.playerId;
    this.service.updatePlayer(val, id).subscribe(res=>{
    alert(res.toString());
    });
  }

}

