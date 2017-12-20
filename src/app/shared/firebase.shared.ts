import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../../environments/environment';

export const FIREBASE_MODULES = [
    AngularFireModule.initializeApp(environment.firebase, "bring-me-out"),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
];