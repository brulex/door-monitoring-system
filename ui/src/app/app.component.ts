import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { RootComponentInterface } from './types';

interface NavItem {
    link: string;
    name: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements RootComponentInterface {
    readonly navItems: NavItem[] = [
        { link: '/dashboard', name: 'Dashboard' },
        { link: '/groups', name: 'Groups' },
        { link: '/users', name: 'Users' },
        { link: '/devices', name: 'Devices' },
        { link: '/system_logs', name: 'System logs' },
    ];

    @ViewChild('globalLoading', { static: true }) globalLoadingRef: CdkPortal;
    private overlayRef: OverlayRef;

    constructor(private appService: AppService, private overlay: Overlay) {
        this.appService.setupRootComponent(this);
    }

    get title() {
        return this.appService.getConfig().title;
    }

    showLoadmask(): void {
        if (!this.overlayRef?.hasAttached()) {
            this.overlayRef = this.overlay.create({ hasBackdrop: true, backdropClass: 'load-backdrop' });
            this.overlayRef.attach(this.globalLoadingRef);
        }
    }

    hideLoadmask(): void {
        if (this.overlayRef?.hasAttached()) {
            this.overlayRef.dispose();
        }
    }
}