import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GalleryModule as GalleryPlagin } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ButtonComponent } from './components/button/button.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVk} from '@fortawesome/free-brands-svg-icons';

const icons = [
  faFacebookF,
  faTwitter,
  faVk
];

const shareProp = {
  facebook: {
    icon: ['fab', 'facebook-f']
  },
  twitter: {
    icon: ['fab', 'twitter']
  },
  vk: {
    icon: ['fab', 'vk']
  }
};

@NgModule({
  declarations: [GalleryComponent, ButtonComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    GalleryPlagin,
    LightboxModule.withConfig({}),
    InfiniteScrollModule,
    ShareButtonsModule.withConfig({ prop: shareProp }),
  ],
})
export class GalleryModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
