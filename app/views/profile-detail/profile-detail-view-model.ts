import { Observable } from '@nativescript/core';
import { Profile } from '../../models/profile.model';

export class ProfileDetailViewModel extends Observable {
    constructor(profile: Profile) {
        super();
        Object.assign(this, profile);
    }
}