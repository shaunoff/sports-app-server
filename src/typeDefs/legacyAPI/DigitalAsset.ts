import { gql } from 'apollo-server'

const DigitalAsset = gql`
  type DigitalAsset {
    external_video_url: String
    file: File
  }
`

export default DigitalAsset
