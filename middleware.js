import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'ar;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['ar']
let defaultLocale = 'ar'
 
match(languages, locales, defaultLocale)