import { action, Action } from 'easy-peasy';

export interface SkyactylSettings {
    customCopyright: boolean;
    copyright: string;
    isUnderMaintenance: boolean;
    maintenance: string;
    themeSelector: boolean;
    sidebarLogout: boolean;
    allocationBlur: boolean;
    alertType: string;
    alertMessage: string;
    statusCardLink: string;
    supportCardLink: string;
    billingCardLink: string;
}

export interface SkyactylSettingsStore {
    data?: SkyactylSettings;
    setSkyactyl: Action<SkyactylSettingsStore, SkyactylSettings>;
}

const skyactyl: SkyactylSettingsStore = {
    data: undefined,

    setSkyactyl: action((state, payload) => {
        state.data = payload;
    }),
};

export default skyactyl;
