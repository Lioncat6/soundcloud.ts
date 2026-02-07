import { SoundcloudLicense } from "../TrackTypes"
import { SoundcloudUserMiniV1 } from "./UserTypes"

export type SoundcloudTrackTypeV1 =
    | "original"
    | "remix"
    | "live"
    | "recording"
    | "spoken"
    | "podcast"
    | "demo"
    | "in progress"
    | "stem"
    | "loop"
    | "sound effect"
    | "sample"
    | "other"

export interface SoundcloudTrackV1 {
    comment_count: number
    release: number | ""
    original_content_size: number
    track_type: SoundcloudTrackTypeV1 | null
    original_format: string
    streamable: boolean
    download_url: string | null
    id: number
    state: "processing" | "failed" | "finished"
    last_modified: string
    favoritings_count: number
    kind: string
    purchase_url: string
    release_year: number | null
    sharing: string
    attachments_uri: string
    license: SoundcloudLicense
    user_id: number
    user_favorite: boolean
    waveform_url: string
    permalink: string
    permalink_url: string
    playback_count: number
    downloadable: boolean
    created_at: string
    description: string
    title: string
    duration: number
    artwork_url: string
    video_url: string | null
    tag_list: string
    release_month: number | null
    genre: string
    release_day: number | null
    reposts_count: number
    label_name: string | null
    commentable: boolean
    bpm: number | null
    policy: string
    key_signature: string
    isrc: string | null
    uri: string
    download_count: number
    likes_count: number
    purchase_title: string
    embeddable_by: string
    monetization_model: string
    user: SoundcloudUserMiniV1
    user_playback_count: number | null
    stream_url: string
    label?: SoundcloudUserMiniV1
    label_id: number | null
    asset_data?: string
    artwork_data?: string
}