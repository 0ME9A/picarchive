export type BasicPhotoFace = {
    id: string
    slug: string
    created_at: string
    updated_at: string
    promoted_at?: string
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
    sponsorship?: {
        impression_urls: Array<any>
        tagline: string
        tagline_url: string
        sponsor: {
            id: string
            updated_at: string
            username: string
            name: string
            first_name: string
            last_name: any
            twitter_username: any
            portfolio_url: string
            bio: any
            location: any
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
    topic_submissions: {}
    user: {
        id: string
        updated_at: string
        username: string
        name: string
        first_name: string
        last_name?: string
        twitter_username?: string
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
            twitter_username?: string
            paypal_email: any
        }
    }
}
