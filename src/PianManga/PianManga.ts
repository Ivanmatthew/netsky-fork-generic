import {
    ContentRating,
    SourceInfo,
    BadgeColor,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://pianmanga.me'

export const PianMangaInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'PianManga',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class PianManga extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = true

    override hasAdvancedSearchPage = true

    override usePostIds = false
}