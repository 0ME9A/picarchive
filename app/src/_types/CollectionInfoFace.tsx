export default interface CollectionInfoFace {
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
                topic_submissions: {}
                premium: boolean
                plus: boolean
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
        instagram_username: any
        total_collections: number
        total_likes: number
        total_photos: number
        accepted_tos: boolean
        for_hire: boolean
        social: {
            instagram_username: any
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
        description: any
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
        topic_submissions: { }
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
    meta: {
        title: any
        description: any
        index: boolean
    }
}
