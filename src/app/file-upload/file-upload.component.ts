import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadUrl: Observable<string>;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
  }

  public startUpload(files: FileList):void{
    const file:File = files.item(0);

    // File type validation
    if(file.type.split('/')[0] !== 'image'){
      console.error(`unsupported file type: ${file.type}`);
      return;
    }

    // The storage path
    const storagePath = `images/${new Date().getTime()}_${file.name}`; 

    const customMetadata = { app:"BringMeOut"};

    this.task = this.storage.upload(storagePath, file, {customMetadata});
    this.task.catch(err=>{
      console.log(err);
    });
    this.percentage = this.task.percentageChanges()
    this.snapshot   = this.task.snapshotChanges();

    this.downloadUrl = this.task.downloadURL();
    this.downloadUrl.subscribe(url=>{
      console.log(url);
    });
  }

  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
