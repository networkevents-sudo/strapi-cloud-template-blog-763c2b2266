import type { Schema, Struct } from '@strapi/strapi';

export interface BlogEventBannerText extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_banner_texts';
  info: {
    displayName: 'banner_text';
  };
  attributes: {
    banner_text: Schema.Attribute.Text;
  };
}

export interface BlogEventBlogEventPara extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_event_paras';
  info: {
    displayName: 'blog_event_para';
  };
  attributes: {
    para1: Schema.Attribute.Text;
    para2: Schema.Attribute.Component<'blog-event.blog-event-para-comp', true>;
    subpara: Schema.Attribute.Component<'blog-event.blog-events-subpara', true>;
  };
}

export interface BlogEventBlogEventParaComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_event_para_comps';
  info: {
    displayName: 'blog_event_para_comp';
  };
  attributes: {
    para2: Schema.Attribute.RichText;
  };
}

export interface BlogEventBlogEventsComponent extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_events_components';
  info: {
    displayName: 'blog_event_banner';
  };
  attributes: {
    banner_text: Schema.Attribute.Component<'blog-event.banner-text', true>;
    banner_title: Schema.Attribute.Text;
  };
}

export interface BlogEventBlogEventsDetailsMain extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_events_details_mains';
  info: {
    displayName: 'blog_events_details_main';
  };
  attributes: {
    blog_event: Schema.Attribute.Component<'blog-event.events-comp', true>;
  };
}

export interface BlogEventBlogEventsFaq extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_events_faqs';
  info: {
    displayName: 'blog_events_faq';
  };
  attributes: {
    faq: Schema.Attribute.Component<'blog-event.blog-events-faq-comp', true>;
  };
}

export interface BlogEventBlogEventsFaqComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_events_faq_comps';
  info: {
    displayName: 'blog_events_faq_comp';
  };
  attributes: {
    faq_ans: Schema.Attribute.Text;
    faq_question: Schema.Attribute.Text;
  };
}

export interface BlogEventBlogEventsSubpara extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_blog_events_subparas';
  info: {
    displayName: 'blog_events_subpara';
  };
  attributes: {
    subpara: Schema.Attribute.Text;
  };
}

export interface BlogEventEventsComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_events_comps';
  info: {
    displayName: 'events_comp';
  };
  attributes: {
    events_detail: Schema.Attribute.Component<
      'blog-event.events-detail-comp',
      true
    >;
    events_title: Schema.Attribute.Text;
  };
}

export interface BlogEventEventsDetailComp extends Struct.ComponentSchema {
  collectionName: 'components_blog_event_events_detail_comps';
  info: {
    displayName: 'events_detail_comp';
  };
  attributes: {
    blog_event_detail_btn: Schema.Attribute.String;
    blog_event_detail_date: Schema.Attribute.Text;
    blog_event_detail_ticke_title: Schema.Attribute.Text;
    blog_event_detail_ticket_time: Schema.Attribute.Text;
    blog_event_detail_title: Schema.Attribute.Text;
    blog_event_detail_title2: Schema.Attribute.Text;
    blog_event_details_month: Schema.Attribute.Text;
  };
}

export interface BlogAuthor extends Struct.ComponentSchema {
  collectionName: 'components_blog_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface BlogBlogBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_banners';
  info: {
    displayName: 'blog_banner';
  };
  attributes: {
    blog_banner: Schema.Attribute.Text;
    date: Schema.Attribute.Date;
    subtitle: Schema.Attribute.Text;
    test: Schema.Attribute.Blocks;
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
    sections: Schema.Attribute.Component<'blog.key-takeaways-merge', true>;
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
    link: Schema.Attribute.Blocks;
    linkLabel: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    subtitle2: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface BlogSec1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_sec1s';
  info: {
    displayName: 'sec1';
  };
  attributes: {
    para: Schema.Attribute.Blocks;
    subpara: Schema.Attribute.Blocks;
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
    para2: Schema.Attribute.Text;
    skillsItems: Schema.Attribute.Component<'blog.skillitem-comp', true>;
    subpara: Schema.Attribute.Blocks;
    subpara2: Schema.Attribute.Text;
    subpara3: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
    title1: Schema.Attribute.Text;
  };
}

export interface BlogSec3 extends Struct.ComponentSchema {
  collectionName: 'components_blog_sec3s';
  info: {
    displayName: 'sec3';
  };
  attributes: {
    result: Schema.Attribute.Component<'blog.skillitem-comp', true>;
    subtitle: Schema.Attribute.Text;
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
    para: Schema.Attribute.Text;
    section: Schema.Attribute.Component<'blog.para-comp', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    meta_desc: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.Text;
    meta_title: Schema.Attribute.Text;
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
      'blog-event.banner-text': BlogEventBannerText;
      'blog-event.blog-event-para': BlogEventBlogEventPara;
      'blog-event.blog-event-para-comp': BlogEventBlogEventParaComp;
      'blog-event.blog-events-component': BlogEventBlogEventsComponent;
      'blog-event.blog-events-details-main': BlogEventBlogEventsDetailsMain;
      'blog-event.blog-events-faq': BlogEventBlogEventsFaq;
      'blog-event.blog-events-faq-comp': BlogEventBlogEventsFaqComp;
      'blog-event.blog-events-subpara': BlogEventBlogEventsSubpara;
      'blog-event.events-comp': BlogEventEventsComp;
      'blog-event.events-detail-comp': BlogEventEventsDetailComp;
      'blog.author': BlogAuthor;
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
      'seo.seo': SeoSeo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
