export default interface TopicFace {
    id: string
    slug: string
    title: string
    description: string
    published_at: string
    updated_at: string
    starts_at: string
    ends_at: string
    only_submissions_after: any
    visibility: string
    featured: boolean
    total_photos: number
    current_user_contributions: Array<any>
    total_current_user_submissions: any
    links: {
        self: string
        html: string
        photos: string
    }
    status: string
    owners: Array<{
        id: string
        updated_at: string
        username: string
        name: string
        first_name: string
        last_name: any
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
    }>
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
        topic_submissions: {
            "architecture-interior": {
                status: string
            }
            nature: {
                status: string
                approved_on: string
            }
            wallpapers: {
                status: string
            }
            "greener-cities": {
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
            instagram_username: string
            total_collections: number
            total_likes: number
            total_photos: number
            accepted_tos: boolean
            for_hire: boolean
            social: {
                instagram_username: string
                portfolio_url: any
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
}
