import { Observable } from '@nativescript/core';
import { Profile, MOCK_PROFILES } from '../../models/profile.model';
import { navigate } from '@nativescript/core/ui/frame';

export class ProfilesViewModel extends Observable {
    private _profiles: Profile[];

    constructor() {
        super();
        this._profiles = MOCK_PROFILES;
    }

    get profiles(): Profile[] {
        return this._profiles;
    }

    onProfileTap(args: any) {
        const profile = args.view.bindingContext;
        navigate({
            moduleName: 'views/profile-detail/profile-detail-page',
            context: profile,
            animated: true,
            transition: {
                name: 'slide',
                duration: 200,
            },
        });
    }
}