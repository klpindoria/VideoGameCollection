import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public cards: any[] = [];
  public platforms: any[] = [];
  constructor() {}

  

  ngOnInit(): void {
    this.platforms = [
      {
        "id": "1",
        "name": "Xbox Series X",
        "icon": "https://images.igdb.com/igdb/image/upload/t_logo_med/plfl.png"
      },
      {
        "id": "2",
        "name": "PlayStation 5",
        "icon": "https://images.igdb.com/igdb/image/upload/t_logo_med/plcv.png"
      },
      {
        "id": "3",
        "name": "Windows PC",
        "icon": "https://images.igdb.com/igdb/image/upload/t_logo_med/irwvwpl023f8y19tidgq.png"
      },
      {
        "id": "4",
        "name": "MacOS",
        "icon": "https://images.igdb.com/igdb/image/upload/t_logo_med/jl4t4o64uv2gizj2dxsy.png"
      }
    ];

    this.cards = [
      {
        "title": "GTA V",
        "subHeading": "Rockstar Games",
        "description": "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.png",
        "platforms": ["1","2","3","4"]
      },
      {
        "title": "FIFA 22",
        "subHeading": "EA Sports",
        "description": "FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series, and was released worldwide on 1 October 2021 for Microsoft Windows, Nintendo.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.png",
        "platforms": ["1","2","3","4"]
      },
      {
        "title": "Horizon Forbidden West",
        "subHeading": "Guerrilla Games",
        "description": "Horizon Forbidden West continues Aloy's story as she moves west to a far-future America to brave a majestic, but dangerous frontier where she'll face awe-inspiring machines and mysterious new threats.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.png",
        "platforms": ["1","2","3","4"]
      },
      {
        "title": "Gran Turismo 7",
        "subHeading": "Polyphony Digital",
        "description": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you're a competitive or casual racer, collector, tuner, livery designer or photographer - find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School. With the reintroduction of the legendary GT Simulation Mode, buy, tune, race and sell your way through a rewarding solo campaign as you unlock new cars and challenges. And if you love going head-to-head with others, hone your skills and compete in the GT Sport Mode.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2g84.png",
        "platforms": ["2"]
      },
      {
        "title": "GTA IV",
        "subHeading": "Rockstar Games",
        "description": "Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh instalment overall.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbv.png",
        "platforms": ["1","2","3","4"]
      },
      {
        "title": "Inscryption",
        "subHeading": "Daniel Mullins Games",
        "description": "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co401c.png",
        "platforms": ["3"]
      },
      {
        "title": "FIFA 21",
        "subHeading": "EA Sports",
        "description": "FIFA 21 is an association football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series, and was released on 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wm2.png",
        "platforms": ["1","2","3","4"]
      },
      {
        "title": "Ratchet & Clank: Rift Apart",
        "subHeading": "Insomniac Games",
        "description": "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality. Jump between action-packed worlds and beyond at mind-blowing speeds, complete with dazzling visuals and an insane arsenal.",
        "photo": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2str.png",
        "platforms": ["1","2","3","4"]
      }
    ];
  }

}
