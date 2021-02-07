import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlayerList:any=[];

  ModalTitle:string="";
  ActivateAddEditPlayerComp:boolean=false;
  player:any;

  PlayerIdFilter:string="";
  PlayerNameFilter:string="";
  TeamFilter:string="";
  PlayerListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshPlayerList();
  }

  addClick(){
    this.player={
      playerId:0,
      fullName:"",
      teamId:0
    }
    this.ModalTitle="Добавить игрока";
    this.ActivateAddEditPlayerComp=true;
  }


  editClick(item){
    this.player=item;
    this.ModalTitle="Редактировать игрока";
    this.ActivateAddEditPlayerComp=true;
  }

  deleteClick(item){
    if(confirm('Вы уверены?')){
      this.service.deletePlayer(item.playerId).subscribe(data=>{
        alert(data.toString());
        this.refreshPlayerList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPlayerComp=false;
    this.refreshPlayerList();
  }

  refreshPlayerList(){
    this.service.getPlayerList().subscribe(data =>{
      this.PlayerList=data;
      this.PlayerListWithoutFilter=data;
      
    });
  }

  FilterFn(){
    var PlayerIdFilter = this.PlayerIdFilter;
    var PlayerNameFilter = this.PlayerNameFilter;
    var TeamFilter = this.TeamFilter;

    this.PlayerList = this.PlayerListWithoutFilter.filter(function (el){
      return el.playerId.toString().toLowerCase().includes(
        PlayerIdFilter.toString().trim().toLowerCase()
      )&&
      el.fullName.toString().toLowerCase().includes(
        PlayerNameFilter.toString().trim().toLocaleLowerCase()
      )&&
      el.team.teamName.toString().toLowerCase().includes(
        TeamFilter.toString().trim().toLocaleLowerCase()
      )
    });
  }

}
