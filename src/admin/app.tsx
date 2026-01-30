import type { StrapiApp } from '@strapi/strapi/admin';

import AuthLogo from "./extensions/Soleil - Logo.png";
import MenuLogo from "./extensions/soleil_symbol_purple_rgb.png";

export default {
  config: {
    auth: { logo: AuthLogo },
    menu: { logo: MenuLogo },
    locales: [
      'sv',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
