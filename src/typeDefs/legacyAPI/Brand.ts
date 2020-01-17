import { gql } from 'apollo-server'

const Brand = gql`
  type Brand {
    id: ID!
    name: String
    logo_url: String
    show_logo: Boolean
    header_background_color: String
    header_foreground_color: String
    support_email_address: String
    slug: String
    external_auth_login_url: String
    default_enrollment_campaign_id: Int
    lock_retailer_data: Boolean
    campaign_alias: String
    retailer_alias: String
    custom_header_css: String
    website: String
    auto_share_facebook: Boolean
    auto_share_twitter: Boolean
    lock_user_creation: Boolean
  }
`

export default Brand
