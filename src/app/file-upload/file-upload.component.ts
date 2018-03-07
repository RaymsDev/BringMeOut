import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  task: AngularFireUploadTask;
  percentage: Observable < number >;
  percent: number;
  snapshot: Observable < any > ;
  uploadedUrl: Observable < string > ;
  isUploaded: boolean;
  private storagePath: string;
  //return url
  @Output() downloaded = new EventEmitter <string> ();
  // return progression
  @Output() progression = new EventEmitter <number> ();

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    this.isUploaded = false;
  }

  public startUpload(files: FileList): void {
    const file: File = files.item(0);

    // File type validation
    if (file.type.split('/')[0] !== 'image') {
      alert('Unsuported file type! Choose image please!')
      return;
    }

    // The storage path
    const storagePath = `event-images/${new Date().getTime()}_${file.name}`;
    this.storagePath = storagePath;
    const customMetadata = {
      app: "BringMeOut"
    };

    this.task = this.storage.upload(storagePath, file, {
      customMetadata
    });
    this.percentage = this.task.percentageChanges();
    this.percentage.subscribe(percent => {
      this.progression.emit(percent);
      this.percent = Math.round(percent);
    });

    this.snapshot = this.task.snapshotChanges();
    this.snapshot.subscribe(snap => {
      console.log(snap);

    });

    this.task.catch(err => {
      console.log(err);
    });

    this.uploadedUrl = this.task.downloadURL();
    this.uploadedUrl.subscribe(url => {
      this.downloaded.emit(url);
      this.isUploaded = true;
    });
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  public remove(){
    this.storage.ref(this.storagePath)
    .delete()
    .subscribe(result=>{
      console.log("File removed", result);
      this.isUploaded = false;
      this.percent = null;
    });
  }

}

