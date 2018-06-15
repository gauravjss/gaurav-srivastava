import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map'
import { saveAs } from 'file-saver/FileSaver';

@Injectable()
export class DataStorageService{

  constructor(private httpClient: HttpClient){  }

  downloadResume(flag) {

    const headers = new HttpHeaders().set('Accept','application/pdf');

    return this.httpClient.get('/download/'+flag,
      {
        headers: headers,
        responseType: 'blob'
      }).map(
      (response) => {
        //console.log(response);
        this.saveToFileSystem(response,flag);
      });
  }

  private saveToFileSystem(response,flag) {
    const date = new Date().toDateString();
    if(flag === 1){
      const blob = new Blob([response]);
      const filename = `Gaurav_Resume_${date}.docx`
      saveAs(blob, filename);
    }else{
      const blob = new Blob([response], { type: 'application/pdf' });
      const filename = `Gaurav_Resume_${date}.pdf`
      saveAs(blob, filename);
    }
  }
}
