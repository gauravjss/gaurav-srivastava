import {Component, Injectable, OnInit} from '@angular/core';
import {DataStorageService} from "../data/data.storage.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataStorageService]
})
export class HeaderComponent implements OnInit {

  constructor(private dsService: DataStorageService,
              private modalService: NgbModal) { }

  ngOnInit() {
  }

  onDownloadResume(flag){
    this.dsService.downloadResume(flag).subscribe();
  }

  open(content) {
    this.modalService.open(content , { size: 'sm', backdrop: 'static' });
  }

}
