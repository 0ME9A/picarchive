export default interface ProfileFace {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: string
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
    twitter_username: string
    paypal_email: any
  }
  followed_by_user: boolean
  photos: Array<{
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
  badge: {
    title: string
    primary: boolean
    slug: string
    link: string
  }
  tags: {
    custom: Array<{
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
            wallpapers?: {
              status: string
              approved_on: string
            }
            nature?: {
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
            twitter_username?: string
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
              twitter_username?: string
              paypal_email: any
            }
          }
        }
      }
    }>
    aggregated: Array<{
      type: string
      title: string
      source?: {
        ancestry: {
          type: {
            slug: string
            pretty_slug: string
          }
          category?: {
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
            wallpapers?: {
              status: string
              approved_on: string
            }
            nature?: {
              status: string
              approved_on: string
            }
            "architecture-interior"?: {
              status: string
              approved_on: string
            }
            "color-of-water"?: {
              status: string
              approved_on: string
            }
            health?: {
              status: string
              approved_on: string
            }
            athletics?: {
              status: string
              approved_on: string
            }
            "textures-patterns"?: {
              status: string
              approved_on: string
            }
            animals?: {
              status: string
              approved_on: string
            }
          }
          premium?: boolean
          plus?: boolean
          user: {
            id: string
            updated_at: string
            username: string
            name: string
            first_name: string
            last_name: string
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
            instagram_username: string
            total_collections: number
            total_likes: number
            total_photos: number
            accepted_tos: boolean
            for_hire: boolean
            social: {
              instagram_username: string
              portfolio_url?: string
              twitter_username?: string
              paypal_email: any
            }
          }
        }
      }
    }>
  }
  followers_count: number
  following_count: number
  allow_messages: boolean
  numeric_id: number
  downloads: number
  meta: {
    index: boolean
  }
}
