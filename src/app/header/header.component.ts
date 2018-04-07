import {Component, Injectable, OnInit} from '@angular/core';
import {DataStorageService} from "../data/data.storage.service";

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataStorageService]
})
export class HeaderComponent implements OnInit {

  constructor(private dsService: DataStorageService) { }

  ngOnInit() {
  }

  onDownloadResume(){
    console.log('inside controller')
    this.dsService.downloadResume().subscribe();
  }

}
