import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-match',
  templateUrl: './show-match.component.html',
  styleUrls: ['./show-match.component.css']
})
export class ShowMatchComponent implements OnInit {

  constructor(private service:SharedService) { }

  MatchList:any=[];

  ModalTitle:string="";
  ActivateAddEditMatchComp:boolean=false;
  match:any;

  MatchIdFilter:string="";
  MatchFirstTeamFilter:string="";
  MatchSecondTeamFilter:string="";
  MatchListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshMatchList();
  }

  addClick(){
    this.match={
      matchId:0,
      matchDate:"",
      firstTeamId:0,
      secondTeamId:0,
      firstTeamScore:0,
      secondTeamScore:0
    }
    this.ModalTitle="Добавить матч";
    this.ActivateAddEditMatchComp=true;
  }


  editClick(item){
    this.match=item;
    this.ModalTitle="Изменить матч";
    this.ActivateAddEditMatchComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteMatch(item.matchId).subscribe(data=>{
        alert(data.toString());
        this.refreshMatchList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditMatchComp=false;
    this.refreshMatchList();
  }

  refreshMatchList(){
    this.service.getMatchList().subscribe(data =>{
      this.MatchList=data;
      this.MatchListWithoutFilter=data;
    });
  }

  FilterFn(){
    var MatchIdFilter = this.MatchIdFilter;
    var MatchFirstTeamFilter = this.MatchFirstTeamFilter;
    var MatchSecondTeamFilter = this.MatchSecondTeamFilter;

    this.MatchList = this.MatchListWithoutFilter.filter(function (el){
      return el.matchId.toString().toLowerCase().includes(
        MatchIdFilter.toString().trim().toLowerCase()
      )&&
      el.firstTeam.toString().toLowerCase().includes(
        MatchFirstTeamFilter.toString().trim().toLocaleLowerCase()
      )&&
      el.secondTeam.toString().toLowerCase().includes(
        MatchSecondTeamFilter.toString().trim().toLocaleLowerCase()
      )
    });
  }

}
