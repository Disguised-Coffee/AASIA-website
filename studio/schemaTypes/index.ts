import { Gallery, categoryType } from "./gallery";
import page from './page';
import hero from "./blocks/hero";
import splitImageType from "./blocks/splitContent";
import { blockContentType } from "./blockContent";
import button from "./button";
import { siteSettingsType } from "./siteSettings";
import feature from "./blocks/feature";
import gallerySection from "./blocks/gallerySection";
import faq from "./blocks/faq";
import homePage from "./homePage";
import { eBoardCardSchema, eboardSection } from "./eBoardPage";
import { videoSection } from "./blocks/videoSection";
import pageBuilder from "./pageBuilder";
import faqPage from "./faqPage";
import { evoPage } from "./evoPage";

export const schemaTypes = [eboardSection, eBoardCardSchema, Gallery, categoryType, page, hero, splitImageType, blockContentType, button, siteSettingsType, feature, gallerySection, faq, homePage, videoSection, pageBuilder, faqPage, evoPage];