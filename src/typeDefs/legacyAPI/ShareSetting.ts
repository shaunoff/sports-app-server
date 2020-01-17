import { gql } from 'apollo-server'

const ShareSetting = gql`
  type ShareData {
    post_format: String
    subject: String
    body: String
    title: String
    description: String
    link: String
    share_url_type: String
    custom_share_url_id: String
    button_text: String
  }

  type ShareSetting {
    id: ID!
    share_type: String
    responsive_share_image_url: String
    landing_page_copy: String
    name: String
    share_data: ShareData
  }
`

export default ShareSetting
