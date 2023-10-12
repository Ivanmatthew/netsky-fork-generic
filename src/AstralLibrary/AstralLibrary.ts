import {
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://astrallibrary.net'

export const AstralLibraryInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'AstralLibrary',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: DOMAIN,
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class AstralLibrary extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = false
}