import { SoundcloudUserMiniV1 } from "./UserTypes"

export interface SoundcloudCommentV1 {
    kind: "comment"
    id: number
    created_at: string
    user_id: number
    track_id: number
    timestamp: number
    body: string
    uri: string
    user: SoundcloudUserMiniV1
    self: {
        urn: string
    }
}