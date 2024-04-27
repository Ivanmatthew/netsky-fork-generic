import {
    BadgeColor,
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://manhwaclub.net'

export const ManhwaClubInfo: SourceInfo = {
    version: getExportVersion('0.0.1'),
    name: 'ManhwaClub',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'IvanMatthew',
    authorWebsite: 'https://github.com/Ivanmatthew',
    icon: 'icon.png',
    contentRating: ContentRating.ADULT,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        { text: '18+', type: BadgeColor.YELLOW }
    ],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class ManhwaClub extends Madara {

    baseUrl: string = DOMAIN

    override usePostIds = true
}