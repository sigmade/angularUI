import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-team',
  templateUrl: './show-team.component.html',
  styleUrls: ['./show-team.component.css']
})
export class ShowTeamComponent implements OnInit {

  constructor(private service:SharedService) { }

  TeamList:any=[];

  ModalTitle!:string;
  ActivateAddEditTeamComp:boolean=false;
  team:any;

  TeamIdFilter:string="";
  TeamNameFilter:string="";
  TeamListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshTeamList();
  }

  addClick(){
    this.team={
      teamId:0,
      teamName:""
    }
    this.ModalTitle="Добавить команду";
    this.ActivateAddEditTeamComp=true;
  }


  editClick(item){
    this.team=item;
    this.ModalTitle="Изменить команду";
    this.ActivateAddEditTeamComp=true;
  }

  deleteClick(item){
    if(confirm('Вы уверены?')){
      this.service.deleteTeam(item.teamId).subscribe(data=>{
        alert(data.toString());
        this.refreshTeamList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTeamComp=false;
    this.refreshTeamList();
  }

  refreshTeamList(){
    this.service.getTeamList().subscribe(data =>{
      this.TeamList=data;
      this.TeamListWithoutFilter=data;
    });
  }

  FilterFn(){
    var TeamIdFilter = this.TeamIdFilter;
    var TeamNameFilter = this.TeamNameFilter;

    this.TeamList = this.TeamListWithoutFilter.filter(function (el){
      return el.teamId.toString().toLowerCase().includes(
        TeamIdFilter.toString().trim().toLowerCase()
      )&&
      el.teamName.toString().toLowerCase().includes(
        TeamNameFilter.toString().trim().toLocaleLowerCase()
      )
    });
  }


}
