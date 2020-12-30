import { Component, OnInit } from '@angular/core';
import { Champion } from '../interfaces/champion';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss']
})
export class NbaComponent implements OnInit {
  championsArray: Champion[];
  constructor() {
    this.championsArray=[
      {
        year: '2018',
        champion: 'Golden State Warriors',
        defeated: 'Toronto Raptors',
        result: '4-0',
        championURL: 'https://www.nba.com/warriors/',
        championImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
        bestPlayers: [
          'PTS: LeBron James',
          'TRB: Draymond Green',
          'AST: LeBron James',
          'WS: LeBron James'
        ]
      },
      {
        year: '2019',
        champion: 'Golden State Warriors',
        defeated: 'Toronto Raptors',
        result: '2-4',
        championURL: 'https://www.nba.com/warriors/',
        championImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png',
        bestPlayers: [
          'PTS: Kawhi Leonard',
          'TRB: Draymond Green',
          'AST: Draymond Green',
          'WS: Kawhi Leonard'
        ]
      },
      {
        year: '2020',
        champion: 'Los Angeles Lakers',
        defeated: 'Miami Heat',
        result: '2-4',
        championURL: 'https://www.nba.com/lakers/',
        championImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png',
        bestPlayers: [
          'PTS: Anthony Davis',
          'TRB: LeBron James',
          'AST: LeBron James',
          'WS: Anthony Davis'
        ]
      }
    ]
   }

  ngOnInit(): void {

  }

}
