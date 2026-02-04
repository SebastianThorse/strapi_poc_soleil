import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    content: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
  };
}

export interface BlocksPuffar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_puffars';
  info: {
    displayName: 'Puffar';
  };
  attributes: {
    Puffar: Schema.Attribute.Component<'components.puff', true>;
  };
}

export interface ComponentsPuff extends Struct.ComponentSchema {
  collectionName: 'components_components_puffs';
  info: {
    displayName: 'Puff';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero': BlocksHero;
      'blocks.puffar': BlocksPuffar;
      'components.puff': ComponentsPuff;
    }
  }
}
