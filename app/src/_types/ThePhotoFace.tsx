export default interface PhotoFace {
    id: string
    slug: string
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    description: string
    alt_description: string
    urls: {
        raw: string
        full: string
        regular: string
        small: string
        thumb: string
        small_s3: string
    }
    links: {
        self: string
        html: string
        download: string
        download_location: string
    }
    likes: number
    liked_by_user: boolean
    current_user_collections: Array<any>
    sponsorship: any
    topic_submissions: {
        experimental: {
            status: string
            approved_on: string
        }
    }
    user: {
        id: string
        updated_at: string
        username: string
        name: string
        first_name: string
        last_name: string
        twitter_username: any
        portfolio_url: string
        bio: any
        location: string
        links: {
            self: string
            html: string
            photos: string
            likes: string
            portfolio: string
            following: string
            followers: string
        }
        profile_image: {
            small: string
            medium: string
            large: string
        }
        instagram_username: string
        total_collections: number
        total_likes: number
        total_photos: number
        accepted_tos: boolean
        for_hire: boolean
        social: {
            instagram_username: string
            portfolio_url: string
            twitter_username: any
            paypal_email: any
        }
    }
    exif: {
        make: string
        model: string
        name: string
        exposure_time: string
        aperture: string
        focal_length: string
        iso: number
    }
    location: {
        name: any
        city: any
        country: any
        position: {
            latitude: any
            longitude: any
        }
    }
    meta: {
        index: boolean
    }
    public_domain: boolean
    tags: Array<{
        type: string
        title: string
        source?: {
            ancestry: {
                type: {
                    slug: string
                    pretty_slug: string
                }
                category: {
                    slug: string
                    pretty_slug: string
                }
                subcategory?: {
                    slug: string
                    pretty_slug: string
                }
            }
            title: string
            subtitle: string
            description: string
            meta_title: string
            meta_description: string
            cover_photo: {
                id: string
                slug: string
                created_at: string
                updated_at: string
                promoted_at?: string
                width: number
                height: number
                color: string
                blur_hash: string
                description: string
                alt_description: string
                urls: {
                    raw: string
                    full: string
                    regular: string
                    small: string
                    thumb: string
                    small_s3: string
                }
                links: {
                    self: string
                    html: string
                    download: string
                    download_location: string
                }
                likes: number
                liked_by_user: boolean
                current_user_collections: Array<any>
                sponsorship: any
                topic_submissions: {
                    "current-events"?: {
                        status: string
                        approved_on: string
                    }
                    "textures-patterns"?: {
                        status: string
                        approved_on: string
                    }
                }
                premium: boolean
                plus: boolean
                user: {
                    id: string
                    updated_at: string
                    username: string
                    name: string
                    first_name: string
                    last_name: string
                    twitter_username: string
                    portfolio_url?: string
                    bio: string
                    location: string
                    links: {
                        self: string
                        html: string
                        photos: string
                        likes: string
                        portfolio: string
                        following: string
                        followers: string
                    }
                    profile_image: {
                        small: string
                        medium: string
                        large: string
                    }
                    instagram_username: string
                    total_collections: number
                    total_likes: number
                    total_photos: number
                    accepted_tos: boolean
                    for_hire: boolean
                    social: {
                        instagram_username: string
                        portfolio_url?: string
                        twitter_username: string
                        paypal_email: any
                    }
                }
            }
        }
    }>
    tags_preview: Array<{
        type: string
        title: string
        source?: {
            ancestry: {
                type: {
                    slug: string
                    pretty_slug: string
                }
                category: {
                    slug: string
                    pretty_slug: string
                }
                subcategory: {
                    slug: string
                    pretty_slug: string
                }
            }
            title: string
            subtitle: string
            description: string
            meta_title: string
            meta_description: string
            cover_photo: {
                id: string
                slug: string
                created_at: string
                updated_at: string
                promoted_at: any
                width: number
                height: number
                color: string
                blur_hash: string
                description: string
                alt_description: string
                urls: {
                    raw: string
                    full: string
                    regular: string
                    small: string
                    thumb: string
                    small_s3: string
                }
                links: {
                    self: string
                    html: string
                    download: string
                    download_location: string
                }
                likes: number
                liked_by_user: boolean
                current_user_collections: Array<any>
                sponsorship: any
                topic_submissions: {
                    "textures-patterns": {
                        status: string
                        approved_on: string
                    }
                }
                premium: boolean
                plus: boolean
                user: {
                    id: string
                    updated_at: string
                    username: string
                    name: string
                    first_name: string
                    last_name: string
                    twitter_username: string
                    portfolio_url: string
                    bio: string
                    location: string
                    links: {
                        self: string
                        html: string
                        photos: string
                        likes: string
                        portfolio: string
                        following: string
                        followers: string
                    }
                    profile_image: {
                        small: string
                        medium: string
                        large: string
                    }
                    instagram_username: string
                    total_collections: number
                    total_likes: number
                    total_photos: number
                    accepted_tos: boolean
                    for_hire: boolean
                    social: {
                        instagram_username: string
                        portfolio_url: string
                        twitter_username: string
                        paypal_email: any
                    }
                }
            }
        }
    }>
    views: number
    downloads: number
    topics: Array<{
        id: string
        title: string
        slug: string
        visibility: string
    }>
    related_collections: {
        total: number
        type: string
        results: Array<{
            id: string
            title: string
            description: any
            published_at: string
            last_collected_at: string
            updated_at: string
            curated: boolean
            featured: boolean
            total_photos: number
            private: boolean
            share_key: string
            tags: Array<{
                type: string
                title: string
                source?: {
                    ancestry: {
                        type: {
                            slug: string
                            pretty_slug: string
                        }
                        category: {
                            slug: string
                            pretty_slug: string
                        }
                        subcategory?: {
                            slug: string
                            pretty_slug: string
                        }
                    }
                    title: string
                    subtitle: string
                    description: string
                    meta_title: string
                    meta_description: string
                    cover_photo: {
                        id: string
                        slug: string
                        created_at: string
                        updated_at: string
                        promoted_at?: string
                        width: number
                        height: number
                        color: string
                        blur_hash: string
                        description: string
                        alt_description: string
                        urls: {
                            raw: string
                            full: string
                            regular: string
                            small: string
                            thumb: string
                            small_s3: string
                        }
                        links: {
                            self: string
                            html: string
                            download: string
                            download_location: string
                        }
                        likes: number
                        liked_by_user: boolean
                        current_user_collections: Array<any>
                        sponsorship: any
                        topic_submissions: {
                            "textures-patterns"?: {
                                status: string
                                approved_on: string
                            }
                            "current-events"?: {
                                status: string
                                approved_on: string
                            }
                        }
                        premium: boolean
                        plus: boolean
                        user: {
                            id: string
                            updated_at: string
                            username: string
                            name: string
                            first_name: string
                            last_name: string
                            twitter_username: string
                            portfolio_url?: string
                            bio: string
                            location: string
                            links: {
                                self: string
                                html: string
                                photos: string
                                likes: string
                                portfolio: string
                                following: string
                                followers: string
                            }
                            profile_image: {
                                small: string
                                medium: string
                                large: string
                            }
                            instagram_username: string
                            total_collections: number
                            total_likes: number
                            total_photos: number
                            accepted_tos: boolean
                            for_hire: boolean
                            social: {
                                instagram_username: string
                                portfolio_url?: string
                                twitter_username: string
                                paypal_email: any
                            }
                        }
                    }
                }
            }>
            links: {
                self: string
                html: string
                photos: string
                related: string
            }
            user: {
                id: string
                updated_at: string
                username: string
                name: string
                first_name: string
                last_name: string
                twitter_username: any
                portfolio_url: any
                bio: any
                location?: string
                links: {
                    self: string
                    html: string
                    photos: string
                    likes: string
                    portfolio: string
                    following: string
                    followers: string
                }
                profile_image: {
                    small: string
                    medium: string
                    large: string
                }
                instagram_username?: string
                total_collections: number
                total_likes: number
                total_photos: number
                accepted_tos: boolean
                for_hire: boolean
                social: {
                    instagram_username?: string
                    portfolio_url: any
                    twitter_username: any
                    paypal_email: any
                }
            }
            cover_photo: {
                id: string
                slug: string
                created_at: string
                updated_at: string
                promoted_at: string
                width: number
                height: number
                color: string
                blur_hash: string
                description?: string
                alt_description: string
                urls: {
                    raw: string
                    full: string
                    regular: string
                    small: string
                    thumb: string
                    small_s3: string
                }
                links: {
                    self: string
                    html: string
                    download: string
                    download_location: string
                }
                likes: number
                liked_by_user: boolean
                current_user_collections: Array<any>
                sponsorship: any
                topic_submissions: {
                    people?: {
                        status: string
                        approved_on: string
                    }
                }
                user: {
                    id: string
                    updated_at: string
                    username: string
                    name: string
                    first_name: string
                    last_name: string
                    twitter_username: any
                    portfolio_url?: string
                    bio?: string
                    location?: string
                    links: {
                        self: string
                        html: string
                        photos: string
                        likes: string
                        portfolio: string
                        following: string
                        followers: string
                    }
                    profile_image: {
                        small: string
                        medium: string
                        large: string
                    }
                    instagram_username?: string
                    total_collections: number
                    total_likes: number
                    total_photos: number
                    accepted_tos: boolean
                    for_hire: boolean
                    social: {
                        instagram_username?: string
                        portfolio_url?: string
                        twitter_username: any
                        paypal_email: any
                    }
                }
            }
            preview_photos: Array<{
                id: string
                slug: string
                created_at: string
                updated_at: string
                blur_hash: string
                urls: {
                    raw: string
                    full: string
                    regular: string
                    small: string
                    thumb: string
                    small_s3: string
                }
            }>
        }>
    }
}
