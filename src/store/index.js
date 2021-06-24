import { createStore } from 'redux';

const portfolioReducer = (
    state = {
        index: null,
        cardPosition: { x: 0, y: 0 },
        isActive: false,
        transition: false,
        zIndex: false,
        cardParallax: null,
        startOnCaseStudy: true,
        previousPage: '/',
        transitionTime: 240,
        caseStudies: [
            {
                id: 13,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/about-me.svg',
                    background_color: '#FFFFFF',
                    scroll_down_color: 'Dark',
                    mockup: false,
                    images: [
                        {
                            image: {
                                ID: 79,
                                id: 79,
                                title: 'matthew-adshead',
                                filename: 'matthew-adshead.jpg',
                                filesize: 153969,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                link: 'http://api.matthewadshead.com/about-me/matthew-adshead/',
                                alt: 'Matthew Adshead',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'matthew-adshead',
                                status: 'inherit',
                                uploaded_to: 13,
                                date: '2021-03-02 22:16:54',
                                modified: '2021-03-02 22:19:01',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 918,
                                height: 927,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead-297x300.jpg',
                                    'medium-width': 297,
                                    'medium-height': 300,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead-768x776.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 776,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    'large-width': 918,
                                    'large-height': 927,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    '1536x1536-width': 918,
                                    '1536x1536-height': 927,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    '2048x2048-width': 918,
                                    '2048x2048-height': 927,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead-400x404.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 404,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead-800x808.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 808,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    'desktop-low-res-width': 918,
                                    'desktop-low-res-height': 927,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    'tablet-width': 918,
                                    'tablet-height': 927,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/matthew-adshead.jpg',
                                    'desktop-width': 918,
                                    'desktop-height': 927
                                }
                            }
                        }
                    ],
                    link: 'about-me',
                    title: 'About Me',
                    content:
                        '<h2>Hi! I’m a web developer and designer.</h2>\n<p>I like to make things on the internet that are pretty and easy to use. I strongly dislike things that are pretty at the expense of being easy to use. But sometimes that&#8217;s what people want, and I&#8217;m also a pathological people pleaser.</p>\n<p>I like to use cool new technologies, but I&#8217;m agnostic about which ones for the most part. I hold a seemingly controversial belief that a stable, well written plugin that saves time and makes projects more maintainable is a good thing.</p>\n<h2>Get in touch:</h2>\n<p>If you&#8217;d like to get in touch to build something cool or just to argue about which text editor is best, please get in touch via <a href="mailto:matthew.adshead@gmail.com">email</a> or <a href="https://www.linkedin.com/in/matthew-adshead-072a3596/" target="_blank">LinkedIn</a>.</p>\n',
                    external_link: '',
                    external_pretty_link: '',
                    tags: false
                }
            },
            {
                id: 97,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto.svg',
                    background_color: '#f9faf1',
                    scroll_down_color: 'Dark',
                    mockup: {
                        ID: 69,
                        id: 69,
                        title: 'archetto-towns-ipad',
                        filename: 'archetto-towns-ipad.jpg',
                        filesize: 295320,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad.jpg',
                        link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-ipad/',
                        alt: 'Archetto Towns - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'archetto-towns-ipad',
                        status: 'inherit',
                        uploaded_to: 97,
                        date: '2021-03-02 22:16:22',
                        modified: '2021-03-02 22:24:38',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2400,
                        height: 1437,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-400x240.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 240,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-1200x719.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 719,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-ipad.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    images: [
                        {
                            image: {
                                ID: 68,
                                id: 68,
                                title: 'archetto-towns-home',
                                filename: 'archetto-towns-home-scaled.jpg',
                                filesize: 669181,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-home/',
                                alt: 'Archetto Towns - Home',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-home',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:18',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-home-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 61,
                                id: 61,
                                title: 'archetto-towns-area',
                                filename: 'archetto-towns-area-scaled.jpg',
                                filesize: 324751,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-area/',
                                alt: 'Archetto Towns - About',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-area',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:15:48',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-area-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 70,
                                id: 70,
                                title: 'archetto-towns-site-plan',
                                filename: 'archetto-towns-site-plan-scaled.jpg',
                                filesize: 813641,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-site-plan/',
                                alt: 'Archetto Towns - Site Plan',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-site-plan',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:25',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-site-plan-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 65,
                                id: 65,
                                title: 'archetto-towns-floorplan-list',
                                filename: 'archetto-towns-floorplan-list-scaled.jpg',
                                filesize: 167186,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-floorplan-list/',
                                alt: 'Archetto Towns - Floorplans List',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-floorplan-list',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:05',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-list-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 64,
                                id: 64,
                                title: 'archetto-towns-floorplan-grid',
                                filename: 'archetto-towns-floorplan-grid-scaled.jpg',
                                filesize: 214337,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-floorplan-grid/',
                                alt: 'Archetto Towns - Floorplans Grid',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-floorplan-grid',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:01',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-grid-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 66,
                                id: 66,
                                title: 'archetto-towns-floorplan',
                                filename: 'archetto-towns-floorplan-scaled.jpg',
                                filesize: 214519,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-floorplan/',
                                alt: 'Archetto Towns - Floorplan',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-floorplan',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:09',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-floorplan-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 62,
                                id: 62,
                                title: 'archetto-towns-compare-list',
                                filename: 'archetto-towns-compare-list-scaled.jpg',
                                filesize: 186777,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-compare-list/',
                                alt: 'Archetto Towns - Compare Floorplans',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-compare-list',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:15:52',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-compare-list-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 67,
                                id: 67,
                                title: 'archetto-towns-gallery-renderings',
                                filename: 'archetto-towns-gallery-renderings-scaled.jpg',
                                filesize: 356704,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-gallery-renderings/',
                                alt: 'Archetto Towns - Renderings',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-gallery-renderings',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:16:13',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-gallery-renderings-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 63,
                                id: 63,
                                title: 'archetto-towns-contact',
                                filename: 'archetto-towns-contact-scaled.jpg',
                                filesize: 204812,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-scaled.jpg',
                                link: 'http://api.matthewadshead.com/archetto-towns/archetto-towns-contact/',
                                alt: 'Archetto Towns - Contact',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'archetto-towns-contact',
                                status: 'inherit',
                                uploaded_to: 97,
                                date: '2021-03-02 22:15:57',
                                modified: '2021-03-02 22:24:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/archetto-towns-contact-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ],
                    external_link: 'https://archettotowns.com/',
                    external_pretty_link: 'archettotowns.com',
                    link: 'archetto-towns',
                    title: 'Archetto Towns',
                    content:
                        '<p>Archetto Towns is a community of townhomes in Woodbridge, Ontario. Developed by frequent 52 Pick-up collaborators Marlin Spring, the project required a web app that would serve double duty as a touchscreen installation in the Archetto sales centre.</p>\n<p>The application required some complex data management concerning the floorplans and site plan, and the dev team at 52 chose to build a React app to handle those issues. The client also needed to be able to edit the entire site through a dashboard, including hiding/showing available units on the site plan and floorplan lists. Since the client was already familiar with the WordPress dashboard, we decided to leverage the WordPress REST API to build out our back end.</p>\n<p>To offer the best touchscreen experience, the design for larger viewports is a horizontal scrolling layout. While this posed a great number of technical difficulties in creating the responsive layouts for smaller screens/mobile, the final product is very satisfying to use on all devices.</p>\n<p>As is common on this type of project, there are a large number of high res images that make page speed optimization challenging. But despite this concession, the React ecosystem provides a lightning fast and snappy user experience, particularly when images are cached.</p>\n<p>Overall, this was a challenging but ultimately rewarding build working with a tight deadline.</p>\n',
                    tags: [
                        {
                            tag: 'React'
                        },
                        {
                            tag: 'Redux'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'REST API'
                        }
                    ]
                }
            },
            {
                id: 103,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess.svg',
                    background_color: '#FFFFFF',
                    scroll_down_color: 'Dark',
                    mockup: {
                        ID: 59,
                        id: 59,
                        title: 'annie-burgess-ipad',
                        filename: 'annie-burgess-ipad.jpg',
                        filesize: 251110,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad.jpg',
                        link: 'http://api.matthewadshead.com/annie-burgess/annie-burgess-ipad/',
                        alt: 'Annie Burgess - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'annie-burgess-ipad',
                        status: 'inherit',
                        uploaded_to: 103,
                        date: '2021-03-02 22:15:45',
                        modified: '2021-03-02 22:29:42',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2400,
                        height: 1437,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-400x240.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 240,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-1200x719.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 719,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-ipad.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    external_link: 'http://annieburgessart.com/',
                    external_pretty_link: 'annieburgessart.com',
                    images: [
                        {
                            image: {
                                ID: 58,
                                id: 58,
                                title: 'annie-burgess-gallery',
                                filename: 'annie-burgess-gallery-scaled.jpg',
                                filesize: 512935,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-scaled.jpg',
                                link: 'http://api.matthewadshead.com/annie-burgess/annie-burgess-gallery/',
                                alt: 'Annie Burgess - Gallery',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'annie-burgess-gallery',
                                status: 'inherit',
                                uploaded_to: 103,
                                date: '2021-03-02 22:15:41',
                                modified: '2021-03-02 22:29:42',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-gallery-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 57,
                                id: 57,
                                title: 'annie-burgess-content',
                                filename: 'annie-burgess-content-scaled.jpg',
                                filesize: 224828,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-scaled.jpg',
                                link: 'http://api.matthewadshead.com/annie-burgess/annie-burgess-content/',
                                alt: 'Annie Burgess - Content',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'annie-burgess-content',
                                status: 'inherit',
                                uploaded_to: 103,
                                date: '2021-03-02 22:15:36',
                                modified: '2021-03-02 22:29:42',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/annie-burgess-content-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ],
                    link: 'annie-burgess',
                    title: 'Annie Burgess',
                    content:
                        '<p>Annie Burgess is an artist based in Guelph, Ontario. She came to me looking to create a portfolio that showcases her work and history. I designed a simple layout that puts the focus squarely on the art itself.</p>\n<p>Given the massive number of images being showcased, I separated the pieces by category and lazy loaded the assets to improve page speed. To provide a more satisfying and smoother experience, I leveraged Barba.js to create no refresh page transition animations.</p>\n<p>This was a fun, quick build that I believe showcases the client’s art as it should be seen.</p>\n',
                    tags: [
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'PHP'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'jQuery'
                        },
                        {
                            tag: 'Barba'
                        }
                    ]
                }
            },
            {
                id: 145,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-logo.svg',
                    link: 'house-of-assembly',
                    background_color: '#e4dcd3',
                    scroll_down_color: 'Dark',
                    mockup: {
                        ID: 147,
                        id: 147,
                        title: 'Isometric iPad Pro 2018 Mockup by Anthony Boyd Graphics',
                        filename: 'hoa-ipad-scaled.jpg',
                        filesize: 213794,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-scaled.jpg',
                        link: 'http://api.matthewadshead.com/house-of-assembly/isometric-ipad-pro-2018-mockup-by-anthony-boyd-graphics/',
                        alt: 'House of Assembly - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'isometric-ipad-pro-2018-mockup-by-anthony-boyd-graphics',
                        status: 'inherit',
                        uploaded_to: 145,
                        date: '2021-06-20 13:48:42',
                        modified: '2021-06-20 13:49:11',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2560,
                        height: 1533,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-400x239.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 239,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-1200x718.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 718,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-ipad-2400x1437.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    title: 'House of Assembly',
                    content:
                        '<p>House of Assembly is a residential condo project by real estate developer Marlin Spring. Located in Sterling Junction in Toronto, the building is ultra modern and cool and needed a brand and website to match.</p>\n<p>The brand has modern artful feel to it, inspired by the nearby Museum of Contemporary Art. Abstract shapes are layered on top of each other throughout the site, providing artistic flair; as well as increased coding complexity.</p>\n<p>Though it was one of the quickest builds of my career due to extreme time constraints, I&#8217;m very happy with the result. As it was my final project working at 52 Pick-up, I was determined to give the site the high end feel it deserved. Lacking time for full site-wide animations, I opted to spend a reasonable amount of time installing and configuring barba.js to enable no refresh page transitions. A simple fade out and in between pages gives the site a snappy, app like experience.</p>\n<p>The back end of the site allows the client to hide and show floorplans down to the level of individual units, allowing for their staggered sales strategy. The front end interface allows users to filter floorplans by unit type, distilling the large number of floorplans down to a reasonable number of options the user is actually interested in.</p>\n<p>Closing the 52 Pick-up chapter of my career was a difficult and emotional experience, but launching a full site with my last click of the mouse seemed like a poetic end to a great professional relationship. House of Assembly was the ideal project to go out on.</p>\n',
                    external_link: 'https://www.houseofassembly.com/',
                    external_pretty_link: 'houseofassembly.com',
                    tags: [
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'PHP'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'jQuery'
                        },
                        {
                            tag: 'Barba'
                        }
                    ],
                    images: [
                        {
                            image: {
                                ID: 148,
                                id: 148,
                                title: 'hoa-home',
                                filename: 'hoa-home-scaled.jpg',
                                filesize: 248947,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-home/',
                                alt: 'House of Assembly - Home',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-home',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:49:20',
                                modified: '2021-06-20 13:49:43',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-home-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 149,
                                id: 149,
                                title: 'hoa-area',
                                filename: 'hoa-area-scaled.jpg',
                                filesize: 282191,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-area/',
                                alt: 'House of Assembly - Area',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-area',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:49:53',
                                modified: '2021-06-20 13:50:02',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-area-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 150,
                                id: 150,
                                title: 'hoa-amenities',
                                filename: 'hoa-amenities-scaled.jpg',
                                filesize: 315245,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-amenities/',
                                alt: 'House of Assembly - Amenities',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-amenities',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:50:08',
                                modified: '2021-06-20 13:50:17',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-amenities-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 151,
                                id: 151,
                                title: 'hoa-floorplans',
                                filename: 'hoa-floorplans-scaled.jpg',
                                filesize: 224945,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-floorplans/',
                                alt: 'House of Assembly - Floorplans',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-floorplans',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:50:23',
                                modified: '2021-06-20 13:50:38',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-floorplans-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 152,
                                id: 152,
                                title: 'hoa-team',
                                filename: 'hoa-team-scaled.jpg',
                                filesize: 245367,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-team/',
                                alt: 'House of Assembly - Team',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-team',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:50:45',
                                modified: '2021-06-20 13:50:54',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-team-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 153,
                                id: 153,
                                title: 'hoa-contact',
                                filename: 'hoa-contact-scaled.jpg',
                                filesize: 162006,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-scaled.jpg',
                                link: 'http://api.matthewadshead.com/house-of-assembly/hoa-contact/',
                                alt: 'House of Assembly - Contact',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'hoa-contact',
                                status: 'inherit',
                                uploaded_to: 145,
                                date: '2021-06-20 13:51:00',
                                modified: '2021-06-20 13:51:10',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/06/hoa-contact-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ]
                }
            },
            {
                id: 107,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring.svg',
                    background_color: '#1c2e3b',
                    scroll_down_color: 'Light',
                    mockup: {
                        ID: 76,
                        id: 76,
                        title: 'marlin-spring-ipad',
                        filename: 'marlin-spring-ipad.jpg',
                        filesize: 170621,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad.jpg',
                        link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-ipad/',
                        alt: 'Marlin Spring - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'marlin-spring-ipad',
                        status: 'inherit',
                        uploaded_to: 107,
                        date: '2021-03-02 22:16:47',
                        modified: '2021-03-02 22:33:41',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2400,
                        height: 1437,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-400x240.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 240,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-1200x719.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 719,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-ipad.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    external_link: 'https://marlinspring.com/',
                    external_pretty_link: 'marlinspring.com',
                    images: [
                        {
                            image: {
                                ID: 75,
                                id: 75,
                                title: 'marlin-spring-home',
                                filename: 'marlin-spring-home-scaled.jpg',
                                filesize: 240350,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-scaled.jpg',
                                link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-home/',
                                alt: 'Marlin Spring - Home',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'marlin-spring-home',
                                status: 'inherit',
                                uploaded_to: 107,
                                date: '2021-03-02 22:16:43',
                                modified: '2021-03-02 22:33:41',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-home-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 77,
                                id: 77,
                                title: 'marlin-spring-our-story',
                                filename: 'marlin-spring-our-story-scaled.jpg',
                                filesize: 215315,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-scaled.jpg',
                                link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-our-story/',
                                alt: 'Marlin Spring - About Us',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'marlin-spring-our-story',
                                status: 'inherit',
                                uploaded_to: 107,
                                date: '2021-03-02 22:16:49',
                                modified: '2021-03-02 22:33:41',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-our-story-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 73,
                                id: 73,
                                title: 'marlin-spring-development',
                                filename: 'marlin-spring-development-scaled.jpg',
                                filesize: 286459,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-scaled.jpg',
                                link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-development/',
                                alt: 'Marlin Spring - Developments',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'marlin-spring-development',
                                status: 'inherit',
                                uploaded_to: 107,
                                date: '2021-03-02 22:16:34',
                                modified: '2021-03-02 22:33:41',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-development-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 74,
                                id: 74,
                                title: 'marlin-spring-foundation',
                                filename: 'marlin-spring-foundation-scaled.jpg',
                                filesize: 294320,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-scaled.jpg',
                                link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-foundation/',
                                alt: 'Marlin Spring - Foundation',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'marlin-spring-foundation',
                                status: 'inherit',
                                uploaded_to: 107,
                                date: '2021-03-02 22:16:38',
                                modified: '2021-03-02 22:33:41',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-foundation-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 72,
                                id: 72,
                                title: 'marlin-spring-contact',
                                filename: 'marlin-spring-contact-scaled.jpg',
                                filesize: 264325,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-scaled.jpg',
                                link: 'http://api.matthewadshead.com/marlin-spring/marlin-spring-contact/',
                                alt: 'Marlin Spring - Contact',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'marlin-spring-contact',
                                status: 'inherit',
                                uploaded_to: 107,
                                date: '2021-03-02 22:16:30',
                                modified: '2021-03-02 22:33:41',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/marlin-spring-contact-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ],
                    link: 'marlin-spring',
                    title: 'Marlin Spring',
                    content:
                        '<p>Marlin Spring is a real estate developer based out of Toronto, Ontario. This build was done on a very tight schedule and I’m very pleased with the outcome under those circumstances.</p>\n<p>Built in PHP, leveraging WordPress and the Advanced Custom Fields plugin, this project is a beautiful and easy-to-use site that functions well and projects an image of a professional and experienced organization.</p>\n<p>As the umbrella brand for many developments, the site maintains a strong sense of self while leaving plenty of room for the client to explore unique branding opportunities in their developments, all while maintaining a cohesive brand as a whole.</p>\n',
                    tags: [
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'PHP'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'jQuery'
                        }
                    ]
                }
            },
            {
                id: 110,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo.svg',
                    background_color: '#FFFFFF',
                    scroll_down_color: 'Dark',
                    mockup: {
                        ID: 83,
                        id: 83,
                        title: 'polo-travel-ipad',
                        filename: 'polo-travel-ipad.jpg',
                        filesize: 267935,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad.jpg',
                        link: 'http://api.matthewadshead.com/polo-travel/polo-travel-ipad/',
                        alt: 'Polo Travel - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'polo-travel-ipad',
                        status: 'inherit',
                        uploaded_to: 110,
                        date: '2021-03-02 22:17:08',
                        modified: '2021-03-02 22:37:13',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2400,
                        height: 1437,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-400x240.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 240,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-1200x719.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 719,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-ipad.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    external_link: 'https://polotravelltd.com/',
                    external_pretty_link: 'polotravelltd.com',
                    images: [
                        {
                            image: {
                                ID: 82,
                                id: 82,
                                title: 'polo-travel-home',
                                filename: 'polo-travel-home-scaled.jpg',
                                filesize: 666445,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-scaled.jpg',
                                link: 'http://api.matthewadshead.com/polo-travel/polo-travel-home/',
                                alt: 'Polo Travel - Home',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'polo-travel-home',
                                status: 'inherit',
                                uploaded_to: 110,
                                date: '2021-03-02 22:17:03',
                                modified: '2021-03-02 22:37:13',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-home-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 84,
                                id: 84,
                                title: 'polo-travel-plan-your-trip',
                                filename: 'polo-travel-plan-your-trip-scaled.jpg',
                                filesize: 332409,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-scaled.jpg',
                                link: 'http://api.matthewadshead.com/polo-travel/polo-travel-plan-your-trip/',
                                alt: 'Polo Travel - Plan Your Trip',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'polo-travel-plan-your-trip',
                                status: 'inherit',
                                uploaded_to: 110,
                                date: '2021-03-02 22:17:10',
                                modified: '2021-03-02 22:37:13',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-plan-your-trip-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 85,
                                id: 85,
                                title: 'polo-travel-travel-styles',
                                filename: 'polo-travel-travel-styles-scaled.jpg',
                                filesize: 654852,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-scaled.jpg',
                                link: 'http://api.matthewadshead.com/polo-travel/polo-travel-travel-styles/',
                                alt: 'Polo Travel - Travel Styles',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'polo-travel-travel-styles',
                                status: 'inherit',
                                uploaded_to: 110,
                                date: '2021-03-02 22:17:14',
                                modified: '2021-03-02 22:37:13',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-travel-styles-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 81,
                                id: 81,
                                title: 'polo-travel-country',
                                filename: 'polo-travel-country-scaled.jpg',
                                filesize: 249565,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-scaled.jpg',
                                link: 'http://api.matthewadshead.com/polo-travel/polo-travel-country/',
                                alt: 'Polo Travel - Country',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'polo-travel-country',
                                status: 'inherit',
                                uploaded_to: 110,
                                date: '2021-03-02 22:16:59',
                                modified: '2021-03-02 22:37:13',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-country-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 80,
                                id: 80,
                                title: 'polo-travel-contact',
                                filename: 'polo-travel-contact-scaled.jpg',
                                filesize: 154187,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-scaled.jpg',
                                link: 'http://api.matthewadshead.com/polo-travel/polo-travel-contact/',
                                alt: 'Polo Travel - Contact',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'polo-travel-contact',
                                status: 'inherit',
                                uploaded_to: 110,
                                date: '2021-03-02 22:16:55',
                                modified: '2021-03-02 22:37:13',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/polo-travel-contact-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ],
                    link: 'polo-travel',
                    title: 'Polo Travel',
                    content:
                        '<p>Polo Travel is a travel agency in Toronto, Ontario. They were looking to create a site that updated their brand in a fun, engaging way.</p>\n<p>The site has a massive amount of content in many organizational layers. Designing and coding the site architecture was a rewarding challenge. I utilized nested WordPress custom post types in order to navigate through the client’s serviced regions, countries and cities. Of particular note was a multistep form built in a slider, that required some novel code structure to accomplish.</p>\n<p>The client was extremely happy with the final result, and I was happy to create this site for them.</p>\n',
                    tags: [
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'PHP'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'jQuery'
                        }
                    ]
                }
            },
            {
                id: 113,
                acf: {
                    logo: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp.svg',
                    background_color: '#9f7750',
                    scroll_down_color: 'Light',
                    mockup: {
                        ID: 91,
                        id: 91,
                        title: 'wolfecorp-ipad',
                        filename: 'wolfecorp-ipad.jpg',
                        filesize: 219724,
                        url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad.jpg',
                        link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-ipad/',
                        alt: 'Wolfecorp - Ipad Mockup',
                        author: '1',
                        description: '',
                        caption: '',
                        name: 'wolfecorp-ipad',
                        status: 'inherit',
                        uploaded_to: 113,
                        date: '2021-03-02 22:17:37',
                        modified: '2021-03-02 22:40:59',
                        menu_order: 0,
                        mime_type: 'image/jpeg',
                        type: 'image',
                        subtype: 'jpeg',
                        icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                        width: 2400,
                        height: 1437,
                        sizes: {
                            thumbnail:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-150x150.jpg',
                            'thumbnail-width': 150,
                            'thumbnail-height': 150,
                            medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-300x180.jpg',
                            'medium-width': 300,
                            'medium-height': 180,
                            medium_large:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-768x460.jpg',
                            'medium_large-width': 768,
                            'medium_large-height': 460,
                            large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-1024x613.jpg',
                            'large-width': 1024,
                            'large-height': 613,
                            '1536x1536':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-1536x920.jpg',
                            '1536x1536-width': 1536,
                            '1536x1536-height': 920,
                            '2048x2048':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-2048x1226.jpg',
                            '2048x2048-width': 2048,
                            '2048x2048-height': 1226,
                            'mobile-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-400x240.jpg',
                            'mobile-low-res-width': 400,
                            'mobile-low-res-height': 240,
                            mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-800x479.jpg',
                            'mobile-width': 800,
                            'mobile-height': 479,
                            'desktop-low-res':
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-1200x719.jpg',
                            'desktop-low-res-width': 1200,
                            'desktop-low-res-height': 719,
                            tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad-1600x958.jpg',
                            'tablet-width': 1600,
                            'tablet-height': 958,
                            desktop:
                                'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-ipad.jpg',
                            'desktop-width': 2400,
                            'desktop-height': 1437
                        }
                    },
                    external_link: 'https://wolfecorp.com/',
                    external_pretty_link: 'wolfecorp.com',
                    images: [
                        {
                            image: {
                                ID: 90,
                                id: 90,
                                title: 'wolfecorp-home',
                                filename: 'wolfecorp-home-scaled.jpg',
                                filesize: 596502,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-home/',
                                alt: 'Wolfecorp - Home',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-home',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:32',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-home-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 92,
                                id: 92,
                                title: 'wolfecorp-properties',
                                filename: 'wolfecorp-properties-scaled.jpg',
                                filesize: 198837,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-properties/',
                                alt: 'Wolfecorp - Properties',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-properties',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:39',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-properties-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 93,
                                id: 93,
                                title: 'wolfecorp-property',
                                filename: 'wolfecorp-property-scaled.jpg',
                                filesize: 303716,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-property/',
                                alt: 'Wolfecorp - Property',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-property',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:43',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-property-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 87,
                                id: 87,
                                title: 'wolfecorp-about-us',
                                filename: 'wolfecorp-about-us-scaled.jpg',
                                filesize: 381788,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-about-us/',
                                alt: 'Wolfecorp - About Us',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-about-us',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:19',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-about-us-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 88,
                                id: 88,
                                title: 'wolfecorp-blog',
                                filename: 'wolfecorp-blog-scaled.jpg',
                                filesize: 208798,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-blog/',
                                alt: 'Wolfecorp - News',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-blog',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:23',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-blog-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        },
                        {
                            image: {
                                ID: 89,
                                id: 89,
                                title: 'wolfecorp-contact',
                                filename: 'wolfecorp-contact-scaled.jpg',
                                filesize: 117647,
                                url: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-scaled.jpg',
                                link: 'http://api.matthewadshead.com/wolfecorp/wolfecorp-contact/',
                                alt: 'Wolfecorp - Contact',
                                author: '1',
                                description: '',
                                caption: '',
                                name: 'wolfecorp-contact',
                                status: 'inherit',
                                uploaded_to: 113,
                                date: '2021-03-02 22:17:28',
                                modified: '2021-03-02 22:40:59',
                                menu_order: 0,
                                mime_type: 'image/jpeg',
                                type: 'image',
                                subtype: 'jpeg',
                                icon: 'http://api.matthewadshead.com/wp-includes/images/media/default.png',
                                width: 2560,
                                height: 1440,
                                sizes: {
                                    thumbnail:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-150x150.jpg',
                                    'thumbnail-width': 150,
                                    'thumbnail-height': 150,
                                    medium: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-300x169.jpg',
                                    'medium-width': 300,
                                    'medium-height': 169,
                                    medium_large:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-768x432.jpg',
                                    'medium_large-width': 768,
                                    'medium_large-height': 432,
                                    large: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-1024x576.jpg',
                                    'large-width': 1024,
                                    'large-height': 576,
                                    '1536x1536':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-1536x864.jpg',
                                    '1536x1536-width': 1536,
                                    '1536x1536-height': 864,
                                    '2048x2048':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-2048x1152.jpg',
                                    '2048x2048-width': 2048,
                                    '2048x2048-height': 1152,
                                    'mobile-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-400x225.jpg',
                                    'mobile-low-res-width': 400,
                                    'mobile-low-res-height': 225,
                                    mobile: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-800x450.jpg',
                                    'mobile-width': 800,
                                    'mobile-height': 450,
                                    'desktop-low-res':
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-1200x675.jpg',
                                    'desktop-low-res-width': 1200,
                                    'desktop-low-res-height': 675,
                                    tablet: 'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-1600x900.jpg',
                                    'tablet-width': 1600,
                                    'tablet-height': 900,
                                    desktop:
                                        'http://api.matthewadshead.com/wp-content/uploads/2021/03/wolfecorp-contact-2400x1350.jpg',
                                    'desktop-width': 2400,
                                    'desktop-height': 1350
                                }
                            }
                        }
                    ],
                    link: 'wolfecorp',
                    title: 'Wolfecorp',
                    content:
                        '<p>Wolfecorp is a real estate development and management company based in Toronto, Ontario. This site projects an image of a competent, modern and cool company.</p>\n<p>The opening animation on the homepage focuses the user on the Wolfecorp logo, reinforcing the brand of the company from the beginning. Large, beautiful hero images of Wolfecorp properties are the first thing the user sees, again reinforcing the kind of company this is.</p>\n<p>Of note in this build, the image slider on the property pages was an interesting challenge from both a design and code perspective. The client wanted to showcase their properties, but wanted to avoid the use of a standard image slider. I built a free moving slider of images in a seemingly random grid, showcasing their assets while still projecting a cool, modern brand.</p>\n<p>In closing, this project was a thoroughly enjoyable build. A rare adequate timeline allowed me to optimize features like responsive images, lazy loading and some fun parallax scrolling.</p>\n',
                    tags: [
                        {
                            tag: 'WordPress'
                        },
                        {
                            tag: 'PHP'
                        },
                        {
                            tag: 'JavaScript'
                        },
                        {
                            tag: 'jQuery'
                        }
                    ]
                }
            }
        ]
    },
    action
) => {
    if (action.type === 'startOnCaseStudy') {
        return {
            index: action.i,
            cardPosition: { x: 0, y: 0 },
            isActive: true,
            zIndex: true
        };
    }

    if (action.type === 'getCaseStudies') {
        return {
            caseStudies: action.data
        };
    }

    if (action.type === 'setFixed') {
        return {
            cardPosition: { x: action.currentCardPosition.x, y: action.currentCardPosition.y },
            startOnCaseStudy: false,
            zIndex: true,
            index: action.i
        };
    }

    if (action.type === 'setTransition') {
        return {
            transition: action.bool
        };
    }

    if (action.type === 'animateCardOpen') {
        return {
            cardPosition: { x: 0, y: 0 },
            isActive: true
        };
    }

    if (action.type === 'setCardParallax') {
        return {
            cardParallax: action.position
        };
    }

    if (action.type === 'setPreviousPage') {
        return {
            previousPage: action.previousPage
        };
    }

    if (action.type === 'animateCardClosed') {
        return {
            cardPosition: action.currentCardPosition,
            isActive: false
        };
    }

    if (action.type === 'finishCloseAnimation') {
        return {
            index: null,
            zIndex: false
        };
    }

    return state;
};

const store = createStore(portfolioReducer);

export default store;
