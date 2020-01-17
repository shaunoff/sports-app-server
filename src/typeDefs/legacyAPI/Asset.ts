import { gql } from 'apollo-server'

const Asset = gql`
  type Asset {
    id: ID!
    campaign_id: Int
    created_at: String
    updated_at: String
    file_file_name: String
    file_content_type: String
    file_file_size: String
    file_updated_at: String
    category: String
    brand_id: Int
    name: String
    description: String
    created_by_id: Int
    updated_by_id: Int
    deleted_at: String
    enabled: Boolean
    width: String
    height: String
    thumbnail_url: String
    medium_url: String
    original_url: String
    pinned: Boolean
    file_extension: String
    file_type: String
    file_url: String
    tag_list: [String]
  }
`

export default Asset
