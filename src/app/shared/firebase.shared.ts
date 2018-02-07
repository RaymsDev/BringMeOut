import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../../environments/environment';

export const FIREBASE_MODULES = [
    AngularFireModule.initializeApp(environment.firebase, "bring-me-out"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
];