import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlogBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_banners';
  info: {
    displayName: 'blog_banner';
  };
  attributes: {
    blog_banner: Schema.Attribute.Text;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    videoUrl: Schema.Attribute.Text;
  };
}

export interface BlogFaq extends Struct.ComponentSchema {
  collectionName: 'components_blog_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    sections: Schema.Attribute.Component<'blog.faq-comp', true>;
    title: Schema.Attribute.Text;
  };
}

export interface BlogFaqComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_faq_comps';
  info: {
    displayName: 'faq_Comp';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface BlogKeyTakeaways extends Struct.ComponentSchema {
  collectionName: 'components_blog_key_takeaways';
  info: {
    displayName: 'keyTakeaways';
  };
  attributes: {
    sections: Schema.Attribute.Component<'blog.key-takeaways-merge', false>;
    title: Schema.Attribute.Text;
  };
}

export interface BlogKeyTakeawaysMerge extends Struct.ComponentSchema {
  collectionName: 'components_blog_key_takeaways_merges';
  info: {
    displayName: 'KeyTakeaways_merge';
  };
  attributes: {
    items: Schema.Attribute.Component<'blog.keytakeaway-comp2', true>;
    title: Schema.Attribute.Component<'blog.keytakeaway-comp1', false>;
  };
}

export interface BlogKeytakeawayComp1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_keytakeaway_comp1s';
  info: {
    displayName: 'keytakeaway_comp1';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface BlogKeytakeawayComp2 extends Struct.ComponentSchema {
  collectionName: 'components_blog_keytakeaway_comp2s';
  info: {
    displayName: 'Keytakeaway_comp2';
  };
  attributes: {
    items: Schema.Attribute.String;
  };
}

export interface BlogParaComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_para_comps';
  info: {
    displayName: 'para_Comp';
  };
  attributes: {
    para: Schema.Attribute.Text;
    source: Schema.Attribute.String;
  };
}

export interface BlogPodcast extends Struct.ComponentSchema {
  collectionName: 'components_blog_podcasts';
  info: {
    displayName: 'podcast';
  };
  attributes: {
    sections: Schema.Attribute.Component<'blog.podcast-comp', true>;
    title: Schema.Attribute.Text;
  };
}

export interface BlogPodcastComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_podcast_comps';
  info: {
    displayName: 'podcast_comp';
  };
  attributes: {
    ctaText: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    linkLabel: Schema.Attribute.Text;
    linkUrl: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface BlogSec1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_sec1s';
  info: {
    displayName: 'sec1';
  };
  attributes: {
    para: Schema.Attribute.Text;
    subPara: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface BlogSec2 extends Struct.ComponentSchema {
  collectionName: 'components_blog_sec2s';
  info: {
    displayName: 'sec2';
  };
  attributes: {
    para: Schema.Attribute.Text;
    skillsItems: Schema.Attribute.Component<'blog.skillitem-comp', true>;
    subpara: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface BlogSec3 extends Struct.ComponentSchema {
  collectionName: 'components_blog_sec3s';
  info: {
    displayName: 'sec3';
  };
  attributes: {
    result: Schema.Attribute.Component<'blog.skillitem-comp', true>;
    title: Schema.Attribute.Text;
  };
}

export interface BlogSkillitemComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_skillitem_comps';
  info: {
    displayName: 'skillitem_comp';
  };
  attributes: {
    item: Schema.Attribute.String;
  };
}

export interface BlogSource extends Struct.ComponentSchema {
  collectionName: 'components_blog_sources';
  info: {
    displayName: 'source';
  };
  attributes: {
    items: Schema.Attribute.Component<'blog.skillitem-comp', true>;
    section: Schema.Attribute.Component<'blog.para-comp', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog-banner': BlogBlogBanner;
      'blog.faq': BlogFaq;
      'blog.faq-comp': BlogFaqComp;
      'blog.key-takeaways': BlogKeyTakeaways;
      'blog.key-takeaways-merge': BlogKeyTakeawaysMerge;
      'blog.keytakeaway-comp1': BlogKeytakeawayComp1;
      'blog.keytakeaway-comp2': BlogKeytakeawayComp2;
      'blog.para-comp': BlogParaComp;
      'blog.podcast': BlogPodcast;
      'blog.podcast-comp': BlogPodcastComp;
      'blog.sec1': BlogSec1;
      'blog.sec2': BlogSec2;
      'blog.sec3': BlogSec3;
      'blog.skillitem-comp': BlogSkillitemComp;
      'blog.source': BlogSource;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
