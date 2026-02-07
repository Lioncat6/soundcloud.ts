import { SoundcloudLicense } from "../TrackTypes"
import { SoundcloudTrackV1 } from "./TrackTypes"
import { SoundcloudUserMiniV1 } from "./UserTypes"

export interface SoundcloudPlaylistFilterV1 {
    representation?: "compact" | "id"
    q?: string
}

export interface SoundcloudPlaylistV1 {
    duration: number
    release_day: number | null
    permalink_url: string
    reposts_count: number
    genre: string | null
    permalink: string
    purchase_url: string | null
    release_month: number | null
    description: string | null
    uri: string
    label_name: string | null
    tag_list: string
    release_year: number | null
    secret_uri: string
    track_count: number
    user_id: number
    last_modified: string
    license: SoundcloudLicense
    tracks: SoundcloudTrackV1[]
    playlist_type: string | null
    id: number
    downloadable: boolean | null
    sharing: "private" | "public"
    secret_token?: string
    created_at: string
    release: number | null
    likes_count: number
    kind: "playlist"
    title: string
    type: string | null
    purchase_title: string | null
    artwork_url: string | null
    ean: string | null
    streamable: boolean
    user: SoundcloudUserMiniV1
    embeddable_by: string
    label_id: string | null
}
