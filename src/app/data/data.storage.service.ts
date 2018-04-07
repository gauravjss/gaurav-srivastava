import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map'
import { saveAs } from 'file-saver/FileSaver';

@Injectable()
export class DataStorageService{

  constructor(private httpClient: HttpClient){  }

  downloadResume() {

    const headers = new HttpHeaders().set('Accept','application/pdf');

    return this.httpClient.get('/download',
      {
        headers: headers,
        responseType: 'blob'
      }).map(
      (response) => {
        console.log(response);
        this.saveToFileSystem(response);
      });
  }

  private saveToFileSystem(response) {
    console.log('inside save to file system');
    const date = new Date().toDateString();
    const filename = `Gaurav_Resume_${date}.pdf`
    const blob = new Blob([response], { type: 'application/pdf' });
    saveAs(blob, filename);
  }
}
